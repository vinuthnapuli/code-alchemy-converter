
import { Users, CheckCircle, Activity, TrendingUp } from "lucide-react";

export default function LeadSummary() {
  return (
    <section className="w-full mt-10 mb-6">
      {/* Make grid responsive and with 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Total Leads */}
        <div className="bg-[#15213f] rounded-2xl p-6 flex items-center space-x-4 shadow text-white">
          <div className="bg-[#20336e] rounded-lg p-2">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <div className="text-lg font-bold">865</div>
            <div className="text-xs opacity-80 mt-1">Total Leads</div>
          </div>
        </div>

        {/* Qualified Leads (to 5 with high engagement) */}
        <div className="bg-[#1B4B35] rounded-2xl p-6 flex items-center space-x-4 shadow text-white">
          <div className="bg-[#22724A] rounded-lg p-2">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <div className="text-lg font-bold">Top 5</div>
            <div className="text-xs opacity-80 mt-1">Qualified Leads w/ High Engagement</div>
            <ul className="text-xs mt-2 space-y-0.5 list-disc list-inside opacity-90">
              <li>Jane Smith</li>
              <li>Robert King</li>
              <li>Maria Gomez</li>
              <li>Jun Takahashi</li>
              <li>Emily Wang</li>
            </ul>
          </div>
        </div>

        {/* Campaign Interactions (key interactions) */}
        <div className="bg-[#fbbf24] rounded-2xl p-6 flex items-center space-x-4 shadow text-white">
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

        {/* Top Interested Topics */}
        <div className="bg-[#7744d9] rounded-2xl p-6 flex items-center space-x-4 shadow text-white">
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
