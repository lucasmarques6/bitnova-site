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
          Bienvenido a{' '}
          <span style={{
            color: '#2D3748', 
            fontWeight: '800'
          }}>Bit</span>
          <span style={{
            background: 'linear-gradient(45deg, #5A67D8, #4A5568)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '300'
          }}>nova</span>
          <span style={{
            marginLeft: '8px',
            display: 'inline-flex',
            gap: '3px',
            alignItems: 'center'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#5A67D8',
              display: 'inline-block'
            }}></span>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#4A5568',
              display: 'inline-block'
            }}></span>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#2D3748',
              display: 'inline-block'
            }}></span>
          </span>
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
