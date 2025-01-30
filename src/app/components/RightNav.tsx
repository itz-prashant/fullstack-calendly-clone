"use client"
import Link from "next/link";

export default function RightNav({ email }: { email: string }) {

   const hasLoggedOut = location.href.includes('logged-out')

  if (email && !hasLoggedOut) {
    return (
      <nav className="flex items-center gap-4">
        <Link
          href={"/dashboard"}
          className="bg-blue-600 text-white rounded-full py-2 px-4"
        >
          Dashboard
        </Link>
        <a href={"/api/logout"}>Logout</a>
      </nav>
    );
  }else {
    return (
      <nav className="flex items-center gap-4">
        <Link href={"/api/auth"}>Sign in</Link>
        <Link
          href={"/"}
          className="bg-blue-600 text-white rounded-full py-2 px-4"
        >
          Get started
        </Link>
      </nav>
    );
  }
}
