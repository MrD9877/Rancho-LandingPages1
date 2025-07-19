import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export function charsRevel(animatedChars: unknown[]) {
  animatedChars.forEach((line) => {
    SplitText.create(line as HTMLElement, {
      type: "chars",
      smartWrap: true,
      onSplit: (split) => {
        return gsap.from(split.chars, {
          yPercent: 50,
          ease: "power4.out",
          stagger: 0.1,
          opacity: 0,
          scrollTrigger: {
            trigger: line as HTMLElement,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        });
      },
    });
  });
}
