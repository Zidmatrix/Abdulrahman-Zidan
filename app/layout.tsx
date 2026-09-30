import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title:"Abdulrahman Zidan — Real Estate Sales & Lead Management",
  description:"Real Estate Cold Caller, Lead Manager, Appointment Setter and Virtual Assistant focused on the U.S. market.",
  keywords:["Abdulrahman Zidan","real estate cold caller","lead manager","appointment setter","virtual assistant"],
  openGraph:{title:"Abdulrahman Zidan",description:"Real Estate Sales & Lead Management Professional",type:"website"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}