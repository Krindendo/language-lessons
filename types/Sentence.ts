export interface Sentence {
  id: number;
  type: "question" | "negative" | "normal";
  text: string;
  exclude: number[];
  possibleAnswers: string[];
  infinitiveOfTheVerb: string;
}
