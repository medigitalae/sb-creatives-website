import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Check, Mail, MapPin } from "lucide-react";
import { RevealHeading, FadeUp } from "../components/Reveal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CONTACT, CONTACT_OPTIONS } from "../content/site";
import SEO from "../components/SEO";

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
  consent: false,
};

const inputCls =
  "w-full bg-transparent border-b border-cloud py-4 text-lg text-charcoal placeholder:text-graphite/60 focus:outline-none focus:border-cadet transition-colors duration-300";
const selectCls =
  "w-full bg-transparent border-0 border-b border-cloud rounded-none px-0 py-4 h-auto text-lg text-charcoal focus:ring-0 focus:border-cadet data-[placeholder]:text-graphite/60";
const labelCls = "block text-xs uppercase tracking-widest text-graphite mb-2";

function Field({ label, children }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) {
      toast.error("Please fill in your name, email, service interest and project details.");
      return;
    }
    if (!form.consent) {
      toast.error("Please agree to the consent statement before sending.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
      });
      
      let data;
      try {
        data = await res.json();
      } catch (e) {
        throw new Error("Server did not return valid JSON");
      }
      
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send");
      }
      
      setDone(true);
      setForm(initial);
      toast.success("Thanks, your enquiry is with us.");
    } catch (err) {
      console.error(err);
      toast.error("The enquiry could not be sent. Please try again or email hello@sbcreatives.in directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="bg-warm">
      <SEO 
        title="Contact Us — SB Creatives" 
        description="Get in touch with SB Creatives. Share your brief, business challenge, or early-stage idea with our integrated creative and production team." 
      />
      <section className="relative overflow-hidden pt-40 pb-24 md:pb-32">
        <div className="pointer-events-none absolute -top-10 -left-10 h-80 w-80 rounded-full bg-seafoam/40 blur-3xl" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left */}
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-6">Contact</p>
              </FadeUp>
              <h1 className="font-heading font-extrabold tracking-tighter text-charcoal text-5xl md:text-7xl leading-[0.92]">
                <RevealHeading lines={["Tell us what", "you are"]} />
                <span className="block overflow-hidden pb-[0.12em]">
                  <span className="block text-cadet italic">working on.</span>
                </span>
              </h1>
              <FadeUp delay={0.3}>
                <p className="mt-8 text-graphite text-lg leading-relaxed max-w-md">
                  Share the brief, the business challenge or the early-stage idea. We will help identify the right creative, digital, retail or production approach.
                </p>

                <div className="mt-12 space-y-6">
                  <a href={`mailto:${CONTACT.email}`} data-testid="contact-email-link" className="group flex items-start gap-4">
                    <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-seafoam/60 text-ocean shrink-0"><Mail size={18} /></span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-graphite">Email</span>
                      <span className="block font-heading font-semibold text-charcoal text-lg group-hover:text-cadet transition-colors duration-300">{CONTACT.email}</span>
                    </span>
                  </a>
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-seafoam/60 text-ocean shrink-0"><MapPin size={18} /></span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-graphite">Studio</span>
                      <span className="block font-heading font-semibold text-charcoal text-lg leading-snug">{CONTACT.legal}</span>
                      {CONTACT.addressLines.map((l) => (
                        <span key={l} className="block text-graphite text-[15px]">{l}</span>
                      ))}
                    </span>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="mt-12 overflow-hidden rounded-2xl border border-cloud bg-white p-2">
                  <div className="relative h-64 w-full overflow-hidden rounded-xl bg-cloud/30">
                    <iframe
                      title="Studio Location"
                      src="https://www.google.com/maps?q=A15,+Corrazone,+Vidya+Nagar+Colony,+Kalamassery,+Kochi,+Kerala+682022,+India&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full grayscale contrast-125 opacity-80 transition-all duration-500 hover:grayscale-0 hover:contrast-100 hover:opacity-100"
                    />
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeUp delay={0.2}>
                {done ? (
                  <div data-testid="contact-success" className="rounded-2xl border border-cloud bg-white p-10 md:p-14 text-center">
                    <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-cadet text-midnight"><Check size={28} /></span>
                    <h2 className="mt-6 font-heading font-bold text-charcoal text-3xl">Thanks, your enquiry is with us.</h2>
                    <p className="mt-3 text-graphite">We will review the details and get back to you using the email or phone number provided.</p>
                    <button data-testid="contact-reset" onClick={() => setDone(false)} className="mt-8 inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 font-heading font-semibold text-charcoal hover:border-charcoal transition-colors duration-300">Send another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-8">
                    <p className="text-graphite text-[15px] leading-relaxed">A few details will help us understand the requirement before we respond. Budget and timeline are optional if the project is still being defined.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Field label="Your name *">
                        <input data-testid="contact-name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" className={inputCls} />
                      </Field>
                      <Field label="Company or organisation">
                        <input data-testid="contact-company" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company name" className={inputCls} />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Field label="Email address *">
                        <input data-testid="contact-email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@company.com" className={inputCls} />
                      </Field>
                      <Field label="Phone number (optional)">
                        <input data-testid="contact-phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 " className={inputCls} />
                      </Field>
                    </div>

                    <Field label="Service interest *">
                      <Select value={form.service} onValueChange={(v) => update("service", v)}>
                        <SelectTrigger data-testid="contact-service" className={selectCls}><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          {CONTACT_OPTIONS.service.map((s) => (
                            <SelectItem key={s} value={s} data-testid={`service-option-${s.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Field label="Approximate budget">
                        <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                          <SelectTrigger data-testid="contact-budget" className={selectCls}><SelectValue placeholder="Select a range" /></SelectTrigger>
                          <SelectContent>
                            {CONTACT_OPTIONS.budget.map((b) => (
                              <SelectItem key={b} value={b}>{b}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field label="Preferred timeline">
                        <Select value={form.timeline} onValueChange={(v) => update("timeline", v)}>
                          <SelectTrigger data-testid="contact-timeline" className={selectCls}><SelectValue placeholder="Select a timeline" /></SelectTrigger>
                          <SelectContent>
                            {CONTACT_OPTIONS.timeline.map((t) => (
                              <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>

                    <Field label="Project details *">
                      <textarea data-testid="contact-message" value={form.message} onChange={(e) => update("message", e.target.value)} rows={4} placeholder="Tell us about the requirement, challenge or outcome you are working towards" className={`${inputCls} resize-none`} />
                    </Field>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <Checkbox data-testid="contact-consent" checked={form.consent} onCheckedChange={(v) => update("consent", !!v)} className="mt-0.5 data-[state=checked]:bg-cadet data-[state=checked]:border-cadet" />
                      <span className="text-graphite text-[14px] leading-relaxed">I agree to SB Creatives using these details to respond to my enquiry.</span>
                    </label>

                    <button type="submit" disabled={submitting} data-testid="contact-submit" className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 font-heading font-semibold text-warm transition-colors duration-300 hover:bg-cadet hover:text-midnight disabled:opacity-60">
                      {submitting ? "Sending your enquiry..." : "Send enquiry"}
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
