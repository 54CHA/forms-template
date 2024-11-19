import React from "react";
import { Trash2, GripVertical } from "lucide-react";
import { Question } from "../types";

type QuestionCardProps = {
  question: Question;
  index: number;
  updateQuestion: (id: string, updates: Partial<Question>) => void;
  removeQuestion: (id: string) => void;
};

export function QuestionCard({
  question,
  index,
  updateQuestion,
  removeQuestion,
}: QuestionCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm p-8 mb-6 relative transform transition-all duration-200 hover:shadow-md">
      <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
        <GripVertical className="text-gray-400" size={20} />
      </div>

      <div className="ml-8">
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={question.question}
            onChange={(e) =>
              updateQuestion(question.id, { question: e.target.value })
            }
            className="flex-1 text-xl bg-transparent border-b-2 border-pink-100 focus:border-pink-400 focus:outline-none px-2 py-1 placeholder-gray-300"
            placeholder={`Question ${index + 1}`}
          />
          <select
            value={question.type}
            onChange={(e) =>
              updateQuestion(question.id, {
                type: e.target.value as Question["type"],
              })
            }
            className="ml-4 px-4 py-2 bg-pink-50 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 text-gray-600"
          >
            <option value="text">Short answer</option>
            <option value="multipleChoice">Multiple choice</option>
            <option value="checkbox">Checkboxes</option>
          </select>
          <button
            onClick={() => removeQuestion(question.id)}
            className="ml-4 p-2 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-xl transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>

        {(question.type === "multipleChoice" ||
          question.type === "checkbox") && (
          <div className="space-y-3 pl-4">
            {question.options?.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center group/option">
                <div className="w-5 h-5 mr-3 border-2 border-pink-200 rounded-full flex items-center justify-center">
                  {question.type === "multipleChoice" ? (
                    <div className="w-2 h-2 rounded-full bg-pink-200 group-hover/option:bg-pink-400 transition-colors" />
                  ) : (
                    <div className="w-2 h-2 rounded-sm bg-pink-200 group-hover/option:bg-pink-400 transition-colors" />
                  )}
                </div>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...(question.options || [])];
                    newOptions[optionIndex] = e.target.value;
                    updateQuestion(question.id, { options: newOptions });
                  }}
                  className="flex-1 bg-transparent border-b border-pink-100 focus:border-pink-400 focus:outline-none px-2 py-1 placeholder-gray-300"
                  placeholder={`Option ${optionIndex + 1}`}
                />
              </div>
            ))}
            <button
              onClick={() =>
                updateQuestion(question.id, {
                  options: [...(question.options || []), ""],
                })
              }
              className="text-pink-500 hover:text-pink-600 text-sm mt-4 px-4 py-2 rounded-xl hover:bg-pink-50 transition-colors"
            >
              + Add option
            </button>
          </div>
        )}

        {question.type === "text" && (
          <div className="pl-4 mt-4">
            <div className="h-10 bg-pink-50/50 rounded-xl border border-pink-100 px-4 flex items-center text-gray-400">
              Short answer text
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
