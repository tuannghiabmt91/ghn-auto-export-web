import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GHN Auto Export - Báo Cáo Tự Động",
  description: "Công cụ tự động tải và đồng bộ báo cáo nội bộ GHN lên Google Sheets qua Telegram Bot",
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
