export default function FeatureInfoCard({ imageUrl, header, text, index }: { imageUrl: string; header: string; text: string; index: number }) {
  const odd = index % 2 !== 0;
  return (
    <li className="flex flex-col justify-start items-start gap-6 lg:grid grid-cols-2 lg:gap-20 grid-rows-1 ">
      <div style={{ gridColumnStart: odd ? 2 : 1, gridRowStart: 1 }} className="w-full h-[50vh] lg:h-[37rem]  col-span-1">
        <img src={imageUrl} alt="" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div style={{ gridColumnStart: odd ? 1 : 2, gridRowStart: 1 }} className="lg:my-auto  col-span-1">
        <h2 className="font-ZodiakVariable text-1Rem md:text-3Rem" style={{ textTransform: "uppercase", lineHeight: 1.4, fontWeight: 400 }}>
          {header}
        </h2>
        <div className="my-6">
          <img src="/svg/divider.svg" loading="lazy" alt="-" />
        </div>
        <p style={{ fontSize: "1.125rem" }}>{text}</p>
      </div>
    </li>
  );
}
