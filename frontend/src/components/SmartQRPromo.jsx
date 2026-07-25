import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Globe, Download, Users, LineChart } from "lucide-react";
import { FadeUp } from "./Reveal";

const features = [
  {
    title: "Instant Sharing",
    desc: "Share your complete digital profile instantly with a simple NFC tap or QR scan.",
    icon: Smartphone,
  },
  {
    title: "Frictionless Experience",
    desc: "The profile opens instantly in the browser, meaning there is no app required.",
    icon: Globe,
  },
  {
    title: "One-Click Save",
    desc: "Contacts can download your details as a rich vCard directly to their phone.",
    icon: Download,
  },
  {
    title: "Two-Way Lead Capture",
    desc: "Close the loop by allowing prospects to submit their contact details back to you.",
    icon: Users,
  },
  {
    title: "Actionable Analytics",
    desc: "Track your card views, saves, and captured leads through a secure dashboard.",
    icon: LineChart,
  },
];

export default function SmartQRPromo() {
  return (
    <section className="py-24 md:py-32 bg-midnight text-warm relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-ocean/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-cadet/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <div>
            <FadeUp>
              <img 
                src="/services/smart-qr-biz/logo-smartqrbiz.svg" 
                alt="Smart QR Biz" 
                className="h-12 w-auto mb-8 invert opacity-90"
              />
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="font-heading font-extrabold tracking-tighter text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4">
                The Future of Networking: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cadet via-ocean to-seafoam">Smart Digital Business Cards</span>
              </h2>
              <p className="text-xl text-ocean font-medium mb-6">One Tap. Endless Connections.</p>
              <p className="text-cloud/80 text-lg leading-relaxed mb-10 max-w-xl">
                Make a lasting first impression with Smart QR Biz, a premium NFC and QR business card system built for professionals, sales teams, and organizations. Powered by ME Digital and brought to you by SB Creatives, our digital business cards eliminate paper waste and turn every handshake into a measurable connection.
              </p>
            </FadeUp>

            <div className="space-y-6 mb-12">
              {features.map((feature, i) => (
                <FadeUp key={feature.title} delay={0.2 + i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-seafoam">
                      <feature.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white mb-1">{feature.title}</h4>
                      <p className="text-cloud/70 text-[15px] leading-relaxed max-w-md">{feature.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.6}>
              <Link 
                to="/smart-qr-biz" 
                className="inline-flex items-center gap-3 rounded-full bg-seafoam text-midnight px-8 py-4 font-semibold hover:bg-white transition-colors duration-300"
              >
                Explore Smart QR Biz
                <ArrowRight size={18} />
              </Link>
            </FadeUp>
          </div>

          {/* Right: Graphic */}
          <div className="lg:h-[800px] relative">
            <FadeUp delay={0.3} className="h-full w-full">
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/services/smart-qr-biz/main-cover.webp" 
                  alt="Smart QR Biz NFC Tap" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
