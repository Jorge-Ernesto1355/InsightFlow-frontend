export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  id: string;
  timestamp: string;
  error: string | null;
}

export interface StreamChunk {
  choices: Array<{
    delta: {
      content?: string;
      role?: string;
    };
    finish_reason?: string | null;
  }>;
}

export interface ChatStreamOptions {
  model?: string;
  provider?: string;
  temperature?: number;
  maxTokens?: number;
}
