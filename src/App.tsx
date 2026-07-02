import { Footer } from "./components/Footer"
import Hero from "./components/sections/Hero"
import { Pain } from "./components/sections/Pain"
import { Strength } from "./components/sections/Strength"
import { CaseStudy } from "./components/sections/CaseStudy"
import { Price } from "./components/sections/Price"
import { Message } from "./components/sections/Message"
import { Faq } from "./components/sections/Faq"
import { FinalCta } from "./components/sections/FinalCta"
import { MobileFixedCta } from "./components/ui/MobileFixedCta"

function App() {
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <main className="flex-1">
        <Hero />
        <Pain />
        <Strength />
        <CaseStudy />
        <Price />
        <Message />
        <Faq />
        <FinalCta />
        <MobileFixedCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
