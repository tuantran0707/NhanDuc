import { achievements } from "@/lib/content";
import LightboxImage from "@/components/LightboxImage";

export const metadata = { title: "Thành Tích - Nhân Đức FC" };

export default function AchievementsPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold">Thành Tích</h1>
          <p className="mt-2 text-white/80 max-w-2xl">
            Hành trình và các danh hiệu Nhân Đức FC đã đạt được qua các mùa giải.
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <ol className="relative border-l-2 border-brand/20 ml-3 space-y-8">
          {achievements.map((a, i) => (
            <li key={i} className="ml-6">
              <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-brand-gold rounded-full ring-4 ring-white text-brand-dark font-black text-xs">
                {a.year.slice(-2)}
              </span>
              <details className="card group overflow-hidden">
                <summary className="list-none p-5 flex flex-col md:flex-row gap-5 items-center w-full text-left hover:shadow-lg transition cursor-pointer">
                  {a.cover && (
                    <span className="block flex-shrink-0">
                      <img
                        src={a.cover}
                        alt={a.title}
                        className="w-28 h-20 object-cover rounded shadow border border-gray-200 hover:scale-105 transition"
                        loading="lazy"
                      />
                    </span>
                  )}
                  <div>
                    <div className="text-xs text-brand font-semibold">{a.year}</div>
                    <h3 className="font-bold text-lg mt-1">{a.title}</h3>
                    {a.detail && <p className="text-gray-600 mt-1 text-sm">{a.detail}</p>}
                    <div className="mt-2 text-xs text-brand-gold font-semibold underline">Nhấn để xem tất cả ảnh</div>
                  </div>
                </summary>
                {a.images && (
                  <div className="px-5 pb-5 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {a.images.map((img, idx) => (
                      <LightboxImage
                        key={img}
                        src={img}
                        alt={a.title + " ảnh " + (idx + 1)}
                        thumbWrapperClassName="h-32 rounded shadow border border-gray-200"
                        thumbImageClassName="object-cover hover:scale-105 transition"
                      />
                    ))}
                  </div>
                )}
              </details>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="card p-6 text-center">
            <div className="text-3xl font-extrabold text-brand">{achievements.length}+</div>
            <div className="text-sm text-gray-500 mt-1">Cột mốc đáng nhớ</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-extrabold text-brand">1</div>
            <div className="text-sm text-gray-500 mt-1">Chức vô địch</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-extrabold text-brand">39</div>
            <div className="text-sm text-gray-500 mt-1">Thành viên CLB</div>
          </div>
        </div>
      </section>
    </>
  );
}
