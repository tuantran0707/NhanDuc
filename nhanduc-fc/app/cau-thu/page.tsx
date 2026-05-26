import { players, positionGroups, groupKey } from "@/lib/players";

export const metadata = { title: "Cầu Thủ - Nhân Đức FC" };

function PlayerCard({ p }: { p: (typeof players)[number] }) {
  const initials = p.name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(" ")
    .slice(-2)
    .map((s) => s[0])
    .join("");
  return (
    <div className="card group hover:shadow-md transition">
      <div className="relative h-44 bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white">
        <div className="absolute top-3 left-3 text-xs font-semibold bg-white/15 px-2 py-0.5 rounded">
          {p.position || "Cầu thủ"}
        </div>
        <div className="text-6xl font-black text-brand-gold drop-shadow">#{p.number}</div>
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white text-brand font-bold grid place-items-center">
          {initials}
        </div>
      </div>
      <div className="p-4">
        <div className="font-bold text-lg leading-tight">{p.name}</div>
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          <span className="badge">Số áo {p.number}</span>
          {p.size && <span className="badge">Size {p.size}</span>}
          {p.dob && <span className="badge">Sinh nhật {p.dob}</span>}
        </div>
      </div>
    </div>
  );
}

export default function PlayersPage() {
  const groups = positionGroups
    .map((g) => ({
      ...g,
      list: players
        .filter((p) => groupKey(p) === g.key)
        .sort((a, b) => a.number - b.number)
    }))
    .filter((g) => g.list.length > 0);

  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold">Cầu Thủ</h1>
          <p className="mt-2 text-white/80 max-w-2xl">
            Danh sách cầu thủ chính thức của Nhân Đức FC. Thông tin gồm số áo, vị trí, size áo,
            ngày sinh và sẽ tiếp tục được bổ sung (chiều cao, cân nặng, ảnh, poster...).
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <span className="badge bg-white/15 text-white">Tổng cộng: {players.length} thành viên</span>
          </div>
        </div>
      </section>

      <section className="container-page py-10 space-y-12">
        {groups.map((g) => (
          <div key={g.key}>
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold">
                {g.label} <span className="text-gray-400 font-normal">({g.list.length})</span>
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {g.list.map((p) => (
                <PlayerCard key={p.stt} p={p} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bảng tổng hợp */}
      <section className="container-page pb-16">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Bảng danh sách đầy đủ</h2>
        <div className="card overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">STT</th>
                <th className="px-4 py-3 text-left">Tên</th>
                <th className="px-4 py-3 text-left">Số áo</th>
                <th className="px-4 py-3 text-left">Size</th>
                <th className="px-4 py-3 text-left">Ngày sinh</th>
                <th className="px-4 py-3 text-left">Vị trí</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p) => (
                <tr key={p.stt} className="border-t border-gray-100">
                  <td className="px-4 py-2">{p.stt}</td>
                  <td className="px-4 py-2 font-medium">{p.name}</td>
                  <td className="px-4 py-2">{p.number}</td>
                  <td className="px-4 py-2">{p.size || "-"}</td>
                  <td className="px-4 py-2">{p.dob || "-"}</td>
                  <td className="px-4 py-2">{p.position || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
