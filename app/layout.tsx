import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zidmatrix.github.io/Abdulrahman-Zidan/"),
  title: "Abdulrahman Zidan — Real Estate Sales & Lead Management",
  description: "Premium portfolio of Abdulrahman Zidan — U.S. Real Estate Cold Caller, Lead Manager, Appointment Setter and Virtual Assistant.",
  keywords: ["Abdulrahman Zidan","real estate cold caller","real estate lead manager","appointment setter","virtual assistant","U.S. real estate"],
  authors: [{name:"Abdulrahman Zidan"}],
  openGraph: {title:"Abdulrahman Zidan — Real Estate Sales & Lead Management",description:"Cold Caller • Lead Manager • Appointment Setter • Virtual Assistant",type:"website",url:"https://zidmatrix.github.io/Abdulrahman-Zidan/",siteName:"Abdulrahman Zidan"},
  twitter: {card:"summary_large_image",title:"Abdulrahman Zidan",description:"Real Estate Sales & Lead Management Professional"},
  robots: {index:true,follow:true},
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
