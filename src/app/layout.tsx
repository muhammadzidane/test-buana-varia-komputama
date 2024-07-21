import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

import { Toast } from "@/components";
import CustomSWRConfig from "@/plugins/swr";
import "@/styles/globals.css";
const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });

const APP_NAME = "Buana App";
const APP_DEFAULT_TITLE = "Test Buana Varia Komputama";
const APP_TITLE_TEMPLATE = "%s - Buana App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  openGraph: {
    title: {
      template: APP_TITLE_TEMPLATE,
      default: APP_DEFAULT_TITLE,
    },
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    type: "website",
  },
  twitter: {
    title: {
      template: APP_TITLE_TEMPLATE,
      default: APP_DEFAULT_TITLE,
    },
    description: APP_DESCRIPTION,
    card: "summary",
  },
  appleWebApp: {
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    capable: true,
  },
  title: {
    template: APP_TITLE_TEMPLATE,
    default: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head />
      <body className={inter.className}>
        <CustomSWRConfig>{children}</CustomSWRConfig>
        <Toast />
      </body>
    </html>
  );
}
