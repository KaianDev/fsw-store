import { ReactNode } from "react";
import { Badge } from "./badge";

const BadgeTitle = ({ children }: { children: ReactNode }) => {
  return (
    <Badge
      variant="outline"
      className=" flex w-max gap-1 border-2 border-primary px-2 py-1 uppercase"
    >
      {children}
    </Badge>
  );
};

export default BadgeTitle;
