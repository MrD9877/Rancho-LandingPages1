import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
export function masketAnimation(maskedLines: unknown[]) {
  maskedLines.forEach((line) => {
    SplitText.create(line as HTMLElement, {
      type: "lines",
      mask: "lines",
      onSplit: (split) => {
        return gsap.from(split.lines, {
          y: 100,
          autoAlpha: 0,
          delay: 0.4,
          ease: "sine.out",
          stagger: 0.5,
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
