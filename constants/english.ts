import { Sentence } from "@/types/Sentence";

const presentSimpleSentences: Sentence[] = [
  {
    id: 0,
    type: "normal",
    text: "I always have breakfast at 9.",
    exclude: [2],
    possibleAnswers: ["have", "has", "doing"],
    infinitiveOfTheVerb: "have",
  },
  {
    id: 1,
    type: "normal",
    text: "You go to sleep at midnight.",
    exclude: [1],
    possibleAnswers: ["go", "went", "have"],
    infinitiveOfTheVerb: "go",
  },
  {
    id: 2,
    type: "normal",
    text: "He speaks English very well.",
    exclude: [1],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "speak",
  },
  {
    id: 3,
    type: "normal",
    text: "She has two daughters.",
    exclude: [1],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "have",
  },
  {
    id: 4,
    type: "normal",
    text: "We collect records.",
    exclude: [1],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "collect",
  },
  {
    id: 5,
    type: "normal",
    text: "You usually have lunch at 4.",
    exclude: [3],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "have",
  },
  {
    id: 6,
    type: "normal",
    text: "They often go to the cinema.",
    exclude: [2],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "go",
  },
  {
    id: 7,
    type: "question",
    text: "Do you have breakfast at 9?",
    exclude: [0, 2],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "have",
  },
  {
    id: 8,
    type: "question",
    text: "When do you have breakfast?",
    exclude: [1, 3],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "have",
  },
  {
    id: 9,
    type: "question",
    text: "Do they collect records?",
    exclude: [0, 2],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "collect",
  },
  {
    id: 10,
    type: "question",
    text: "What do they collect?",
    exclude: [1, 3],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "collect",
  },
  {
    id: 11,
    type: "question",
    text: "Don't they collect records?",
    exclude: [0, 2],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "collect",
  },
  {
    id: 12,
    type: "question",
    text: "Does he speak English?",
    exclude: [0, 2],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "speak",
  },
  {
    id: 13,
    type: "question",
    text: "What language does he speak?",
    exclude: [2, 4],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "speak",
  },
  {
    id: 14,
    type: "negative",
    text: "J don't speak German.",
    exclude: [1, 2],
    possibleAnswers: ["speaks", "went", "have"],
    infinitiveOfTheVerb: "speak",
  },
  {
    id: 15,
    type: "negative",
    text: "She doesn't speak Spenish",
    exclude: [1, 2],
    possibleAnswers: ["speaks", "speak", "does", "do", "are"],
    infinitiveOfTheVerb: "speak",
  },
];

const presentContinuousSentences: Sentence[] = [
  {
    id: 1,
    type: "normal",
    text: "J am cooking lunch now",
    exclude: [1, 2],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "cook",
  },
  {
    id: 2,
    type: "normal",
    text: "You are sleeping",
    exclude: [1, 2],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "sleep",
  },
  {
    id: 3,
    type: "normal",
    text: "He is drinking coffie at the moment",
    exclude: [1, 2],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "drink",
  },
  {
    id: 4,
    type: "normal",
    text: "We are playing basketball",
    exclude: [1, 2],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "play",
  },
  {
    id: 5,
    type: "normal",
    text: "They are singing",
    exclude: [1, 2],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "sing",
  },
  {
    id: 6,
    type: "question",
    text: "Are you singing?",
    exclude: [0, 2],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "sing",
  },
  {
    id: 7,
    type: "question",
    text: "Is he sleeping?",
    exclude: [0, 2],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "sleep",
  },
  {
    id: 8,
    type: "question",
    text: "Aren't you singing?",
    exclude: [0, 2],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "sing",
  },
  {
    id: 9,
    type: "question",
    text: "Am I cooking?",
    exclude: [0, 2],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "cook",
  },
  {
    id: 10,
    type: "question",
    text: "What is she reading?",
    exclude: [1, 3],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "read",
  },
  {
    id: 11,
    type: "question",
    text: "Where are they going?",
    exclude: [1, 3],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "go",
  },
  {
    id: 12,
    type: "negative",
    text: "I am not reading newspapers.",
    exclude: [1, 3],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "read",
  },
  {
    id: 13,
    type: "negative",
    text: "He is not sleeping.",
    exclude: [1, 3],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "sleep",
  },
  {
    id: 14,
    type: "negative",
    text: "They are not watching tenis.",
    exclude: [1, 3],
    possibleAnswers: ["am", "cook", "cooking", "cooks"],
    infinitiveOfTheVerb: "watch",
  },
];
const pastSimpleSentences: Sentence[] = [];
const presentPerfectSentences: Sentence[] = [];

export {
  presentSimpleSentences,
  presentContinuousSentences,
  pastSimpleSentences,
  presentPerfectSentences,
};
