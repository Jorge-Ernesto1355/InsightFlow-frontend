import { ChatMessage } from "../../types/types";
import { getHoursAndMiutes } from "../getHoursAndMinute";
import { createFlexibleClusteringContext, createSystemPrompt } from "./enhancePrompt";
import { GeneralClusteringData } from "./types";

/**
 * Enhances a series of chat messages by adding contextual clustering data and system prompts.
 *
 * This function modifies the chat messages to include relevant clustering context
 * from the provided data. It also ensures that the first message in the sequence
 * is a system prompt if it doesn't start with an assistant message.
 *
 * @param {ChatMessage[]} messages - An array of chat messages to enhance.
 * @param {GeneralClusteringData} data - The clustering data used to enhance the messages.
 * @returns {ChatMessage[]} A new array of chat messages that are enhanced with clustering context.
 */

export const enhanceMessages = (
    messages: ChatMessage[],
    data: GeneralClusteringData
): ChatMessage[] => {
    if (!Array.isArray(messages) || messages.length === 0) {
        throw new Error("`messages` must be a non-empty array.");
    }
    if (typeof data !== "object" || data === null) {
        throw new Error("`data` must be a valid object.");
    }

    const enhancedPrompt = createFlexibleClusteringContext(data);
    const context = enhancedPrompt ? `\n\n=== CLUSTERING CONTEXT ===\n${enhancedPrompt}` : "";

    const enhancedMessages = messages.map((msg, index) => {
        const isUserMessage = msg.role === "user" && index === messages.length - 1;
        const content = isUserMessage
            ? `${context}User Question: ${msg.content}`
            : msg.content;

        return {
            ...msg,
            content,
            id: crypto.randomUUID(),
            timestamp: getHoursAndMiutes(new Date()),
        };
    });

    if (messages[0]?.role !== "assistant") {
        enhancedMessages.unshift({
            role: "assistant",
            content: createSystemPrompt(),
            id: crypto.randomUUID(),
            timestamp: getHoursAndMiutes(new Date()),
            error: null,
        });
    }

    return enhancedMessages;
};
