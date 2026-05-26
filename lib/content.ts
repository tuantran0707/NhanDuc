export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  cover?: string;
};

export const news: NewsPost[] = [
  {
    slug: "khoi-dong-mua-giai-2026",
    title: "Nhân Đức FC khởi động mùa giải 2026 với khí thế mới",
    excerpt:
      "Toàn đội tập trung trở lại sau kỳ nghỉ, sẵn sàng cho các giải phong trào sắp tới với đội hình được bổ sung nhiều gương mặt mới.",
    date: "2026-05-20",
    tag: "Tin đội bóng"
  },
  {
    slug: "ra-mat-ao-dau-moi",
    title: "Ra mắt bộ áo đấu mới phối xanh - vàng truyền thống",
    excerpt:
      "Bộ trang phục thi đấu mới giữ tông màu xanh đậm và vàng kim đặc trưng, tôn vinh tinh thần đoàn kết của Nhân Đức FC.",
    date: "2026-05-10",
    tag: "Trang phục"
  },
  {
    slug: "giao-huu-cuoi-tuan",
    title: "Lịch giao hữu cuối tuần và thông tin tập luyện",
    excerpt:
      "BHL công bố lịch giao hữu hằng tuần và các buổi tập chiến thuật chuẩn bị cho giải đấu phong trào khu vực.",
    date: "2026-05-02",
    tag: "Lịch thi đấu"
  }
];

export type Achievement = {
  year: string;
  title: string;
  detail?: string;
};

export const achievements: Achievement[] = [
  { year: "2025", title: "Vô địch giải bóng đá phong trào khu vực", detail: "Toàn thắng vòng bảng, thắng chung kết 2-1." },
  { year: "2024", title: "Á quân giải Tứ Hùng mở rộng" },
  { year: "2023", title: "Hạng 3 giải Cup giao hữu các CLB" },
  { year: "2022", title: "Thành lập CLB Nhân Đức FC", detail: "Cột mốc khởi đầu hành trình của đội bóng." }
];

export type MatchResult = {
  date: string;
  competition: string;
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
  venue?: string;
};

export const matches: MatchResult[] = [
  {
    date: "2026-05-26",
    competition: "Giao hữu",
    home: "Nhân Đức FC",
    away: "Ghiền FC",
    homeScore: 7,
    awayScore: 0,
    venue: "Sân Nhân Đức"
  },
  {
    date: "2026-05-18",
    competition: "Giải phong trào khu vực",
    home: "Nhân Đức FC",
    away: "Sao Đỏ FC",
    homeScore: 3,
    awayScore: 1,
    venue: "Sân Nhân Đức"
  },
  {
    date: "2026-05-11",
    competition: "Giao hữu",
    home: "Thanh Niên FC",
    away: "Nhân Đức FC",
    homeScore: 2,
    awayScore: 2,
    venue: "Sân Thanh Niên"
  },
  {
    date: "2026-05-04",
    competition: "Cup giao hữu các CLB",
    home: "Nhân Đức FC",
    away: "Bình Minh FC",
    homeScore: 4,
    awayScore: 0,
    venue: "Sân Nhân Đức"
  },
  {
    date: "2026-04-27",
    competition: "Giao hữu",
    home: "Hải Đăng FC",
    away: "Nhân Đức FC",
    homeScore: 1,
    awayScore: 2,
    venue: "Sân Hải Đăng"
  }
];
