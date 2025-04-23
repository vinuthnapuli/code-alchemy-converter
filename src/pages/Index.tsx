
import DashboardNavbar from "@/components/DashboardNavbar";
import RecentCampaigns from "@/components/RecentCampaigns";
import LeadSummary from "@/components/LeadSummary";
import KeyMetrics from "@/components/KeyMetrics";
import LicenseDetails from "@/components/LicenseDetails";
import RequestCampaignButton from "@/components/RequestCampaignButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative flex flex-col font-sans">
      <DashboardNavbar />
      {/* Welcome Banner */}
      <div className="w-full bg-[#12203D] text-white pt-9 pb-8 md:pt-12 md:pb-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Alex!</h1>
            <div className="text-lg text-blue-100/90 mb-3">
              Here's an overview of your recent campaigns and lead performance.
            </div>
          </div>
          <button className="mt-4 md:mt-0 px-5 py-2.5 bg-[#2463EB] text-white rounded-lg font-semibold text-sm shadow-lg hover:bg-[#2453c7] transition">
            View All Campaigns
          </button>
        </div>
      </div>
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8">
        <RecentCampaigns />
        <LeadSummary />
        <KeyMetrics />
        <LicenseDetails />
      </main>
      <RequestCampaignButton />
    </div>
  );
};

export default Index;
