export function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold leading-[1.25] tracking-tight text-[#1a1a1a] m-0">
        {title}
      </h2>
      {description && <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.5] text-[#757575] m-0">{description}</p>}
    </div>
  );
}
