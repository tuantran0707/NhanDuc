"use client";
import React, { useState } from "react";
import Image from "next/image";
import { playerProfiles } from "@/lib/playerProfiles";
import PlayerProfile from "@/components/PlayerProfile";

export default function PlayerCard({ p, photo }: { p: any; photo?: string }) {
  const initials = p.name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(" ")
    .slice(-2)
    .map((s: string) => s[0])
    .join("");
  const [showProfile, setShowProfile] = useState(false);
  const hasProfile = !!playerProfiles[p.number];
  return (
    <>
      <div
        className={`card group hover:shadow-lg transition border border-gray-200 cursor-${hasProfile ? "pointer" : "default"}`}
        onClick={() => hasProfile && setShowProfile(true)}
        title={hasProfile ? "Xem profile" : undefined}
      >
        <div className="relative h-64 bg-gray-100 flex items-center justify-center text-white overflow-hidden">
          {photo ? (
            <Image
              src={photo}
              alt={p.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-dark" />
          )}
          <div className="absolute top-3 left-3 text-xs font-semibold bg-white text-brand px-2.5 py-1 rounded-md shadow">
            {p.position || "Cầu thủ"}
          </div>
          <div className="absolute top-3 right-3 w-11 h-11 rounded-full bg-brand-gold text-brand-dark font-black grid place-items-center shadow">
            {p.number}
          </div>
          {!photo && (
            <div className="relative z-10 text-6xl font-black text-brand-gold drop-shadow">#{p.number}</div>
          )}
          <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white text-brand font-bold grid place-items-center shadow">
            {initials}
          </div>
        </div>
        <div className="p-4 bg-white">
          <div className="font-bold text-xl leading-tight text-brand-dark">{p.name}</div>
          <div className="text-sm text-gray-500 mt-0.5">{p.position || "Cầu thủ Nhân Đức FC"}</div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="badge">Số áo {p.number}</span>
            {p.size && <span className="badge">Size {p.size}</span>}
            {p.dob && <span className="badge">Sinh nhật {p.dob}</span>}
          </div>
          {hasProfile && <div className="mt-2 text-xs text-brand font-semibold">Xem profile</div>}
        </div>
      </div>
      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setShowProfile(false)}>
          <div className="relative" onClick={e => e.stopPropagation()}>
            <PlayerProfile
              name={p.name}
              number={p.number}
              position={p.position}
              photo={photo}
              profile={playerProfiles[p.number]}
            />
            <button
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold text-gray-600 shadow"
              onClick={() => setShowProfile(false)}
              aria-label="Đóng"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
