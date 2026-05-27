import { players } from "@/lib/players";
import { readdir } from "fs/promises";
import path from "path";
import PlayerCard from "@/components/PlayerCard";
import Link from "next/link";

export const metadata = { title: "Sân 7 giải - Nhân Đức FC" };

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

// Danh sách sân 7 giải (DS Giải Thiện Nguyễn Tuyên Sơn)
const s7giaiNames = [
  "Văn Nhân","Đỗ Đạt","Đinh Thiên","Duy Tuấn","Anh Tuấn","Hữu Phước",
  "Quốc Khánh","Duy Tùng","Minh Tân","Ngọc Cường","Tuấn Phát",
  "Thành Hiếu","Tony Trần","Văn Hà","Vinh Trương (Vinh Dybala)",
  "Mạnh Quang","Quốc Vương","Hoàng Trung","Quốc Hưng","HLV Vũ Nghệ",
];

export default async function S7GiaiPage() {
  const s7giai = players.filter(p =>
    s7giaiNames.some(n => p.name.toLowerCase().includes(n.toLowerCase()) || n.toLowerCase().includes(p.name.toLowerCase()))
  );
  const photoMap = await getPhotoMap(s7giai);

  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-10">
          <Link href="/cau-thu" className="text-white/70 hover:text-white text-sm mb-3 inline-block">← Quay lại</Link>
          <h1 className="text-3xl font-extrabold">Sân 7 giải</h1>
          <p className="mt-1 text-white/80">Đội hình tham dự giải sân 7 – {s7giai.length} thành viên</p>
        </div>
      </section>
      <section className="container-page py-10">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {s7giai.map((p) => (
            <PlayerCard key={p.stt} p={p} photo={photoMap[p.stt]} />
          ))}
        </div>
      </section>
    </>
  );
}
