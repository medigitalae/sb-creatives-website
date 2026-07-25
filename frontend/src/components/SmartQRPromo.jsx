import { Link } from "react-router-dom";
import { ArrowUpRight, Smartphone, Globe, Download, Users, LineChart } from "lucide-react";
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
    <section className="relative overflow-hidden py-16 md:py-24 bg-midnight text-warm grain">
      {/* Background glowing orbs */}
      <div className="pointer-events-none absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-cadet/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[600px] w-[600px] rounded-full bg-ocean/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="relative z-20">
            <FadeUp>
              <img
                src="/services/smart-qr-biz/logo-smartqrbiz-white.svg"
                alt="Smart QR Biz"
                className="h-10 w-auto mb-8"
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-heading font-extrabold tracking-tighter text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4">
                The Future of Networking: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cadet via-ocean to-seafoam">Smart Digital Business Cards</span>
              </h2>
              <p className="text-xl text-ocean font-medium mb-6">One Tap. Endless Connections.</p>
              <p className="text-cloud/80 text-lg leading-relaxed mb-10 max-w-xl">
                Make a lasting first impression with Smart QR Biz, a premium NFC and QR business card system built for professionals, sales teams, and organizations. Our digital business cards eliminate paper waste and turn every handshake into a measurable connection.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-12">
              {features.map((feature, i) => (
                <FadeUp key={feature.title} delay={0.2 + i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex-shrink-0 h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-seafoam">
                      <feature.icon size={14} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-white mb-1">{feature.title}</h4>
                      <p className="text-cloud/70 text-sm leading-relaxed max-w-sm">{feature.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.6}>
              <Link
                to="/smart-qr-biz"
                className="group inline-flex items-center gap-3 rounded-full bg-cadet px-8 py-5 text-base font-heading font-semibold text-midnight transition-colors duration-300 hover:bg-warm whitespace-nowrap"
              >
                Explore Smart QR Biz
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </FadeUp>
          </div>

          {/* Right: Floating Transparent Image */}
          <div className="relative z-10 flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <FadeUp delay={0.3} className="w-full">
              <img
                src="/services/smart-qr-biz/main-cover.webp"
                alt="Smart QR Biz NFC Tap"
                className="w-full max-w-md lg:max-w-none mx-auto h-auto lg:scale-[1.1] lg:origin-right object-contain drop-shadow-2xl"
              />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
