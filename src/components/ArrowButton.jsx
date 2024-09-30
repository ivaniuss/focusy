'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";

const ArrowButton = ({ direction, onClick }) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  
  return (
    <Icon
      onClick={onClick}
      className="h-12 w-12 text-gray-200 cursor-pointer hover:text-white transition-colors"
    />
  );
};

export default ArrowButton;
