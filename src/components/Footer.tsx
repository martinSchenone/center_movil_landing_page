export const Footer = () => {
  return (
      <footer className="footer bg-neutral text-neutral-content p-10 min-h-[50dvh] flex items-center justify-evenly flex-col sm:flex-row sm:text-xl">
        <nav>
          <h6 className="footer-title">Servicios</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Compañia</h6>
          <a className="link link-hover">Inicio</a>
          <a className="link link-hover">Contacto</a>
          <a className="link link-hover">Trabajos</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
  );
};
