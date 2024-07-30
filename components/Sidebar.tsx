"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
// #3A3C40
const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "bg-[#746F62] rounded-xl" : "";
  };
  return (
    <aside
      className=" top-0 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-primary m-2 rounded-xl"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto ">
        <h1 className="text-center text-xl my-5">Monk Mode</h1>

        <ul className="flex flex-col justify-start h-min p-1 space-y-2 font-medium  rounded-xl">
          <li>
            <Link
              href="/"
              className={`flex items-center p-2 rounded-lg  hover:bg-secondary hover:rounded-xl  group ${isActive(
                "/"
              )}`}
            >
              <Image src="/" width={15} height={15} alt="l" />
              <span className="ms-3">Daily Tracker</span>
            </Link>
          </li>
          <li>
            <Link
              href="/habitlog"
              className={`flex items-center p-2 rounded-lg  hover:bg-secondary hover:rounded-xl  group ${isActive(
                "/habitlog"
              )}`}
            >
              <Image src="/" width={15} height={15} alt="l" />
              <span className="ms-3">Habit Log</span>
            </Link>
          </li>
          <li>
            <Link
              href="/summary"
              className={`flex items-center p-2 rounded-lg  hover:bg-secondary hover:rounded-xl  group ${isActive(
                "/summary"
              )}`}
            >
              <Image src="/" width={15} height={15} alt="l" />
              <span className="ms-3">Summary</span>
            </Link>
          </li>
          {/* Add more list items for Users, Products, Sign In, and Sign Up */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
