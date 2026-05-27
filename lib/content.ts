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
  cover?: string;
  images?: string[];
};

export const achievements: Achievement[] = [
  {
    year: "2019",
    title: "Giải nhì giải sân 5 tranh cúp office",
    detail: "Thành tích đầu tiên của CLB kể từ khi thành lập.",
    cover: "/NhanDuc-1/2aoboqz7ftlqkdd0nm3iq0f2zjr7ekhdepkbf5dy33.jpg",
    images: [
      "/NhanDuc-1/2aoboqz7ftlqkdd0nm3iq0f2zjr7ekhdepkbf5dy33.jpg",
      "/NhanDuc-1/2aoboqz7fucvjgpjs11fglesaomoctbyeydkuzzo34.jpg"
    ]
  },
  {
    year: "2024",
    title: "Vô địch giải tứ hùng sân 7 mùa thu Đà Nẵng",
    detail: "Đánh bại nhiều đối thủ mạnh để lên ngôi vô địch.",
    cover: "/NhanDuc-2/2aoboqz7hujiwioybsb5svtkkwm9gdcnsptm3nlo40.jpg",
    images: [
      "/NhanDuc-2/2aoboqz7hujiwioybsb5svtkkwm9gdcnsptm3nlo40.jpg",
      "/NhanDuc-2/2aoboqz7huwpurekubzsdhe1lrvuxz5wf24ip94c41.jpg",
      "/NhanDuc-2/2aoboqz7hvziy8ibgfms30u6xnaez8x7avuhk8jw42.jpg"
    ]
  },
  {
    year: "2024",
    title: "Giải nhì giải bóng đá tứ hùng tranh cúp Giấy Thu Ngân",
    detail: "Nỗ lực vượt qua vòng bảng và vào chung kết.",
    cover: "/NhanDuc-3/2aOboQZ7LwUBRdV062JYafa3P75I6ar3p0vGd0zI (1).jpg",
    images: [
      "/NhanDuc-3/2aOboQZ7LwUBRdV062JYafa3P75I6ar3p0vGd0zI (1).jpg"
    ]
  },
  {
    year: "2025",
    title: "Vô địch giải tứ hùng sân 7 tranh cúp Huy Phong",
    detail: "Chiến thắng thuyết phục ở trận chung kết.",
    cover: "/NhanDuc-4/2aoboqz7ncpf9zscnxtrx0bwhzaymp64igc7k5xk37.jpg",
    images: [
      "/NhanDuc-4/2aoboqz7ncpf9zscnxtrx0bwhzaymp64igc7k5xk37.jpg",
      "/NhanDuc-4/2aoboqz7ndlulnseyemtq4h0ebkwzg9hwwvqu7qy38.jpg",
      "/NhanDuc-4/2aoboqz7ne94othefpxqypqtuczpwll53nosunvu39.jpg"
    ]
  },
  {
    year: "2025",
    title: "Vô địch giải Vua phạt đền sân 7 tranh cúp Xeko sport",
    detail: "Xuất sắc vượt qua loạt penalty cân não.",
    cover: "/NhanDuc-5/2aoboqz7opn9tv7m0prgusvzdbrsc1ptf9rzhq7m35.jpg",
    images: [
      "/NhanDuc-5/2aoboqz7opn9tv7m0prgusvzdbrsc1ptf9rzhq7m35.jpg",
      "/NhanDuc-5/2aoboqz7oqjoegovwgzhunzcj0brs9vllaeholue36.jpg"
    ]
  },
  {
    year: "2025",
    title: "Vô địch giải sân 7 tranh cúp Lục Bảo",
    detail: "Phong độ ổn định xuyên suốt giải đấu.",
    cover: "/NhanDuc-6/2aoboqz7q0vxr3k143xbcaodmfhb4cmtedvpizmu9.jpg",
    images: [
      "/NhanDuc-6/2aoboqz7q0vxr3k143xbcaodmfhb4cmtedvpizmu9.jpg",
      "/NhanDuc-6/2aoboqz7q1oanonsgofcx43m5hrdmcmcagkhml4k10.jpg",
      "/NhanDuc-6/2aoboqz7q2hrvvw0txmmvzzkse867qagjpvhmvgc11.jpg"
    ]
  },
  {
    year: "2025",
    title: "Vô địch giải tứ hùng sân 11",
    detail: "Lần đầu đăng quang ở sân 11 người.",
    cover: "/NhanDuc-7/2aoboqz7r7bqkozfpcjtooxtqkxhz9mmtgrpax6e12.jpg",
    images: [
      "/NhanDuc-7/2aoboqz7r7bqkozfpcjtooxtqkxhz9mmtgrpax6e12.jpg",
      "/NhanDuc-7/2aoboqz7r88ygbyxnxvmwm9wvpylpqeuuektx0xw13.jpg",
      "/NhanDuc-7/2aoboqz7r92rypoz79pu9njye3ubqvraowkpvmdy14.jpg",
      "/NhanDuc-7/2aoboqz7raqg5kg2whnhixzwqc4cfalsy3mteuqs15.jpg",
      "/NhanDuc-7/2aoboqz7rbf7yvgg03dvyqlydw7ucyln2cwdmjgm16.jpg"
    ]
  },
  {
    year: "2026",
    title: "Vô địch giải bóng đá mùa xuân",
    detail: "Khởi đầu năm mới bằng chức vô địch.",
    cover: "/NhanDuc-8/2aoboqz7sjgoyzhe6xhffec3lmozajx9c4mtobcw17.jpg",
    images: [
      "/NhanDuc-8/2aoboqz7sjgoyzhe6xhffec3lmozajx9c4mtobcw17.jpg",
      "/NhanDuc-8/2aoboqz7skawrilwroqwlrjjvtj5uip3y7abca8g18.jpg",
      "/NhanDuc-8/2aoboqz7sletg9jrgmczgzup82sosv9pggredkiq19.jpg",
      "/NhanDuc-8/2aoboqz7sn3c8iwyollpvnujobhvxrgmhx6d8aoa20.jpg"
    ]
  },
  {
    year: "2026",
    title: "Vô địch siêu cúp",
    detail: "Chinh phục danh hiệu cao quý nhất mùa giải.",
    cover: "/NhanDuc-9/2aoboqz7t6ht0f471audh7qwg1nohdv42kgijhyq21.jpg",
    images: [
      "/NhanDuc-9/2aoboqz7t6ht0f471audh7qwg1nohdv42kgijhyq21.jpg",
      "/NhanDuc-9/2aoboqz7t7oypzdgppgdegzw72taq5hkq0o0lc0w22.jpg",
      "/NhanDuc-9/2aoboqz7t90t6upibkmrk14bvmenqioa2qsibqhc23.jpg",
      "/NhanDuc-9/2aoboqz7tadbxvzf6oagruxsezfbzknryzqvrc8824.jpg"
    ]
  },
  {
    year: "2026",
    title: "Vô địch giải bóng đá sân 7 khu vực miền Trung",
    detail: "Khẳng định vị thế số 1 khu vực miền Trung.",
    cover: "/NhanDuc-10/2aoboqz7uap0tdoznryywyzt9ttn8jurcm6aiuki29.jpg",
    images: [
      "/NhanDuc-10/2aoboqz7uap0tdoznryywyzt9ttn8jurcm6aiuki29.jpg",
      "/NhanDuc-10/2aoboqz7ubivlds6n0zrwlbwagq8qrufvmmnalem30.jpg",
      "/NhanDuc-10/2aoboqz7ucsh003spncqspwmdzud4t67pyg7hmee31.jpg",
      "/NhanDuc-10/2aoboqz7uepmsc8bzqhooafc0rnz9m9lfjtycbme32.jpg",
      "/NhanDuc-10/2aoboqz7ut9u67vnvrzsyp0u4vsngfhsiudfzg3m25.jpg",
      "/NhanDuc-10/2aoboqz7uuaeefosv8g01gksamesmiqbudzgrs4g26.jpg",
      "/NhanDuc-10/2aoboqz7uvweo5rkzk8rx93pvbhrmkylscyxgqjq27.jpg",
      "/NhanDuc-10/2aoboqz7uxp2jov2ds3imln9nae5mdgyepy9q2zo28.jpg"
    ]
  }
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

export type EditorialPost = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  body: string[];
  date: string;
  cover: string;
  images: string[];
};

