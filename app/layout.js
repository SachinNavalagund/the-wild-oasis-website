import React from "react";
import "@/app/_styles/globals.css";

//importing font from google
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

//configering font
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

//adding meta data title and description
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the India, surrounded by beautiful montains and dark forests",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}>
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl  mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
