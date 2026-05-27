
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

import Link from "next/link";

export default function PlayersPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold">Cầu Thủ</h1>
          <p className="mt-2 text-white/80 max-w-2xl">
            Chọn danh sách cầu thủ theo từng đội hình:
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/cau-thu/squad/san11">
              <div className="rounded-xl bg-white/10 hover:bg-white/20 transition p-8 text-center cursor-pointer shadow-lg">
                <div className="text-2xl font-bold mb-2">Sân 11</div>
                <div className="text-white/80">Đội hình thi đấu sân 11</div>
              </div>
            </Link>
            <Link href="/cau-thu/squad/s7noibo">
              <div className="rounded-xl bg-white/10 hover:bg-white/20 transition p-8 text-center cursor-pointer shadow-lg">
                <div className="text-2xl font-bold mb-2">Sân 7 nội bộ</div>
                <div className="text-white/80">Đội hình nội bộ sân 7</div>
              </div>
            </Link>
            <Link href="/cau-thu/squad/s7giai">
              <div className="rounded-xl bg-white/10 hover:bg-white/20 transition p-8 text-center cursor-pointer shadow-lg">
                <div className="text-2xl font-bold mb-2">Sân 7 giải</div>
                <div className="text-white/80">Đội hình tham dự giải sân 7</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
