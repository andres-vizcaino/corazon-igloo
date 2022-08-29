import HeartIcon from "./HeartIcon";

function HeroBanner() {
  return (
    <section className="grid min-h-screen place-content-center place-items-center bg-slate-200 text-center">
      <HeartIcon classNames="w-40 h-40 animate-bounce fill-igloolab" />
      <h1 className="text-4xl font-bold">igloolab</h1>
      <span className="mt-1 text-lg text-igloolab">#diadelcorazon</span>

      <a
        className="flex items-center gap-5 mt-10 bg-igloolab p-3 rounded-full font-extrabold text-white"
        href="https://ctt.ac/614tU"
      >
        <img src="/twitter.svg" className="w-8 h-8" />
        Haz un tweet
      </a>
    </section>
  );
}

export default HeroBanner;