export type StandingRow = {
  rank: number;
  team: string;
  played: number;
  win: number;
  draw: number;
  lose: number;
  gfga: string;
  gd: string;
  points: number;
};

export type TournamentUpdate = {
  title: string;
  note: string;
  rankingImage?: string;
  scheduleImage?: string;
  standingsA?: StandingRow[];
  recentResults: string[];
  upcomingMatches: string[];
};

export type TournamentCard = {
  id: string;
  title: string;
  status: "completed" | "ongoing";
  description: string;
  cover: string;
  gallery: string[];
  standings?: StandingRow[];
  results: string[];
  schedule: string[];
  playedFixtures?: Fixture[];
  upcomingFixtures?: Fixture[];
  rankingImage?: string;
  scheduleImage?: string;
};

export type Fixture = {
  home: string;
  away: string;
  homeScore?: number;
  awayScore?: number;
  date?: string;
  venue?: string;
  status: "played" | "upcoming";
};

export const clubLogos: Record<string, string> = {
  "Nhân Đức FC": "/logo.png",
  "Ghiền FC": "/Club/GhienFC.png",
  "Điện Lạnh Đại Lộc FC": "/Club/DienLanhDaiLoc.png",
  "19-5 FC": "/Club/19-5FC.png"
};

export function resolveClubLogo(team: string): string {
  return clubLogos[team] || "/Club/Club.png";
}

