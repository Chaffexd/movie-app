import { Inter } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/Layout/MainNavigation";
import { BookmarkProvider } from "@/context/bookmarkContext";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Movie Database Film App",
  description: "An application that allows you to bookmark favourite movies and TV series",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <BookmarkProvider>
            <MainNavigation />
            <main>{children}</main>
          </BookmarkProvider>
        </body>
      </UserProvider>
    </html>
  );
}
