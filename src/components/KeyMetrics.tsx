
import { BarChart3, Target } from "lucide-react";

export default function KeyMetrics() {
  return (
    <section className="w-full mt-4 mb-10">
      <div className="flex items-start gap-6 flex-wrap">
        <div className="flex-1 min-w-[320px] max-w-lg bg-white border rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2 font-semibold text-gray-800 text-base">
              <BarChart3 className="w-5 h-5 text-gray-500" />
              Lead Generation by Campaign
            </div>
            {/* Pin/Settings Icon */}
            <button className="text-gray-400 hover:text-[#2463EB]">
              <Target className="w-5 h-5" />
            </button>
          </div>
          <div className="border rounded-lg border-dashed border-gray-200 bg-gray-50 h-[110px] mt-2 flex items-center justify-center text-gray-400 text-sm">
            Graph visualization would appear here
          </div>
        </div>
        <div className="flex-1 min-w-[320px] max-w-lg bg-white border rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2 font-semibold text-gray-800 text-base">
              <Target className="w-5 h-5 text-gray-500" />
              Topic Interest Breakdown
            </div>
            <button className="text-gray-400 hover:text-[#2463EB]">
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>
          <div className="border rounded-lg border-dashed border-gray-200 bg-gray-50 h-[110px] mt-2 flex items-center justify-center text-gray-400 text-sm">
            Graph visualization would appear here
          </div>
        </div>
        <div className="flex-grow"/>
        <button className="px-4 py-2 border rounded font-medium text-sm bg-white border-gray-200 shadow-sm mt-2 hover:bg-gray-50 w-fit">
          Customize Dashboard
        </button>
      </div>
    </section>
  );
}
