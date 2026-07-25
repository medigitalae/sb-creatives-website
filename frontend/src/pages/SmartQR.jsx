import { Link } from "react-router-dom";
import { ArrowRight, Check, Users, Scan, Download, Target, LineChart } from "lucide-react";
import { FadeUp, RevealHeading } from "../components/Reveal";
import { PageHero, DarkCTA } from "../components/Sections";
import SEO from "../components/SEO";

const processSteps = [
  { icon: Users, title: "Meet & Share", desc: "Present your card during any meeting, trade show, or client visit." },
  { icon: Scan, title: "Tap or Scan", desc: "The receiver uses an NFC tap or QR scan to open your digital profile." },
  { icon: Download, title: "Save & Capture", desc: "The receiver saves your details in one click, and can easily submit their own name back to you." },
  { icon: Target, title: "Track", desc: "Both the salesperson and the organization admin can view these generated leads." }
];

export default function SmartQR() {
  return (
    <div data-testid="smart-qr-page">
      <SEO 
        title="Smart QR Biz — SB Creatives" 
        description="A complete digital business card ecosystem that combines premium physical card production with a powerful management platform." 
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-16 md:pb-24 bg-warm">
        <div className="pointer-events-none absolute -top-10 right-10 h-72 w-72 rounded-full bg-seafoam/40 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-cadet/15 blur-3xl" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <FadeUp>
            <img 
              src="/services/smart-qr-biz/logo-smartqrbiz.svg" 
              alt="Smart QR Biz" 
              className="h-12 w-auto mb-8"
            />
          </FadeUp>
          <h1 className="font-heading font-extrabold tracking-tighter text-charcoal text-5xl md:text-7xl leading-[0.95] max-w-5xl">
            <RevealHeading lines={["A Complete Ecosystem", "for the Modern Professional"]} />
          </h1>
          <FadeUp delay={0.3}>
            <p className="mt-8 max-w-2xl text-graphite text-lg md:text-xl leading-relaxed">
              Paper cards get lost, details change, and traditional networking rarely provides trackable data. Under SB Creatives, we offer a complete digital business card ecosystem that combines premium physical card production with a powerful management platform.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Visual Process Flow */}
      <section className="py-24 bg-warm border-y border-cloud relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 relative z-10">
          <FadeUp>
            <h2 className="font-heading font-bold text-charcoal text-3xl md:text-4xl mb-16 text-center">How One Tap Becomes a Connection</h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.1}>
                <div className="relative group p-8 rounded-3xl bg-white border border-cloud shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-16 w-16 rounded-2xl bg-cadet/10 flex items-center justify-center text-ocean mb-6 group-hover:bg-ocean group-hover:text-white transition-colors duration-300">
                    <step.icon size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-3">{step.title}</h3>
                  <p className="text-graphite text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="py-24 md:py-32 bg-cloud/30">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeUp>
                <h2 className="font-heading font-extrabold text-charcoal text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6">
                  Customized for Your Brand Identity
                </h2>
                <p className="text-graphite text-lg leading-relaxed mb-10 max-w-lg">
                  We design around your specific brand requirements rather than locking you into a fixed template. Cards feature client-specific layouts, brand colors, and high-quality logos.
                </p>
                <ul className="space-y-6">
                  {[
                    "Every card is an NFC-enabled PVC card finished with a premium print.",
                    "Your digital profile acts as a lightweight mobile landing page.",
                    "Complete with editable social links, WhatsApp, brochures, and dynamic QR codes."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-seafoam flex items-center justify-center text-midnight">
                        <Check size={14} />
                      </div>
                      <span className="text-charcoal leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-cloud shadow-lg">
                <img src="/services/smart-qr-biz/cards-falling-hero.webp" alt="Smart QR Physical and Digital Cards" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Enterprise Dashboard */}
      <section className="py-24 md:py-32 bg-midnight text-warm relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <FadeUp className="order-2 lg:order-1">
              <div className="relative flex items-center justify-center">
                <img 
                  src="/services/smart-qr-biz/analytics.webp" 
                  alt="Smart QR Biz Dashboard" 
                  className="w-full h-auto max-w-2xl object-contain drop-shadow-2xl" 
                />
              </div>
            </FadeUp>

            <div className="order-1 lg:order-2">
              <FadeUp>
                <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6">
                  Enterprise-Grade Control for Teams
                </h2>
                <ul className="space-y-8 mt-10">
                  {[
                    "Manage multiple employees and group profiles by organization to maintain clean data separation.",
                    "Access a centralized lead pool so management can see prospects generated across all employees.",
                    "Assign specific access boundaries, allowing Super Admins, organization admins, and profile owners to only see what they need.",
                    "Export data and captured leads via CSV for offline review and performance reporting."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <div className="mt-1 flex-shrink-0 h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-seafoam">
                        <span className="font-heading font-bold text-sm">{i + 1}</span>
                      </div>
                      <span className="text-cloud/80 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA */}
      <DarkCTA 
        title="Ready to upgrade your networking?"
        body="Get in touch with us to order customized physical NFC cards and set up your organization's digital profile platform."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />
    </div>
  );
}
