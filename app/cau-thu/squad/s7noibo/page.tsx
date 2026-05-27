import Link from "next/link";
import type { Player } from "@/lib/players";

export const metadata = { title: "Sân 7 nội bộ - Nhân Đức FC" };

const s7NoiBoList: Player[] = [
  { stt: 1, name: "Văn Nhân", number: 8 },
  { stt: 2, name: "Đức Hà", number: 95 },
  { stt: 3, name: "Đinh Thiên", number: 10 },
  { stt: 4, name: "Trần Linh", number: 7 },
  { stt: 5, name: "Đỗ Đạt", number: 4 },
  { stt: 6, name: "Văn Sang", number: 0 },
  { stt: 7, name: "Văn An", number: 99 },
  { stt: 8, name: "Văn Trọng", number: 0 },
  { stt: 9, name: "Nguyễn Sỹ", number: 32 },
  { stt: 10, name: "Hữu Thức", number: 16 },
  { stt: 11, name: "Đại Phước", number: 88 },
  { stt: 12, name: "Viết Thành", number: 26 },
  { stt: 13, name: "Ngọc Trọng", number: 0 },
  { stt: 14, name: "Văn Dần", number: 18, position: "GK" },
  { stt: 15, name: "Bá Tuấn", number: 22 },
  { stt: 16, name: "Ngô Tín", number: 6, position: "GK" },
  { stt: 17, name: "Xuân Nam", number: 17 },
  { stt: 18, name: "Ngọc Luyến", number: 16 },
  { stt: 19, name: "Nguyễn Hoàng", number: 43, position: "GK" },
  { stt: 20, name: "Huy Hoàng", number: 92 },
  { stt: 21, name: "Vũ", number: 1, position: "GK" },
  { stt: 22, name: "Ngọc Dũng", number: 0 },
  { stt: 23, name: "Hữu Phước", number: 12 },
  { stt: 24, name: "Hoàng Hiếu", number: 0 },
  { stt: 25, name: "Bá Trung", number: 55 },
  { stt: 26, name: "Phan Định", number: 0 },
  { stt: 27, name: "Đức Nguyên", number: 0 },
  { stt: 28, name: "Khanh", number: 0 },
  { stt: 29, name: "Văn Tịnh", number: 0 },
  { stt: 30, name: "Công Dũng", number: 0 },
  { stt: 31, name: "Tuấn Đạt", number: 0 },
  { stt: 32, name: "Thanh Hoàng", number: 0 },
  { stt: 33, name: "Đặng Khánh", number: 0 },
  { stt: 34, name: "Li Nguyễn", number: 0, position: "GK" },
  { stt: 35, name: "Hoài Bảo", number: 39 },
];

const positionOrder = [
  { key: "GK", label: "Thủ môn" },
  { key: "other", label: "Cầu thủ" },
];

export default function S7NoiBoPage() {
  const gkList = s7NoiBoList.filter(p => p.position === "GK");
  const otherList = s7NoiBoList.filter(p => p.position !== "GK");

  const groups = [
    { label: "Thủ môn", list: gkList },
    { label: "Cầu thủ", list: otherList },
  ].filter(g => g.list.length > 0);

  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-10">
          <Link href="/cau-thu" className="text-white/70 hover:text-white text-sm mb-3 inline-block">← Quay lại</Link>
          <h1 className="text-3xl font-extrabold">Sân 7 nội bộ</h1>
          <p className="mt-1 text-white/80">Đội hình nội bộ sân 7 – {s7NoiBoList.length} thành viên</p>
        </div>
      </section>
      <section className="container-page py-10 space-y-10">
        {groups.map(g => (
          <div key={g.label}>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {g.label} <span className="text-gray-400 font-normal">({g.list.length})</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 text-left">STT</th>
                    <th className="px-4 py-3 text-left">Tên</th>
                    <th className="px-4 py-3 text-left">Số áo</th>
                  </tr>
                </thead>
                <tbody>
                  {g.list.map((p) => (
                    <tr key={p.stt} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-2">{p.stt}</td>
                      <td className="px-4 py-2 font-medium">{p.name}</td>
                      <td className="px-4 py-2">{p.number > 0 ? p.number : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
