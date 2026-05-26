export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 mt-16">
      <div className="container-page py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 font-bold text-lg text-white">
            <span className="w-14 h-14 rounded-full bg-brand-cream ring-2 ring-brand-gold overflow-hidden flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Nhân Đức FC"
                className="w-full h-full object-contain scale-[0.92]"
              />
            </span>
            <span className="text-brand-gold">Nhân Đức FC</span>
          </div>
          <p className="mt-3 text-sm">
            Câu lạc bộ bóng đá Nhân Đức FC - Đoàn kết, Kỷ luật, Cống hiến.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Liên kết nhanh</h4>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:text-brand-gold" href="/">Trang Chủ</a></li>
            <li><a className="hover:text-brand-gold" href="/cau-thu">Cầu Thủ</a></li>
            <li><a className="hover:text-brand-gold" href="/thanh-tich">Thành Tích</a></li>
            <li><a className="hover:text-brand-gold" href="/ket-qua">Kết Quả Thi Đấu</a></li>
            <li><a className="hover:text-brand-gold" href="/ve-chung-toi">Về Chúng Tôi</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Liên hệ</h4>
          <ul className="space-y-1 text-sm">
            <li>Email: lienhe@nhanducfc.vn</li>
            <li>Facebook: /NhanDucFC</li>
            <li>Địa chỉ: Việt Nam</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-4 text-xs text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Nhân Đức FC. All rights reserved.</span>
          <span>Built with Next.js · Hosted on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
