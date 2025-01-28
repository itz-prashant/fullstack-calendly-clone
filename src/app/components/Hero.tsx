import Link from "next/link";
import { BsPlay } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="text-center mt-18">
      <h1 className="text-7xl font-bold mb-5 text-[#0b3558] leading-tight">
        Calendly makes <br /> scheduling simple
      </h1>
      <p className="text-[#6d86a0] text-xl">
        Calendly’s easy enough for individual users, and powerful enough to meet
        the needs of <br /> enterprise organizations — including 86% of the
        Fortune 500 companies.
      </p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <Link href={'/'} className="bg-black text-white py-2 px-4 rounded-full">Get started for free</Link>
        <Link href={'/'} className="border rounded-full text-gray-700 py-2 px-4  flex items-center gap-1"><BsPlay size={20}/> Watch video</Link>
      </div>
    </section>
  );
}
