interface MarqueeSectionProps {
  items: string[];
}

export function MarqueeSection({ items }: MarqueeSectionProps) {
  return (
    <div className="marquee" aria-label="Marquee de repertorio">
      <div className="marquee-inner">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <i className="dot-sep" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