export const editorialPosts: EditorialPost[] = [
  {
    slug: "tpg-6v6-care-for-vn-cup-2026",
    title: "Vừa tham dự giải bóng đá TPG6v6 Care For VN CUP 2026",
    summary:
      "Khép lại một giải 6v6 cực khắc nghiệt với lịch 1 ngày 4 trận. Nhân Đức FC đi đến tứ kết và chỉ dừng bước trước nhà vô địch.",
    highlights: [
      "Khép lại giải khắc nghiệt 6v6. Ngày 4 trận. Đá chưa đc 3 phút ae ai cũng xin thay ra để tưới nước vào giày chứ nóng quá. Tưởng lót đường mà ai ngờ đi tới tứ kết và ae chỉ chịu dừng bước trước nhà vô địch. Trải nghiệm sân chơi mới lạ tuyệt vời",
      "Hậu trường giải. Ăn bụi ,ngủ trưa ngoài đường. Ngồi ăn cơm bụi rồi còn tính lỡ đi Sài Gòn thì đem gạo vào trong đó nấu ăn. Kỷ niệm k quên"
    ],
    body: [
      "Nhân Đức FC vừa khép lại hành trình đáng nhớ tại TPG6v6 Care For VN CUP 2026. Đây là một giải đấu có cường độ rất cao khi đội phải đá tới 4 trận trong cùng một ngày.",
      "Nhiệt độ mặt sân cực nóng khiến cầu thủ liên tục xin thay người chỉ sau vài phút thi đấu để làm mát giày. Dù xuất phát với tâm thế học hỏi, toàn đội đã chơi kỷ luật, bền bỉ và tiến thẳng tới vòng tứ kết.",
      "Nhân Đức FC chỉ dừng bước trước đội sau đó lên ngôi vô địch. Kết quả này là cột mốc quan trọng cho hành trình thử sức ở sân chơi 6v6 chuyên nghiệp hơn."
    ],
    date: "2026-05-27",
    cover: "/TPG-6v6-2026/2aOboQY94uSJFKxENVBroXtkWCUPcFjGxfhVcI6a.jpg",
    images: [
      "/TPG-6v6-2026/2aOboQY94uSJFKxENVBroXtkWCUPcFjGxfhVcI6a.jpg",
      "/TPG-6v6-2026/2aOboQYKzyz4QbiZ6VULNw3NDZDEJdFaZYYQWRLU.jpg",
      "/TPG-6v6-2026/2aOboQYOtOYPPoVxUotkECxknYiAMJEbSGqtuYka.jpg",
      "/TPG-6v6-2026/2aOboQYOzXJI79snZ9vXetCtCv0RUFtAm5Vk6zvk.jpg",
      "/TPG-6v6-2026/2aOboQYrx0ZBUSGFV0S4wov1FvrKJqL4HuGBhhpY.jpg",
      "/TPG-6v6-2026/2HGb6EnSRMfslX72PErqSPINx7tJlgT634wy.jpg",
      "/TPG-6v6-2026/2HGb6EnSRMxR9OyeToxwLkfgvnFwZZ0KhsKe.jpg",
      "/TPG-6v6-2026/706397188_26923085707376901_2274783967105802484_n.jpg"
    ]
  },
  {
    slug: "kim-vien-cup-v-2026",
    title: "Sắp tham gia giải S7 Thiện Nguyện - Tranh Cúp Chống Thấm KIM VIEN lần V 2026",
    summary:
      "Nhân Đức FC chuẩn bị bước vào sân chơi S7 thiện nguyện. Đội bóng đã có lịch thi đấu vòng bảng và hình ảnh cúp vô địch.",
    highlights: [
      "Nhân Đức FC thuộc bảng B cùng Du Lịch FC, SOFA - ONETEAM FC và ONIGROUP FC.",
      "Trận mở màn của Nhân Đức FC: 19h30 Thứ 3 ngày 02/06/2026 gặp Du Lịch FC."
    ],
    body: [
      "Nhân Đức FC chuẩn bị tham gia giải bóng đá sân 7 thiện nguyện tranh Cúp Chống Thấm KIM VIEN lần V - 2026.",
      "Ban huấn luyện xác định đây là sân chơi quan trọng để đội tăng tính ổn định chiến thuật, đồng thời lan tỏa tinh thần bóng đá cộng đồng.",
      "Lịch thi đấu vòng bảng đã được công bố, cùng hình ảnh cúp vô địch tạo thêm động lực cho toàn đội trước ngày ra quân."
    ],
    date: "2026-05-27",
    cover: "/S7-ThienNguyen/2aOboQYsNgQuOYf7ko2FAqawRWCzYQAMK0vz9mmu.jpg",
    images: [
      "/S7-ThienNguyen/2aOboQYsNgQuOYf7ko2FAqawRWCzYQAMK0vz9mmu.jpg",
      "/S7-ThienNguyen/2aOboQYucFJqMUV8e4Kesuf8eKWxQ5Ydtqv6IT5c.jpg",
      "/S7-ThienNguyen/2aOboQYucFVDolZ4cHo3gfI17WnsuTCd50siOKWm.jpg"
    ]
  },
  {
    slug: "tran-quyet-dinh-voi-dien-lanh-dai-loc-2026",
    title: "Trận quyết định với Điện Lạnh Đại Lộc FC: thắng là điều bắt buộc",
    summary:
      "Nhân Đức FC bước vào lượt cuối bảng A với áp lực phải thắng để giành vé đi tiếp sau 2 trận trái ngược 0-2 trước Dần FC và 7-0 trước Ghiền FC.",
    highlights: [
      "Trận đấu diễn ra lúc 16h00 ngày 31/05/2026 tại Sân Hòa Xuân, đối thủ là Điện Lạnh Đại Lộc FC.",
      "Sau chiến thắng 7-0 trước Ghiền FC nhưng thất bại 0-2 trước Dần FC, Nhân Đức FC buộc phải thắng ở lượt cuối để tự quyết cơ hội đi tiếp."
    ],
    body: [
      "Giải Sân 11 Thiện Nguyện 2026 đang đi đến thời khắc then chốt với Nhân Đức FC. Sau 2 lượt trận, đội bóng có cùng 3 điểm với Dần FC nhưng vẫn phải cạnh tranh quyết liệt cho tấm vé vào vòng trong.",
      "Chiến thắng 7-0 trước Ghiền FC cho thấy sức tấn công bùng nổ và tinh thần toàn đội đang lên rất cao. Tuy nhiên, trận thua 0-2 trước Dần FC khiến Nhân Đức FC không còn đường lùi ở vòng đấu cuối.",
      "Trước đối thủ mạnh là Điện Lạnh Đại Lộc FC, mục tiêu của Nhân Đức FC là giành trọn 3 điểm. Đây sẽ là trận đấu bản lĩnh, nơi mọi cầu thủ phải giữ được sự tập trung, kỷ luật chiến thuật và khát khao chiến thắng đến phút cuối cùng."
    ],
    date: "2026-05-27",
    cover: "/S11-ThienNguyen/LichThiDau-LuotTran3.jpg",
    images: [
      "/S11-ThienNguyen/LichThiDau-LuotTran3.jpg",
      "/S11-ThienNguyen/BXH.jpg"
    ]
  }
];

