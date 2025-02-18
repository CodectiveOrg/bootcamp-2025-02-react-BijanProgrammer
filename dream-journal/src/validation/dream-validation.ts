import { toast } from "react-toastify";

import { MODAL_CONTAINER_ID } from "../constants/id.ts";

import { Dream } from "../types/dream.ts";

const MIN_TITLE_LENGTH = 3;
const MAX_TITLE_LENGTH = 32;
const MAX_DESCRIPTION_LENGTH = 500;

type ValidationRule = {
  isValid: (dream: Dream) => boolean;
  message: string;
};

const validationRules: ValidationRule[] = [
  {
    isValid: (dream) => Boolean(dream.title?.trim()),
    message: "Title is required.",
  },
  {
    isValid: (dream) => Boolean(dream.description?.trim()),
    message: "Description is required.",
  },
  {
    isValid: (dream) => Boolean(dream.date),
    message: "Date is required.",
  },
  {
    isValid: (dream) => Boolean(dream.vibe),
    message: "Vibe is required.",
  },
  {
    isValid: (dream) =>
      dream.title.length >= MIN_TITLE_LENGTH &&
      dream.title.length <= MAX_TITLE_LENGTH,
    message: `Title must be between ${MIN_TITLE_LENGTH} and ${MAX_TITLE_LENGTH} characters.`,
  },
  {
    isValid: (dream) => dream.description.length <= MAX_DESCRIPTION_LENGTH,
    message: `Description cannot be longer than ${MAX_DESCRIPTION_LENGTH} characters.`,
  },
  {
    isValid: (dream) => dream.vibe === "good" || dream.vibe === "bad",
    message: "Vibe must be either good or bad.",
  },
  {
    isValid: (dream) => {
      const dreamDate = new Date(dream.date);
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      return dreamDate <= today;
    },
    message: "Date cannot be in the future.",
  },
];

function showValidationError(message: string): void {
  toast.error(message, { containerId: MODAL_CONTAINER_ID });
}

export function validateDream(dream: Dream): boolean {
  for (const rule of validationRules) {
    if (!rule.isValid(dream)) {
      showValidationError(rule.message);
      return false;
    }
  }

  return true;
}
