import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <h2 className="font-display text-3xl text-text sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  );
}
