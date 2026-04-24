// Auto-generated shim — re-exports from @/lib/usmle-step-3/config
// This lets shared ecosystem components import from "@/lib/act/config"
import type { ExamConfig as UsmleStep3Config } from "@/lib/usmle-step-3/config";
import { EXAM_CONFIG as _raw } from "@/lib/usmle-step-3/config";

type RawExamConfig = UsmleStep3Config & {
  category?: string;
  locale?: string;
  isRTL?: boolean;
  themeColorDark?: string;
  themeColor?: string;
};

function normalizeExamCategory(category?: string) {
  const value = category?.trim().toLowerCase();
  if (!value) return "professional";
  if (value.includes("admission")) return "admissions";
  if (value.includes("professional")) return "professional";
  if (value.includes("language")) return "language_cert";
  if (value.includes("trade")) return "trade";
  if (value.includes("creative")) return "creative";
  if (value.includes("productivity")) return "productivity";
  if (value.includes("kid")) return "kids";
  return value.replace(/\s+/g, "_");
}

// Normalise to the common shape expected by ecosystem components
export const EXAM_CONFIG = {
  ..._raw,
  category: normalizeExamCategory((_raw as RawExamConfig).category),
  locale: (_raw as RawExamConfig).locale ?? "en",
  isRTL: (_raw as RawExamConfig).isRTL ?? false,
  themeColorDark: (_raw as RawExamConfig).themeColorDark ?? (_raw as RawExamConfig).themeColor ?? "#1E3A8A",
} as const;

export type ExamConfig = typeof EXAM_CONFIG;