export const completedTournaments: TournamentCard[] = [
  {
    id: "tpg6v6-2026",
    title: "TPG6v6 Care For VN CUP 2026",
    status: "completed",
    description:
      "Giải đã thi đấu: Nhân Đức FC đi đến tứ kết và dừng bước trước nhà vô địch sau hành trình đầy nỗ lực.",
    cover: "/TPG-6v6-2026/2aOboQY94uSJFKxENVBroXtkWCUPcFjGxfhVcI6a.jpg",
    gallery: [
      "/TPG-6v6-2026/2aOboQY94uSJFKxENVBroXtkWCUPcFjGxfhVcI6a.jpg",
      "/TPG-6v6-2026/2aOboQYKzyz4QbiZ6VULNw3NDZDEJdFaZYYQWRLU.jpg",
      "/TPG-6v6-2026/2aOboQYOtOYPPoVxUotkECxknYiAMJEbSGqtuYka.jpg",
      "/TPG-6v6-2026/2aOboQYOzXJI79snZ9vXetCtCv0RUFtAm5Vk6zvk.jpg",
      "/TPG-6v6-2026/2aOboQYrx0ZBUSGFV0S4wov1FvrKJqL4HuGBhhpY.jpg",
      "/TPG-6v6-2026/2HGb6EnSRMfslX72PErqSPINx7tJlgT634wy.jpg",
      "/TPG-6v6-2026/2HGb6EnSRMxR9OyeToxwLkfgvnFwZZ0KhsKe.jpg",
      "/TPG-6v6-2026/706397188_26923085707376901_2274783967105802484_n.jpg"
    ],
    standings: [],
    results: [
      "Hành trình vào tới tứ kết và chỉ dừng bước trước đội vô địch.",
      "Ngày thi đấu 4 trận liên tiếp trong điều kiện thời tiết nắng nóng."
    ],
    schedule: [],
    playedFixtures: [
      {
        home: "Nhân Đức FC",
        away: "CLB đối thủ tại tứ kết",
        status: "played",
        date: "TPG6v6 2026",
        venue: "TPG6v6 Care For VN CUP"
      }
    ]
  }
];

