
import { Users, CheckCircle, Activity, TrendingUp } from "lucide-react";

export default function LeadSummary() {
  return (
    <section className="w-full mt-10 mb-6">
      <div className="flex gap-5 flex-wrap">
        <div className="flex-1 min-w-[210px] max-w-xs bg-[#15213f] rounded-2xl p-6 flex items-center space-x-4 shadow text-white">
          <div className="bg-[#20336e] rounded-lg p-2">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <div className="text-lg font-bold">865</div>
            <div className="text-xs opacity-80 mt-1">Total Leads</div>
          </div>
        </div>
        <div className="flex-1 min-w-[210px] max-w-xs bg-[#1B4B35] rounded-2xl p-6 flex items-center space-x-4 shadow text-white">
          <div className="bg-[#22724A] rounded-lg p-2">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <div className="text-lg font-bold">229</div>
            <div className="text-xs opacity-80 mt-1">Qualified Leads</div>
          </div>
        </div>
        <div className="flex-1 min-w-[210px] max-w-xs bg-[#fbbf24] rounded-2xl p-6 flex items-center space-x-4 shadow text-white">
          <div className="bg-[#f59e33] rounded-lg p-2">
            <Activity className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xs font-bold mb-1">Key Interactions</div>
            <div className="text-xs leading-snug">
              Webinar Attendance<br />Product Demo Request<br />Whitepaper Download
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-[210px] max-w-xs bg-[#7744d9] rounded-2xl p-6 flex items-center space-x-4 shadow text-white">
          <div className="bg-[#ae82f7] rounded-lg p-2">
            <TrendingUp className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xs font-bold mb-1">Top Interested Topics</div>
            <div className="text-xs leading-snug">
              Product Features<br />Cloud Migration<br />AI Implementation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
