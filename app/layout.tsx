import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Channel Cost Calculator",
  description: "Calculate monthly cost per Slack channel member. Identify expensive low-value channels and optimize your Slack spend."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="825fcceb-a91f-479b-b547-fbb96f83a2c1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
