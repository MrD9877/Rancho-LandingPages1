import { AlignJustify } from "lucide-react";
import BookVisitButton from "./BookVisitButton";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import NavButton from "./NavButton";
import { useNavigate } from "@tanstack/react-router";

const navItems = [
  { name: "Ranch Life", scrollTo: "#discover" },
  { name: "Breath", scrollTo: "#scaleVideo" },
  { name: "Events", scrollTo: "#events" },
  { name: "Directions", scrollTo: "#directions" },
  { name: "About us", scrollTo: "#footer" },
];

export default function LandingCard({ scrollRef }: { scrollRef: React.RefObject<ScrollSmoother | null> }) {
  const tlRef = useRef<gsap.core.Timeline>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useGSAP(() => {
    const menu = document.querySelector("#menu");
    tlRef.current = gsap.timeline({ paused: true });
    tlRef.current.to(menu, {
      duration: 0.5,
      height: "60vh",
      opacity: 100,
    });
    tlRef.current.reverse();
  });

  useEffect(() => {
    function closeMenu(e: MouseEvent) {
      const itemClicked = e.target as HTMLElement;
      if (!menuButtonRef.current?.contains(itemClicked) && !menuRef.current?.contains(itemClicked)) tlRef.current?.reversed(true);
    }
    addEventListener("click", closeMenu);
    return () => {
      removeEventListener("click", closeMenu);
    };
  }, [tlRef, menuButtonRef, menuRef]);

  return (
    <div className="relative w-vw h-svh rounded-lg ">
      <div className="absolute z-10 h-full w-full p-4 text-creamBackground grid grid-rows-6 md:grid-rows-4 ">
        <div className="relative">
          <nav className="flex justify-between  px-4 py-8 lg:px-14 items-start w-full lg:py-7 row-span-1 ">
            <div className="flex">
              <div className="lg:flex items-center">
                <span className="lg:text-center revel-on-load">RH</span>
                <div className="h-3.5 opacity-75 w-px bg-gray-400 ml-6 hidden lg:block" />
              </div>
              <div className="lg:flex gap-7 items-center px-6 hidden">
                {navItems.map((item) => {
                  return (
                    <NavButton data-displace={25} onClick={() => scrollRef.current?.scrollTo(item.scrollTo, true)} key={item.name} className="revel-on-load">
                      {item.name}
                    </NavButton>
                  );
                })}
              </div>
            </div>

            <div className="lg:block hidden">
              <BookVisitButton className="revel-on-load-button" />
            </div>
            <button ref={menuButtonRef} onClick={() => tlRef.current?.reversed(!tlRef.current.reversed())} className="lg:hidden revel-on-load-button">
              <AlignJustify />
            </button>
          </nav>
          <div ref={menuRef} className="absolute  z-20 w-full lg:hidden px-4 ">
            <ul id="menu" className="bg-black w-full h-0 rounded-2xl flex flex-col gap-12 items-center justify-center overflow-hidden select-none">
              {navItems.map((item) => {
                return (
                  <NavButton className="cursor-pointer" onClick={() => scrollRef.current?.scrollTo(item.scrollTo, true)} key={item.name}>
                    {item.name}
                  </NavButton>
                );
              })}
              <NavButton onClick={() => navigate({ to: "/contact" })}>Book a visit</NavButton>
            </ul>
          </div>
        </div>

        <div className="grid row-start-3 row-span-4 md:row-start-2 md:row-span-3 grid-rows-5 md:grid-rows-4">
          <div className="row-span-2 sm:row-span-2">
            <img src="/svg/star.svg" className="w-fit mx-auto h-fit" alt="" />
            <h1
              style={{
                textTransform: "uppercase",
                fontWeight: "400",
                lineHeight: 1.15,
              }}
              className=" text-center animate-me-chars-onload text-17vw lg:text-15vw font-ZodiakVariable"
            >
              RANCHO
            </h1>
          </div>

          <div style={{ fontSize: "1rem", lineHeight: 1.5 }} className="row-span-1 flex items-center animate-me-words-onload">
            <p className="lg:w-2/5 px-4 lg:px-0 mx-auto text-center ">Rancho is a modern ranch retreat designed for quiet escapes, outdoor living, and meaningful gatherings. From scenic views to curated experiences, Rancho offers a place to slow down, reconnect, and enjoy nature with intention.</p>
          </div>
          <button onClick={() => scrollRef.current?.scrollTo("#discover", true)} className=" w-fit mx-auto row-start-5 lg:row-start-4  row-span-1 hover:scale-[1.4]">
            Discover
          </button>
        </div>
      </div>
      <div className="p-4 w-full h-full">
        <video src="/video/mountains.mp4" className="w-full h-full object-cover rounded-xl landingCard" autoPlay loop muted playsInline />
      </div>
    </div>
  );
}
