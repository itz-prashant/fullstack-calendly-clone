"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
  const pathName = usePathname();
  const isEventTypesPage = pathName.includes("event-types");

  return (
    <div className="flex gap-4 items-center justify-center">
      <Link
        href={"/dashboard"}
        className={`rounded-full ${
          isEventTypesPage ? "bg-gray-200" : "bg-blue-600 text-white"
        } px-4 py-2`}
      >
        Booked events
      </Link>
      <Link
        href={"/dashboard/event-types"}
        className={`rounded-full ${
          isEventTypesPage ? "bg-blue-600 text-white" : "bg-gray-200"
        } px-4 py-2`}
      >
        Events types
      </Link>
    </div>
  );
}
