// import React from "react";
// import "./FeacherdSection.css";

// import pizza from "./images/pizzaimg.png";
// import hananconnect from "./images/hanancontact.png";
// import edu from "./images/edu.png";
// import waseem from "./images/waseem.png";
// import watch from "./images/watch.png";
// import aliweb from "./images/aliweb.png";

// const cardData = [
//   {
//     id: 1,
//     title: "Rolex Submariner Date",
//     description:
//       "Gold aur stainless steel finish ke sath iconic diving watch. High precision aur luxury design.",
//     image: watch,
//     liveUrl: "https://rolexbyhanan.netlify.app/",
//   },
//   {
//     id: 2,
//     title: "Chill Pizza – Crafted Slices & AI-Powered Flavor Architecture",
//     description:
//       "Elevate your pizza experience with Chill Pizza! Featuring a modern hero section with bold typography, dark aesthetic accents, fresh ingredients and a relaxed atmosphere.",
//     image: pizza,
//     liveUrl: "https://chillpizza.netlify.app/",
//   },
//   {
//     id: 3,
//     title: "Rolex Daytona Gold",
//     description:
//       "Premium chronograph aesthetic jisme luxury gold casing aur sleek dial design milta hai.",
//     image: hananconnect,
//     liveUrl: "https://shimmering-creponne-dd5f17.netlify.app/",
//   },
//   {
//     id: 4,
//     title: "Ali Fayyaz | UI/UX, Graphic Designer & Frontend Developer",
//     description:
//       "A modern personal portfolio focused on UI/UX, graphic design, frontend development and custom digital solutions.",
//     image: aliweb,
//     liveUrl: "https://alifayyazuiux.vercel.app/",
//   },
//   {
//     id: 5,
//     title: "The Educators Sadhoke School",
//     description:
//       "A professional school website highlighting academic excellence, student development, faculty and educational achievements.",
//     image: edu,
//     liveUrl: "https://educators-sadhoke.netlify.app/",
//   },
//   {
//     id: 6,
//     title: "Waseem Organic Store",
//     description:
//       "A clean organic store experience focused on natural, pure and chemical-free products with a modern shopping interface.",
//     image: waseem,
//     liveUrl: "https://waseem3.netlify.app/",
//   },
// ];

// const FeaturedSection = () => {
//   // Sirf first 3 projects featured section mein show honge
//   const featuredProjects = cardData.slice(0, 3);

//   return (
//     <section className="luxury-section">

//       {/* Background decorative elements */}
//       <div className="luxury-glow luxury-glow-one"></div>
//       <div className="luxury-glow luxury-glow-two"></div>

//       {/* Section Header */}
//       <div className="section-header">

//         <div className="section-eyebrow">
//           <span className="eyebrow-line"></span>
//           <span>SELECTED WORK</span>
//           <span className="eyebrow-line"></span>
//         </div>

//         <h2 className="section-title">
//           Featured <span>Collection</span>
//         </h2>

//         <p className="section-description">
//           A curated selection of digital experiences crafted with precision,
//           creativity and attention to every detail.
//         </p>

//       </div>

//       {/* Cards */}
//       <div className="cards-grid">

//         {featuredProjects.map((card, index) => (
//           <article
//             key={card.id}
//             className="luxury-card"
//             style={{ "--card-delay": `${index * 0.15}s` }}
//           >

//             {/* Card number */}
//             <div className="card-number">
//               0{index + 1}
//             </div>

//             {/* Image */}
//             <div className="card-image-box">

//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="card-image"
//               />

//               <div className="image-overlay"></div>

//               {/* Animated shine */}
//               <div className="image-shine"></div>

//               {/* Preview badge */}
//               <div className="preview-badge">
//                 <span></span>
//                 LIVE PROJECT
//               </div>

//             </div>

//             {/* Card content */}
//             <div className="card-body">

//               <div className="card-content-top">

//                 <span className="project-label">
//                   DIGITAL EXPERIENCE
//                 </span>

//                 <h3 className="card-title">
//                   {card.title}
//                 </h3>

//                 <p className="card-text">
//                   {card.description}
//                 </p>

//               </div>

