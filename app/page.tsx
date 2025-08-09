import Image from "next/image";
import Dobra1 from "@/components/sections/dobra-1";
import Dobra2 from "@/components/sections/dobra-2";
import Dobra3 from "@/components/sections/dobra-3";
import Dobra4 from "@/components/sections/dobra-4";
import Dobra5 from "@/components/sections/dobra-5";
import Dobra6 from "@/components/sections/dobra-6";
import Dobra7 from "@/components/sections/dobra-7";
import Dobra8 from "@/components/sections/dobra-8";

export default function Home() {
  return (
    <main className="body-home">
      <div>
        <section id="home">
          <Dobra1 />
        </section>
        <section id="como-funciona">
          <Dobra2 />
        </section>
        <section id="reservas">
          <Dobra3 />
        </section>
        <section id="api">
          <Dobra4 />
        </section>
        <section id="casos-de-uso">
          <Dobra5 />
        </section>
        <section id="perguntas">
          <Dobra7 />
        </section>
        <section id="contato">
          <Dobra8 />
        </section>
      </div>
    </main>
  );
}
