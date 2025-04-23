
import { BarChart3, Target, ChartBar, ChartPie } from "lucide-react";
//import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
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
          <div className="border rounded-lg border-gray-200 bg-gray-50 h-[220px] mt-2 p-4">
            <ResponsiveContainer width="100%" height="100%" className="mt-2">
              <BarChart data={leadGenerationData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 10 }} 
                  axisLine={false}
                  tickLine={false}
                  angle={-45}
                  textAnchor="end"
                  height={50}
                />
                <YAxis 
                  tick={{ fontSize: 10 }} 
                  axisLine={false} 
                  tickLine={false}
                  width={30}
                />
{/*                 <Tooltip 
                  content={
                    <ChartTooltipContent nameKey="name" />
                  }
                /> */}
                <Bar 
                  dataKey="leads" 
                  fill="#9b87f5" 
                  radius={[4, 4, 0, 0]} 
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
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
          <div className="border rounded-lg border-gray-200 bg-gray-50 h-[220px] mt-2 p-4 flex flex-col">
            <ResponsiveContainer width="100%" height="100%" className="mt-2">
              <PieChart>
                <Pie
                  data={topicInterestData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  innerRadius={30}
                  stroke="none"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {topicInterestData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                  ))}
                </Pie>
{/*                 <Tooltip 
                  content={
                    <ChartTooltipContent nameKey="name" />
                  }
                /> */}
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center" 
                  wrapperStyle={{fontSize: "10px", marginTop: "10px"}}
                />
              </PieChart>
            </ResponsiveContainer>
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
