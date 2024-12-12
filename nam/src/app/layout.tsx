import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";



export const metadata: Metadata = {
  title: "Nam & Associates",
  description: "Copyrights © Nam & Associates , The Top Legal Advisory Firm in Tanzania , also offering 360 DSP relocation services",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'], // Specify desired font weights
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${roboto.className}  bg-brand-blue antialiased`}>
        {children}
      </body>
    </html>
  );
}
