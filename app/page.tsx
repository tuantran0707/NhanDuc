import Link from "next/link";
import Image from "next/image";
import { news, achievements, matches } from "@/lib/content";

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
          className="object-cover object-center opacity-80"
        />
        {/* Lớp phủ nhẹ chỉ ở bên trái để chữ rõ, ảnh đội vẫn nổi bật bên phải */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/55 to-transparent" />
        <div className="container-page relative py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
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

          <div className="card bg-white/10 border-white/20 backdrop-blur p-6 text-white">
            <div className="text-sm uppercase tracking-wider text-brand-gold">Trận đấu gần nhất</div>
            <div className="mt-3 text-sm text-white/70">{latestMatch.competition} · {latestMatch.date}</div>
            <div className="mt-4 grid grid-cols-3 items-center text-center">
              <div className="font-semibold">{latestMatch.home}</div>
              <div className="text-4xl font-black text-brand-gold">
                {latestMatch.homeScore} - {latestMatch.awayScore}
              </div>
              <div className="font-semibold">{latestMatch.away}</div>
            </div>
            {latestMatch.venue && (
              <div className="mt-3 text-center text-xs text-white/60">Sân: {latestMatch.venue}</div>
            )}
          </div>
        </div>
      </section>

      {/* News / Blog */}
      <section className="container-page py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Tin tức & Blog</h2>
            <p className="text-gray-500 mt-1">Cập nhật mới nhất về Nhân Đức FC và các giải đấu đang tham gia</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((p) => (
            <article key={p.slug} className="card hover:shadow-md transition">
              <div className="h-40 bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-brand-gold text-2xl font-black">
                NĐ FC
              </div>
              <div className="p-5">
                <div className="text-xs text-brand font-semibold uppercase">{p.tag}</div>
                <h3 className="mt-1 font-bold text-lg leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.excerpt}</p>
                <div className="mt-3 text-xs text-gray-400">{p.date}</div>
              </div>
            </article>
          ))}
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
