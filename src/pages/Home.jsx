import React from 'react';

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
          <button className="btn-primary">Nuestros Servicios</button>
          <button className="btn-secondary">Contactar</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Desarrollo Web</h3>
            <p>Sitios web responsivos y aplicaciones modernas</p>
          </div>
          <div className="service-card">
            <h3>Marketing Digital</h3>
            <p>Google Ads, SEO y estrategias de crecimiento</p>
          </div>
          <div className="service-card">
            <h3>Consultoría</h3>
            <p>Optimización de procesos digitales</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
