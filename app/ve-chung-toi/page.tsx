export const metadata = { title: "Về Chúng Tôi - Nhân Đức FC" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold">Về Chúng Tôi</h1>
          <p className="mt-2 text-white/80 max-w-2xl">
            Câu lạc bộ bóng đá Nhân Đức FC - nơi gắn kết những người yêu trái bóng tròn.
          </p>
        </div>
      </section>

      <section className="container-page py-12 grid md:grid-cols-3 gap-8">
        <article className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-brand">Giới thiệu</h2>
          <p>
            Nhân Đức FC là câu lạc bộ bóng đá phong trào được thành lập với mục tiêu tạo ra một
            sân chơi lành mạnh, gắn kết tình anh em và lan tỏa tinh thần thể thao tích cực
            đến cộng đồng. Đội bóng quy tụ hơn 39 thành viên ở nhiều độ tuổi và nghề nghiệp khác nhau,
            cùng chung tình yêu với trái bóng tròn.
          </p>
          <p>
            Từ những buổi tập đầu tiên, Nhân Đức FC đã không ngừng hoàn thiện về chuyên môn, tổ chức
            và tinh thần thi đấu. CLB tham gia thường xuyên các giải đấu phong trào trong khu vực,
            các trận giao hữu và các hoạt động cộng đồng.
          </p>

          <h2 className="text-2xl font-bold text-brand mt-6">Triết lý</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Đoàn kết:</strong> Tất cả vì màu cờ sắc áo của Nhân Đức FC.</li>
            <li><strong>Kỷ luật:</strong> Tôn trọng đồng đội, đối thủ và luật chơi.</li>
            <li><strong>Cống hiến:</strong> Cháy hết mình trong từng phút thi đấu.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand mt-6">Ban điều hành</h2>
          <p>
            Đội bóng được dẫn dắt bởi Bầu <strong>Văn Nhân</strong> cùng các huấn luyện viên
            <strong> Đỗ Đạt</strong> và <strong>Tuấn Vũ</strong>, những người đặt nền móng cho
            chiến thuật và tinh thần thi đấu của CLB.
          </p>
        </article>

        <aside className="space-y-4">
          <div className="card p-5">
            <div className="text-sm text-gray-500">Tên CLB</div>
            <div className="font-bold text-lg">Nhân Đức FC</div>
          </div>
          <div className="card p-5">
            <div className="text-sm text-gray-500">Năm thành lập</div>
            <div className="font-bold text-lg">2022</div>
          </div>
          <div className="card p-5">
            <div className="text-sm text-gray-500">Màu áo truyền thống</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-5 h-5 rounded bg-brand inline-block" /> Xanh đậm
              <span className="w-5 h-5 rounded bg-brand-gold inline-block ml-3" /> Vàng kim
            </div>
          </div>
          <div className="card p-5">
            <div className="text-sm text-gray-500">Liên hệ</div>
            <div className="font-medium">lienhe@nhanducfc.vn</div>
            <div className="text-sm text-gray-500 mt-1">Facebook: /NhanDucFC</div>
          </div>
        </aside>
      </section>
    </>
  );
}
