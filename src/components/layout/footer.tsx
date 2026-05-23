export function Footer() {
  return (
    <footer className="bg-[#000000] text-[rgba(255,255,255,0.7)] py-[64px] px-[48px] rounded-none">
      <div className="max-w-[1280px] mx-auto text-center border-t border-[#5e5e5e] pt-[32px]">
        <p className="text-[10px] font-bold leading-[1.5] text-[#757575] uppercase m-0 tracking-widest">
          © {new Date().getFullYear()} Sujeet Gund. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
