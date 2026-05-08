import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { SalesSection } from "@/components/sales-section"
import { PrinciplesSection } from "@/components/principles-section"
import { HowIWorkSection } from "@/components/how-i-work-section"
import { ContactSection } from "@/components/contact-section"
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <SalesSection />
        <PrinciplesSection />
        <HowIWorkSection />
        <ContactSection />
        <ColophonSection />
      </div>
    </main>
  )
}
