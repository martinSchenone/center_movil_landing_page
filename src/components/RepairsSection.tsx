import repairIMG from "/images/repair_image.jpg";
import samsung from "/icons/samsung.svg";
import apple from "/icons/apple-14.svg";
import motorola from "/icons/motorola-2.svg";
import xiaomi from "/icons/xiaomi-3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faSquareCheck,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

export const RepairsSection = () => {
  const brandIcons = [
    {
      icon: samsung,
      alt: "Samsung",
      url: "https://www.samsung.com/es/",
    },
    {
      icon: apple,
      alt: "Apple",
      url: "https://www.apple.com/es/",
    },
    {
      icon: motorola,
      alt: "Motorola",
      url: "https://www.motorola.com/us/",
    },
    {
      icon: xiaomi,
      alt: "Xiaomi",
      url: "https://www.xiaomi.com/es/",
    },
  ];
  return (
    <>
      <div className="bg-[#173B45] min-h-screen flex flex-col relative gap-10">
        <div className="w-full h-10 bg-[#22525e] rounded-br-[9999px]"></div>
        <section className="flex flex-col max-w-6xl mx-auto gap-10 ">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-6  text-[#ffe194] items-center text-center order-2  md:flex-1 justify-evenly ">
              <h1 className="uppercase text-2xl font-semibold bg-[#173B45] w-full text-[#F8EDED] mix-blend-screen py-2 md:text-4xl sm:rounded-xl">
                En{" "}
                <b className="-tracking-tight text-[#ffe194]">center movil</b>
              </h1>
              <h2 className="text-xl font-semibold text-[#F8EDED] leading-7 md:text-2xl">
                Nos especializamos en{" "}
                <b className="uppercase text-[#FF8225]">reparación</b> y{" "}
                <b className="uppercase text-[#FF8225]">servicio técnico</b> de
                dispositivos móviles.
              </h2>
              <p className="text-[#F8EDED] text-lg  leading-6 px-2 md:text-2xl">
                <b>Resolvemos</b> todo tipo de problemas técnicos que puedan
                afectar tu dispositivo.
                <br />{" "}
                <b className="uppercase text-warning">
                  Pantallas rotas o agrietadas
                </b>
                <br />
                <b className="uppercase text-[#ffe194]">Daños por agua</b>
                <br />
                <b className="uppercase text-warning">Problemas de carga</b>
                <br />y todo tipo de fallas incluyendo errores de{" "}
                <b className="uppercase text-error">software</b>.
                <br />
              </p>
              <p className="text-[#F8EDED] md:text-xl px-2">
                Nuestro equipo técnico está capacitado para brindar soluciones
                precisas y efectivas, asegurando que tu teléfono funcione
                perfectamente.
              </p>
            </div>
            <div className="w-[min(100%,320px)] mx-auto flex items-center justify-center md:flex-1">
              <img src={repairIMG} className="h-full w-full sm:rounded-xl" />
            </div>
          </div>
          <div className="info_cont flex flex-col gap-10 ">
            <div className="exp_container bg-[#ffe194] flex flex-col md:flex-row md:justify-between sm:text-xl md:text-2xl gap-10 md:gap-4 text-center font-bold text-[#22525e]  p-10 uppercase sm:rounded-xl shadow">
              <div className="flex flex-col gap-6">
                <div className="relative   flex items-center justify-center ">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    size="2xl"
                    style={{ color: "#303030" }}
                    className="absolute -bottom-1"
                  />
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    size="2xl"
                    style={{ color: "#FF8225" }}
                    className="relative"
                  />
                </div>
                <div>
                  <p>+14 AÑOS </p>
                  <p>DE EXPERIENCIA</p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="relative   flex items-center justify-center ">
                  <FontAwesomeIcon
                    icon={faWrench}
                    size="2xl"
                    style={{ color: "#303030" }}
                    className="absolute -bottom-1"
                  />
                  <FontAwesomeIcon
                    icon={faWrench}
                    size="2xl"
                    style={{ color: "#FF8225" }}
                    className="relative"
                  />
                </div>
                <div>
                  <p>+ 50.000 </p>
                  <p>REPARACIONES</p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="relative   flex items-center justify-center ">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    size="2xl"
                    style={{ color: "#303030" }}
                    className="absolute -bottom-1 "
                  />
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    size="2xl"
                    style={{ color: "#FF8225" }}
                    className="relative"
                  />
                </div>
                <div className="">
                  <p>GARANTIA EXCLUSIVA</p>
                  <p className="text-[#FF8225]">center movil</p>
                </div>
              </div>
            </div>
            <div className="text-2xl text-center flex flex-col gap-1 bg-[#5d9bac] py-2 sm:rounded-xl">
              <h2 className="-order-2 text-[#F8EDED] font-semibold">
                Encontranos en
              </h2>
              <h1 className="text-[#ffefb1d0] font-bold tracking-tight">
                MERCEDES, BS.AS.
              </h1>
            </div>
            <div className="px-4 text-[#eee] text-lg sm:text-xl sm:text-center w-full flex flex-col gap-2">
              <p>
                Reparaciones rapidas, con garantia y sinceridad para nuestros
                clientes.
              </p>
              <p>Trabajamos con todas las marcas lideres.</p>
              <div className="flex items-center justify-center md:justify-evenly flex-col gap-8 sm:flex-row py-10 ">
                {brandIcons &&
                  brandIcons.map((icon) => (
                    <a
                      href={icon.url}
                      target="_blank"
                      className="w-32 flex items-center  h-32 lg:w-40 lg:h-40 p-2 bg-[#eee] font-bold rounded-md shadow-xl 
                      border-b-4 border-r-4 border-[#151515] "
                    >
                      <img
                        src={icon.icon}
                        alt={icon.alt}
                        className="mix-blend-darken w-full h-full object-contain"
                      />
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-10 bg-[#22525e] rounded-tl-[9999px]"></div>
      </div>
    </>
  );
};
