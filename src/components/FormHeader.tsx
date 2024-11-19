import React from 'react';

type FormHeaderProps = {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
};

export function FormHeader({ title, setTitle, description, setDescription }: FormHeaderProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border-l-8 border-pink-400 transition-all hover:shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-4xl font-bold mb-4 bg-transparent focus:outline-none focus:ring-0 placeholder-gray-300"
        placeholder="Form Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full text-gray-600 bg-transparent focus:outline-none focus:ring-0 placeholder-gray-300 resize-none"
        placeholder="Form Description"
        rows={2}
      />
    </div>
  );
}