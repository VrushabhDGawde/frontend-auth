export default function HeroImage() {
  return (
    <div className="hidden lg:block relative w-0 flex-1">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/undraw_designer_life.svg"
        alt="Designer life illustration"
      />
    </div>
  );
}
