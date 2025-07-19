import BookVisitButton from "./BookVisitButton";

export default function VideoScalingCard() {
  return (
    <main id="scaleVideo" className="w-vw h-svh p-4 scaleContent">
      <div className="w-full h-full scale  relative">
        <div className="w-full h-full rounded-[3rem] absolute z-10  text-creamBackground shadowVideo ">
          <div className="w-full h-full flex justify-center items-center flex-col shadow-animate">
            <div className="font-Zodiak text-XHuge font-normal">BREATH</div>
            <BookVisitButton />
          </div>
        </div>
        <video src="/video/sheeps.mp4" className="w-full h-full rounded-[3rem] object-cover" autoPlay loop muted playsInline />
      </div>
    </main>
  );
}
