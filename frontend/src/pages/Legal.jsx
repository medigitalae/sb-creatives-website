import { PageHero } from "../components/Sections";
import { FadeUp } from "../components/Reveal";
import { LEGAL } from "../content/site";

export default function Legal({ type }) {
  const data = LEGAL[type];
  return (
    <div data-testid={`legal-${type}-page`} className="bg-warm">
      <PageHero eyebrow="Legal" lines={[data.title]} sub={data.intro} />

      <section className="pb-24 md:pb-32 bg-warm">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <FadeUp>
            <div className="rounded-2xl border border-cadet/40 bg-seafoam/25 p-6 mb-12">
              <p className="text-sm text-midnight leading-relaxed"><strong>Important:</strong> {data.note}</p>
            </div>
          </FadeUp>
          <div className="space-y-10">
            {data.sections.map((s) => (
              <FadeUp key={s.heading}>
                <h2 className="font-heading font-bold text-charcoal text-xl md:text-2xl mb-3">{s.heading}</h2>
                <p className="text-graphite text-[16px] md:text-lg leading-relaxed">{s.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
