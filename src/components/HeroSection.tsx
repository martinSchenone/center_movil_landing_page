import heroIMG from "/images/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
export const HeroSection = () => {
  return (
    <section className=" w-full flex items-start" id="home">
      <div className="h-[90dvh] w-full object-cover sm:h-[70dvh] md:h-[85vh] lg:h-[100dvh] bg-[linear-gradient(to_right,_rgba(0,_0,_0,_1),_rgba(0,0,0,0.9))] relative flex items-center justify-start">
        <div className="h-full w-full hero-overlay opacity-40">
          <img src={heroIMG} className="h-full w-full opacity-60" />
        </div>
        <div className="absolute flex flex-col pl-2 gap-10  ">
          <div className="flex flex-col gap-2 uppercase  text-[#F8EDED]  tracking-normal">
            <div className="relative">
              <h1
                className="
              tracking-wider
            text-4xl sm:text-5xl lg:text-7xl font-bold text-[#151515] relative"
              >
                Expertos
                <span className="absolute -left-1 bottom-1 sm:bottom-2 text-[#ffe194]">
                  Expertos
                </span>
              </h1>
            </div>
            <h2 className="text-lg tracking-wide   sm:text-2xl  lg:text-4xl font-semibold">
              en reparar <b className="text-[#ffe194]  ">Tú</b> celular.
            </h2>
            <h3 className="text-[#FF8225] font-semibold text-xl lg:text-2xl uppercase opacity-90">
              Con mas de 10 años en el rubro de Reparaciones.
            </h3>
            <p className="flex gap-2">
              <FontAwesomeIcon icon={faMapLocation} />
              <b className="text-[#ffe194]">MERCEDES</b>, BUENOS AIRES.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="border-b-4 border-r-4 border-[#151515] text-[#151515]  bg-[#FF8225] opacity-90 hover:opacity-100 active:scale-95 active:bg-[#ff8325a6] text-lg w-fit p-1.5 rounded-xl font-bold sm:text-2xl lg:text-3xl sm:px-4 md:px-6 lg:px-8 hover:scale-95 transition-all">
              <a className="uppercase" href="#jobs">
                Nuestros Trabajos
              </a>
            </div>
            <div className="text-[#151515] border-b-4 border-r-4 border-[#151515]  bg-[#ffe194] opacity-90 hover:opacity-100 active:scale-95 active:bg-[#ff8325a6] text-lg w-fit p-1.5 rounded-xl font-bold sm:text-2xl lg:text-3xl sm:px-4 md:px-6 lg:px-8 hover:scale-95 transition-all">
              <a className="uppercase" href="#contacto">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
