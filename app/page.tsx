"use client"

import Features from "./components/Features"
import Header from "./components/Header"
import Pricing from "./components/Pricing"


export default function page() {
  return (
    <div>
      <Header/>
      <Pricing/>
      <Features/>
    </div>
  )
}
