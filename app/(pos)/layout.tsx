import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Clock from "@/components/clock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Point of Sale",
  description: "Dashboard for all your analytics and management needs",
};

export default function POSLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen bg-[url(/assets/images/background2.jpg)] bg-cover bg-no-repeat">
      <nav className="w-full backdrop-blur-md flex flex-row items-center px-10 py-5 sticky top-0 justify-between">
        <div className="flex flex-col">
          <h1 className="text-black font-bold text-lg">Point of Sale</h1>
          <span className="text-gray-600 font-semibold">
            Your preferred sales management system
          </span>
        </div>
        <Clock />
      </nav>
      {children}
    </div>
  );
}
