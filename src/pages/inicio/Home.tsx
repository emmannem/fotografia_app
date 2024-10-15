import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      {/* Header Principal */}
      <header className="homeHeader">
        <div className="headerOverlay">
          <h1>Bienvenido a Fotografía Web</h1>
          <p>Descubre el arte de capturar momentos perfectos.</p>
          <button className="ctaButton">Comienza tu Aventura</button>
        </div>
      </header>

      {/* Sección de Introducción */}
      <section className="homeIntroduction">
        <div className="introductionContent">
          <h2>Transforma tu Pasión en Arte</h2>
          <p>
            Fotografía Web es tu plataforma de aprendizaje. Desde cursos para
            principiantes hasta técnicas avanzadas, te ayudamos a perfeccionar
            tus habilidades y capturar imágenes que cuenten historias.
          </p>
          <button className="learnMoreButton">Aprende Más</button>
        </div>
        <img
          className="introductionImage"
          src="https://picsum.photos/600/400?random=6"
          alt="Fotografía inspiradora"
        />
      </section>

      {/* Sección de Cursos */}
      <section className="coursesSection">
        <h2>Explora Nuestros Cursos</h2>
        <div className="coursesGrid">
          <div className="courseItem">
            <h3>Curso Básico de Fotografía</h3>
            <p>Aprende las bases para dominar tu cámara y mejorar tus fotos.</p>
            <img
              src="https://picsum.photos/300/200?random=11"
              alt="Curso Básico de Fotografía"
            />
          </div>
          <div className="courseItem">
            <h3>Curso Avanzado de Fotografía</h3>
            <p>
              Perfecciona tus técnicas y lleva tus habilidades fotográficas al
              siguiente nivel.
            </p>
            <img
              src="https://picsum.photos/300/200?random=12"
              alt="Curso Avanzado de Fotografía"
            />
          </div>
          <div className="courseItem">
            <h3>Edición Profesional</h3>
            <p>Mejora tus fotos con técnicas avanzadas de edición digital.</p>
            <img
              src="https://picsum.photos/300/200?random=13"
              alt="Edición Profesional"
            />
          </div>
          <div className="courseItem">
            <h3>Fotografía de Paisajes</h3>
            <p>
              Descubre cómo capturar la belleza natural en impresionantes
              fotografías de paisajes.
            </p>
            <img
              src="https://picsum.photos/300/200?random=14"
              alt="Fotografía de Paisajes"
            />
          </div>
        </div>
        <button className="allCoursesButton">Ver Todos los Cursos</button>
      </section>

      {/* Sección de Galería Destacada */}
      <section className="featuredGallery">
        <h2>Nuestro Trabajo</h2>
        <p className="galleryDescription">
          Explora algunas de nuestras mejores obras y el talento de nuestros
          estudiantes.
        </p>
        <div className="galleryGrid">
          <div className="galleryItem">
            <img src="https://picsum.photos/300/200?random=7" alt="Trabajo 1" />
          </div>
          <div className="galleryItem">
            <img
              src="https://picsum.photos/300/200?grayscale=1"
              alt="Trabajo 2"
            />
          </div>
          <div className="galleryItem">
            <img src="https://picsum.photos/300/200?blur=1" alt="Trabajo 3" />
          </div>
          <div className="galleryItem">
            <img
              src="https://picsum.photos/300/200?gyayscale&blur=1"
              alt="Trabajo 4"
            />
          </div>
          <div className="galleryItem">
            <img src="https://picsum.photos/300/200?random=8" alt="Trabajo 5" />
          </div>
          <div className="galleryItem">
            <img
              src="https://picsum.photos/300/200?grayscale=2"
              alt="Trabajo 6"
            />
          </div>
          <div className="galleryItem">
            <img src="https://picsum.photos/300/200?blur=2" alt="Trabajo 7" />
          </div>
          <div className="galleryItem">
            <img
              src="https://picsum.photos/300/200?gyayscale&blur=2"
              alt="Trabajo 8"
            />
          </div>
        </div>
      </section>

      {/* Sección de Opiniones */}
      <section className="testimonialsSection">
        <h2>Lo que nuestros estudiantes dicen</h2>
        <div className="testimonialsGrid">
          <div className="testimonial">
            <p>
              "Este curso cambió completamente mi perspectiva profesional. Los
              instructores son de primera clase."
            </p>
            <h4>- Juan Pérez</h4>
          </div>
          <div className="testimonial">
            <p>
              "La flexibilidad para aprender a mi propio ritmo fue clave para
              terminar este curso con éxito."
            </p>
            <h4>- Laura Gutiérrez</h4>
          </div>
          <div className="testimonial">
            <p>
              "El contenido del curso es actualizado y está bien estructurado,
              ¡realmente valió la pena!"
            </p>
            <h4>- Miguel Rodríguez</h4>
          </div>
          <div className="testimonial">
            <p>
              "Una experiencia educativa increíble. ¡Me siento mucho más
              preparado para enfrentar nuevos desafíos!"
            </p>
            <h4>- Ana Fernández</h4>
          </div>
          <div className="testimonial">
            <p>
              "La atención personalizada y el apoyo constante de los tutores me
              ayudaron a no rendirme."
            </p>
            <h4>- Carlos López</h4>
          </div>
          <div className="testimonial">
            <p>
              "Los proyectos prácticos me permitieron aplicar lo aprendido de
              manera realista y efectiva."
            </p>
            <h4>- Mariana Sánchez</h4>
          </div>
          <div className="testimonial">
            <p>
              "Definitivamente, uno de los mejores cursos online que he tomado.
              Muy recomendable."
            </p>
            <h4>- Diego Ramírez</h4>
          </div>
          <div className="testimonial">
            <p>
              "Gracias a este curso, obtuve las habilidades necesarias para
              conseguir el trabajo de mis sueños."
            </p>
            <h4>- Sofía Martínez</h4>
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="ctaSection">
        <h2>¿Estás Listo para Capturar el Mundo?</h2>
        <p>
          Únete a nuestra comunidad de fotógrafos apasionados. Aprende nuevas
          técnicas, comparte tus trabajos y crece junto a nosotros.
        </p>
        <button className="ctaButton">Regístrate Hoy</button>
      </section>
    </div>
  );
};

export default Home;
