import { useNavigate } from "@tanstack/react-router";

export default function BookVisitButton({ className }: { className?: string }) {
  const navigate = useNavigate();
  return (
    <div className="pair">
      <button onClick={() => navigate({ to: "/contact" })} className={`bg-black px-6 py-3 rounded-lg flex items-center gap-2 trigger ${className}`}>
        <span className="targetText">Book a visit</span>
        <span>
          <img src="/svg/star.svg" alt="" className="w-3 h-3 object-contain rotateZ targetImg " />
        </span>
      </button>
    </div>
  );
}
