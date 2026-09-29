// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import AboutMe from './components/AboutMe';
// import './App.css';
// import MyArsenal from './components/MyArsenal';
// import Offer from './components/Offer';

// import AdminProjects from './components/AdminProjects';
// import MyCreations from "./components/MyCreations";
// import AdminProjects2 from './components/AdminProjects2';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';
// import ConnectedDots from './components/ConnectedDots';
// import MyWork from "./components/MyWork";
// import FeaturedSection from "./components/FeaturedSection";

// function App() {
//   return (
//     <div className="relative">
//       {/* Background connected dots */}
//       <ConnectedDots />

//       {/* Main content */}
//       <div className="relative z-10">
//         <Navbar />
//         <br /><br /><br />
//         {/* <section id="home" className="h-screen scroll-mt-24"><Main /></section>
//         <section id="about" className="h-screen md:h-auto scroll-mt-24"><AboutMe /></section>
//         <section id="skills" className="h-screen scroll-mt-24"><MyArsenal /></section>
//         <section id="services" className="h-screen scroll-mt-24"><Offer /></section>
//         <section id="projects" className="min-h-screen scroll-mt-24"><Projects /></section>
//         <section id="design" className="min-h-screen scroll-mt-24"><MyCreation /></section>
//         <section id="contact" className="h-screen scroll-mt-24"><ContactSection /></section>
//         <section id="footer" className="h-screen scroll-mt-25 mt-100"><Footer /></section> */}


//             {/* Home Section: min-h-screen content ko overflow hone se bachayega */}
// <section id="home" className="min-h-screen flex items-center scroll-mt-24">
//   <Main />
// </section>

// {/* About Section: h-auto mobile ke liye best hai, desktop par min-h-screen */}
// <section id="about" className="min-h-screen md:h-auto py-12 scroll-mt-24">
//   <AboutMe />
// </section>

// <section id="skills" className="min-h-screen py-12 scroll-mt-24">
//   <MyArsenal />
// </section>

// <section id="services" className="min-h-screen py-12 scroll-mt-24">
//   <Offer />
// </section>
// <section id="projects" className="min-h-screen py-12 scroll-mt-24">
//   <FeaturedSection /> 
// </section>
// <section id="projects" className="min-h-screen py-12 scroll-mt-24">
//   <MyWork /> 
// </section>

// <section id="design" className="min-h-screen py-12 scroll-mt-24">
//   <MyCreations />
// </section>

// <section id="contact" className="min-h-screen py-12 scroll-mt-24">
//   <ContactSection />
// </section>

// {/* Footer: Footer ko kabhi bhi h-screen mat den, h-auto rakhen */}
// <section id="footer" className="h-auto py-10 scroll-mt-24">
//   <Footer />
// </section>

//         <BrowserRouter>
//           <Routes>
//             <Route path="/admin/projects" element={<AdminProjects />} />
//             <Route path="/admin/projects2" element={<AdminProjects2 />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// }

// export default App;























// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import AboutMe from "./components/AboutMe";
// import MyArsenal from "./components/MyArsenal";
// import Offer from "./components/Offer";

// import AdminProjects from "./components/AdminProjects";
// import MyCreations from "./components/MyCreations";
// import AdminProjects2 from "./components/AdminProjects2";
// import ContactSection from "./components/ContactSection";
// import Footer from "./components/Footer";
// import ConnectedDots from "./components/ConnectedDots";
// import MyWork from "./components/MyWork";
// import FeaturedSection from "./components/FeaturedSection";
// import Projects from "./components/Projects";

// import "./App.css";


// function Home() {
//   return (
//     <div className="relative">

//       {/* Background connected dots */}
//       <ConnectedDots />

//       {/* Main content */}
//       <div className="relative z-10">

//         <Navbar />

//         <br />
//         <br />
//         <br />

//         {/* Home */}
//         <section
//           id="home"
//           className="min-h-screen flex items-center scroll-mt-24"
//         >
//           <Main />
//         </section>


//         {/* About */}
//         <section
//           id="about"
//           className="min-h-screen md:h-auto py-12 scroll-mt-24"
//         >
//           <AboutMe />
//         </section>


//         {/* Skills */}
//         <section
//           id="skills"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <MyArsenal />
//         </section>


//         {/* Services */}
//         <section
//           id="services"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <Offer />
//         </section>


//         {/* Featured Projects */}
//         <section
//           id="projects"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <FeaturedSection />
//         </section>


//         {/* My Work */}
//         <section
//           id="my-work"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <MyWork />
//         </section>


//         {/* Creations */}
//         <section
//           id="design"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <MyCreations />
//         </section>


//         {/* Contact */}
//         <section
//           id="contact"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <ContactSection />
//         </section>


//         {/* Footer */}
//         <section
//           id="footer"
//           className="h-auto py-10 scroll-mt-24"
//         >
//           <Footer />
//         </section>

//       </div>
//     </div>
//   );
// }


// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         {/* Main Portfolio */}
//         <Route path="/" element={<Home />} />

//         {/* All Projects Page */}
//         <Route
//           path="/projects"
//           element={<Projects />}
//         />

//         {/* Admin Pages */}
//         <Route
//           path="/admin/projects"
//           element={<AdminProjects />}
//         />

//         <Route
//           path="/admin/projects2"
//           element={<AdminProjects2 />}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }


// export default App;




























// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import AboutMe from "./components/AboutMe";
// import MyArsenal from "./components/MyArsenal";
// import Offer from "./components/Offer";
// import AdminProjects from "./components/AdminProjects";
// import MyCreations from "./components/MyCreations";
// import AdminProjects2 from "./components/AdminProjects2";
// import ContactSection from "./components/ContactSection";
// import Footer from "./components/Footer";
// import ConnectedDots from "./components/ConnectedDots";
// import MyWork from "./components/MyWork";
// import FeaturedSection from "./components/FeaturedSection";
// import Projects from "./components/IndProjects";

// import "./App.css";


// function Home() {
//   return (
//     <div className="relative">

//       <ConnectedDots />

//       <div className="relative z-10">

//         <Navbar />

//         <br />
//         <br />
//         <br />

//         <section
//           id="home"
//           className="min-h-screen flex items-center scroll-mt-24"
//         >
//           <Main />
//         </section>

//         <section
//           id="about"
//           className="min-h-screen md:h-auto py-12 scroll-mt-24"
//         >
//           <AboutMe />
//         </section>

//         <section
//           id="skills"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <MyArsenal />
//         </section>

//         <section
//           id="services"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <Offer />
//         </section>

//         <section
//           id="projects"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <FeaturedSection />
//         </section>

//         {/* <section
//           id="my-work"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <MyWork />
//         </section> */}

//         <section
//           id="design"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <MyCreations />
//         </section>

//         <section
//           id="contact"
//           className="min-h-screen py-12 scroll-mt-24"
//         >
//           <ContactSection />
//         </section>

//         <section
//           id="footer"
//           className="h-auto py-10 scroll-mt-24"
//         >
//           <Footer />
//         </section>

//       </div>
//     </div>
//   );
// }


// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         {/* MAIN WEBSITE */}
//         <Route
//           path="/"
//           element={<Home />}
//         />

//         {/* SEPARATE PROJECTS PAGE */}
//         <Route
//           path="/projects"
//           element={<Projects />}
//         />

//         {/* ADMIN */}
//         <Route
//           path="/admin/projects"
//           element={<AdminProjects />}
//         />

//         <Route
//           path="/admin/projects2"
//           element={<AdminProjects2 />}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }


// export default App;












































import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth & Protected Route
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Existing Components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import MyArsenal from "./components/MyArsenal";
import Offer from "./components/Offer";
import AdminProjects from "./components/AdminProjects";
import MyCreations from "./components/MyCreations";
import AdminProjects2 from "./components/AdminProjects2";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ConnectedDots from "./components/ConnectedDots";
import MyWork from "./components/MyWork";
import FeaturedSection from "./components/FeaturedSection";
import Projects from "./components/IndProjects";

import "./App.css";

function Home() {
  return (
    <div className="relative">
      <ConnectedDots />

      <div className="relative z-10">
        <Navbar />

        <br />
        <br />
        <br />

        <section
          id="home"
          className="min-h-screen flex items-center scroll-mt-24"
        >
          <Main />
        </section>

        <section
          id="about"
          className="min-h-screen md:h-auto py-12 scroll-mt-24"
        >
          <AboutMe />
        </section>

        <section
          id="skills"
          className="min-h-screen py-12 scroll-mt-24"
        >
          <MyArsenal />
        </section>

        <section
          id="projects"
          className="min-h-screen py-12 scroll-mt-24"
        >
          <FeaturedSection />
        </section>
        <section
          id="services"
          className="min-h-screen py-12 scroll-mt-24"
        >
          <Offer />
        </section>


        {/* <section
          id="my-work"
          className="min-h-screen py-12 scroll-mt-24"
        >
          <MyWork />
        </section> */}

        <section
          id="design"
          className="min-h-screen py-12 scroll-mt-24"
        >
          <MyCreations />
        </section>

        <section
          id="contact"
          className="min-h-screen py-12 scroll-mt-24"
        >
          <ContactSection />
        </section>

        <section
          id="footer"
          className="h-auto py-10 scroll-mt-24"
        >
          <Footer />
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* MAIN WEBSITE */}
          <Route path="/" element={<Home />} />

          {/* SEPARATE PROJECTS PAGE */}
          <Route path="/projects" element={<Projects />} />

          {/* LOGIN PAGE */}
          <Route path="/login" element={<Login />} />

          {/* PROTECTED DASHBOARD */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* OLD ADMIN ROUTES */}
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/projects2" element={<AdminProjects2 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;