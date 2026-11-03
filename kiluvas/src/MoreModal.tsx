import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

// --- GALLERY DATA ---
// Photos live in /public/kiluva. Optimised copies are generated in:
//   /public/kiluva/thumbs  (grid previews, ~640px)
//   /public/kiluva/web     (lightbox + download, ~1600px)
// To add a photo: drop kNN.jpg in both folders and add a line below.
// `caption` is optional and shows under the photo in the lightbox.
interface MorePhoto {
  id: string;
  caption?: string;
}

const PHOTO_COUNT = 43;

const morePhotos: MorePhoto[] = Array.from({ length: PHOTO_COUNT }, (_, i) => ({
  id: `k${String(i + 1).padStart(2, '0')}`
}));

const thumbSrc = (p: MorePhoto) => `/kiluva/thumbs/${p.id}.jpg`;
const fullSrc = (p: MorePhoto) => `/kiluva/web/${p.id}.jpg`;

// Psalm 23 (King James Version, public domain)
const psalm23: string[] = [
  'The Lord is my shepherd; I shall not want.',
  'He maketh me to lie down in green pastures: he leadeth me beside the still waters.',
  'He restoreth my soul: he leadeth me in the paths of righteousness for his name’s sake.',
  'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.',
  'Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.',
  'Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.'
];

interface MoreModalProps {
  onClose: () => void;
}

const MoreModal: React.FC<MoreModalProps> = ({ onClose }) => {
  const [active, setActive] = useState<number | null>(null);

  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % morePhotos.length)),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + morePhotos.length) % morePhotos.length)),
    []
  );

  // Keyboard: Esc closes lightbox first, then modal. Arrows browse the lightbox.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (active !== null) setActive(null);
        else onClose();
      } else if (active !== null && e.key === 'ArrowRight') next();
      else if (active !== null && e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, onClose, next, prev]);

  // Lock page scroll while the modal is open
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const current = active !== null ? morePhotos[active] : null;

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-10">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="More about Kiluva James"
          className="relative h-[min(88vh,900px)] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-neutral-800 bg-black text-white shadow-[0_32px_120px_rgba(0,0,0,0.8)]"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 z-20 rounded-full border border-neutral-700 bg-neutral-900/90 p-2 text-white shadow-sm backdrop-blur transition hover:border-purple-400"
          >
            <X />
          </button>

          <div className="grid h-full min-h-0 grid-cols-1 grid-rows-[minmax(0,1.15fr)_minmax(0,0.85fr)] overflow-hidden lg:grid-cols-[minmax(340px,0.78fr)_minmax(0,1.22fr)] lg:grid-rows-1">
            {/* SIDE: Psalm 23 + punchline */}
            <aside className="relative order-2 min-h-0 overflow-y-auto overscroll-contain border-t border-neutral-800 bg-neutral-950 p-6 md:p-10 lg:order-1 lg:border-r lg:border-t-0">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(124,58,237,0.16),transparent_45%),radial-gradient(ellipse_at_90%_100%,rgba(251,191,36,0.08),transparent_40%)]" />
              <div className="relative">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                  Kiluva James · More about me
                </p>
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-amber-300">
                  Psalm 23
                </p>
                <h3 className="mb-6 font-serif text-3xl font-bold leading-tight md:text-4xl">
                  The Lord is my shepherd.
                </h3>

                <ol className="mb-9 space-y-3 font-serif text-sm leading-relaxed text-neutral-300 md:text-[15px]">
                  {psalm23.map((verse, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1 w-4 shrink-0 text-right font-mono text-[10px] text-neutral-600">
                        {i + 1}
                      </span>
                      <span>{verse}</span>
                    </li>
                  ))}
                </ol>

                <div className="border-l-2 border-amber-300/70 pl-4">
                  <p className="font-serif text-xl font-semibold italic leading-snug text-amber-200 md:text-1xl">
                    “For as long as the Spirit of the Lord is upon me, I will serve, mentor and HELP. Wherever, however and whenever I am called.”
                  </p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                    — Kiluva James
                  </p>
                </div>
              </div>
            </aside>

            {/* MAIN: photo gallery */}
            <section className="order-1 min-h-0 overflow-y-auto overscroll-contain bg-black p-4 md:p-8 lg:order-2">
              <div className="sticky -top-4 z-10 -mx-4 mb-5 bg-black/90 px-4 py-3 pr-16 backdrop-blur md:-mx-8 md:px-8 md:pr-20">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">
                  A closer look
                </p>
                <h4 className="font-serif text-2xl font-bold">
                  More of me
                  <span className="ml-2 text-xs font-normal text-neutral-500">
                    {morePhotos.length} photos
                  </span>
                </h4>
              </div>

              <div className="columns-2 gap-3 sm:columns-3 md:gap-4">
                {morePhotos.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setActive(i)}
                    aria-label={`Open photo ${i + 1}`}
                    className="group relative mb-3 block w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition hover:border-purple-500/60 md:mb-4"
                  >
                    <img
                      src={thumbSrc(p)}
                      alt={p.caption || `Kiluva James, photo ${i + 1}`}
                      loading="lazy"
                      className="block h-auto w-full opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                    />
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {current && active !== null && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setActive(null)}
        >
          <div className="absolute right-5 top-5 z-10 flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-500">
              {active + 1} / {morePhotos.length}
            </span>
            <a
              href={fullSrc(current)}
              download
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-white transition hover:border-purple-400"
            >
              <Download size={15} /> Download
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActive(null);
              }}
              aria-label="Close photo"
              className="rounded-full border border-neutral-700 bg-neutral-900 p-2 text-white transition hover:border-purple-400"
            >
              <X />
            </button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-neutral-700 bg-neutral-900/90 p-3 text-white transition hover:border-purple-400 md:left-6"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-neutral-700 bg-neutral-900/90 p-3 text-white transition hover:border-purple-400 md:right-6"
          >
            <ChevronRight />
          </button>

          <figure className="flex max-h-[88vh] max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={fullSrc(current)}
              alt={current.caption || `Kiluva James, photo ${active + 1}`}
              className="max-h-[84vh] max-w-full rounded-lg object-contain"
            />
            {current.caption && (
              <figcaption className="mt-3 text-center text-xs text-neutral-400">{current.caption}</figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
};

export default MoreModal;
