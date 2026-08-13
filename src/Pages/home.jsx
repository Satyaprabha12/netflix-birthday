import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile1 from "../assets/me.jpg";
import Profile2 from "../assets/you.jpg";
import Profile3 from "../assets/us.jpg";
import NetflixLogo from "../assets/logo.png";
import NSeriesLogo from "../assets/n-logo.png";

import Img1 from "../assets/img1.jpeg"
import Img2 from "../assets/img2.jpeg"
import Img3 from "../assets/img3.jpeg"
import Img4 from "../assets/img4.jpeg"
import Img5 from "../assets/img5.jpeg"
import Img6 from "../assets/img6.jpeg"
import Img7 from "../assets/img7.jpeg"
import Img8 from "../assets/img8.jpeg"

import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";
import Video3 from "../assets/video3.mp4";
import Video4 from "../assets/video4.mp4";
import Video5 from "../assets/video5.mp4";
import Video6 from "../assets/video6.mp4";
import Video7 from "../assets/video7.mp4";
import Video8 from "../assets/video8.mp4";
import Video10 from "../assets/video10.mp4";
import Video12 from "../assets/video12.mp4";
import Video13 from "../assets/video13.mp4";
import Video14 from "../assets/video14.mp4";
import Video16 from "../assets/video16.mp4";
import Video17 from "../assets/video17.mp4";
import Video18 from "../assets/video18.mp4";

import Top1 from "../assets/top1.jpeg"
import Top2 from "../assets/top2.jpeg"
import Top3 from "../assets/top3.jpeg"
import Top4 from "../assets/top4.jpeg"
import Top5 from "../assets/top5.jpeg"
import Top6 from "../assets/top6.jpeg"
import Top7 from "../assets/top7.jpeg"
import Top8 from "../assets/top8.jpeg"
import Top9 from "../assets/top9.jpeg"
import Top10 from "../assets/top10.jpeg"

import HeroVideo from "../assets/hero.mp4"
import HeroImg from "../assets/hero-img.jpeg"

const selectedProfile = JSON.parse(
  localStorage.getItem("selectedProfile")
);

const profileImage = selectedProfile?.image || Profile1;

const trending = [
  { title: "Murder Mystery", image: Img1 },
  { title: "Our Planet", image: Img2 },
  { title: "Tidying Up", image: Img3 },
  { title: "Dead to Me", image: Img4 },
  { title: "Raising Dion", image: Img5 },
  { title: "Growing", image: Img6 },
  { title: "The Irishman", image: Img7 },
  { title: "Homecoming", image: Img8 },
];

const topTen = [
  { rank: 1, title: "I love your heart", image: Top1 },
  { rank: 2, title: "I love your innocence", image: Top2},
  { rank: 3, title: "I love your kindness", image: Top3 },
  { rank: 4, title: "I love your patience", image: Top4 },
  { rank: 5, title: "I love your softness", image: Top5 },
  { rank: 6, title: "I love your silly side", image: Top6 },
  { rank: 7, title: "I love how you care", image: Top7 },
  { rank: 8, title: "I love how you listen", image: Top8 },
  { rank: 9, title: "I love how you understand me", image: Top9 },
  { rank: 10, title: "I love how you love me", image: Top10 },
];

const marqueeVideos = [
  { title: "The Way You Smile", meta: "You make every moment better", video: Video1 },
  { title: "My Favorite Person", meta: "Life is better with you", video: Video2 },
  { title: "Your Kind Heart", meta: "You care more than you realize", video: Video3 },
  { title: "That Handsome Face", meta: "Still can't get over how good you look", video: Video4 },
  { title: "Your Voice", meta: "My favorite sound", video: Video5 },
  { title: "The Way You Care", meta: "You make me feel so loved", video: Video6 },
  { title: "Your Sense of Humor", meta: "You always know how to make me laugh", video: Video7 },
  { title: "My Safe Place", meta: "I feel at home with you", video: Video8 },
  { title: "Your Beautiful Mind", meta: "I love the way you think", video: Video10 },
  { title: "Your Hugs", meta: "My favorite place to be", video: Video12 },
  { title: "Your Confidence", meta: "You carry yourself so well", video: Video13 },
  { title: "Your Patience", meta: "Thank you for understanding me", video: Video14 },
  { title: "My Biggest Supporter", meta: "You always believe in me", video: Video16 },
  { title: "Your Presence", meta: "Everything feels better when you're around", video: Video17 },
  { title: "Just You", meta: "I wouldn't change a thing about you", video: Video18 },
];

