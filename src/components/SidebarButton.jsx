// SidebarButton.jsx
import { Button } from "@/components/ui/button";

export const SidebarButton = ({ IconComponent, onClick }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="sidebar-button text-gray-200 hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-white"
    >
      <IconComponent className="h-6 w-6" />
    </Button>
  );
};
