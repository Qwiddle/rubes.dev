import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ProfileHeader } from "@/components/profile-header";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Rubenstein",
  description: "frontend developer. let's build the future.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rubes.dev",
    title: "Andrew Rubenstein - Frontend Developer",
    images: [
      {
        url: "https://rubes.dev/opengraph-image.png",
        width: 481,
        height: 289,
        alt: "Andrew Rubenstein",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex justify-center h-screen">
          <div className="flex flex-col max-w-[1200px] gap-y-4 flex-grow p-4 last:pb-8">
            <ProfileHeader />
            <div className="flex-1">{children}</div>
            <Separator />
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
