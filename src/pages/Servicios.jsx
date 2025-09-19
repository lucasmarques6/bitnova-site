import { Link } from 'react-router-dom';

function Servicios() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1>Nuestros Servicios</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem', textAlign: 'center', color: '#666' }}>
        Soluciones digitales completas para hacer crecer tu negocio
      </p>

      {/* Grid de servicios detallados */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        
        {/* Desarrollo Web */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <h3 style={{ color: '#2D3748', marginBottom: '1rem', fontSize: '1.5rem' }}>🌐 Desarrollo Web</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta aplicaciones web complejas.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>✅ React, Vue, Angular</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Responsive Design</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ SEO Optimizado</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Performance Alta</li>
          </ul>
        </div>

        {/* Marketing Digital */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <h3 style={{ color: '#2D3748', marginBottom: '1rem', fontSize: '1.5rem' }}>📈 Marketing Digital</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Estrategias de crecimiento digital para aumentar tu visibilidad online y generar más leads.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>✅ Google Ads & Facebook Ads</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ SEO & SEM</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Content Marketing</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Analytics & Reporting</li>
          </ul>
        </div>

        {/* Consultoría */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <h3 style={{ color: '#2D3748', marginBottom: '1rem', fontSize: '1.5rem' }}>💡 Consultoría Digital</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Optimizamos tus procesos digitales y te ayudamos a elegir las mejores tecnologías para tu negocio.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>✅ Auditoría Digital</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Estrategia Tecnológica</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Optimización de Procesos</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Capacitación de Equipos</li>
          </ul>
        </div>

        {/* Desarrollo Mobile */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <h3 style={{ color: '#2D3748', marginBottom: '1rem', fontSize: '1.5rem' }}>📱 Desarrollo Mobile</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Aplicaciones móviles nativas y multiplataforma para iOS y Android.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>✅ React Native</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Flutter</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ iOS & Android</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ App Store Deploy</li>
          </ul>
        </div>

        {/* E-commerce */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <h3 style={{ color: '#2D3748', marginBottom: '1rem', fontSize: '1.5rem' }}>🛒 E-commerce</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Tiendas online completas con pasarelas de pago, gestión de inventario y analytics.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>✅ Shopify, WooCommerce</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Pasarelas de Pago</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Gestión de Inventario</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Integración con CRM</li>
          </ul>
        </div>

        {/* Mantenimiento */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <h3 style={{ color: '#2D3748', marginBottom: '1rem', fontSize: '1.5rem' }}>🔧 Mantenimiento & Soporte</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Mantenimiento continuo, actualizaciones de seguridad y soporte técnico 24/7.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>✅ Monitoreo 24/7</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Backups Automáticos</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Actualizaciones de Seguridad</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Soporte Técnico</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, #5A67D8, #4A5568)',
        color: 'white',
        padding: '3rem 2rem',
        borderRadius: '16px',
        marginTop: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>¿Listo para comenzar tu proyecto?</h2>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', opacity: 0.9 }}>
          Contáctanos y conversemos sobre cómo podemos ayudarte a hacer realidad tus ideas
        </p>
        <Link 
          to="/contacto" 
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#5A67D8',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Contactar Ahora
        </Link>
      </div>
    </div>
  );
}

export default Servicios;