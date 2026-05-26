import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nhân Đức FC - CLB Bóng Đá Nhân Đức",
  description:
    "Trang chủ chính thức của CLB bóng đá Nhân Đức FC - Tin tức, cầu thủ, thành tích và kết quả thi đấu.",
  icons: { icon: "/logo.png" }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
