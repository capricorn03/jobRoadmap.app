import React from "react";
import { currentUser } from "@clerk/nextjs";
import { getUser, createUser } from "@/lib/actions/user";
import Link from "next/link";

const Page: React.FC = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not found");
    }

    const userId = user.id;
    const existingUser = await getUser(userId);
    if (!existingUser) {
      const email =
        user.emailAddresses && user.emailAddresses.length > 0
          ? user.emailAddresses[0].emailAddress
          : "";
      const newUser = {
        userId: user.id,
        username: user.username ?? "",
        name: user.firstName ?? "",
        email: email,
      };
      await createUser(newUser);
    }

    return (
      <React.Fragment>
        <div>
          <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold text-center mb-8">
              Welcome to Job-Portal App
            </h1>
            <p className="text-xl text-center text-gray-600 mb-8">
              Empowering Job seekers with Roadmaps and curated job listings
            </p>
            {/* Roadmap Section */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Roadmap
              </h2>
              {/* Placeholder for roadmap */}
              <div className="text-gray-600">
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
                    AI
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
                    Cybersecurity
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200  p-2 rounded-lg hover:font-bold"
                    href="/frontend"
                  >
                    Blockchain Developer
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200  p-2 rounded-lg hover:font-bold"
                    href="/frontend"
                  >
                    Mobile Development
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200  p-2 rounded-lg hover:font-bold"
                    href="/frontend"
                  >
                    Data Scientist
                  </Link>
                </div>
              </div>
            </div>
            {/* Trending Jobs Section */}
            <div className="p-6 bg-white shadow-md rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Trending Jobs
              </h2>
              {/* Placeholder for trending jobs */}
              <div className="text-gray-600">
                <div className="flex gap-2 my-2 flex-wrap">
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/roadmap/frontend"
                  >
                    Data Architect
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/roadmap/backend"
                  >
                    Full stack Developer
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/data-science"
                  >
                    Data Science
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/web-developer"
                  >
                    Web Developer
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/ui-designer"
                  >
                    UI Designer
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/data-analyst"
                  >
                    Data Analyst
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/database-administrator"
                  >
                    Database Administrator
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/engineer"
                  >
                    Engineer
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/information-security-analyst"
                  >
                    Information Security Analyst
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/network-engineer"
                  >
                    Network Engineer
                  </Link>
                  <Link
                    className="bg-gray-200 hover:bg-slate-200 p-2 rounded-lg hover:font-bold"
                    href="/software-developer"
                  >
                    Software Developer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } catch (error) {
    console.error("Error fetching or creating user:", error);
    return <div>An error occurred while processing your request.</div>;
  }
};

export default Page;
