import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import useAnimatedText from "../hooks/useAnimatedText";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);
  useAnimatedText();
  return (
    <div className="my-24">
      <ContactSection />
    </div>
  );
}
