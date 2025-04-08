import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <button className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center text-center text-black font-bold tracking-widest">
          <span>
            WATCH
            <br />
            FULL
            <br />
            MOVIE
          </span>
        </button>
      </div>

      <div className="w-1/2 bg-white flex items-center justify-center">
        <Link href="/bricks">
          <button className="w-40 h-40 rounded-full bg-gray shadow-md flex items-center justify-center text-center text-black font-bold tracking-widest">
            <span>
              EXPLORE
              <br />
              MATERIAL
              <br />
              STORIES
            </span>
          </button>
        </Link>
      </div>
    </main>
  );
}
