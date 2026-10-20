interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionTitle({
  tag,
  title,
  subtitle,
  light = false,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-14 ${centered ? "text-center" : ""}`}>
      {tag && (
        <p className="text-brand-accent text-xs tracking-[0.25em] uppercase font-normal mb-3">
          {tag}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-light leading-tight tracking-tight ${
          light ? "text-white" : "text-brand-text"
        } ${centered ? "heading-accent-center" : "heading-accent"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-sm font-light leading-relaxed max-w-xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/50" : "text-brand-text/55"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
