
import { Calendar, Users } from "lucide-react";

function StatusBadge({ status }: { status: "In Progress" | "Upcoming" | "Completed" }) {
  const colorMap = {
    "In Progress": "bg-[#2463EB]/10 text-[#2463EB]",
    "Upcoming": "bg-yellow-100 text-yellow-800",
    "Completed": "bg-green-100 text-green-800",
  };
  return (
    <span className={`px-2.5 py-0.5 text-xs rounded-full font-medium ${colorMap[status]}`}>
      {status}
    </span>
  );
}

const campaigns = [
  {
    title: "Product Launch Webinar",
    date: "Mar 15, 2025 - Apr 30, 2025",
    leads: 342,
    status: "In Progress",
    button: "View leads",
    buttonActive: true,
  },
  {
    title: "Summer Software Conference",
    date: "Jun 10, 2025 - Jun 12, 2025",
    leads: 0,
    status: "Upcoming",
    button: "View leads",
    buttonActive: false,
  },
  {
    title: "Digital Transformation Expo",
    date: "Jan 20, 2025 - Feb 10, 2025",
    leads: 523,
    status: "Completed",
    button: "View leads",
    buttonActive: true,
  },
];

export default function RecentCampaigns() {
  return (
    <section className="w-full mt-8">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-900">Recent Campaigns</h2>
        <button className="flex items-center px-4 py-2 rounded bg-white border text-[#2463EB] border-[#2463EB]/50 shadow-sm text-sm font-medium hover:bg-gray-50">
          <span className="mr-1">Filter</span>
        </button>
      </div>
      <div className="flex gap-6 flex-wrap">
        {campaigns.map((c, idx) => (
          <div key={c.title} className="flex-1 min-w-[300px] max-w-sm rounded-2xl border bg-white shadow-sm px-6 py-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-800 text-base">{c.title}</h3>
              <StatusBadge status={c.status as any} />
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-3 gap-3">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{c.date}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1 gap-3">
              <Users className="w-4 h-4 mr-1" />
              <span>{c.leads} total leads</span>
            </div>
            <div className="flex-grow" />
            <button
              className={`mt-6 flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium text-sm ${
                c.buttonActive ? "bg-[#2463EB] text-white hover:bg-[#2453c7]" : "bg-gray-100 text-gray-400 cursor-not-allowed"
              } transition shadow`}
              disabled={!c.buttonActive}
            >
              {c.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
