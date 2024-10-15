import "./About.css";

const About = () => {
  return (
    <div className="aboutContainer">
      {/* Encabezado Principal */}
      <header className="aboutHeader">
        <h1>Acerca de Nosotros</h1>
        <p>
          Bienvenido a Fotografía Web, donde la pasión por la fotografía se
          encuentra con la creatividad. Nos dedicamos a capturar momentos únicos
          que cuentan historias y a convertir tus recuerdos en obras de arte
          visual.
        </p>
      </header>

      {/* Sección de Misión */}
      <section className="missionSection">
        <h2>Nuestra Misión</h2>
        <p>
          Nuestra misión es proporcionar a nuestros clientes una experiencia
          fotográfica única y memorable. Nos esforzamos por capturar la esencia
          de cada momento importante, ya sea una boda, un cumpleaños o un evento
          especial. Creemos que cada imagen tiene el poder de evocar emociones y
          contar una historia, y trabajamos incansablemente para asegurarnos de
          que esos momentos sean preservados de la mejor manera posible.
        </p>
      </section>

      {/* Sección de Visión */}
      <section className="visionSection">
        <h2>Nuestra Visión</h2>
        <p>
          Aspiramos a ser reconocidos como uno de los principales estudios de
          fotografía en la industria. Nuestro objetivo es crear imágenes que no
          solo se ven bien, sino que también cuentan una historia profunda y
          significativa. Nos esforzamos por innovar y superar las expectativas
          de nuestros clientes, utilizando técnicas avanzadas y un enfoque
          artístico en cada proyecto.
        </p>
        <p>
          Creemos en la importancia de la conexión humana y buscamos no solo
          capturar imágenes, sino también construir relaciones duraderas con
          nuestros clientes.
        </p>
      </section>

      {/* Sección de Valores */}
      <section className="valuesSection">
        <h2>Valores</h2>
        <p>
          En Fotografía Web, nuestros valores son fundamentales para todo lo que
          hacemos. Nos guiamos por los siguientes principios:
        </p>
        <ul className="valores">
          <li className="valor">
            <strong>Creatividad:</strong> Fomentamos un ambiente donde la
            innovación y la originalidad florecen, buscando siempre nuevas
            maneras de ver el mundo a través de la lente.
          </li>
          <li className="valor">
            <strong>Pasión:</strong> La fotografía es más que un trabajo para
            nosotros; es nuestra pasión. Cada proyecto nos inspira a dar lo
            mejor de nosotros mismos.
          </li>
          <li className="valor">
            <strong>Calidad:</strong> Nos comprometemos a ofrecer la más alta
            calidad en cada imagen, prestando atención a cada detalle desde la
            captura hasta la edición.
          </li>
          <li className="valor">
            <strong>Compromiso con el cliente:</strong> Escuchamos y
            comprendemos las necesidades de nuestros clientes para brindarles
            una experiencia personalizada y satisfactoria.
          </li>
        </ul>
      </section>

      {/* Sección de Contacto */}
      <section className="contactSection">
        <h2>Contáctanos</h2>
        <p>
          Estamos aquí para ayudarte. Si tienes alguna pregunta, deseas más
          información sobre nuestros servicios o quieres reservar una sesión, no
          dudes en contactarnos. Nuestro equipo está listo para atenderte y
          hacer de tu experiencia fotográfica algo inolvidable.
        </p>
        <p>
          Puedes contactarnos a través de nuestro formulario de contacto o
          llamándonos directamente. ¡Esperamos tener noticias tuyas pronto!
        </p>
      </section>
    </div>
  );
};

export default About;
