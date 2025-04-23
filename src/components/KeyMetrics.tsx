
import { BarChart3, Target, ChartBar, ChartPie } from "lucide-react";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import React from "react";

const leadGenerationData = [
  { name: "Email Blast", leads: 205 },
  { name: "Webinar", leads: 320 },
  { name: "LinkedIn Outreach", leads: 160 },
  { name: "Referral", leads: 110 },
];

const topicInterestData = [
  { name: "Product Features", value: 380 },
  { name: "Cloud Migration", value: 160 },
  { name: "AI Implementation", value: 220 },
];

const pieColors = ["#9b87f5", "#f59e33", "#22724A"];

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
          <div className="border rounded-lg border-dashed border-gray-200 bg-gray-50 h-[170px] mt-2 flex items-center justify-center text-gray-400 text-sm">
            <ChartContainer
              config={{
                leads: { label: "Leads", icon: ChartBar, color: "#9b87f5" },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leadGenerationData}>
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} />
                  <YAxis tick={{ fontSize: 12 }} axisLine={false} width={30} />
                  <Bar dataKey="leads" fill="#9b87f5" radius={[6, 6, 0, 0]} />
                  <ChartTooltipContent nameKey="name" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
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
          <div className="border rounded-lg border-dashed border-gray-200 bg-gray-50 h-[170px] mt-2 flex items-center justify-center text-gray-400 text-sm">
            <ChartContainer
              config={{
                "Product Features": {
                  label: "Product Features",
                  icon: ChartPie,
                  color: pieColors[0],
                },
                "Cloud Migration": {
                  label: "Cloud Migration",
                  icon: ChartPie,
                  color: pieColors[1],
                },
                "AI Implementation": {
                  label: "AI Implementation",
                  icon: ChartPie,
                  color: pieColors[2],
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={topicInterestData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={48}
                    innerRadius={24}
                    stroke="none"
                  >
                    {topicInterestData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                    ))}
                  </Pie>
                  <ChartTooltipContent nameKey="name" />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
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
