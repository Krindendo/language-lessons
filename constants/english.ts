interface Sentence {
  id: number;
  type: "question" | "negative" | "normal";
  text: string;
  exclude: number[];
  possibleAnswers: string[];
}

const presentSimpleSentences: Sentence[] = [
  {
    id: 0,
    type: "normal",
    text: "I always have breakfast at 9",
    exclude: [2],
    possibleAnswers: ["have", "has", "doing"],
  },
  {
    id: 1,
    type: "normal",
    text: "You go to sleep at midnight",
    exclude: [1],
    possibleAnswers: ["go", "went", "have"],
  },
];

export { presentSimpleSentences };
