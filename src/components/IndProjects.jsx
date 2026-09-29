import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import "./IndProjects.css";

const IndProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        setLoading(true);
        // Sirf featured projects fetch karne ke liye query param pass kiya hai
        const res = await axios.get(
          `${API_URL}/api/projects?featured=true&t=${Date.now()}`
        );
        setProjects(res.data);
      } catch (err) {
        console.error("Featured projects load nahi ho sakay:", err);
        setError("Projects load karne mein masla aaya hai.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  return (
    <main className="projects-page">
      {/* BACK BUTTON */}
      <div className="projects-top">
        <Link to="/" className="back-link">
          ← Back to Website
        </Link>
      </div>

      {/* HEADER */}
      <section className="projects-hero">
        <div className="projects-eyebrow">
          <span></span>
          MY WORK
          <span></span>
        </div>

        <h1>
          Featured <strong>Projects</strong>
        </h1>

        <p>
          Explore my collection of featured websites and digital experiences
          crafted with creativity, precision and modern technology.
        </p>
      </section>

      {/* PROJECTS GRID */}
      <section className="all-projects-grid">
        {loading ? (
          <p style={{ color: "#aaa", textAlign: "center", width: "100%" }}>
            Projects loading...
          </p>
        ) : error ? (
          <p style={{ color: "#ef4444", textAlign: "center", width: "100%" }}>
            {error}
          </p>
        ) : projects.length === 0 ? (
          <p style={{ color: "#aaa", textAlign: "center", width: "100%" }}>
            Koi featured project nahi mila.
          </p>
        ) : (
          projects.map((project, index) => (
            <article className="project-item" key={project._id || index}>
              <div className="project-image">
                <img
                  src={project.imageUrl || project.image}
                  alt={project.title}
                />
                <div className="project-image-overlay"></div>
                <span className="project-number">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>

              <div className="project-info">
                {project.category && (
                  <span className="project-category">{project.category}</span>
                )}

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-view-btn"
                >
                  <span>Visit Website</span>
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))
        )}
      </section>

      {/* BOTTOM BACK BUTTON */}
      <div className="projects-bottom">
        <Link to="/" className="back-home-btn">
          ← Back to Website
        </Link>
      </div>
    </main>
  );
};

export default IndProjects;