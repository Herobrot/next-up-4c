'use client'

import Carrusel from "../../components/Carrusel"

export default function Home() {
  const slides = [
    {url: "http://localhost:3000/banner.png"},
    {url: "http://localhost:3000/Banner1.jpg"},
    {url: "http://localhost:3000/banner2.jpg"},
    {url: "http://localhost:3000/banner3.jpg"}
  ]

  return (
    <main>
      <Carrusel slides={slides} />
    </main>
  )
}
