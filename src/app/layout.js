import './globals.css'
import { Sen } from 'next/font/google'

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { AuthProvider } from './providers/Providers';

const inter = Sen({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Course App',
  description: 'TT!',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
