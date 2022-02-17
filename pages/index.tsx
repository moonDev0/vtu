import type { NextPage } from "next";
import Form from "../components/Home/form";
import { PriceTable } from "../components/Home/PriceTable";

const Home: NextPage = () => {
  return (
    <div className="mx-auto font-semibold bg-gradient-to-r from-green-400 to-primary w-full">
      <nav className="bg-black w-full text-4xl md:text-5xl text-white p-10 py-6">
        EASYTOPUP
      </nav>
      <main className="flex flex-wrap gap-16 mx-5 justify-center md:justify-between min-h-[24rem] pt-10 md:pt-24 items-start ">
        <div className="mx-auto">
          <h1 className="text-5xl md:text-6xl  font-bold text-white">Buy Data.</h1>
          <h1 className="text-5xl md:text-6xl font-bold  text-white">Buy Airtime.</h1>
          <h1 className="text-5xl md:text-6xl font-bold  text-white">PayBills.</h1>
          <h1 className="text-5xl md:text-6xl font-normal text-white">Securely.</h1>
        </div>
        <Form />
      </main>

      <section className="flex mt-5 flex-col justify-center items-center">
        <h2 className="text-3xl font-medium text-gray-800">Pricing</h2>
        <h5 className="text-white font-medium">Check our Pricing</h5>
      </section>

      <PriceTable />
    </div>
  );
};

export default Home;
