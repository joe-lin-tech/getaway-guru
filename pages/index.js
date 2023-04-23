import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import About from '@/components/About'


const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main className={`flex h-full flex-col items-center justify-between ${inter.className}`}>
      <Navigation />
      <Hero />
      <About />
    </main>
  )
}

export default Home;