"use client";

import { useSyncExternalStore } from "react";

/**
 * Pembaca teks (text-to-speech) bawaan browser, berbahasa Indonesia.
 * Hanya satu teks dibacakan pada satu waktu; komponen bisa memantau
 * apakah teks miliknya sedang dibacakan lewat `useSpeaking(id)`.
 */

let currentId = null;
const listeners = new Set();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function pickIndonesianVoice(synth) {
  const voices = synth.getVoices();
  return voices.find((v) => v.lang?.toLowerCase().replace("_", "-").startsWith("id")) ?? null;
}

export function speak(id, text) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "id-ID";
  utterance.rate = 0.9;
  const voice = pickIndonesianVoice(synth);
  if (voice) utterance.voice = voice;

  const done = () => {
    if (currentId === id) {
      currentId = null;
      emit();
    }
  };
  utterance.onend = done;
  utterance.onerror = done;

  currentId = id;
  emit();
  synth.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
  if (currentId !== null) {
    currentId = null;
    emit();
  }
}

export function useSpeaking(id) {
  return useSyncExternalStore(
    subscribe,
    () => currentId === id,
    () => false,
  );
}

const noopSubscribe = () => () => {};

export function useSpeechSupported() {
  return useSyncExternalStore(
    noopSubscribe,
    () => "speechSynthesis" in window,
    () => false,
  );
}
