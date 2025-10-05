export interface PodcastData {
  title: string;
  script: string;
  audioUrl: string;
  duration: string;
}

export type ProcessingStep = "upload" | "analyzing" | "generating" | "synthesizing" | "complete";

export interface FileData {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
}

export interface GenerateScriptRequest {
  text: string;
  style?: "conversational" | "educational" | "interview";
  length?: "short" | "medium" | "long";
}

export interface GenerateAudioRequest {
  script: string;
  voice1?: string;
  voice2?: string;
  speed?: number;
}