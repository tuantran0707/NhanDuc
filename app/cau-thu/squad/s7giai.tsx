import { players } from "@/lib/players";
import PlayerCard from "@/components/PlayerCard";

export const metadata = { title: "Sân 7 giải - Nhân Đức FC" };

// TODO: Cập nhật danh sách số áo hoặc tên cầu thủ cho sân 7 giải
const s7giaiNumbers = [8,4,10,43,1,19,17,74,29,22,12,16,15,99,11,26,18,92,12,55,33,39,5,47,21,31,78,77,27,7,52,57,14,28,23,20,35];
const list = players.filter(p => s7giaiNumbers.includes(p.number));

export default function S7GiaiPage() {
  return (
    <section className="container-page py-10">
      <h1 className="text-2xl font-bold mb-6">Danh sách Sân 7 giải</h1>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <PlayerCard key={p.stt} p={p} />
        ))}
      </div>
    </section>
  );
}
