import { achievements } from "@/lib/content";

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
              <div className="card p-5">
                <div className="text-xs text-brand font-semibold">{a.year}</div>
                <h3 className="font-bold text-lg mt-1">{a.title}</h3>
                {a.detail && <p className="text-gray-600 mt-1 text-sm">{a.detail}</p>}
              </div>
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
