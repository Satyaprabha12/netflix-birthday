import { useState, useRef, useEffect, useCallback } from "react";

const letterContent = {
  greeting: "My Love,",
  paragraphs: [
    "There are some things that are difficult to say out loud, so I wanted to write them down instead.",
    "You make ordinary moments feel special, and somehow you've become one of my favorite parts of life.",
    "Thank you for all the little moments, the laughs, the memories, and everything in between.",
  ],
  closing: "Happy Girlfriend's Day \u2764\ufe0f",
  signature: "Yours,",
  name: "[Your Name]",
};

const CONFETTI_COLORS = ["#ffffff", "#ffb3c1", "#ff2d3d", "#7a1f2b", "#e8c874"];

/* ------------------------------------------------------------------ */
/*  Confetti burst (CSS-driven, no dependency)                         */
/* ------------------------------------------------------------------ */

function Confetti({ triggerKey }) {
  const pieces = useRef([]);

  if (pieces.current.length === 0 || pieces.current.key !== triggerKey) {
    const count = 26;
    const generated = Array.from({ length: count }, (_, i) => ({
      id: `${triggerKey}-${i}`,
      left: 45 + (Math.random() * 10 - 5) + "%",
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: 5 + Math.random() * 5,
      dx: (Math.random() - 0.5) * 220,
      dy: 160 + Math.random() * 140,
      rotate: Math.random() * 720 - 360,
      delay: Math.random() * 0.15,
      duration: 1.4 + Math.random() * 0.9,
      shape: Math.random() > 0.5 ? "50%" : "2px",
    }));
    generated.key = triggerKey;
    pieces.current = generated;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {pieces.current.map((p) => (
        <span
          key={p.id}
          className="absolute top-1/3"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.shape,
            opacity: 0,
            animation: `confetti-fall ${p.duration}s ease-out ${p.delay}s forwards`,
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            "--rot": `${p.rotate}deg`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
          100% { opacity: 0; transform: translate(var(--dx), var(--dy)) rotate(var(--rot)); }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  LoveLetter                                                         */
/* ------------------------------------------------------------------ */

export default function LoveLetter() {
  const [open, setOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleOpen = useCallback(() => {
    if (open) return;
    setOpen(true);
    setConfettiKey((k) => k + 1);
    // paper rises/expands during the envelope animation, then the
    // full letter card takes over the layout
    timeoutRef.current = setTimeout(() => setShowLetter(true), 900);
  }, [open]);

  const handleClose = useCallback(() => {
    setShowLetter(false);
    setOpen(false);
  }, []);

  return (
    <section
      className="relative w-full min-h-[75vh] flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #1a0509 45%, #000000 100%)",
      }}
    >
      {!showLetter && (
        <div
          className="relative flex flex-col items-center text-center"
          style={{ perspective: "1200px" }}
        >
          <button
            onClick={handleOpen}
            aria-label="Open the letter"
            className="relative w-[220px] sm:w-[280px] aspect-[3/2] focus:outline-none group"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Envelope body */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-[#3a0a12] to-[#1a0509] border border-[#5a1a24] shadow-2xl overflow-hidden">
              {/* Envelope pocket lines */}
              <div className="absolute inset-0 opacity-60">
                <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black/30 to-transparent" />
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/30 to-transparent" />
              </div>
            </div>

            {/* Paper peeking out, rises when open */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[80%] bg-[#f6efe1] rounded-sm shadow-lg transition-all ease-out"
              style={{
                height: "70%",
                bottom: "18%",
                transitionDuration: "900ms",
                transform: open
                  ? "translate(-50%, -60%) scale(1.05)"
                  : "translate(-50%, 0%) scale(1)",
                zIndex: 1,
              }}
            />

            {/* Envelope flap (top triangle), opens like a door on rotateX */}
            <div
              className="absolute top-0 left-0 w-full h-1/2 origin-top transition-transform ease-out"
              style={{
                transitionDuration: "900ms",
                transformStyle: "preserve-3d",
                transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
                zIndex: 2,
              }}
            >
              <div
                className="w-full h-full bg-gradient-to-b from-[#4a0e18] to-[#2a0a10] border-b border-[#5a1a24]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              />
            </div>

            {/* Heart seal */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl transition-opacity duration-300"
              style={{ opacity: open ? 0 : 1, zIndex: 3 }}
            >
              {"\uD83D\uDC8C"}
            </div>
          </button>

          <h3 className="mt-8 text-white text-xl sm:text-2xl font-serif italic">
            A Letter For You
          </h3>
          <button
            onClick={handleOpen}
            className="mt-4 px-6 py-2 text-xs sm:text-sm uppercase tracking-widest text-gray-300
                       border border-gray-600 hover:text-white hover:border-white transition-colors duration-200"
          >
            Open
          </button>
        </div>
      )}

      {showLetter && (
        <div className="relative w-full max-w-lg animate-[letter-appear_0.5s_ease-out]">
          <Confetti triggerKey={confettiKey} />

          <div
            className="relative bg-[#f6efe1] rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.6)] px-6 sm:px-10 py-8 sm:py-12"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 20%, rgba(0,0,0,0.02) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.03) 0, transparent 45%)",
            }}
          >
            <button
              onClick={handleClose}
              aria-label="Close the letter"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center
                         text-[#5a4632] hover:text-black transition-colors text-lg"
            >
              {"\u00D7"}
            </button>

            <p className="font-serif text-[#3a2c1e] text-lg sm:text-xl italic mb-5 sm:mb-6">
              {letterContent.greeting}
            </p>

            {letterContent.paragraphs.map((para, i) => (
              <p
                key={i}
                className="font-serif text-[#3a2c1e] text-sm sm:text-base leading-relaxed mb-4"
              >
                {para}
              </p>
            ))}

            <p className="font-serif text-[#3a2c1e] text-base sm:text-lg mt-6 sm:mt-8">
              {letterContent.closing}
            </p>

            <div className="mt-6 sm:mt-8">
              <p className="font-serif italic text-[#3a2c1e] text-sm sm:text-base">
                {letterContent.signature}
              </p>
              <p className="font-serif italic text-[#3a2c1e] text-base sm:text-lg">
                {letterContent.name}
              </p>
            </div>
          </div>

          <style>{`
            @keyframes letter-appear {
              from { opacity: 0; transform: scale(0.9) translateY(10px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}