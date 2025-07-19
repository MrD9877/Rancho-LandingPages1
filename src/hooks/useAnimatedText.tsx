import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import { masketAnimation } from "../utility/maskedAnimation";
import { charsRevel } from "../utility/charsRevelAnimation";
import { scramble } from "../utility/scramble";
import { loopScramble } from "../utility/LoopScramble";

export default function useAnimatedText() {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger, ScrambleTextPlugin);
    const maskedLines = gsap.utils.toArray(".maskedLine-animation");
    const animatedChars = gsap.utils.toArray(".charsReveling-animation");
    const imageAnimmation = gsap.utils.toArray(".image-animation");
    masketAnimation(maskedLines);
    charsRevel(animatedChars);

    imageAnimmation.forEach((image) => {
      gsap.from(image as HTMLElement, {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.8,
        ease: "power2.in",
        delay: 0.3,
        scrollTrigger: {
          trigger: image as HTMLElement,
          start: "top bottom",
        },
      });
    });

    gsap.from(".button-animation", {
      clipPath: "inset(100% 0 0 0)",
      duration: 1.2,
      ease: "power2.in",
      delay: 0.3,
    });

    const scrambleText = gsap.utils.toArray(".scrambleText-animation");
    let tls: gsap.core.Timeline[] = [];
    const tl1 = scramble(scrambleText);
    const loopScrambleElements = gsap.utils.toArray(".scrambleLoop-animation");
    const tl2 = loopScramble(loopScrambleElements);
    tls = [...tls, ...tl1, ...tl2];
    return () => {
      tls.forEach((tl) => {
        tl.scrollTrigger?.kill();
        tl.kill();
      });
    };
  }, []);
  return <div></div>;
}
