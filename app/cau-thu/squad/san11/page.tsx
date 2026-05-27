import { players, positionGroups, groupKey } from "@/lib/players";
import { readdir } from "fs/promises";
import path from "path";
import PlayerCard from "@/components/PlayerCard";
import Link from "next/link";

export const metadata = { title: "Sân 11 - Nhân Đức FC" };

function toPlayerFolderName(name: string, number: number): string {
  const normalized = name
    .replace(/đ/g, "d").replace(/Đ/g, "D")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9]/g, "");
  return `${normalized}-${number}`;
}

async function getPhotoMap(list: typeof players) {
  const allowed = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  const root = path.join(process.cwd(), "public", "Player");
  const map: Record<number, string> = {};
  await Promise.all(list.map(async (p) => {
    const folder = toPlayerFolderName(p.name, p.number);
    try {
      const files = await readdir(path.join(root, folder), { withFileTypes: true });
      const img = files.filter(f => f.isFile()).map(f => f.name).find(n => allowed.has(path.extname(n).toLowerCase()));
      if (img) map[p.stt] = `/Player/${folder}/${img}`;
    } catch { /* no photo */ }
  }));
  return map;
}

export default async function San11Page() {
  const san11 = players.filter(p => p.squad === "san11");
  const photoMap = await getPhotoMap(san11);

  const groups = positionGroups
    .map(g => ({
      ...g,
      list: san11.filter(p => groupKey(p) === g.key).sort((a, b) => a.number - b.number),
    }))
    .filter(g => g.list.length > 0);

  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-10">
          <Link href="/cau-thu" className="text-white/70 hover:text-white text-sm mb-3 inline-block">← Quay lại</Link>
          <h1 className="text-3xl font-extrabold">Sân 11</h1>
          <p className="mt-1 text-white/80">Đội hình thi đấu sân 11 – {san11.length} thành viên</p>
        </div>
      </section>
      <section className="container-page py-10 space-y-12">
        {groups.map(g => (
          <div key={g.key}>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {g.label} <span className="text-gray-400 font-normal">({g.list.length})</span>
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {g.list.map(p => (
                <PlayerCard key={p.stt} p={p} photo={photoMap[p.stt]} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
