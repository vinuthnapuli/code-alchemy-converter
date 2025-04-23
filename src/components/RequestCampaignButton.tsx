
import { PlusCircle } from "lucide-react";

export default function RequestCampaignButton() {
  return (
    <button className="fixed bottom-6 left-6 z-50 px-6 py-3 flex items-center gap-2 bg-[#2463EB] hover:bg-[#1340a5] shadow-xl text-white font-semibold rounded-full text-base transition">
      <PlusCircle className="w-6 h-6" />
      Request New Campaign
    </button>
  );
}
