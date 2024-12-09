import Providers from "@modules/providers"
import "styles/globals.css"
import { Inter } from "next/font/google"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Script src="//code.tidio.co/2suaatuaondzqpltzulgzi1ltmckbs0d.js" async></Script>
      </body>
    </html>
  )
}
