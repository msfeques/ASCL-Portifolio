import Image from "next/image";

interface Magazine {
  title: string;
  date: string;
  coverImage: string;
  link: string;
}

export default function MagazineCard({ magazine }: { magazine: Magazine }) {
  const { title, date, coverImage, link } = magazine;
  const meta = [date].filter(Boolean).join(" · ");

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ler ${title}${meta ? `, ${meta}` : ""}`}
      className="flex flex-col bg-white border border-border rounded-[2px] overflow-hidden"
    >
      <div className="relative w-full aspect-[16/6] bg-ink">
        <Image
          src={coverImage}
          alt={`Capa da edição: ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-1 p-4">
        {meta && (
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-1">
            {meta}
          </p>
        )}
        <h3 className="font-sans text-xl leading-[1.25] font-bold tracking-[-0.01em] text-ink mb-2">
          {title}
        </h3>
        <span className="font-sans text-sm font-semibold text-gold underline underline-offset-4 hover:text-gold-deep w-fit">
          Ler edição
        </span>
      </div>
    </a>
  );
}