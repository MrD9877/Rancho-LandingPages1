export default function ImageWithTextCard({ imageUrl, heading, text }: { imageUrl: string; heading: string; text: string }) {
  return (
    <div className="w-full h-full bg-cover bg-center bg-no-repeat min-h-[70vh] rounded-xl flex flex-col justify-end items-start py-8 pl-8 pr-32 text-creamBackground" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div>
        <img src="/svg/starCream.svg" className="w-8 h-8 object-contain" alt="" />
      </div>
      <h2
        style={{
          fontSize: "2rem",
          lineHeight: 1.3,
          textTransform: "uppercase",
        }}
        className=" font-ZodiakVariable"
      >
        {heading}
        <br />—
      </h2>
      <p>{text}</p>
    </div>
  );
}
