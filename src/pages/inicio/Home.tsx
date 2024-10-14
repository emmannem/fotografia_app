import React from "react";
import "./Home.css"; // Puedes agregar estilos personalizados en este archivo

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a Fotografía Web</h1>
        <p>Captura la belleza del mundo a través de tu lente.</p>
      </header>

      <section className="home-introduction">
        <h2>Sobre la Fotografía</h2>
        <p>
          La fotografía es el arte y la práctica de crear imágenes duraderas
          mediante la captura de luz, ya sea de forma química o digital. Desde
          paisajes impresionantes hasta retratos emotivos, la fotografía nos
          permite contar historias y congelar momentos en el tiempo.
        </p>
      </section>

      <section className="home-tips">
        <h2>Consejos para Principiantes</h2>
        <ul>
          <li>
            Conoce tu cámara: Aprende a utilizar las configuraciones manuales.
          </li>
          <li>Practica la composición: Utiliza la regla de los tercios.</li>
          <li>
            Experimenta con la iluminación: La luz natural puede ser tu mejor
            amiga.
          </li>
          <li>
            ¡No tengas miedo de ser creativo! Prueba diferentes ángulos y
            estilos.
          </li>
        </ul>
      </section>

      <section className="home-gallery">
        <h2>Galería de Imágenes</h2>
        <div className="gallery">
          <img
            src="https://picsum.photos/200/300?random=1"
            alt="Fotografía 1"
          />
          <img
            src="https://picsum.photos/200/300?random=2"
            alt="Fotografía 2"
          />
          <img
            src="https://picsum.photos/200/300?random=3"
            alt="Fotografía 3"
          />
          <img
            src="https://picsum.photos/200/300?random=4"
            alt="Fotografía 4"
          />
          <img
            src="https://picsum.photos/200/300?random=5"
            alt="Fotografía 5"
          />
        </div>
      </section>

      <section className="home-links">
        <h2>Explora Más</h2>
        <p>
          ¿Listo para profundizar en el mundo de la fotografía? Visita nuestras
          secciones de
          <strong> Acerca de</strong>, <strong>Contacto</strong> o{" "}
          <strong>Blogs</strong> para descubrir más sobre este arte.
        </p>
      </section>
    </div>
  );
};

export default Home;
