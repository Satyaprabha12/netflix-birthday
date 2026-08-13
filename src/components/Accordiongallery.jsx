import AccordionGallery from "./AccordionGallery";

const galleryItems = [
  {
    image: "https://picsum.photos/id/1015/900/1200",
    label: "Canyon",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1018/900/1200",
    label: "Ridgeline",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1039/900/1200",
    label: "Falls",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1043/900/1200",
    label: "Harbour",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1044/900/1200",
    label: "Skyline",
    link: "#",
  },
];

export default function AccordionGallerySection() {
  return (
    <section
      className="w-full py-16 sm:py-24 px-4"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #1a0509 50%, #000000 100%)",
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