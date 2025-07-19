export default function Footer() {
  return (
    <footer id="footer" className="my-14 px-4 md:px-8 flex flex-col gap-5  md:grid grid-cols-2 grid-rows-3 md:flex-row md:gap-12">
      <div className="flex flex-col gap-6 col-span-1 col-start-2 row-span-2 row-start-1 ">
        <div className="flex flex-col gap-2">
          <span className="text-sm ">ADDRESS</span>
          <span className="w-72 text-xl">Ranch — 1847 Dusty Creek Road xxxxxxxxxx, TX 78xxx4 United States</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>PHONE</span>
          <span className="text-xl">+1 (512) xxx-xxxx</span>
        </div>
      </div>
      <p
        style={{
          fontWeight: 380,
          lineHeight: 1.5,
        }}
        className=" w-[92%] max-w-[84vh] text-1.5Rem font-ZodiakVariable mt-6 col-span-1 col-start-1 row-span-2 row-start-1  xl:text-2Rem"
      >
        We welcome kindred spirits. Whether you're looking for silence, space, or simply a change in pace — Rancho is open.
      </p>
      <div className="col-span-2 row-start-3 ">
        <div className="flex justify-between md:grid grid-cols-2">
          <div className="flex gap-2">
            <span>Developed by</span>
            <a href="https://dhuruvbansal.online" target="_blank">
              <span className="opacity-80 underline">Dhuruv Bansal</span>
            </a>
          </div>
          <div className="flex gap-2">
            <span>Powered by</span>
            <a href="https://vite.dev/" target="_blank">
              <span className="opacity-80 underline">Vite</span>
            </a>
          </div>
        </div>
        <div className="my-2 ">
          Copyright <span className="text-blue-700">©</span>{" "}
        </div>
      </div>
    </footer>
  );
}
