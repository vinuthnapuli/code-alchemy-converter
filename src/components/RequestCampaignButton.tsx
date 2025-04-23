
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RequestCampaignButton() {
  return (
    <Button variant="default" size="lg" className="mt-8 mx-auto flex gap-2">
      <Plus className="w-5 h-5" />
      Request New Campaign
    </Button>
  );
}
