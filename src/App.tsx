import { Footer } from "./components/Footer"
import Hero from "./components/sections/Hero"
import { Pain } from "./components/sections/Pain"
import { Strength } from "./components/sections/Strength"
import { CaseStudy } from "./components/sections/CaseStudy"
import { Faq } from "./components/sections/Faq"
import { FinalCta } from "./components/sections/FinalCta"
import { MobileFixedCta } from "./components/ui/MobileFixedCta"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Pain />
        <Strength />
        <CaseStudy />
        {/* TODO: 適正価格へのこだわり セクション(コンポーネント未作成) */}
        {/* TODO: 代表メッセージ セクション(コンポーネント未作成) */}
        <Faq />
        <FinalCta />
        <MobileFixedCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
