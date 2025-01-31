"use server";
import DashboardNav from "@/app/components/DashboardNav";
import { session } from "@/lib/session";
import { EventTypeModel } from "@/models/eventType";
import mongoose from "mongoose";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default async function EventTypesPage() {
  await mongoose.connect(process.env.MONGODB_URI);
  const email = await session().get("email");
  const eventType = await EventTypeModel.find({ email });

  return (
    <div className="w-full">
      <DashboardNav />
      Hello from Event type
      {JSON.stringify(eventType)}
      <br />
      <Link
        href={"/dashboard/event-types/new"}
        className="inline-flex gap-1 items-center underline bg-gray-200 rounded-full px-4 py-2"
      >
        <FaPlus size={14}/>
        New Event type
      </Link>
    </div>
  );
}
