import Link from "next/link";
import type { Player } from "@/lib/players";
import PlayerCard from "@/components/PlayerCard";

export const metadata = { title: "Sân 7 nội bộ - Nhân Đức FC" };

const s7NoiBoList: Player[] = [
  { stt: 1,  name: "Văn Dần",      number: 18, position: "GK" },
  { stt: 2,  name: "Ngô Tín",      number: 6,  position: "GK" },
  { stt: 3,  name: "Nguyễn Hoàng", number: 43, position: "GK" },
  { stt: 4,  name: "Vũ",           number: 1,  position: "GK" },
  { stt: 5,  name: "Li Nguyễn",    number: 0,  position: "GK" },
  { stt: 6,  name: "Văn Nhân",     number: 8,  position: "Midfielders" },
  { stt: 7,  name: "Đức Hà",       number: 95, position: "Midfielders" },
  { stt: 8,  name: "Đinh Thiên",   number: 10, position: "Forwards" },
  { stt: 9,  name: "Trần Linh",    number: 7,  position: "Midfielders" },
  { stt: 10, name: "Đỗ Đạt",       number: 4,  position: "Defenders" },
  { stt: 11, name: "Văn Sang",     number: 0,  position: "Midfielders" },
  { stt: 12, name: "Văn An",       number: 99, position: "Forwards" },
  { stt: 13, name: "Văn Trọng",    number: 0,  position: "Midfielders" },
  { stt: 14, name: "Nguyễn Sỹ",   number: 32, position: "Midfielders" },
  { stt: 15, name: "Hữu Thức",     number: 16, position: "Midfielders" },
  { stt: 16, name: "Đại Phước",    number: 88, position: "Forwards" },
  { stt: 17, name: "Viết Thành",   number: 26, position: "Defenders" },
  { stt: 18, name: "Ngọc Trọng",   number: 0,  position: "Midfielders" },
  { stt: 19, name: "Bá Tuấn",      number: 22, position: "Midfielders" },
  { stt: 20, name: "Xuân Nam",     number: 17, position: "Midfielders" },
  { stt: 21, name: "Ngọc Luyến",   number: 16, position: "Midfielders" },
  { stt: 22, name: "Huy Hoàng",    number: 92, position: "Midfielders" },
  { stt: 23, name: "Ngọc Dũng",    number: 0,  position: "Midfielders" },
  { stt: 24, name: "Hữu Phước",    number: 12, position: "Midfielders" },
  { stt: 25, name: "Hoàng Hiếu",   number: 0,  position: "Midfielders" },
  { stt: 26, name: "Bá Trung",     number: 55, position: "Forwards" },
  { stt: 27, name: "Phan Định",    number: 0,  position: "Midfielders" },
  { stt: 28, name: "Đức Nguyên",   number: 0,  position: "Midfielders" },
  { stt: 29, name: "Khanh",        number: 0,  position: "Midfielders" },
  { stt: 30, name: "Văn Tịnh",     number: 0,  position: "Midfielders" },
  { stt: 31, name: "Công Dũng",    number: 0,  position: "Midfielders" },
  { stt: 32, name: "Tuấn Đạt",     number: 0,  position: "Midfielders" },
  { stt: 33, name: "Thanh Hoàng",  number: 0,  position: "Midfielders" },
  { stt: 34, name: "Đặng Khánh",   number: 0,  position: "Midfielders" },
  { stt: 35, name: "Hoài Bảo",     number: 39, position: "Midfielders" },
];

const positionGroupsS7: { key: string; label: string }[] = [
  { key: "GK", label: "Thủ môn" },
  { key: "DF", label: "Hậu vệ" },
  { key: "MF", label: "Tiền vệ" },
  { key: "FW", label: "Tiền đạo" },
  { key: "?",  label: "Chưa phân loại" },
];

function s7GroupKey(p: Player): string {
  if (!p.position) return "?";
  const pos = p.position.toLowerCase();
  if (pos.includes("gk")) return "GK";
  if (pos.includes("defender")) return "DF";
  if (pos.includes("midfielder")) return "MF";
  if (pos.includes("forward")) return "FW";
  return "?";
}

export default function S7NoiBoPage() {
  const groups = positionGroupsS7
    .map(g => ({ ...g, list: s7NoiBoList.filter(p => s7GroupKey(p) === g.key) }))
    .filter(g => g.list.length > 0);

  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-10">
          <Link href="/cau-thu" className="text-white/70 hover:text-white text-sm mb-3 inline-block">← Quay lại</Link>
          <h1 className="text-3xl font-extrabold">Sân 7 nội bộ</h1>
          <p className="mt-1 text-white/80">Đội hình nội bộ sân 7 – {s7NoiBoList.length} thành viên</p>
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
                <PlayerCard key={p.stt} p={p} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
