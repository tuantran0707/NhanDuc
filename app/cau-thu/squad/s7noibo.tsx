import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import PlayerCard from "@/components/PlayerCard";

export const metadata = { title: "Sân 7 nội bộ - Nhân Đức FC" };

function getS7NoiBo() {
  const filePath = path.join(process.cwd(), "data", "nhanduc-s7noibo.csv");
  const csv = fs.readFileSync(filePath, "utf8");
  return parse(csv, { columns: true });
}

export default function S7NoiBoPage() {
  const list = getS7NoiBo();
  return (
    <section className="container-page py-10">
      <h1 className="text-2xl font-bold mb-6">Danh sách Sân 7 nội bộ</h1>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p, idx) => (
          <PlayerCard key={idx} p={p} />
        ))}
      </div>
    </section>
  );
}
