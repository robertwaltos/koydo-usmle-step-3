// Auto-generated content manifest for USMLE Step 3
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  minQuestionCount: number;
  requiredActivityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "usmle-step-3",
  examName: "USMLE Step 3",
  totalQuestions: 2600,
  category: "professional",
  topics: [
    {
  id: "ambulatory-care",
  domain: "ambulatory-care",
  title: "Ambulatory Care",
  icon: "🩺",
  color: "#1E40AF",
  minQuestionCount: 550,
  requiredActivityTypes: ["multiple_choice", "case_study"],
},
{
  id: "inpatient-care",
  domain: "inpatient-care",
  title: "Inpatient Care",
  icon: "🏥",
  color: "#DC2626",
  minQuestionCount: 550,
  requiredActivityTypes: ["multiple_choice", "case_study"],
},
{
  id: "emergency-medicine",
  domain: "emergency-medicine",
  title: "Emergency Medicine",
  icon: "🚑",
  color: "#D97706",
  minQuestionCount: 450,
  requiredActivityTypes: ["multiple_choice", "scenario_based"],
},
{
  id: "patient-safety",
  domain: "patient-safety",
  title: "Patient Safety",
  icon: "🛡️",
  color: "#059669",
  minQuestionCount: 450,
  requiredActivityTypes: ["multiple_choice", "scenario_based"],
},
{
  id: "clinical-case-simulation",
  domain: "clinical-case-simulation",
  title: "Clinical Case Simulation",
  icon: "💻",
  color: "#7C3AED",
  minQuestionCount: 600,
  requiredActivityTypes: ["case_study", "simulation"],
}
  ],
};
