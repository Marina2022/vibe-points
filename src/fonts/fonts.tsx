import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "../fonts/manrope/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/manrope/Manrope-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/manrope/Manrope-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/manrope/Manrope-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const uncage = localFont({
  src: [
    {
      path: "../fonts/uncage/Uncage-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/uncage/Uncage-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-uncage",
  display: "swap",
});
