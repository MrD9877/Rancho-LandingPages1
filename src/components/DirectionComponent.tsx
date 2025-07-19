import HeaderComponent from "./HeaderComponent";
import FeatureInfoCard from "./FeatureInfoCard";
import BookVisitButton from "./BookVisitButton";

const featureArr = [
  {
    imageUrl: "/image/sheeps.jpg",
    header: "The land",
    text: "Rancho begins with the land — the rolling fields, still mornings, and the quiet rhythms of nature. This is a place where sheep graze under golden light, where time slows, and the earth reminds us what it means to be rooted.",
  },
  {
    imageUrl: "/image/eggBasket.jpg",
    header: "The Spirit",
    text: "There's a spirit here that lives in the details — the warmth of shared meals, the honesty of hard work, the echo of footsteps on wooden floors. It's in the stories passed down, in the breath between tasks, in the care behind every simple act.",
  },
  {
    imageUrl: "/image/openGround.jpg",
    header: "The Vision",
    text: "Our vision is to protect what matters — space, silence, beauty, and belonging. Rancho is not just a place to visit, but a way of being. We invite those who seek intention, wonder, and a deeper kind of wealth to return to what truly nourishes.",
  },
];

export default function DirectionComponent() {
  return (
    <div id="directions" className="mt-[24vh] px-4 md:px-10 ">
      <HeaderComponent header="The Things That Still Matter" text="Rancho invites you to slow down — to move with purpose, to remember what life feels like when it breathes with meaning." />
      <ul className="flex flex-col gap-14 md:gap-32 my-14 md:my-32">
        {featureArr.map((item, index) => {
          return <FeatureInfoCard key={index} imageUrl={item.imageUrl} header={item.header} text={item.text} index={index} />;
        })}
      </ul>
      <div className="w-fit mx-auto text-creamBackground">
        <BookVisitButton />
      </div>
    </div>
  );
}