const navLinks = [
  { label: "Home", to: "/home" },
  { label: "TV Shows", to: "/tv-shows" },
  { label: "Movies", to: "/movies" },
  { label: "New & Popular", to: "/new-popular" },
  { label: "My List", to: "/my-list" },
];

const galleryItems = [
  { image: "https://picsum.photos/id/1015/900/1200", label: "Canyon", link: "#" },
  { image: "https://picsum.photos/id/1018/900/1200", label: "Ridgeline", link: "#" },
  { image: "https://picsum.photos/id/1039/900/1200", label: "Falls", link: "#" },
  { image: "https://picsum.photos/id/1043/900/1200", label: "Harbour", link: "#" },
  { image: "https://picsum.photos/id/1044/900/1200", label: "Skyline", link: "#" },
];

const letterContent = {
  greeting: "To my love,",

  paragraphs: [
    "Thank you for coming into my life.",

    "Sometimes I genuinely sit and wonder how you became such a big part of my life without me even realising it. You came in so quietly, and somehow, you became my favourite hello, my hardest goodbye, my safest place, and the person I want beside me for all the ordinary and extraordinary days ahead.",

    "You are, Alhamdulillah, an answer to so many prayers I once made quietly. And maybe that’s why loving you feels different, because somewhere in my heart, I feel like Allah knew exactly what I needed, even before I did.",

    "I am so grateful for you. For your heart. For your patience. For the way you keep trying to become a better person, not just for yourself, but for us. I notice it, you know. I notice the effort, the little changes, the things you don’t announce. And it makes me love you a little more every time.",

    "And the funniest part? While you’re trying to become a better man for me, you somehow keep making me want to become a better woman for you too. So I guess we’re stuck with each other now.",

    "I never thought we would come this far. I never imagined that something could become this strong while being miles apart. But somehow, distance has only taught me that love isn’t always about being able to reach out and hold someone’s hand.",

    "Sometimes it’s about knowing that even from far away, there is one heart that still feels like home.",

    "And my love for you… it keeps growing. Not loudly. Not dramatically. Just quietly, steadily, deeply, in every conversation, every laugh, every silly argument, every “did you eat?”, every goodnight, every moment I wish you were here.",

    "You have become my safe place. The person I want to run to when life gets heavy. The person I want to tell the smallest, most pointless things to. The person I want to annoy for the rest of my life. And unfortunately for you, I have no plans of retiring from that job",

    "I love our stupid conversations. Our little jokes. Our random moods. The way we can go from being deeply emotional to being absolute idiots within five minutes.",

    "I love that I can be soft with you. I can be vulnerable with you. I can be completely, unapologetically myself with you.",

    "And that is something I don’t take lightly.",

    "I don’t just want the beautiful days with you. I want the difficult ones too. The days when we’re tired, irritated, confused, or simply not at our best. I want to learn you in every season. I want to grow with you, pray with you, laugh with you, fight over stupid things with you, make up, laugh about them later, and keep choosing you through all of it.",

    "I want a life with you. Not a perfect one. A real one.",

    "A life full of late-night conversations, sleepy mornings, inside jokes nobody else understands, little trips, big dreams, random grocery runs, annoying each other for no reason, holding hands when words aren’t enough, and looking at each other one day and thinking, “Look at us. We actually made it here.”",

    "Today is your special day, my love, but somehow I feel like I am the lucky one.",

    "Because I get to love you. I get to know you. I get to watch you grow. And, InshaAllah, I get to grow old with you.",

    "May Allah keep you happy, protect your heart, strengthen you, and put endless barakah in your life and in whatever we build together.",

    "And if He allows me one selfish prayer, I pray that when life gets long and our hair gets grey, you’ll still look at me the way you do now.",

    "And I’ll still look at you and think, “Yep. Still my favourite person.”",

    "Happy birthday, my love.",

    "Thank you for finding your way into my life. Thank you for staying. Thank you for trying. Thank you for loving me.",

    "And most importantly, thank you for being you.",

    "I love you more than I know how to put into words."
  ],

  closing: "Always yours❤️",

  signature: "",
  name: "Sumaiya",
};