export const ongoingTournaments: TournamentCard[] = [
  {
    id: "s11-thien-nguyen-2026",
    title: "Sân 11 Thiện Nguyện 2026",
    status: "ongoing",
    description: "Đang thi đấu vòng bảng, đã có BXH và kết quả 2 lượt trận của Nhân Đức FC.",
    cover: "/S11-ThienNguyen/BXH.jpg",
    gallery: [
      "/S11-ThienNguyen/LichThiDau-LuotTran3.jpg",
      "/S11-ThienNguyen/BXH.jpg"
    ],
    standings: [
      {
        rank: 1,
        team: "Điện Lạnh Đại Lộc FC",
        played: 2,
        win: 2,
        draw: 0,
        lose: 0,
        gfga: "5/1",
        gd: "+4",
        points: 6
      },
      {
        rank: 2,
        team: "Dần FC",
        played: 2,
        win: 1,
        draw: 0,
        lose: 1,
        gfga: "4/4",
        gd: "+0",
        points: 3
      },
      {
        rank: 3,
        team: "Nhân Đức FC",
        played: 2,
        win: 1,
        draw: 0,
        lose: 1,
        gfga: "9/4",
        gd: "+5",
        points: 3
      },
      {
        rank: 4,
        team: "Ghiền FC",
        played: 2,
        win: 0,
        draw: 0,
        lose: 2,
        gfga: "1/10",
        gd: "-9",
        points: 0
      }
    ],
    results: [
      "NHÂN ĐỨC FC 0-2 DẦN FC (Sân Chi Lăng - 17/5/2026)",
      "NHÂN ĐỨC FC 7-0 GHIỀN FC (Sân Hòa Xuân - 24/5/2026)"
    ],
    schedule: [
      "16h00 - Sân Hòa Xuân - 31/05/2026: NHÂN ĐỨC FC vs ĐIỆN LẠNH ĐẠI LỘC FC"
    ],
    playedFixtures: [
      {
        home: "Nhân Đức FC",
        away: "Dần FC",
        homeScore: 0,
        awayScore: 2,
        date: "17/5/2026",
        venue: "Sân Chi Lăng",
        status: "played"
      },
      {
        home: "Nhân Đức FC",
        away: "Ghiền FC",
        homeScore: 7,
        awayScore: 0,
        date: "24/5/2026",
        venue: "Sân Hòa Xuân",
        status: "played"
      }
    ],
    upcomingFixtures: [
      {
        home: "Nhân Đức FC",
        away: "Điện Lạnh Đại Lộc FC",
        date: "16:00 - 31/05/2026",
        venue: "Sân Hòa Xuân",
        status: "upcoming"
      }
    ],
    rankingImage: "/S11-ThienNguyen/BXH.jpg",
    scheduleImage: "/S11-ThienNguyen/LichThiDau-LuotTran3.jpg"
  },
  {
    id: "s7-kim-vien-cup-2026",
    title: "Sân 7 Thiện Nguyện KIM VIEN CUP 2026",
    status: "ongoing",
    description: "Đang chuẩn bị thi đấu. Đã có lịch vòng bảng và thông tin cúp vô địch.",
    cover: "/S7-ThienNguyen/2aOboQYsNgQuOYf7ko2FAqawRWCzYQAMK0vz9mmu.jpg",
    gallery: [
      "/S7-ThienNguyen/2aOboQYsNgQuOYf7ko2FAqawRWCzYQAMK0vz9mmu.jpg",
      "/S7-ThienNguyen/2aOboQYucFJqMUV8e4Kesuf8eKWxQ5Ydtqv6IT5c.jpg",
      "/S7-ThienNguyen/2aOboQYucFVDolZ4cHo3gfI17WnsuTCd50siOKWm.jpg"
    ],
    standings: [
      {
        rank: 1,
        team: "Du Lịch FC",
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        gfga: "0/0",
        gd: "0",
        points: 0
      },
      {
        rank: 2,
        team: "SOFA - ONETEAM FC",
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        gfga: "0/0",
        gd: "0",
        points: 0
      },
      {
        rank: 3,
        team: "ONIGROUP FC",
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        gfga: "0/0",
        gd: "0",
        points: 0
      },
      {
        rank: 4,
        team: "Nhân Đức FC",
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        gfga: "0/0",
        gd: "0",
        points: 0
      }
    ],
    results: [
      "Chưa thi đấu - đang chờ lượt trận mở màn."
    ],
    schedule: [
      "19:30 - Thứ 3, 02/06/2026: Nhân Đức FC vs Du Lịch FC",
      "Lịch các lượt tiếp theo: cập nhật theo BTC giải KIM VIEN CUP."
    ],
    upcomingFixtures: [
      {
        home: "Nhân Đức FC",
        away: "Du Lịch FC",
        date: "19:30 - Thứ 3, 02/06/2026",
        status: "upcoming"
      },
      {
        home: "Nhân Đức FC",
        away: "SOFA - ONETEAM FC",
        date: "Theo lịch BTC",
        status: "upcoming"
      },
      {
        home: "Nhân Đức FC",
        away: "ONIGROUP FC",
        date: "Theo lịch BTC",
        status: "upcoming"
      }
    ],
    rankingImage: "/S7-ThienNguyen/2aOboQYucFJqMUV8e4Kesuf8eKWxQ5Ydtqv6IT5c.jpg",
    scheduleImage: "/S7-ThienNguyen/2aOboQYucFVDolZ4cHo3gfI17WnsuTCd50siOKWm.jpg"
  }
];

