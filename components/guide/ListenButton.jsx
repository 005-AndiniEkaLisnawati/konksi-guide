"use client";

import { Square, Volume2 } from "lucide-react";
import { speak, stopSpeaking, useSpeaking, useSpeechSupported } from "@/lib/speech";

/** Tombol "Dengarkan" — membacakan teks dengan suara (berguna bagi yang sulit membaca layar). */
export default function ListenButton({ id, text, label = "Dengarkan", tone = "light", className = "" }) {
  const supported = useSpeechSupported();
  const speaking = useSpeaking(id);

  if (!supported) return null;

  const tones = {
    light: "bg-card text-ink",
    dark: "bg-ink text-paper",
  };

  return (
    <button
      type="button"
      onClick={() => (speaking ? stopSpeaking() : speak(id, text))}
      aria-pressed={speaking}
      className={`inline-flex min-h-12 items-center gap-2 rounded-xl px-4 font-bold brut-sm press ${speaking ? "bg-sun text-ink" : tones[tone]} ${className}`}
    >
      {speaking ? <Square className="size-5 fill-current" aria-hidden="true" /> : <Volume2 className="size-5" aria-hidden="true" />}
      {speaking ? "Berhenti" : label}
    </button>
  );
}