const CONFETTI_COLORS = ["#ffffff", "#ffb3c1", "#ff2d3d", "#7a1f2b", "#e8c874"];

/* ------------------------------------------------------------------ */
/*  SCROLL ROW HELPERS — reusable wheel + arrow scrolling              */
/* ------------------------------------------------------------------ */

function useHorizontalScroll() {
  const scrollRef = useRef(null);

  const handleWheel = (e) => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    scrollRef.current.scrollBy({ left: e.deltaY * 1.5, behavior: "auto" });
  };

  const scrollByAmount = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.8 * dir, behavior: "smooth" });
  };

  return { scrollRef, handleWheel, scrollByAmount };
}

function ScrollArrows({ onPrev, onNext }) {
  return (
    <>
      <button
        onClick={onPrev}
        aria-label="Scroll left"
        className="hidden sm:flex absolute left-0 top-0 bottom-4 z-20 w-12
                   items-center justify-center bg-gradient-to-r from-black/70 to-transparent
                   opacity-0 group-hover/row:opacity-100 transition-opacity"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        onClick={onNext}
        aria-label="Scroll right"
        className="hidden sm:flex absolute right-0 top-0 bottom-4 z-20 w-12
                   items-center justify-center bg-gradient-to-l from-black/70 to-transparent
                   opacity-0 group-hover/row:opacity-100 transition-opacity"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  FALLBACK IMAGE — used whenever an asset path 404s                  */
/* ------------------------------------------------------------------ */

const FALLBACK_POSTER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='450'>
      <rect width='100%' height='100%' fill='#1a1a1a'/>
      <rect x='0' y='0' width='100%' height='100%' fill='none' stroke='#333' stroke-width='2'/>
      <text x='50%' y='50%' fill='#555' font-family='sans-serif' font-size='18' text-anchor='middle'>N</text>
    </svg>`
  );

function handleImgError(e) {
  e.currentTarget.onerror = null;
  e.currentTarget.src = FALLBACK_POSTER;
}

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                              */
/* ------------------------------------------------------------------ */

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between
                  px-4 sm:px-8 lg:px-12 py-3 sm:py-4 transition-colors duration-300
                  ${scrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"}`}
    >
      <div className="flex items-center gap-6 lg:gap-10">
<img
  src={NetflixLogo}
  alt="Netflix"
  className="w-20 sm:w-24 lg:w-28 h-auto object-contain"
 />

        <nav className="hidden md:flex items-center gap-5 text-sm text-gray-200">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => navigate(link.to)}
              className={`transition-colors duration-150 hover:text-gray-400 ${
                i === 0 ? "font-semibold text-white" : "font-normal"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4 sm:gap-5 text-gray-200">
        <button aria-label="Search" className="hover:text-gray-400 transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z" />
          </svg>
        </button>
        <button aria-label="Notifications" className="hidden sm:inline-flex hover:text-gray-400 transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 2a6 6 0 0 0-6 6v3.09c0 .55-.2 1.08-.57 1.5L4 14.5V16h16v-1.5l-1.43-1.91a2.5 2.5 0 0 1-.57-1.5V8a6 6 0 0 0-6-6zm0 20a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22z" />
          </svg>
        </button>
        <button className="flex items-center gap-1 group">
  <img
    src={profileImage}
    alt={selectedProfile?.name || "Profile"}
    className="w-7 h-7 sm:w-8 sm:h-8 rounded object-cover 
               group-hover:ring-2 group-hover:ring-white
               transition-all duration-200"
  />

  <svg
    viewBox="0 0 24 24"
    className="w-3 h-3 fill-current hidden sm:block 
               group-hover:rotate-180 transition-transform duration-200"
  >
    <path d="M7 10l5 5 5-5z" />
  </svg>
</button>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO — Stranger Things                                             */
/* ------------------------------------------------------------------ */

function Hero({ onPlay }) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[62vh] sm:h-[75vh] lg:h-[85vh] min-h-[420px] overflow-hidden">
      <img
        src={HeroImg}
        alt="Stranger Things"
        onError={handleImgError}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
      />

      <video
        src={HeroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      <div className="relative h-full flex flex-col justify-end sm:justify-center px-4 sm:px-8 lg:px-12 pb-10 sm:pb-0 max-w-xl">
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <img
    src={NSeriesLogo}
    alt="N Series"
    className="w-5 h-auto object-contain"
  />
          <span className="text-gray-200 text-xs sm:text-sm font-semibold tracking-widest">
            SERIES
          </span>
        </div>

        <h1 className="text-white font-black uppercase leading-[0.95] text-4xl sm:text-6xl lg:text-7xl tracking-wide mb-4 sm:mb-6">
          THE BEST PART
          <br />
          OF MY LIFE
        </h1>

        <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-5 sm:mb-7 max-w-md drop-shadow">
          Your birthday deserves more than just a wish So I made you a little something to remind you how loved you are.
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={onPlay}
            className="flex items-center gap-2 bg-white hover:bg-white/80 text-black font-semibold
                       px-5 sm:px-7 py-2 sm:py-2.5 rounded text-sm sm:text-base transition-colors duration-150"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <button
            className="flex items-center gap-2 bg-gray-500/40 hover:bg-gray-500/30 text-white font-semibold
                       px-5 sm:px-7 py-2 sm:py-2.5 rounded text-sm sm:text-base transition-colors duration-150 backdrop-blur-sm"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            More Info
          </button>
        </div>
      </div>
    </section>  
  );
}

/* ------------------------------------------------------------------ */
/*  ROW HEADING                                                        */
/* ------------------------------------------------------------------ */

function RowHeading({ children }) {
  return (
    <h2 className="text-white text-lg sm:text-xl lg:text-4xl font-bold px-4 sm:px-8 lg:px-12 mb-3">
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/*  TRENDING NOW                                                       */
/* ------------------------------------------------------------------ */

function TrendingNow({ onSelect }) {
  const { scrollRef, handleWheel, scrollByAmount } = useHorizontalScroll();

  return (
    <section className="mt-6 sm:mt-10 relative group/row">
      <RowHeading>Trending Now</RowHeading>

      <ScrollArrows onPrev={() => scrollByAmount(-1)} onNext={() => scrollByAmount(1)} />

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex gap-2 sm:gap-5 overflow-x-auto overflow-y-visible
                   px-4 sm:px-8 lg:px-12 py-6 sm:py-8 -my-6 sm:-my-8
                   scrollbar-none scroll-smooth"
      >
        {trending.map((item) => (
          <button
            key={item.title}
            onClick={() => onSelect(item)}
            className="group relative flex-shrink-0 w-[110px] sm:w-[150px] lg:w-[210px]
                       aspect-[2/3] rounded-md overflow-hidden transition-transform duration-300
                       ease-out hover:scale-110 hover:z-10 focus:outline-none focus-visible:ring-2
                       focus-visible:ring-white"
          >
            <img
              src={item.image}
              alt={item.title}
              onError={handleImgError}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 shadow-[0_10px_30px_rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TOP 10                                                              */
/* ------------------------------------------------------------------ */

function TopTen({ onSelect }) {
  const { scrollRef, handleWheel, scrollByAmount } = useHorizontalScroll();

  return (
    <section className="mt-8 sm:mt-12 relative group/row">
      <RowHeading>Top 10 Things I Love About You</RowHeading>

      <ScrollArrows onPrev={() => scrollByAmount(-1)} onNext={() => scrollByAmount(1)} />

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-visible
                   pl-10 sm:pl-16 lg:pl-20 pr-6 sm:pr-10 lg:pr-16
                   py-6 -my-6 scrollbar-none scroll-smooth"
      >
        {topTen.map((item) => {
          const isDouble = item.rank >= 10;
          return (
            <button
              key={item.rank}
              onClick={() => onSelect(item)}
              className={`group relative flex-shrink-0 flex items-end focus:outline-none
                          ${isDouble ? "pl-8 sm:pl-11 lg:pl-14" : "pl-6 sm:pl-9 lg:pl-11"}`}
            >
              <span
                className={`absolute bottom-[-0.06em] leading-none select-none z-10
                            text-transparent font-black
                            ${isDouble
                              ? "left-[-0.15em] text-[64px] sm:text-[90px] lg:text-[108px]"
                              : "left-[-0.35em] text-[80px] sm:text-[110px] lg:text-[130px]"}`}
                style={{
                  WebkitTextStroke: "2px #4d4d4d",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                {item.rank}
              </span>

              <div
                className="relative z-0 w-[90px] sm:w-[120px] lg:w-[250px] aspect-[2/3] rounded-md
                           overflow-hidden transition-transform duration-300 ease-out
                           group-hover:scale-110 group-hover:z-10
                           group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={handleImgError}
                  className="w-full h-full object-cover"
                />

                {/* Bottom-right overlay text */}
                <div
                  className="absolute bottom-2 right-2 max-w-[82%]
                             px-2.5 py-2 sm:px-3 sm:py-2
                             rounded-md
                             bg-black/70 backdrop-blur-sm
                             text-white text-[9px] sm:text-xs lg:text-sm
                             font-bold leading-snug
                             text-right
                             opacity-0 translate-y-2
                             group-hover:opacity-100 group-hover:translate-y-0
                             transition-all duration-300"
                >
                  {item.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  VIDEO MARQUEE — infinite scroll row of video preview cards         */
/* ------------------------------------------------------------------ */

function MarqueeCard({ item, onSelect }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    videoRef.current?.play?.().catch(() => {});
  }, []);

  return (
    <button
      onClick={() => onSelect(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={`relative flex-shrink-0 w-[220px] sm:w-[500px] aspect-video rounded-md overflow-hidden
                  bg-neutral-900 transition-all duration-300 ease-out origin-center
                  focus:outline-none
                  ${hovered ? "scale-125 z-20 shadow-[0_15px_40px_rgba(0,0,0,0.8)]" : "scale-100 z-0"}`}
    >
      <video
        ref={videoRef}
        src={item.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={handleImgError}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {hovered && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-black">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-white">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
              </svg>
            </span>
            <span className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-white">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                <path d="M1 21h4V9H1zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73z" />
              </svg>
            </span>
          </div>
          <p className="text-white text-xs sm:text-sm font-semibold truncate">{item.title}</p>
          <p className="text-gray-400 text-[10px] sm:text-xs">{item.meta}</p>
        </div>
      )}
    </button>
  );
}

function VideoMarquee({ onSelect }) {
  const [paused, setPaused] = useState(false);
  const loopItems = [...marqueeVideos, ...marqueeVideos];

  return (
    <section className="mt-8 sm:mt-12 mb-16">
      <RowHeading>Our Favourite Moments</RowHeading>
      <div
        className="overflow-hidden px-4 sm:px-8 lg:px-12 py-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-4 sm:gap-5 w-max"
          style={{
            animation: "marquee-scroll 40s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {loopItems.map((item, i) => (
            <MarqueeCard key={`${item.title}-${i}`} item={item} onSelect={onSelect} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ACCORDION GALLERY SECTION — "A Few Moments"                        */
/* ------------------------------------------------------------------ */

function AccordionGallerySection() {
  return (
    <section
      className="w-full py-16 sm:py-24 px-4"
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #1a0509 50%, #000000 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
          A Few Moments
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-3">
          Some moments are worth keeping forever.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <AccordionGallery
          items={galleryItems}
          defaultIndex={2}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#ffffff"
          overlayColor="#060010"
          textColor="#ffffff"
          grayscale
          showLabels
          duration={0.6}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={460}
          gap={10}
          radius={16}
          orientation="horizontal"
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GIRLFRIEND DAY MESSAGE — canvas firecrackers + scroll reveal       */
/* ------------------------------------------------------------------ */

function useFirecrackers(canvasRef, active) {
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height, dpr;
    let particles = [];
    let rafId;
    let spawnTimer;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#ff2d3d", "#ff6b6b", "#8b1e2b", "#ffffff"];

    function spawnBurst() {
      const cx = Math.random() * width;
      const cy = Math.random() * height * 0.8 + height * 0.05;
      const count = 8 + Math.floor(Math.random() * 6);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
        const speed = 0.6 + Math.random() * 1.4;
        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 45 + Math.random() * 25,
          size: 1 + Math.random() * 1.8,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    function scheduleSpawn() {
      const delay = 900 + Math.random() * 1400;
      spawnTimer = setTimeout(() => {
        spawnBurst();
        scheduleSpawn();
      }, delay);
    }
    scheduleSpawn();

    function tick() {
      ctx.clearRect(0, 0, width, height);
      particles = particles.filter((p) => p.life < p.maxLife);

      for (const p of particles) {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        const t = p.life / p.maxLife;
        const alpha = 1 - t;

        ctx.beginPath();
        ctx.globalAlpha = Math.max(alpha, 0);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      rafId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(spawnTimer);
      cancelAnimationFrame(rafId);
      particles = [];
    };
  }, [active, canvasRef]);
}

function GirlfriendDayMessage() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useFirecrackers(canvasRef, visible);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden px-4
                  transition-all duration-1000 ease-out
                  ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"}`}
      style={{
        background: "radial-gradient(ellipse at center, #1a0509 0%, #000000 70%)",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 text-center">
        <h2
          className={`text-white italic font-serif text-4xl sm:text-5xl lg:text-6xl tracking-wide
                      transition-all duration-1000 ease-out delay-150
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          A Little Something for You
        </h2>
        <p
          className={`mt-4 sm:mt-6 text-red-400/80 text-sm sm:text-base tracking-[0.2em] uppercase
                      transition-all duration-1000 ease-out delay-300
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
         Happy Birthday to the man who somehow became my favorite person, my safest place, and my biggest reason to smile. Today is all about you so sit back, press play, and let me show you just how much you mean to me❤️
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  LOVE LETTER — envelope open animation + confetti                   */
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

function LoveLetter() {
  const [open, setOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleOpen = useCallback(() => {
    if (open) return;
    setOpen(true);
    setConfettiKey((k) => k + 1);
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
        background: "linear-gradient(to bottom, #000000 0%, #1a0509 45%, #000000 100%)",
      }}
    >
      {!showLetter && (
        <div className="relative flex flex-col items-center text-center" style={{ perspective: "1200px" }}>
          <button
            onClick={handleOpen}
            aria-label="Open the letter"
            className="relative w-[220px] sm:w-[280px] aspect-[3/2] focus:outline-none group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-[#3a0a12] to-[#1a0509] border border-[#5a1a24] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-60">
                <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black/30 to-transparent" />
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/30 to-transparent" />
              </div>
            </div>

<div
  className="absolute left-1/2 w-[80%] bg-[#f6efe1] rounded-sm shadow-lg"
  style={{
    height: "70%",
    bottom: "8%",
    zIndex: 1,
    transform: open
      ? "translateX(-50%) translateY(-55%) scale(1.05)"
      : "translateX(-50%) translateY(0) scale(1)",
    transition: "transform 900ms ease-out",
  }}
/>

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
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />
            </div>

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl transition-opacity duration-300"
              style={{ opacity: open ? 0 : 1, zIndex: 3 }}
            >
              {"\uD83D\uDC8C"}
            </div>
          </button>

          <h3 className="mt-8 text-white text-xl sm:text-2xl font-serif italic">A Letter For You</h3>
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
              <p key={i} className="font-serif text-[#3a2c1e] text-sm sm:text-base leading-relaxed mb-4">
                {para}
              </p>
            ))}

            <p className="font-serif text-[#3a2c1e] text-base sm:text-lg mt-6 sm:mt-8">
              {letterContent.closing}
            </p>

            <div className="mt-6 sm:mt-8">
              <p className="font-serif italic text-[#3a2c1e] text-sm sm:text-base">{letterContent.signature}</p>
              <p className="font-serif italic text-[#3a2c1e] text-base sm:text-lg">{letterContent.name}</p>
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

/* ------------------------------------------------------------------ */
/*  FULLSCREEN VIDEO MODAL                                             */
/* ------------------------------------------------------------------ */

function FullscreenVideoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-white/90 hover:text-white transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>

      <video
        src={HeroVideo}
        controls
        autoPlay
        muted
        playsInline
        className="w-full h-full object-contain"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HOME PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleSelectTitle = useCallback(
    (item) => {
      // 👉 CHANGE THE DESTINATION ROUTE HERE
      navigate(`/title/${encodeURIComponent(item.title)}`);
    },
    [navigate]
  );

  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />

      <Hero onPlay={() => setIsVideoOpen(true)} />

      <TrendingNow onSelect={handleSelectTitle} />
      <TopTen onSelect={handleSelectTitle} />
      <VideoMarquee onSelect={handleSelectTitle} />

      {/* <AccordionGallerySection /> */}
      <GirlfriendDayMessage />
      <LoveLetter />

      <FullscreenVideoModal open={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
}