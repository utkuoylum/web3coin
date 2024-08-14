import "./globals.css";
import Nav from "@/components/Nav";
import TopLeftImg from "@/components/TopLeftImg";
import Header from "@/components/Header";
import { Sora } from 'next/font/google';


const sora = Sora({
  subsets: ['latin'],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={`${sora.className} font-sora`}>
   

          <TopLeftImg />
          <Nav />
          <Header />

          <main className="page bg-site text-white bg-cover bg-no-repeat relative">
          {children}

          </main>

     
      </body>
    </html>
  );
}