//               <div className="card-footer">

//                 <span className="project-index">
//                   PROJECT / 0{index + 1}
//                 </span>

//                 <a
//                   href={card.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="live-preview-link"
//                 >
//                   <span>View Project</span>

//                   <span className="arrow-circle">
//                     <span className="arrow">↗</span>
//                   </span>
//                 </a>

//               </div>

//             </div>

//           </article>
//         ))}

//       </div>

//       {/* Show More */}
//       <div className="show-more-wrapper">

//         <a href="/projects" className="show-more-btn">

//           <span className="btn-text">
//             Explore All Projects
//           </span>

//           <span className="btn-arrow">
//             →
//           </span>

//         </a>

//         <p className="projects-count">
//           VIEW ALL <span>6+</span> PROJECTS
//         </p>

//       </div>

//     </section>
//   );
// };

// export default FeaturedSection;





















































import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeacherdSection.css";

const FeaturedSection = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        // Cache busting ke sath API request taaki dashboard ke updates immediately dikhein
        const response = await axios.get(
          `http://localhost:5000/api/projects?featured=true&limit=3&t=${Date.now()}`
        );
        setFeaturedProjects(response.data);
      } catch (err) {
        console.error("Failed to fetch featured projects:", err);
        setError("Projects load nahi ho sakay.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();

    // Jab user dashboard se naya project add karke is tab par wapas aaye to auto-refetch ho
    window.addEventListener("focus", fetchFeaturedProjects);
    return () => window.removeEventListener("focus", fetchFeaturedProjects);
  }, []);

  return (
    <section className="luxury-section">
      {/* Background decorative elements */}
      <div className="luxury-glow luxury-glow-one"></div>
      <div className="luxury-glow luxury-glow-two"></div>

      {/* Section Header */}
      <div className="section-header">
        <div className="section-eyebrow">
          <span className="eyebrow-line"></span>
          <span>SELECTED WORK</span>
          <span className="eyebrow-line"></span>
        </div>

        <h2 className="section-title">
          Featured <span>Collection</span>
        </h2>

        <p className="section-description">
          A curated selection of digital experiences crafted with precision,
          creativity and attention to every detail.
        </p>
      </div>

      {/* Loading & Error States */}
      {loading && (
        <div style={{ textAlign: "center", color: "#d4af37", padding: "40px" }}>
          Loading Featured Projects...
        </div>
      )}

      {error && (
        <div style={{ textAlign: "center", color: "#ef4444", padding: "40px" }}>
          {error}
        </div>
      )}

      {/* Cards Grid */}
      {!loading && !error && (
        <div className="cards-grid">
          {featuredProjects.map((card, index) => (
            <article
              key={card._id || card.id}
              className="luxury-card"
              style={{ "--card-delay": `${index * 0.15}s` }}
            >
              {/* Card number */}
              <div className="card-number">0{index + 1}</div>

              {/* Image */}
              <div className="card-image-box">
                <img
                  src={card.imageUrl || card.image}
                  alt={card.title}
                  className="card-image"
                />

                <div className="image-overlay"></div>
                <div className="image-shine"></div>

                <div className="preview-badge">
                  <span></span>
                  LIVE PROJECT
                </div>
              </div>

              {/* Card content */}
              <div className="card-body">
                <div className="card-content-top">
                  <span className="project-label">DIGITAL EXPERIENCE</span>

                  <h3 className="card-title">{card.title}</h3>

                  <p className="card-text">{card.description}</p>
                </div>

                <div className="card-footer">
                  <span className="project-index">PROJECT / 0{index + 1}</span>

                  <a
                    href={card.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-preview-link"
                  >
                    <span>View Project</span>
                    <span className="arrow-circle">
                      <span className="arrow">↗</span>
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Show More */}
      <div className="show-more-wrapper">
        <a href="/projects" className="show-more-btn">
          <span className="btn-text">Explore All Projects</span>
          <span className="btn-arrow">→</span>
        </a>

        <p className="projects-count">
          VIEW ALL <span>{featuredProjects.length}+</span> PROJECTS
        </p>
      </div>
    </section>
  );
};

export default FeaturedSection;