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
            Công cụ mạnh mẽ kết hợp Chrome Extension và Telegram Bot để tự động trích xuất dữ liệu, đẩy lên Google Sheets mà không cần thao tác thủ công mỗi ngày.
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
              <h3 className="text-xl font-bold mb-3">Lên lịch tải tự động</h3>
              <p className="text-slate-600">Extension tích hợp tính năng Alarm (10:00, 15:00, 23:55) tự động mở báo cáo và click nút Tải Xuống mà bạn không cần phải canh giờ.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Bot size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Telegram Bot Lắng nghe</h3>
              <p className="text-slate-600">Bot chạy ngầm luôn sẵn sàng bắt link tải từ GHN.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Table2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Đồng bộ Google Sheets</h3>
              <p className="text-slate-600">Dữ liệu được bóc tách và đẩy lên GSheets realtime.</p>
            </div>
            <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Xử lý ngầm hiệu suất cao</h3>
              <p className="text-slate-600">Sử dụng Telethon và kỹ thuật xử lý luồng thông minh, chỉ mất chưa tới 5 giây để bóc tách một file Excel nặng hàng nghìn dòng.</p>
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

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              
              <div className="md:flex items-center justify-between gap-8 w-full">
                <div className="md:w-1/2 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Bước 1: Cài đặt Chrome Extension</h3>
                  <p className="text-slate-600">Cài đặt công cụ tự động tải báo cáo trên trình duyệt của bạn.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white -translate-x-1/2 flex items-center justify-center text-white font-bold text-sm z-10">1</div>
                <div className="md:w-1/2 bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <ol className="list-decimal pl-4 space-y-3 text-slate-700">
                    <li>Tải xuống file <code className="bg-slate-200 px-1 py-0.5 rounded text-sm">GHN_Auto_Export_Extension.zip</code></li>
                    <li>Giải nén file vào một thư mục trên máy</li>
                    <li>Mở Chrome, truy cập <code className="bg-slate-200 px-1 py-0.5 rounded text-sm text-blue-600">chrome://extensions/</code></li>
                    <li>Bật <strong>Developer mode</strong> ở góc trên bên phải</li>
                    <li>Nhấn <strong>Load unpacked</strong> và chọn thư mục vừa giải nén</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between gap-8 w-full flex-row-reverse">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Bước 2: Khởi chạy Telegram Bot</h3>
                  <p className="text-slate-600">Chạy script Python để lắng nghe file Excel gửi về.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white -translate-x-1/2 flex items-center justify-center text-white font-bold text-sm z-10">2</div>
                <div className="md:w-1/2 bg-slate-50 p-6 rounded-xl border border-slate-200 text-left">
                  <p className="text-sm font-semibold mb-3">Tạo file .env chứa thông tin:</p>
                  <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
<code>TELEGRAM_API_ID=your_api_id
TELEGRAM_API_HASH=your_api_hash
WEB_APP_URL=your_google_script_url</code>
                  </pre>
                  <p className="text-sm font-semibold mb-3">Chạy lệnh khởi động:</p>
                  <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
<code>pip install -r requirements.txt
python main.py</code>
                  </pre>
                </div>
              </div>
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
