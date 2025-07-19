import gsap from "gsap";

function getFillers(el: HTMLElement) {
  let textA = el.dataset.text ?? "Dhuruv Bansal";
  let textB = el.dataset.secondtext ?? "Dhuruv Bansal";
  const arrLength = Math.max(textA.length, textB.length) - Math.min(textA.length, textB.length);
  const filler = new Array(arrLength).fill(" ").join();
  if (textA.length > textB.length) textB = textB + filler;
  else textA = textA + filler;

  return [textA, textB] as const;
}

export function loopScramble(scrambleText: unknown[]) {
  const tls: gsap.core.Timeline[] = [];

  scrambleText.forEach((element) => {
    const el = element as HTMLElement;
    const [textA, textB] = getFillers(el);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "restart none restart none",
      },
      repeat: -1,
      repeatDelay: 5,
    });

    // Animate to second text
    tl.to(el, {
      scrambleText: {
        text: textB,
        chars: textA,
        revealDelay: 0,
        speed: 0.2,
        rightToLeft: false,
      },
      duration: 1.5,
      delay: 4,
    });

    // Animate back to original
    tl.to(el, {
      scrambleText: {
        text: textA,
        chars: textB,
        revealDelay: 0,
        speed: 0.2,
        rightToLeft: false,
      },
      duration: 1.5,
      delay: 4,
    });
    tls.push(tl);
  });
  return tls;
}
