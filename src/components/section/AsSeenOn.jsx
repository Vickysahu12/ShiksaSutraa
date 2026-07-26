import { asSeenOn } from "../../data/SiteData";

export default function AsSeenOn() {
  const loop = [...asSeenOn, ...asSeenOn];

  return (
    <section className="bg-cream pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-ink/35 mb-6">
          As Seen On
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-16 animate-marquee">
            {loop.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display font-bold text-xl sm:text-2xl text-ink/25 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
