
import { players, positionGroups, groupKey } from "@/lib/players";
import Image from "next/image";
import { readdir } from "fs/promises";
import path from "path";
import dynamic from "next/dynamic";
import { playerProfiles } from "@/lib/playerProfiles";
const PlayerProfile = dynamic(() => import("@/components/PlayerProfile"), { ssr: false });

export const metadata = { title: "Cầu Thủ - Nhân Đức FC" };

function toPlayerFolderName(name: string, number: number): string {
  const normalized = name
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9]/g, "");
  return `${normalized}-${number}`;
}

async function getPlayerPhotoMap() {
  const allowed = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  const root = path.join(process.cwd(), "public", "Player");
  const map: Record<number, string> = {};

  await Promise.all(
    players.map(async (p) => {
      const folder = toPlayerFolderName(p.name, p.number);
      const folderPath = path.join(root, folder);
      try {
        const files = await readdir(folderPath, { withFileTypes: true });
        const firstImage = files
          .filter((f) => f.isFile())
          .map((f) => f.name)
          .find((fileName) => allowed.has(path.extname(fileName).toLowerCase()));

        if (firstImage) {
          map[p.stt] = `/Player/${folder}/${firstImage}`;
        }
      } catch {
        // Bỏ qua thư mục chưa có ảnh hoặc chưa tồn tại.
      }
    })
  );

  return map;
}

import PlayerCard from "@/components/PlayerCard";

export default async function PlayersPage() {
  const photoMap = await getPlayerPhotoMap();
  const uploadedCount = Object.keys(photoMap).length;

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
            Danh sách cầu thủ chính thức của Nhân Đức FC. Phong cách hiển thị đã được làm mới để ảnh rõ nét,
            không còn lớp chữ mờ che ảnh như trước.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <span className="badge bg-white/15 text-white">Tổng cộng: {players.length} thành viên</span>
            <span className="badge bg-white/15 text-white">Đã có ảnh: {uploadedCount}/{players.length}</span>
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
                <PlayerCard key={p.stt} p={p} photo={photoMap[p.stt]} />
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
