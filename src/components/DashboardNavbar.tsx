
import { Search, Bell, Cog, UserCircle } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b px-8 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-[#2463EB]">Campaign</span>
        <span className="text-2xl font-bold text-gray-900">Manager</span>
      </div>
      <div className="flex-1 max-w-lg ml-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            placeholder="Search campaigns..."
            className="w-full pl-10 pr-4 py-2 rounded border border-gray-200 bg-gray-50 focus:border-[#2463EB] focus:ring-2 focus:ring-[#2463EB]/10 outline-none text-sm"
          />
        </div>
      </div>
      <div className="flex items-center space-x-5 ml-8">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell className="w-6 h-6 text-gray-700" />
        </button>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Cog className="w-6 h-6 text-gray-700" />
        </button>
        <button className="rounded-full p-1 border-2 border-gray-200">
          <UserCircle className="w-8 h-8 text-gray-400" />
        </button>
      </div>
    </nav>
  );
}
