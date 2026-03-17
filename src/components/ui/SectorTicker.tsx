import { SECTORS } from "@/lib/constants";

export function SectorTicker() {
  const sectorText = SECTORS.join(" · ");

  return (
    <div
      className="w-full overflow-hidden py-6"
      aria-hidden="true"
    >
      <div className="ticker-track flex whitespace-nowrap font-mono text-sm text-terra/50">
        <span className="mr-12">{sectorText}</span>
        <span className="mr-12">{sectorText}</span>
        <span className="mr-12">{sectorText}</span>
        <span className="mr-12">{sectorText}</span>
      </div>
    </div>
  );
}
