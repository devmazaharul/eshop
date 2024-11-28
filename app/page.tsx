import Catagory from "@/components/Catagory";
import Newarival from "@/components/Newarival";
import React from "react";

export default function page() {
  return (
    <React.Suspense fallback="loading...">
      <div className="my-10">
        <Catagory />
      </div>
      <div className="my-10">
        <Newarival />
      </div>
    </React.Suspense>
  );
}
