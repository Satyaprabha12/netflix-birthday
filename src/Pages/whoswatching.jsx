import { useNavigate } from "react-router-dom";
import Profile1 from "../assets/me.jpg"
import Profile2 from "../assets/you.jpg"
import Profile3 from "../assets/us.jpg"

const profiles = [
  {
    id: 1,
    name: "Me",
    image: Profile1,
  },
  {
    id: 2,
    name: "You",
    image: Profile2,
  },
  {
    id: 3,
    name: "Us",
    image: Profile3,
  },
];

export default function WhosWatching() {
  const navigate = useNavigate();

const handleSelectProfile = (profile) => {
  localStorage.setItem("selectedProfile", JSON.stringify(profile));
  navigate("/home");
};

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #1a0000 35%, #3a0505 50%, #1a0000 65%, #000000 100%)",
      }}
    >
      {/* Netflix logo */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10">
        <span className="text-red-600 font-extrabold text-2xl sm:text-3xl tracking-tight select-none">
          NETFLIX
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-gray-200 text-3xl sm:text-5xl font-medium mb-10 sm:mb-14 text-center">
        Who&apos;s watching?
      </h1>

      {/* Profiles */}
      <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            type="button"
            onClick={() => handleSelectProfile(profile)}
            className="group flex flex-col items-center cursor-pointer bg-transparent border-none p-0 focus:outline-none"
            aria-label={`Select profile ${profile.name}`}
          >
            <div
              className="w-24 h-24 sm:w-36 sm:h-36 rounded-md overflow-hidden border-2 border-transparent
                         transition-all duration-200 ease-in-out
                         group-hover:scale-105 group-hover:border-white
                         group-focus-visible:scale-105 group-focus-visible:border-red-600"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "data:image/svg+xml;utf8," +
                    encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
                        <rect width='100%' height='100%' fill='#404040'/>
                        <circle cx='100' cy='80' r='40' fill='#8c8c8c'/>
                        <rect x='40' y='130' width='120' height='70' rx='35' fill='#8c8c8c'/>
                      </svg>`
                    );
                }}
              />
            </div>
            <span
              className="mt-3 text-sm sm:text-base text-gray-400 transition-colors duration-200
                         group-hover:text-gray-100 group-focus-visible:text-gray-100"
            >
              {profile.name}
            </span>
          </button>
        ))}
      </div>

      {/* Manage Profiles */}
      <button
        type="button"
        className="mt-12 sm:mt-16 px-5 py-2 text-xs sm:text-sm tracking-widest uppercase
                   text-gray-400 border border-gray-600 bg-transparent
                   hover:text-white hover:border-white
                   transition-colors duration-200"
      >
        Manage Profiles
      </button>
    </div>
  );
}