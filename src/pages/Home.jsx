import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* <div className="hero-logo">
          <img src={logo} alt="Bitnova Logo" className="hero-logo-image" />
        </div> */}
        <h1 className="hero-title">
          Bienvenido a Bitnova
        </h1>
        <p className="hero-subtitle">Soluciones digitales innovadoras para PYMEs y sector público</p>
        <div className="hero-buttons">
          <Link to="/servicios" className="btn-primary">Nuestros Servicios</Link>
          <Link to="/contacto" className="btn-secondary">Contactar</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <Link to="/servicios" className="service-card">
            <h3>Desarrollo Web</h3>
            <p>Sitios web responsivos y aplicaciones modernas</p>
          </Link>
          <Link to="/servicios" className="service-card">
            <h3>Marketing Digital</h3>
            <p>Google Ads, SEO y estrategias de crecimiento</p>
          </Link>
          <Link to="/servicios" className="service-card">
            <h3>Consultoría</h3>
            <p>Optimización de procesos digitales</p>
          </Link>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/servicios" className="btn-primary" style={{ fontSize: '1.1rem' }}>
            Ver Todos los Servicios
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
