# Nhân Đức FC - Website chính thức

Trang web giới thiệu CLB bóng đá **Nhân Đức FC**, xây dựng bằng **Next.js 14 (App Router)** + **TailwindCSS**, deploy miễn phí trên **Vercel**.

## Các trang

- `/` Trang Chủ - Tin tức, blog đội bóng, thành tích nổi bật
- `/cau-thu` Cầu Thủ - Danh sách cầu thủ (số áo, vị trí, size, ngày sinh)
- `/thanh-tich` Thành Tích - Hành trình và danh hiệu của CLB
- `/ket-qua` Kết Quả Thi Đấu - Tỉ số các trận đấu
- `/ve-chung-toi` Về Chúng Tôi - Giới thiệu CLB

## Chạy thử local

Yêu cầu: **Node.js 18+**.

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Cập nhật nội dung

- Cầu thủ: sửa file [lib/players.ts](lib/players.ts)
- Tin tức / Thành tích / Kết quả: sửa file [lib/content.ts](lib/content.ts)
- Ảnh: đặt vào thư mục [public/](public)

## Deploy lên Vercel

1. Push repo lên GitHub.
2. https://vercel.com → **Add New Project** → import repo → **Deploy**.

Vercel tự nhận diện Next.js ở root và build. Mỗi lần `git push`, Vercel tự deploy lại.
