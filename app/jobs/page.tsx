import React from "react";
import Highpaying from "@/components/jobs/Highpaying";
import Trending from "@/components/jobs/Trending";

const Page = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Top Jobs to Apply For</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Trending Jobs</h2>
          <Trending />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">High Paying Jobs</h2>
          <Highpaying />
        </div>
      </div>
    </div>
  );
};

export default Page;
