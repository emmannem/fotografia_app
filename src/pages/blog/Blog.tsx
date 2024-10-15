import "./Blog.css";

const Blog = () => {
  return (
    <div className="blogContainer">
      {/* Cabecera */}
      <header className="blogHeader">
        <h1>Explora el Arte de la Fotografía</h1>
        <p>
          Consejos, técnicas y las mejores historias del mundo de la fotografía.
        </p>
      </header>

      {/* Sección de Publicaciones Recientes */}
      <section className="recentPosts">
        <h2>Publicaciones Recientes</h2>
        <div className="postsGrid">
          {/* Tarjeta de Publicación */}
          <div className="postCard">
            <img
              src="https://picsum.photos/1052/701?random=1"
              alt="Publicación 1"
            />
            <h3>Cómo mejorar tus retratos con luz natural</h3>
            <p>
              Aprende a utilizar la luz natural para darle un toque profesional
              a tus retratos.
            </p>
            <button className="readMoreButton">Leer Más</button>
          </div>

          <div className="postCard">
            <img
              src="https://picsum.photos/1052/701?random=2"
              alt="Publicación 2"
            />
            <h3>Equipo esencial para fotografía de paisajes</h3>
            <p>
              Descubre los elementos básicos que todo fotógrafo de paisajes debe
              tener.
            </p>
            <button className="readMoreButton">Leer Más</button>
          </div>

          <div className="postCard">
            <img
              src="https://picsum.photos/1052/701?random=3"
              alt="Publicación 3"
            />
            <h3>Domina la composición fotográfica en 5 pasos</h3>
            <p>
              Aprende a aplicar reglas de composición para mejorar tus fotos.
            </p>
            <button className="readMoreButton">Leer Más</button>
          </div>
        </div>
      </section>

      {/* Sección de Categorías */}
      <section className="categoriesSection">
        <h2>Categorías</h2>
        <div className="categoriesGrid">
          <button className="categoryButton">Técnicas de Fotografía</button>
          <button className="categoryButton">Equipo Fotográfico</button>
          <button className="categoryButton">Inspiración</button>
          <button className="categoryButton">Consejos Rápidos</button>
          <button className="categoryButton">Entrevistas</button>
        </div>
      </section>

      {/* Sección de Tip del Día */}
      <section className="tipOfTheDay">
        <h2>Tip del Día</h2>
        <div className="tipCard">
          <img src="https://picsum.photos/300/200?random=4" alt="Tip del Día" />
          <p>
            Usa el modo manual en tu cámara para experimentar con la exposición.
            ¡Te sorprenderán los resultados!
          </p>
          <button className="readMoreButton">Ver Más</button>
        </div>
      </section>

      {/* Sección de Publicaciones Destacadas */}
      <section className="featuredPosts">
        <h2>Publicaciones Destacadas</h2>
        <div className="postsGrid">
          <div className="postCard">
            <img
              src="https://picsum.photos/1052/701?random=5"
              alt="Destacada 1"
            />
            <h3>La mejor manera de capturar fotografías de acción</h3>
            <p>
              Conoce las técnicas para fotografiar movimientos rápidos y obtener
              resultados nítidos.
            </p>
            <button className="readMoreButton">Leer Más</button>
          </div>

          <div className="postCard">
            <img
              src="https://picsum.photos/1052/701?random=6"
              alt="Destacada 2"
            />
            <h3>Explorando la fotografía minimalista</h3>
            <p>
              Aprende a simplificar tus fotos para crear una imagen más
              impactante.
            </p>
            <button className="readMoreButton">Leer Más</button>
          </div>

          <div className="postCard">
            <img
              src="https://picsum.photos/1052/701?grayscale=7"
              alt="Destacada 3"
            />
            <h3>Consejos para capturar retratos en blanco y negro</h3>
            <p>
              Cómo usar la ausencia de color para crear fotos más expresivas.
            </p>
            <button className="readMoreButton">Leer Más</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
