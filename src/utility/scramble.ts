import gsap from "gsap";

const upperAndLowerCase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const getRandomLetter = () => upperAndLowerCase[Math.round(upperAndLowerCase.length * Math.random())];

const getChars = (n: number) => {
  const arr: string[] = [];
  for (let i = 0; i <= n; i++) {
    arr.push(getRandomLetter());
  }

  return arr.join("");
};

export function scramble(scrambleText: unknown[]) {
  const tls: gsap.core.Timeline[] = [];
  scrambleText.forEach((element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element as HTMLElement,
        start: "top bottom",
        toggleActions: "restart none restart none",
      },
    });
    tl.to(element as HTMLElement, {
      scrambleText: {
        text: (element as HTMLElement).innerText,
        chars: getChars((element as HTMLElement).innerText.length),
        revealDelay: 0.5, // delay before revealing starts
        speed: 0.2, // slower speed (default is ~0.05)
        rightToLeft: false, // ensure it reveals from left to right
        newClass: "myClass",
      },
      duration: 1.5,
    });
    tls.push(tl);
  });

  return tls;
}
