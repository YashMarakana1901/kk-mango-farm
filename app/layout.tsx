import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'KK Mango Farm – Surva Gir | Fresh Kesar Mangoes',
  description: 'Premium Kesar mangoes directly from KK Mango Farm, Surva Gir, Gujarat. Order 10kg boxes delivered fresh to your home.',
  keywords: 'kesar mango, mango farm, surva gir, gujarat mangoes, fresh mango box',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-dm bg-cream text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
