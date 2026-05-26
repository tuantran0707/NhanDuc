import { matches } from "@/lib/content";

export const metadata = { title: "Kết Quả Thi Đấu - Nhân Đức FC" };

const CLUB = "Nhân Đức FC";

function resultBadge(m: (typeof matches)[number]) {
  const isHome = m.home === CLUB;
  const our = isHome ? m.homeScore : m.awayScore;
  const opp = isHome ? m.awayScore : m.homeScore;
  if (our > opp) return { label: "THẮNG", cls: "bg-green-100 text-green-700" };
  if (our < opp) return { label: "THUA", cls: "bg-red-100 text-red-700" };
  return { label: "HÒA", cls: "bg-yellow-100 text-yellow-700" };
}

export default function ResultsPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold">Kết Quả Thi Đấu</h1>
          <p className="mt-2 text-white/80 max-w-2xl">
            Cập nhật tỉ số các trận đấu của Nhân Đức FC tại các giải đấu và trận giao hữu.
          </p>
        </div>
      </section>

      <section className="container-page py-12 space-y-4">
        {matches.map((m, i) => {
          const b = resultBadge(m);
          return (
            <div key={i} className="card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
                <span className="font-semibold text-brand">{m.competition}</span>
                <span>{m.date}{m.venue ? ` · ${m.venue}` : ""}</span>
              </div>
              <div className="mt-3 grid grid-cols-7 items-center gap-2 text-center">
                <div className="col-span-3 text-right font-semibold text-base md:text-lg">
                  {m.home}
                </div>
                <div className="col-span-1 text-2xl md:text-3xl font-black text-brand">
                  {m.homeScore} - {m.awayScore}
                </div>
                <div className="col-span-3 text-left font-semibold text-base md:text-lg">
                  {m.away}
                </div>
              </div>
              <div className="mt-3 flex justify-center">
                <span className={`text-xs font-bold px-2 py-1 rounded ${b.cls}`}>{b.label}</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
