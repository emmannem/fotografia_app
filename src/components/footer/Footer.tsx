import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Fotografía Web</h2>
        <p>Capturando momentos, creando recuerdos.</p>

        <div className="footer-links">
          <h3>Enlaces útiles</h3>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/about">Acerca de</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@fotografiaweb.com">info@fotografiaweb.com</a>
          </p>
          <p>
            Teléfono: <a href="tel:+123456789">+1 234 567 89</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Fotografía Web. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
