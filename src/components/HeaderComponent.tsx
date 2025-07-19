export default function HeaderComponent({ header, text }: { header?: string; text: string }) {
  return (
    <div className="mt-[24vh] px-4 md:px-10">
      {header && <h3 className="text-center font-CabinetGrotesk opacity-90">{header}</h3>}
      <p
        style={{
          fontSize: "1.8rem",
          fontWeight: 380,
          lineHeight: 1.5,
        }}
        className="text-center w-full max-w-[84vh] font-ZodiakVariable mx-auto mt-6 "
      >
        {text}
      </p>
    </div>
  );
}
