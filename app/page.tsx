import Image from "next/image";
import Dobra1 from "@/components/sections/dobra-1";
import Dobra2 from "@/components/sections/dobra-2";
import Dobra3 from "@/components/sections/dobra-3";
import Dobra4 from "@/components/sections/dobra-4";
import Dobra5 from "@/components/sections/dobra-5";
import Dobra6 from "@/components/sections/dobra-6";

export default function Home() {
  return (
    <main className="body-home">
      <div className="">
        <Dobra1 />
        <Dobra2 />
        <Dobra3 />
        <Dobra4 />
        <Dobra5 />
        <Dobra6 />
      </div>
    </main>
  );
}
