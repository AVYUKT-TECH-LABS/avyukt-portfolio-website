import { Star } from "lucide-react";
import React from "react";

function Rating() {
  return (
    <div className="flex flex-row items-center">
      {new Array(5).fill(0).map((item) => (
        <Star fill="#ffbf00" key={item} strokeWidth={0} />
      ))}
    </div>
  );
}

export default Rating;
