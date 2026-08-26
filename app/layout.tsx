import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shalomhosts.xyz"),

  title: {
    default: "Shalom Adebola | The Executive's Host",
    template: "%s | Shalom Adebola",
  },

  description:
    "Shalom Adebola is an executive host based in Lagos, Nigeria, hosting corporate events, technology conferences, leadership gatherings, panels, awards and more.",

  keywords: [
    "Shalom Adebola",
    "event host Lagos",
    "MC Lagos",
    "corporate event host Nigeria",
    "executive event host",
    "conference host Nigeria",
    "technology conference host",
    "event moderator Nigeria",
    "corporate MC Nigeria",
  ],

  authors: [
    {
      name: "Shalom Adebola",
    },
  ],

  creator: "Shalom Adebola",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://shalomhosts.xyz",
    siteName: "Shalom Adebola",
    title: "Shalom Adebola | The Executive's Host",
    description:
      "An executive host for corporate events, technology conferences, leadership gatherings, panels and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shalom Adebola — Executive Host & Moderator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shalom Adebola | The Executive's Host",
    description:
      "An executive host for corporate events, technology conferences, leadership gatherings and more.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${geist.variable}`}
      >
        {children}
      </body>
    </html>
  );
}