import { Footer } from "./components/Footer"
import Hero from "./components/sections/Hero"
import { HopeSection } from "./components/sections/HopeSection"
import { Pain } from "./components/sections/Pain"
import { Hope } from "./components/sections/Hope"
import { Comparison } from "./components/sections/Comparison"
import { Checklist } from "./components/sections/Checklist"
import { Strength } from "./components/sections/Strength"
import { CaseStudy } from "./components/sections/CaseStudy"
import { Flow } from "./components/sections/Flow"
import { Faq } from "./components/sections/Faq"
import { UrgencyBanner } from "./components/sections/UrgencyBanner"
import { FinalCta } from "./components/sections/FinalCta"
import { MobileFixedCta } from "./components/ui/MobileFixedCta"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <HopeSection />
        <Pain />
        <Hope />
        <Comparison />
        <Checklist />
        <Strength />
        <CaseStudy />
        <Flow />
        <Faq />
        <UrgencyBanner />
        <FinalCta />
        <MobileFixedCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
