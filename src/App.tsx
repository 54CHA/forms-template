import React, { useState } from "react";
import { PlusCircle, Save, Flower2 } from "lucide-react";
import { FormHeader } from "./components/FormHeader";
import { QuestionCard } from "./components/QuestionCard";
import { Question } from "./types";

function App() {
  const [title, setTitle] = useState("Untitled Form");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: "text",
      question: "",
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, ...updates } : q))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -right-16 w-96 h-96 opacity-10">
          <Flower2 className="w-full h-full text-pink-400 animate-pulse" />
        </div>
        <div className="absolute -bottom-16 -left-16 w-96 h-96 opacity-10 rotate-180">
          <Flower2 className="w-full h-full text-pink-400 animate-pulse" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-4 relative">
        <FormHeader
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />

        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            updateQuestion={updateQuestion}
            removeQuestion={removeQuestion}
          />
        ))}

        <button
          onClick={addQuestion}
          className="w-full bg-white rounded-2xl shadow-sm p-6 text-pink-500 hover:text-pink-600 flex items-center justify-center gap-3 transition-all hover:shadow-md"
        >
          <PlusCircle size={24} />
          <span className="text-lg">Add question</span>
        </button>

        <div className="fixed bottom-8 right-8">
          <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-4 flex items-center gap-3 shadow-sm transition-all hover:shadow-md">
            <Save size={24} />
            <span className="text-lg font-medium">Save form</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
