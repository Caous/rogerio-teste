export default function HeaderDocs({ subtitle, title, description }) {
  return (
    <section className="relative w-full lg:h-[500px] flex items-center justify-center bg-black px-5 py-20 xl:p-10">
      <div className="absolute inset-0">
        <img
          src="/wallpaper.png"
          alt="Pessoa usando furadeira"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-white">
        {subtitle && (
          <span className="bg-[#FE5000] text-sm font-semibold px-4 py-1 rounded mb-4 inline-block">
            {subtitle}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
