"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QuantityControl = () => {
  return (
    <div className="j flex flex-row items-center">
      <Button variant="outline" className="px-2">
        <ChevronLeft />
      </Button>
      <div className="mx-2">1</div>
      <Button variant="outline" className="px-2">
        <ChevronRight />
      </Button>
    </div>
  );
};

export default QuantityControl;
