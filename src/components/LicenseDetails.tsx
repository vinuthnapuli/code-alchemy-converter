
import { Clock } from "lucide-react";

export default function LicenseDetails() {
  return (
    <section className="w-full my-12">
      <h2 className="text-lg font-semibold mb-2 text-gray-900">License Details</h2>
      <div className="max-w-2xl bg-white rounded-2xl shadow-sm border p-6">
        <div className="mb-2">
          <div className="text-base text-gray-800 font-medium">Current Plan: Enterprise Pro</div>
          <div className="text-sm text-gray-500">25 seats licensed</div>
        </div>
        <hr className="my-3 border-gray-200" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-5 h-5" />
            <span>Expiry Date</span>
            <span className="ml-2 text-gray-800 font-semibold">December 31, 2025</span>
          </div>
          <span className="bg-blue-50 rounded-full px-3 py-1 text-xs font-medium text-[#2463EB] border border-blue-100">
            245 days remaining
          </span>
        </div>
        <button className="mt-6 px-5 py-2 rounded-lg bg-[#2463EB] text-white font-semibold text-sm hover:bg-[#2453c7] transition w-fit">
          Manage License
        </button>
      </div>
    </section>
  );
}
