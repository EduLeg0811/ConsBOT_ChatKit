// ============================================================
// ChatKit unified configuration
// ============================================================

import type { StartScreenPrompt, ThemeOption } from "@openai/chatkit";
import type { ColorScheme } from "@/hooks/useColorScheme";

// ------------------------------------------------------------
// Environment and constants
// ------------------------------------------------------------

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const PLACEHOLDER_INPUT = "Olá conscienciólogo!";
export const GREETING = "Olá conscienciólogo!";

// ------------------------------------------------------------
// Starter prompts
// ------------------------------------------------------------

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
  {
    label: "Quem é a Monja no contexto da Conscienciologia?",
    prompt: "Quem é a Monja no contexto da Conscienciologia?",
    icon: "circle-question",
  },
  {
    label: "Fale do Transmentor",
    prompt: "Fale do Transmentor",
    icon: "circle-question",
  },
  {
    label: "Escreva um breve parágrafo sobre o Inacabamento a maior.",
    prompt: "Escreva um breve parágrafo sobre o Inacabamento a maior.",
    icon: "circle-question",
  },
  {
    label: "Quem é Eduardo Azevedo?",
    prompt: "Quem é Eduardo Azevedo?",
    icon: "circle-question",
  },
  {
    label: "Definologia do Inacabamento a maior",
    prompt: "Escreva a Definologia do Inacabamento a maior",
    icon: "circle-question",
  },
];

// ------------------------------------------------------------
// Theme generator — retorna APENAS tema visual
// ------------------------------------------------------------

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 100,
      tint: 8,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
    surface: {
      background: theme === "dark" ? "#1e1e1e" : "#fffef5",
      foreground: theme === "dark" ? "#f9fafb" : "#ffffff",
    },
  },
  radius: "round",
});
