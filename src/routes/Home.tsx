import gsap from "gsap";
import DiscoverCard from "../components/DiscoverCard";
import LandingCard from "../components/LandingCard";
import useRancherAnimation from "../hooks/useRancherAnimation";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import VideoScalingCard from "../components/VideoScalingCard";
import EventsCard from "../components/Events";
import DirectionComponent from "../components/DirectionComponent";
import Footer from "../components/Footer";

export default function Home() {
  gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

  const { container, scrollRef } = useRancherAnimation();
  return (
    <div id="smooth-wrapper" ref={container}>
      <div id="smooth-content">
        <LandingCard scrollRef={scrollRef} />
        <DiscoverCard />
        <VideoScalingCard />
        <EventsCard />
        <DirectionComponent />
        <Footer />
      </div>
    </div>
  );
}
