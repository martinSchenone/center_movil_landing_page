import direccionIcon from "/icons/location.svg";
import whatasppIcon from "/icons/whatsapp.svg";
import emailIcon from "/icons/email.svg";

export const ContactSection = () => {
  /* #ffe194 -> amarillo clarito 
       #FF8225 -> naranja clarito
       #173B45 -> verde oscurito 
    */
  const contactItems = [
    {
      icon: whatasppIcon,
      label: "Whatsapp",
      href: "https://wa.me/5492324505937",
      texto: {
        1: "+54 9 2324505937",
      },
    },
    {
      icon: emailIcon,
      label: "Email",
      href: "mailto:centermovil2328@gmail.com",
      texto: {
        1: "centermovil2328@gmail.com",
      },
    },
    {
      icon: direccionIcon,
      label: "Ubicación",
      texto: {
        1: "Calle 23 Esquina 28.",
        2: "Mercedes, Buenos Aires.",
      },
    },
  ];
  return (
    <section className="min-h-screen flex flex-col  bg-[#ffe194] pb-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center w-full gap-8 ">
        <div className="title text-3xl lg:text-5xl sm:rounded-b-2xl font-bold uppercase w-full flex items-center justify-center bg-[#ffe194] mix-blend-multiply p-2 md:p-4 tracking-tight shadow-xl">
          <h1>Contacto</h1>
        </div>
        <div className="divider"></div>
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className=" w-full gap-4 bg-[#ffe194] flex flex-col justify-around">
            {contactItems &&
              contactItems.map((item) => (
                <>
                  <a
                    className="flex flex-col items-center max-w-lg justify-start md:justify-between gap-4 py-8  w-full bg-[#FFF0D1] border-b-2 sm:rounded-xl shadow-md uppercase"
                    href={item?.href}
                    target="_blank"
                  >
                    <div className="w-12 h-12 sm:w-20  ">
                      <img src={item.icon} className="w-full h-full" />
                    </div>
                    <div className="text-xl lg:text-2xl  font-bold uppercase text-[#303030]">
                      <h2>{item.label}</h2>
                    </div>
                    <div className="flex flex-col  md:text-lg gap-1 items-center justify-center text-center opacity-80">
                      <p>{item.texto?.[1]}</p>
                      <p>{item.texto?.[2]}</p>
                    </div>
                  </a>
                </>
              ))}
          </div>
          <div className="flex items-center justify-center shadow-md bg-[#FFF0D1] px-2 sm:rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.179694573617!2d-59.43146932482471!3d-34.650164559951584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc7375ab36e4a9%3A0x4d24c9d44ba3cac3!2sCenter%20M%C3%B3vil%20-%20Local%20de%20Reparaci%C3%B3n%20y%20Servicio%20t%C3%A9cnico%20para%20Celulares%20en%20Mercedes.!5e0!3m2!1ses-419!2sar!4v1727135077874!5m2!1ses-419!2sar"
              width="600"
              height="450"
              style={{ border: "0px " }}
              className="sm:rounded-xl shadow"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