export const activeTournament: TournamentUpdate = {
  title: "Giải Bóng Đá Thiện Nguyện sân 11 2026",
  note: "Đã cập nhật BXH bảng A theo ảnh mới nhất và kết quả các trận của Nhân Đức FC.",
  rankingImage: "/S11-ThienNguyen/BXH.jpg",
  scheduleImage: "/S11-ThienNguyen/LichThiDau-LuotTran3.jpg",
  standingsA: [
    {
      rank: 1,
      team: "Điện Lạnh Đại Lộc FC",
      played: 2,
      win: 2,
      draw: 0,
      lose: 0,
      gfga: "5/1",
      gd: "+4",
      points: 6
    },
    {
      rank: 2,
      team: "Dần FC",
      played: 2,
      win: 1,
      draw: 0,
      lose: 1,
      gfga: "4/4",
      gd: "+0",
      points: 3
    },
    {
      rank: 3,
      team: "Nhân Đức FC",
      played: 2,
      win: 1,
      draw: 0,
      lose: 1,
      gfga: "9/4",
      gd: "+5",
      points: 3
    },
    {
      rank: 4,
      team: "Ghiền FC",
      played: 2,
      win: 0,
      draw: 0,
      lose: 2,
      gfga: "1/10",
      gd: "-9",
      points: 0
    }
  ],
  recentResults: [
    "NHÂN ĐỨC FC 0-2 DẦN FC (Sân Chi Lăng - 17/5/2026)",
    "NHÂN ĐỨC FC 7-0 GHIỀN FC (Sân Hòa Xuân - 24/5/2026)"
  ],
  upcomingMatches: [
    "NHÂN ĐỨC FC vs ĐIỆN LẠNH ĐẠI LỘC FC (Chưa thi đấu)"
  ]
};

export const matches: MatchResult[] = [
  {
    date: "2026-05-24",
    competition: "Giải Bóng Đá Thiện Nguyện sân 11 2026",
    home: "Nhân Đức FC",
    away: "Ghiền FC",
    homeScore: 7,
    awayScore: 0,
    venue: "Sân Hòa Xuân"
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
