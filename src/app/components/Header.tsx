import Link from "next/link";
import { SiCalendly } from "react-icons/si";

export default function Header() {
  return (
    <header className="flex gap-4 justify-between items-center py-6 px-4 text-gray-700 font-light">
      <div className="flex gap-6 items-center">
        <Link
          href={"/"}
          className="text-blue-600 font-bold text-xl flex items-center gap-2"
        >
          <SiCalendly size={32} />
          Calendly
        </Link>
        <nav className="flex gap-6">
          <Link href={"/features"}>Features</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/pricing"}>Pricing</Link>
        </nav>
      </div>

      <nav className="flex items-center gap-4">
        <Link href={"/pricing"}>Sign in</Link>
        <Link
          href={"/pricing"}
          className="bg-blue-600 text-white rounded-full py-2 px-4"
        >
          Get started
        </Link>
      </nav>
    </header>
  );
}
