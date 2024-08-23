import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siratul Islam",
  description:
    "I have the power to create tools and solutions that simplify & improve people's lives so I am focused on building Scalable Solutions. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
