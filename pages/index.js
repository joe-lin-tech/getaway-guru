import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'
import { useState } from 'react';
import Form from '@/components/form'


const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  const [showForm, setShowForm] = useState(false);
  

  
  return (
    <main
      className={`flex h-full flex-col items-center justify-between ${inter.className}`}
    >
      <Navigation />
      {showForm ? (<Form setShowForm={setShowForm} />) : (<Hero setShowForm={setShowForm} />)}

    </main>
  )
}

export default Home;