import Link from "next/link";
import Image from "next/image";
import { achievements, matches, editorialPosts, activeTournament, resolveClubLogo } from "@/lib/content";
import LightboxImage from "@/components/LightboxImage";

export default function HomePage() {
  const latestMatch = matches[0];
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <Image
          src="/nhanduc.png"
          alt="Nhân Đức FC"
          fill
          priority
          className="object-cover object-center opacity-76"
        />
        {/* Lớp phủ nhẹ chỉ ở bên trái để chữ rõ, ảnh đội vẫn nổi bật bên phải */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/50 to-brand-dark/22" />
        <div className="container-page relative py-16 md:py-24 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="badge bg-brand-gold/20 text-brand-gold">CLB BÓNG ĐÁ PHONG TRÀO</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-brand-green drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                Nhân Đức FC
              </span>
              <span className="block mt-2 text-2xl md:text-3xl text-brand-gold whitespace-nowrap">
                Đoàn kết · Kỷ luật · Cống hiến
              </span>
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              Trang chủ chính thức của câu lạc bộ bóng đá Nhân Đức FC. Theo dõi tin tức,
              cầu thủ, thành tích và kết quả thi đấu mới nhất của đội bóng.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/cau-thu" className="btn-primary bg-brand-gold text-brand-dark hover:bg-yellow-400">
                Đội hình cầu thủ
              </Link>
              <Link href="/ket-qua" className="btn-outline">Xem kết quả</Link>
            </div>
          </div>

          <div className="card bg-white p-6 text-brand-dark shadow-xl border border-white/40 md:translate-y-10">
            <div className="text-sm uppercase tracking-wider text-brand-gold">Trận đấu gần nhất</div>
            <div className="mt-3 text-sm text-gray-600">{latestMatch.competition} · {latestMatch.date}</div>
            <div className="mt-4 grid grid-cols-3 items-center text-center">
              <div className="font-semibold text-brand-dark flex items-center justify-end gap-2 pr-2">
                <span>{latestMatch.home}</span>
                <Image src={resolveClubLogo(latestMatch.home)} alt={latestMatch.home} width={28} height={28} className="w-7 h-7 rounded-full object-cover border border-gray-200" />
              </div>
              <div className="text-4xl font-black text-brand-gold">
                {latestMatch.homeScore} - {latestMatch.awayScore}
              </div>
              <div className="font-semibold text-brand-dark flex items-center justify-start gap-2 pl-2">
                <Image src={resolveClubLogo(latestMatch.away)} alt={latestMatch.away} width={28} height={28} className="w-7 h-7 rounded-full object-cover border border-gray-200" />
                <span>{latestMatch.away}</span>
              </div>
            </div>
            {latestMatch.venue && (
              <div className="mt-3 text-center text-xs text-gray-500">Sân: {latestMatch.venue}</div>
            )}
          </div>
        </div>
      </section>

      {/* News / Blog */}
      <section className="container-page py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Tin tức & Blog</h2>
            <p className="text-gray-500 mt-1">Hai tuyến bài chính thức về giải đã tham dự và giải sắp tham gia</p>
          </div>
          <Link href="/tin-tuc" className="text-sm font-semibold text-brand hover:underline">Xem tất cả</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {editorialPosts.map((p) => (
            <article key={p.slug} className="card hover:shadow-md transition">
              <div className="relative h-48">
                <Image src={p.cover} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="text-xs text-brand font-semibold uppercase">Tuyến bài</div>
                <h3 className="mt-1 font-bold text-lg leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.summary}</p>
                <div className="mt-3 text-xs text-gray-400">{p.date}</div>
                <Link href={`/tin-tuc/${p.slug}`} className="btn-primary mt-4">Đọc bài đầy đủ</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Active tournament */}
      <section className="bg-white border-y border-gray-100 mt-10">
        <div className="container-page py-14 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Các Giải Đang Tham Gia</h2>
            <p className="text-gray-500 mt-1">{activeTournament.title}</p>
            <p className="text-sm text-gray-600 mt-2">{activeTournament.note}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card p-5">
              <h3 className="font-bold text-lg mb-3">BXH Bảng A (Text)</h3>
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
                    {activeTournament.standingsA?.map((row) => (
                      <tr key={row.rank + row.team} className={`border-t ${row.team === "Nhân Đức FC" ? "bg-brand/5" : ""}`}>
                        <td className="px-3 py-2 font-semibold">{row.rank}</td>
                        <td className="px-3 py-2 font-semibold">
                          <div className="flex items-center gap-2">
                            <Image src={resolveClubLogo(row.team)} alt={row.team} width={20} height={20} className="w-5 h-5 rounded-full object-cover border border-gray-200" />
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
            </div>

            <div className="space-y-4">
              <div className="card p-5">
                <h3 className="font-bold text-lg mb-3">Kết Quả Giải Đấu</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {activeTournament.recentResults.map((r) => (
                    <li key={r} className="border border-gray-100 rounded-lg p-3 bg-gray-50">{r}</li>
                  ))}
                </ul>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-lg mb-3">Lịch Sắp Tới</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {activeTournament.upcomingMatches.map((m) => (
                    <li key={m} className="border border-gray-100 rounded-lg p-3 bg-yellow-50">{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {activeTournament.rankingImage && (
              <div className="card overflow-hidden block">
                <LightboxImage
                  src={activeTournament.rankingImage}
                  alt="Bảng xếp hạng"
                  thumbWrapperClassName="h-60"
                  thumbImageClassName="object-cover"
                />
                <div className="p-3 text-sm font-medium">Ảnh BXH mới nhất</div>
              </div>
            )}
            {activeTournament.scheduleImage && (
              <div className="card overflow-hidden block">
                <LightboxImage
                  src={activeTournament.scheduleImage}
                  alt="Lịch thi đấu"
                  thumbWrapperClassName="h-60"
                  thumbImageClassName="object-cover"
                />
                <div className="p-3 text-sm font-medium">Ảnh lịch thi đấu vòng tiếp theo</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Achievements highlight */}
      <section className="bg-white border-y border-gray-100">
        <div className="container-page py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Thành tích nổi bật</h2>
            <p className="text-gray-500 mt-2">
              Những dấu ấn đáng nhớ trong hành trình của Nhân Đức FC qua các mùa giải.
            </p>
            <Link href="/thanh-tich" className="btn-primary mt-5">Xem tất cả thành tích</Link>
          </div>
          <ul className="space-y-3">
            {achievements.slice(0, 4).map((a, i) => (
              <li key={i} className="card p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-brand text-white grid place-items-center font-black">
                  {a.year}
                </div>
                <div>
                  <div className="font-semibold">{a.title}</div>
                  {a.detail && <div className="text-sm text-gray-500">{a.detail}</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
