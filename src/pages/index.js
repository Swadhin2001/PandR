import { Inter } from 'next/font/google'
import Home_page from './Home_page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Home_page/>
    </>
  )
}
