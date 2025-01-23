import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex flex-col gap-4 items-center sm:items-start">
          <Image
            className="dark:hidden"
            src="/img/convers1.png"
            alt="Convers logo"
            layout="intrinsic"
            width={500}
            height={500}
            priority
          />
        </div>

        <div className="flex flex-col gap-4 items-center sm:items-start">
          <Image
            className="dark:block hidden"
            src="/img/convers2.png"
            alt="Convers logo"
            layout="intrinsic"
            width={500}
            height={500}
            priority
          />
        </div>


        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <div className="mb-2">
            Comming soon ...
          </div>
        </div>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/convrz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            color="white"
          />
          Go to github/convrz →
        </a>
      </footer>
    </div>
  );
}
