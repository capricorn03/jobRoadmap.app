import { SignIn } from "@clerk/nextjs";
import { Fan } from "lucide-react";

export default function Page() {
  return (
    <div
      style={{
        backgroundImage: `url('/bgImage.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex justify-center ">
            <Fan className="w-20 h-20" />
          </div>
          <div className="flex justify-center">
            <p className="font-bold text-lg text-color-">Job Recommendation App</p>
          </div>
          <div className="w-50 mb-14 md:flex">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
