import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GHN Auto Export",
  description: "Công cụ hỗ trợ tự động xuất báo cáo Tồn đọng Lấy-Giao-Trả và Tồn đọng Luân chuyển theo khung giờ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
