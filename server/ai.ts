import OpenAI from "openai";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const MODEL_NAME = process.env.MODEL_NAME;

const openai = new OpenAI({
    apiKey: API_KEY,
    baseURL: BASE_URL,
});

const lessonPlanPrompt = `
You are an educational AI assistant. Create a comprehensive lesson plan for teaching the following subject:

Subject: {{subject}}
Difficulty level: {{difficulty}}

The lesson plan should include:
1. An engaging, descriptive title for the overall lesson plan.
2. 3-5 individual lessons that build on each other.
3. Each lesson should have a clear title, brief description, estimated duration and difficulty level.
4. Organize the content in a logical sequence from fundamentals to advanced concepts.

Follow this structure exactly and ensurre all JSON syntax is correct:

{
  "title": "Title of the lesson plan",
  "estimatedDuration": "X minutes",
  "lessons": [
    {
      "title": "Lesson 1: [Title]",
      "description": "Brief description of this lesson",
      "duration": "X minutes",
      "difficulty": "beginner"
    },
    ...more lessons
  ]
}

IMPORTANT: Format your response **ONLY** as valid, parseable JSON with no additional comments, text, or code blocks markers.
`;

const lessonContentPrompt = `
You are an educational AI assistant. Create detailed, engaging lesson content for the following lesson:

Lesson title: {{title}}
Lesson description: {{description}}
Subject: {{subject}}
Difficulty level: {{difficulty}}

Provide 3-4 distinct content sections for this lesson, each building on the previous. Include the following in your educational content:
- Clear explanations of concepts.
- Examples.
- Key points highlighted in a "Key concepts" or "Important Note" section.
- Mathematical formulas or definitions when relevant formated using LaTeX.

Additionally, create one well-crafted quiz question per content section that tests understanding of this lesson content. The quiz should:
- Have a clear question related to the most important concept.
- Include 4 possible answer options (with one correct answer)
- Indicate which option is correct (by index 0-3)

Follow this structure exactly and ensure all JSON syntax is correct:

  "contents": [
    {
      "content": "Content for section 1...",
      "order": 0,
      "quiz": {
        "question": "What is...?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctOptionIndex": 2
      }
    },
    ...more content sections
  ]

IMPORTANT: Format your response **ONLY** as valid, parseable JSON with no additional comments, text, or code blocks markers.
`;

function extractCleanJson(rawText: string): string {
    console.log("Trying to extract JSON from raw text")

    const codeBlockMatch = rawText.match(/```(?:json)?\s*({[\s\S]*?})\s*```/);
    if (codeBlockMatch && codeBlockMatch[1]) {
        try {
            const potentialJson = codeBlockMatch[1].trim();
            JSON.parse(potentialJson)
            console.log("Found valid JSON in code block")
            return potentialJson
        } catch (e) {
            console.log("Found code block with invalid JSON")
        }
    }

    throw new Error("No valid JSON found")
}