import Navbar from '@/components/Navbar'
import './globals.css'
import 'animate.css'
import Footer from '@/components/Footer'
import { PageWrapper } from '@/components/Page-Wrapper'
import { NavbarContextProvider } from 'context/NavbarContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <PageWrapper> */}
        <div className=' font-dm-sans'>
          <NavbarContextProvider>
            <Navbar />
            {children}
            <Footer />
          </NavbarContextProvider>
        </div>
        {/* </PageWrapper> */}
      </body>
    </html>
  )
}
