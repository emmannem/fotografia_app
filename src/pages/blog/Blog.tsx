import React, { useEffect, useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]); // Estado para almacenar los blogs
  const [loading, setLoading] = useState<boolean>(true); // Estado para mostrar la carga

  useEffect(() => {
    // Hacer la llamada a la API cuando el componente se monta
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.slice(0, 6)); // Limitamos a 6 posts para mostrar
        setLoading(false); // Cambiamos el estado de carga
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando blogs...</p>; // Indicador de carga
  }

  return (
    <div className="blog-container">
      <h1>Últimos Blogs</h1>
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body.substring(0, 100)}...</p>
            <a
              href={`https://jsonplaceholder.typicode.com/posts/${blog.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
