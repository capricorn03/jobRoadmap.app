import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="text-2xl font-bold">Roadmaps</div>
      <div className=" flex gap-2 my-2 flex-wrap">
        <Link
          className="bg-gray-200 hover:bg-slate-200  p-2 rounded-lg hover:font-bold"
          href="/roadmap/frontend"
        >
          Frontend
        </Link>
        <Link
          className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
          href="/roadmap/backend"
        >
          Backend
        </Link>
        <Link
          className="bg-gray-200 hover:bg-slate-200  p-2 rounded-lg hover:font-bold"
          href="/frontend"
        >
          Ai
        </Link>
        <Link
          className="bg-gray-200 hover:bg-slate-200  p-2 rounded-lg hover:font-bold"
          href="/frontend"
        >
          DevOps
        </Link>
        <Link
          className="bg-gray-200 hover:bg-slate-200  p-2 rounded-lg hover:font-bold"
          href="/frontend"
        >
          MLOps
        </Link>
        <Link
          className="bg-gray-200 hover:bg-slate-200  p-2 rounded-lg hover:font-bold"
          href="/frontend"
        >
          Blockchain
        </Link>
        <Link
          className="bg-gray-200 hover:bg-slate-200  p-2 rounded-lg hover:font-bold"
          href="/frontend"
        >
          Mobile Devlopment
        </Link>
        <Link
          className="bg-gray-200 hover:bg-slate-200  p-2 rounded-lg hover:font-bold"
          href="/frontend"
        >
          Data Scientist
        </Link>
      </div>
    </>
  );
};

export default page;
