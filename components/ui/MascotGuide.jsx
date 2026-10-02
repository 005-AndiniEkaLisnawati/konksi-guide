"use client";

import Image from "next/image";
import { MASCOT_POSES, poseForTopic } from "@/content/mascot-poses";

const SIZES = {
  sm: "w-24 sm:w-28",
  md: "w-36 sm:w-44",
  lg: "w-48 sm:w-60",
  xl: "w-60 sm:w-80 lg:w-[24rem]",
};

/**
 * Maskot Konksi dengan pose dinamis dan (opsional) balon ucapan.
 * Daftar pose & gambarnya: content/mascot-poses.js
 *
 * @param {import("@/content/schema").MascotPose} pose  nama pose
 * @param {string}  topic    jika `pose` kosong, pose dipilih otomatis dari teks topik
 * @param {string}  message  isi balon ucapan (opsional)
 * @param {"left"|"right"|"top"} bubble  posisi balon ucapan terhadap maskot
 * @param {"sm"|"md"|"lg"|"xl"} size
 */
export default function MascotGuide({
  pose,
  topic,
  message,
  bubble = "right",
  size = "md",
  float = true,
  priority = false,
  className = "",
}) {
  const key = pose && MASCOT_POSES[pose] ? pose : poseForTopic(topic);
  const data = MASCOT_POSES[key];

  const figure = (
    <div className={`relative shrink-0 ${SIZES[size] ?? SIZES.md}`}>
      <Image
        src={encodeURI(data.src)}
        alt={data.alt}
        width={500}
        height={500}
        priority={priority}
        sizes="(min-width: 640px) 320px, 240px"
        className={`h-auto w-full select-none drop-shadow-[0_10px_0_rgba(31,22,51,0.08)] ${float ? "animate-float" : ""}`}
        draggable={false}
      />
    </div>
  );

  if (!message) return <div className={className}>{figure}</div>;

  const layout = {
    right: "flex-row items-center",
    left: "flex-row-reverse items-center",
    top: "flex-col-reverse items-center",
  }[bubble];

  const tail = {
    right: "-left-2.5 top-1/2 -translate-y-1/2 border-b-[2.5px] border-l-[2.5px]",
    left: "-right-2.5 top-1/2 -translate-y-1/2 border-t-[2.5px] border-r-[2.5px]",
    top: "-bottom-2.5 left-1/2 -translate-x-1/2 border-b-[2.5px] border-r-[2.5px]",
  }[bubble];

  return (
    <div className={`flex gap-3 ${layout} ${className}`}>
      {figure}
      <div className="relative max-w-xs rounded-2xl bg-card px-4 py-3 text-ink brut-sm">
        <span aria-hidden="true" className={`absolute size-4 rotate-45 border-ink bg-card ${tail}`} />
        <p className="relative text-xs font-extrabold uppercase tracking-wider text-primary">{data.characters} bilang:</p>
        <p className="relative mt-0.5 font-semibold leading-snug">{message}</p>
      </div>
    </div>
  );
}
