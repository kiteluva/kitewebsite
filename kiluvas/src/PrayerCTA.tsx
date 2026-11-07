import React, { useState } from 'react';
import { Flame, Send } from 'lucide-react';

const fruits = [
  { label: 'Love', color: '#f472b6' },
  { label: 'Joy', color: '#fbbf24' },
  { label: 'Peace', color: '#22d3ee' },
  { label: 'Patience', color: '#a78bfa' },
  { label: 'Kindness', color: '#34d399' },
  { label: 'Goodness', color: '#60a5fa' },
  { label: 'Faithfulness', color: '#fb923c' },
  { label: 'Gentleness', color: '#f9a8d4' },
  { label: 'Self-control', color: '#c4b5fd' }
];

const prayerLines: string[] = [
  'Come, Holy Spirit, fill the heart of everyone who reads these words, and guide them in all they do.',
  'Light in them love, joy and peace, together with patience, kindness, goodness, faithfulness, gentleness, self-control, and every other fruit of Your presence.',
  'Make them a source of hope, a spark of inspiration, and a place of solace for all, especially for those who are suffering.',
  'Steady their steps, warm their hearts, and let them carry Your light to every life they touch.'
];

const prayerText = `${prayerLines.join('\n\n')}\n\nThrough Christ our Lord. Amen.`;

const PrayerCTA: React.FC = () => {
  const [notice, setNotice] = useState('');

  const sharePrayer = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: 'A prayer for you', text: prayerText, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(`${prayerText}\n\n${window.location.href}`);
        setNotice('Prayer copied. Pass it on.');
      }
    } catch {
      setNotice('Sharing was cancelled or is unavailable.');
    }
  };

  return (
    <section
      aria-labelledby="prayer-title"
      className="relative isolate mt-20 overflow-hidden rounded-[2rem] border border-amber-300/20 bg-[#08080b] px-7 py-12 text-center md:px-12 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(251,191,36,0.16),transparent_45%),radial-gradient(ellipse_at_10%_100%,rgba(124,58,237,0.18),transparent_40%),radial-gradient(ellipse_at_90%_100%,rgba(34,211,238,0.1),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:38px_38px]" />

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/[0.08] text-red-200 shadow-[0_0_60px_rgba(251,191,36,0.2)]">
        <Flame size={26} />
      </div>

      <p className="mb-4 mt-6 text-xs font-bold uppercase tracking-[0.25em] text-amber-200">A prayer for you</p>
      <h3 id="prayer-title" className="mx-auto mb-8 max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
        May the Holy Spirit{' '}
        <span className="bg-gradient-to-r from-amber-200 via-rose-300 to-violet-300 bg-clip-text text-transparent">
          fill and guide you.
        </span>
      </h3>

      <div className="mx-auto max-w-2xl space-y-5 font-serif text-base leading-relaxed text-neutral-300 md:text-lg">
        {prayerLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p className="pt-2 text-sm font-semibold italic text-amber-200 md:text-base">
          Through Christ our Lord. Amen.
        </p>
      </div>

      <ul className="mx-auto mt-9 flex max-w-2xl flex-wrap justify-center gap-2" aria-label="Fruits of the Spirit">
        {fruits.map((fruit) => (
          <li
            key={fruit.label}
            className="rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest"
            style={{ color: fruit.color, borderColor: `${fruit.color}40`, backgroundColor: `${fruit.color}12` }}
          >
            {fruit.label}
          </li>
        ))}
      </ul>

      <div className="mt-9 flex flex-col items-center gap-3">
        <button
          onClick={sharePrayer}
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition hover:bg-amber-100"
        >
          Share this prayer <Send size={16} />
        </button>
        <p role="status" className="min-h-[1rem] text-xs text-neutral-400">
          {notice}
        </p>
      </div>
    </section>
  );
};

export default PrayerCTA;
