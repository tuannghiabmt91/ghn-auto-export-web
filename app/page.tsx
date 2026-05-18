import React from 'react';
import { Download, Bot, Table2, Rocket, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
            <Rocket size={16} />
            <span>Phiên bản 1.1 mới nhất</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Tự động hóa báo cáo <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              GHN Nhanh Chóng
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tiện ích mở rộng Chrome thông minh giúp bạn tự động hóa việc xuất báo cáo GHN theo lịch trình tự chọn. Dữ liệu sẽ tự động được gửi về Telegram của bạn qua GHN Bot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#install" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors w-full sm:w-auto">
              Cài đặt ngay <ArrowRight size={18} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 rounded-lg font-semibold transition-colors w-full sm:w-auto">
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tính năng nổi bật</h2>
            <p className="text-slate-600">Được thiết kế để tối ưu hóa quy trình làm việc của Area Manager</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Tùy chỉnh lịch chạy tự động</h3>
              <p className="text-slate-600">Thêm, xóa và quản lý các mốc thời gian xuất báo cáo dễ dàng ngay trên giao diện Popup. Đến giờ, hệ thống sẽ tự động lấy dữ liệu mà bạn không cần phải canh.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Kích hoạt xuất ngay</h3>
              <p className="text-slate-600">Cần dữ liệu gấp? Chỉ một nút bấm "Kích hoạt xuất ngay" để khởi chạy ngay lập tức.</p>
            </div>
            <div className="md:col-span-3 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Bot size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Nhận dữ liệu qua Telegram GHN Bot</h3>
              <p className="text-slate-600">Ngay sau khi tự động tải xuống, báo cáo sẽ được hệ thống trả thẳng về Telegram của bạn thông qua GHN Bot, sẵn sàng để sử dụng mọi lúc mọi nơi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="install" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hướng dẫn Cài đặt & Sử dụng</h2>
            <p className="text-slate-600">Làm theo 2 bước đơn giản dưới đây để tự động hóa hoàn toàn</p>
          </div>

          <div className="space-y-12 max-w-2xl mx-auto">
            {/* Step 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-2xl font-bold">Cài đặt Chrome Extension</h3>
              </div>
              <ol className="list-decimal pl-5 space-y-4 text-slate-700 text-lg">
                <li>Tải xuống file <code className="bg-slate-200 px-2 py-1 rounded text-sm font-mono text-orange-600">ghn_extension.zip</code></li>
                <li>Giải nén file vào một thư mục cố định trên máy tính của bạn</li>
                <li>Mở Google Chrome, truy cập vào đường dẫn <code className="bg-slate-200 px-2 py-1 rounded text-sm text-blue-600">chrome://extensions/</code></li>
                <li>Bật chế độ <strong>Developer mode</strong> (Chế độ dành cho nhà phát triển) ở góc trên bên phải</li>
                <li>Nhấn nút <strong>Load unpacked</strong> (Tải tiện ích đã giải nén) và chọn thư mục vừa giải nén</li>
                <li>Ghim (Pin) tiện ích lên thanh công cụ để dễ dàng mở và cài đặt lịch chạy!</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck size={24} className="text-orange-500" />
            <span className="font-semibold text-slate-200">GHN Automation Tool</span>
          </div>
          <p>© 2026 GHN Automation. Xây dựng để tối ưu vận hành.</p>
        </div>
      </footer>
    </main>
  );
}
