export interface Sentence {
  id: number;
  type: "interogative" | "negative" | "affirmative";
  text: string;
  exclude: number[];
  possibleAnswers: string[];
  infinitiveOfTheVerb: string;
  tence: "Present Simple" | "Present Continuous" | "Past Simple";
}
