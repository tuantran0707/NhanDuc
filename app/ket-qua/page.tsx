"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  completedTournaments,
  ongoingTournaments,
  resolveClubLogo,
  type Fixture,
  type TournamentCard
} from "@/lib/content";
import LightboxImage from "@/components/LightboxImage";

function StandingsTable({ rows }: { rows?: TournamentCard["standings"] }) {
  if (!rows || rows.length === 0) {
    return <p className="text-sm text-gray-500">BXH chưa cập nhật.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-3 py-2 text-left">STT</th>
            <th className="px-3 py-2 text-left">Đội bóng</th>
            <th className="px-3 py-2 text-left">ST</th>
            <th className="px-3 py-2 text-left">T</th>
            <th className="px-3 py-2 text-left">H</th>
            <th className="px-3 py-2 text-left">B</th>
            <th className="px-3 py-2 text-left">BT/BB</th>
            <th className="px-3 py-2 text-left">HS</th>
            <th className="px-3 py-2 text-left">Đ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.rank + row.team} className={`border-t ${row.team === "Nhân Đức FC" ? "bg-brand/5" : ""}`}>
              <td className="px-3 py-2 font-semibold">{row.rank}</td>
              <td className="px-3 py-2 font-semibold">
                <div className="flex items-center gap-2">
                  <Image src={resolveClubLogo(row.team)} alt={row.team} width={24} height={24} className="w-6 h-6 rounded-full object-cover border border-gray-200" />
                  <span>{row.team}</span>
                </div>
              </td>
              <td className="px-3 py-2">{row.played}</td>
              <td className="px-3 py-2">{row.win}</td>
              <td className="px-3 py-2">{row.draw}</td>
              <td className="px-3 py-2">{row.lose}</td>
              <td className="px-3 py-2">{row.gfga}</td>
              <td className="px-3 py-2">{row.gd}</td>
              <td className="px-3 py-2 font-bold text-brand-red">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FixtureList({ fixtures, emptyText }: { fixtures?: Fixture[]; emptyText: string }) {
  if (!fixtures || fixtures.length === 0) {
    return <p className="text-sm text-gray-500">{emptyText}</p>;
  }

  return (
    <div className="space-y-3">
      {fixtures.map((m) => (
        <div key={`${m.home}-${m.away}-${m.date || "date"}`} className="p-3 border border-gray-100 rounded-lg bg-gray-50">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div className="flex items-center justify-end gap-2 text-right">
              <span className="font-semibold text-sm">{m.home}</span>
              <Image src={resolveClubLogo(m.home)} alt={m.home} width={28} height={28} className="w-7 h-7 rounded-full object-cover border border-gray-200" />
            </div>

            <div className="font-black text-brand text-base">
              {m.status === "played" && typeof m.homeScore === "number" && typeof m.awayScore === "number"
                ? `${m.homeScore} - ${m.awayScore}`
                : "VS"}
            </div>

            <div className="flex items-center gap-2">
              <Image src={resolveClubLogo(m.away)} alt={m.away} width={28} height={28} className="w-7 h-7 rounded-full object-cover border border-gray-200" />
              <span className="font-semibold text-sm">{m.away}</span>
            </div>
          </div>
          {(m.date || m.venue) && (
            <div className="mt-2 text-xs text-gray-500 text-center">
              {[m.date, m.venue].filter(Boolean).join(" · ")}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ResultsPage() {
  const [tab, setTab] = useState<"played" | "ongoing">("played");
  const [ongoingId, setOngoingId] = useState(ongoingTournaments[0]?.id ?? "");

  const selectedOngoing = useMemo(
    () => ongoingTournaments.find((item) => item.id === ongoingId) ?? ongoingTournaments[0],
    [ongoingId]
  );

  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold">Kết Quả Thi Đấu</h1>
          <p className="mt-2 text-white/80 max-w-2xl">
            Theo dõi các giải đã thi đấu và các giải đang thi đấu của Nhân Đức FC.
          </p>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 mb-6">
          <button
            onClick={() => setTab("played")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg ${tab === "played" ? "bg-brand text-white" : "text-gray-600"}`}
          >
            Giải đã thi đấu
          </button>
          <button
            onClick={() => setTab("ongoing")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg ${tab === "ongoing" ? "bg-brand text-white" : "text-gray-600"}`}
          >
            Giải đang thi đấu
          </button>
        </div>

        {tab === "played" && (
          <div className="space-y-6">
            {completedTournaments.map((tournament) => (
              <article key={tournament.id} className="card p-5 md:p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-start">
                  <div className="relative h-56 rounded-xl overflow-hidden">
                    <Image src={tournament.cover} alt={tournament.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-brand">{tournament.title}</h2>
                    <p className="mt-2 text-gray-600">{tournament.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                      {tournament.results.map((line) => (
                        <li key={line} className="p-3 border border-gray-100 rounded-lg bg-gray-50">{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {tournament.gallery.map((img) => (
                    <LightboxImage
                      key={img}
                      src={img}
                      alt={tournament.title}
                      thumbWrapperClassName="h-32 rounded-lg border border-gray-100"
                      thumbImageClassName="object-cover hover:scale-105 transition"
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === "ongoing" && selectedOngoing && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {ongoingTournaments.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setOngoingId(item.id)}
                  className={`card p-4 text-left border-2 transition ${selectedOngoing.id === item.id ? "border-brand" : "border-transparent hover:border-brand/40"}`}
                >
                  <div className="font-bold text-lg text-brand">{item.title}</div>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                </button>
              ))}
            </div>

            <article className="card p-5 md:p-6 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-brand">{selectedOngoing.title}</h2>
                <p className="text-gray-600 mt-1">{selectedOngoing.description}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">BXH</h3>
                <StandingsTable rows={selectedOngoing.standings} />
              </div>

              <div className="grid lg:grid-cols-2 gap-5">
                <div>
                  <h3 className="font-bold text-lg mb-3">Kết quả đã thi đấu</h3>
                  <FixtureList fixtures={selectedOngoing.playedFixtures} emptyText="Chưa có trận đã thi đấu." />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3">Lịch thi đấu</h3>
                  <FixtureList fixtures={selectedOngoing.upcomingFixtures} emptyText="Chưa có lịch thi đấu." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {selectedOngoing.rankingImage && (
                  <div className="card overflow-hidden block">
                    <LightboxImage
                      src={selectedOngoing.rankingImage}
                      alt="Ảnh bảng xếp hạng"
                      thumbWrapperClassName="h-56"
                      thumbImageClassName="object-cover"
                    />
                    <div className="p-3 text-sm font-medium">Ảnh BXH</div>
                  </div>
                )}
                {selectedOngoing.scheduleImage && (
                  <div className="card overflow-hidden block">
                    <LightboxImage
                      src={selectedOngoing.scheduleImage}
                      alt="Ảnh lịch thi đấu"
                      thumbWrapperClassName="h-56"
                      thumbImageClassName="object-cover"
                    />
                    <div className="p-3 text-sm font-medium">Ảnh lịch thi đấu</div>
                  </div>
                )}
              </div>
            </article>
          </div>
        )}
      </section>
    </>
  );
}
