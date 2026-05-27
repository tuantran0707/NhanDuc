import { players } from "@/lib/players";
import PlayerCard from "@/components/PlayerCard";

export const metadata = { title: "Sân 11 - Nhân Đức FC" };

export default function San11Page() {
  // Danh sách số áo sân 11 lấy từ file excel
  const san11Numbers = [8,4,10,43,1,19,17,74,29,22,12,16,15,99,11,26,18,92,12,55,33,39,5,47,21,31,78,77,27,7,52,57,14,28,23,20,35];
  const list = players.filter(p => san11Numbers.includes(p.number));
  return (
    <section className="container-page py-10">
      <h1 className="text-2xl font-bold mb-6">Danh sách Sân 11</h1>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <PlayerCard key={p.stt} p={p} />
        ))}
      </div>
    </section>
  );
}
