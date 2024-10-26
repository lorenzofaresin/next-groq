"use server";

import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export async function ask(currentState: string, formData: FormData) {
    const q = formData.get("q") as string | null;
    if (!q) {
        return currentState;
    }

    const groqResponse = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: q
            }
        ],
        model: "llama3-70b-8192"
    });

    const content = groqResponse.choices[0].message.content;

    return content || currentState;
}