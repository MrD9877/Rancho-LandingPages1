import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function useRancherAnimation() {
  const container = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<ScrollSmoother>(null);

  //   smooth scroll
  useGSAP(
    () => {
      scrollRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.2,
      });
    },
    { scope: container }
  );

  //   landingCard

  useGSAP(
    (context) => {
      const q = context.selector;
      if (!q) return;
      gsap.to(q(".landingCard"), {
        scrollTrigger: {
          trigger: q(".landingCard"),
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scaleX: 0.94,
        scaleY: 0.94,
        rotateX: "14deg",
      });

      ScrollTrigger.refresh();
    },
    { scope: container } // Make sure 'container' is a valid ref!
  );

  // book visit button hover effects

  useEffect(() => {
    const pairs = document.querySelectorAll(".pair");

    pairs.forEach((pair) => {
      const button = pair.querySelector(".trigger");
      const image = pair.querySelector(".targetImg");
      const text = pair.querySelector(".targetText");
      const split = SplitText.create(text, { type: "lines", aria: "hidden", mask: "lines" });
      const displaceLine = 8;
      if (!button || !image) return;
      button.addEventListener("mouseenter", () => {
        gsap.to(image, {
          rotateZ: 180,
          duration: 0.5,
        });
        const tl = gsap.timeline();

        // 1. Move up with no fading — then immediately disappear
        tl.to(split.lines, {
          y: -displaceLine,
          duration: 0.25,
          ease: "power1.out",
        });

        // 2. Instantly reset chars to below with opacity 0 (hard cut)
        tl.set(split.lines, {
          y: displaceLine,
        });

        // 3. Snap in from below with full opacity (no fade-in)
        tl.to(split.lines, {
          y: 0,
          duration: 0.25,
          ease: "power1.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(image, {
          rotateZ: 0,
          duration: 0.5,
        });
        const tl = gsap.timeline();

        tl.to(split.lines, {
          y: displaceLine,
          duration: 0.25,
          ease: "power1.out",
        });

        // 2. Instantly reset chars to below with opacity 0 (hard cut)
        tl.set(split.lines, {
          y: -displaceLine,
        });

        // 3. Snap in from below with full opacity (no fade-in)
        tl.to(split.lines, {
          y: 0,
          duration: 0.25,
          ease: "power1.out",
        });
      });
    });
  }, []);

  /// nav buttons

  useEffect(() => {
    const navs = document.querySelectorAll(".navButton");

    navs.forEach((button) => {
      const text = button.querySelectorAll(".navText");
      console.log(text);
      const split1 = SplitText.create(text[0], { type: "chars" });
      const split2 = SplitText.create(text[1], { type: "chars" });
      const displaceLine = parseFloat(button.getAttribute("data-displace") || "12");
      const duration = 0.5;
      const stagger = 0.02;
      button.addEventListener("mouseenter", () => {
        gsap.to(split1.chars, {
          y: -displaceLine,
          duration: duration,
          opacity: 100,
          stagger,
        });
        gsap.to(split2.chars, {
          y: -displaceLine,
          duration: duration,
          opacity: 100,
          stagger,
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(split1.chars, {
          y: 0,
          duration: duration,
          stagger,
        });
        gsap.to(split2.chars, {
          y: 0,
          duration: duration,
          stagger,
        });
      });
    });
  }, []);

  ///reveal words
  useGSAP(
    (context) => {
      const q = context.selector;
      if (!q) return;
      const split = SplitText.create(q(".animate-me-words-onload"), { type: "words", aria: "hidden" });

      gsap.from(split.words, {
        opacity: 0,
        duration: 1.5,
        ease: "sine.out",
        stagger: 0.1,
        delay: 1.5,
      });
    },
    { scope: container }
  );
  ///reveal chars
  useGSAP(
    (context) => {
      const q = context.selector;
      if (!q) return;
      const split = SplitText.create(q(".animate-me-chars-onload"), { type: "chars", aria: "hidden" });

      gsap.from(split.chars, {
        opacity: 0,
        duration: 1,
        ease: "sine.out",
        stagger: 0.1,
        delay: 0.3,
      });
    },
    { scope: container }
  );

  /// revel all
  useGSAP(
    (context) => {
      const q = context.selector;
      if (!q) return;

      const split = SplitText.create(".revel-on-load", {
        type: "words",
        wordsClass: "word++",
        wordDelimiter: String.fromCharCode(8205),
      });

      gsap.from(split.words, {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: "back",
      });

      gsap.from(".revel-on-load-button", {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: "back",
      });
    },
    { scope: container }
  );

  //   discover
  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");
      const vh = 40;
      const px = (vh / 100) * window.innerHeight;

      const rotatefinal = [0, "0deg", "6deg", "-5deg"];
      const rotateStart = [0, "12deg", "-14deg", "19deg"];
      cards.forEach((card, index) => {
        gsap.set(card as HTMLElement, { rotateZ: rotateStart[index] });
        const tl = gsap.timeline();
        tl.to(card as HTMLDivElement, {
          scrollTrigger: {
            trigger: card as HTMLDivElement,
            start: index === 0 ? `top top` : `top-=${px} top`,
            endTrigger: ".cards",
            end: `bottom bottom-=${px}`,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          },
        });
        tl.to(card as HTMLDivElement, {
          scrollTrigger: {
            trigger: card as HTMLDivElement,
            start: index === 0 ? `top top` : `top-=${px} top`,
            end: `bottom bottom-=${px}`,
            scrub: true,
          },
          rotateZ: rotatefinal[index],
        });
      });
      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  //scale
  useGSAP(
    (context) => {
      const q = context.selector;
      if (!q) return;
      const tl = gsap.timeline();

      tl.from(q(".scale"), {
        scrollTrigger: {
          trigger: ".scaleContent",
          start: `top top`,
          end: `bottom+=${1000} top`,
          pin: true,
          scrub: true,
        },
        scale: 0.5,
      });
      tl.from(q(".shadow-animate"), {
        scrollTrigger: {
          trigger: ".scaleContent",
          start: `top top`,
          end: `bottom+=${1000} top`,
          scrub: true,
        },
        opacity: 0,
      });
      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  useEffect(() => {
    return () => {
      ScrollSmoother.get()?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      scrollRef.current = null;
    };
  }, []);
  return { container, scrollRef };
}
