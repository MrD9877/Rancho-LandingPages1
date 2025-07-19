import HeaderComponent from "./HeaderComponent";
import ImageWithTextCard from "./ImageWithTextCard";

const imageBG = [
  {
    imageUrl: "/image/house.jpg",
    heading: "A return to slow mornings & open skies",
    text: "Rancho is a retreat built for those who long for peace, space, and simplicity. Set among quiet hills and endless skies, it invites you to slow down, breathe deeply, and rediscover a sense of presence.",
  },
  {
    imageUrl: "/image/cowboy.jpg",
    heading: "A return to rhythm, movement, and earth",
    text: "At Rancho, life follows the land. Horses run free, silence speaks, and the wild reminds us who we are. This is where motion meets meaning, and presence becomes a way of life.",
  },
];

export default function EventsCard() {
  return (
    <div id="events" className="w-full mt-[24vh] px-4 md:px-10">
      <HeaderComponent header="The Land, The Spirit, The Name" text="Rancho was born from the desire to return — to the land, to meaning, to something deeper than speed and noise." />
      <div className="grid w-full grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 md:gap-8 mt-16 ">
        {imageBG.map((item, index) => {
          return <ImageWithTextCard key={index} imageUrl={item.imageUrl} heading={item.heading} text={item.text} />;
        })}
      </div>
    </div>
  );
}
