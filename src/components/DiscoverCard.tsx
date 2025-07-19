export default function DiscoverCard() {
  return (
    <main id="discover" className="min-h-[100svh] w-full text-center discover  mb-[60vh]">
      <div className="card mb-[70vh]">
        <div className="h-[30vh] discover-text  mb-[10vh]">
          <h3 className="my-3">What Lives Here</h3>
          <p style={{ fontWeight: 400 }} className="font-ZodiakVariable px-4 md:px-0 md:w-2/3 mx-auto text-center text-1.5Rem md:text-2Rem xl:text-2.2Rem ">
            Rancho is more than a home it’s a living rhythm. Open fields. Wooden fences weathered by time. Horses grazing at dawn. Smoke curling from the hearth as dusk settles in.
          </p>
        </div>
      </div>
      <div className="md:w-[80vh] md:h-[45vh] h-[45vw]  w-[80vw]  mx-auto card mb-[40vh]  ">
        <img src="/image/animalInFarm1.jpg" alt="farm image" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="md:w-[80vh] md:h-[45vh] h-[45vw] w-[80vw] mx-auto card  mb-[40vh]">
        <img src="/image/animalInFarm2.jpg" alt="farm image" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="md:w-[80vh] md:h-[45vh] h-[45vw] w-[80vw] mx-auto card cards ">
        <img src="/image/animalInFarm3.jpg" alt="farm image" className="w-full h-full object-cover rounded-xl" />
      </div>
    </main>
  );
}
