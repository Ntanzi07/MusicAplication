import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <nav className="select-none w-full mix-blend-difference fixed top-0 flex justify-between py-5 z-10">
        <div className=" pr-4 sm:pl-16 pl-4">
          <h2 className=" nothing-you-could-do-regular text-[2em]">NTanzi</h2>
        </div>
        <div className=" pl-4 sm:pr-16 pr-4">
          <h2 className="px-4 rounded-3xl text-[2em]">Musics</h2>
        </div>
      </nav>

      <Hero />
    </main>
  );
}
