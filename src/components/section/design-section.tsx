const FIGMA_DESIGNS = [
  {
    label: "Dsouk",
    url: "https://www.figma.com/design/TVTtLKP1qhtwom834d2wIl/DSOUK?node-id=0-1",
  },
  {
    label: "Thribe",
    url: "https://www.figma.com/design/TVTtLKP1qhtwom834d2wIl/DSOUK?node-id=26-16127",
  },
];

function embedUrl(url: string) {
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
}

export default function DesignSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <div>
        <h2 className="text-xl font-bold">Design</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Selected Figma work — pan and zoom inside each embed.
        </p>
      </div>
      {FIGMA_DESIGNS.map((design) => (
        <div key={design.url} className="flex flex-col gap-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium">{design.label}</span>
            <a
              href={design.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
            >
              Open in Figma
            </a>
          </div>
          <div className="border rounded-xl overflow-hidden ring-2 ring-border/20 aspect-[4/3]">
            <iframe
              src={embedUrl(design.url)}
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              title={design.label}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
