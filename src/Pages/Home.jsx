import CounterIncreament from "../Components/CounterIncreament";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SliderBrands from "../Components/SliderBrands";
import banner1 from "../assets/imgs/banner-1.png";
import banner2 from "../assets/imgs/banner-2.png";

export default function Home() {
  return (
    <>
      <main className="bg-[#222] text-white">
        <Header />
        <SliderBrands />
        <CounterIncreament />
        <div className="px-8 md:px-10 lg:px-15 py-5">
          <img
            className="mx-auto w-full rounded-2xl"
            loading="lazy"
            src={banner1}
            alt="First banner"
          />
        </div>
        <div className="px-8 md:px-10 lg:px-15 py-5">
          <img
            className="mx-auto w-full rounded-2xl"
            loading="lazy"
            src={banner2}
            alt="Second banner"
          />
        </div>
        <Footer />
      </main>
    </>
  );
}
