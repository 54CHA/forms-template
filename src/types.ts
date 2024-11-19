export type Question = {
  id: string;
  type: 'text' | 'multipleChoice' | 'checkbox';
  question: string;
  options?: string[];
};