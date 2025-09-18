import { useState } from 'react';
import SEO from '../components/SEO';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado (simulado)');
    // Acá podrías integrar EmailJS, Formspree, etc.
    console.log(formData);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="contact-container">
      <SEO 
        title="Contacto - Bitnova"
        description="¿Tenés un proyecto en mente o querés saber más? Escribinos y te respondemos a la brevedad. Desarrollo web y marketing digital para PYMEs."
        keywords="contacto bitnova, desarrollo web contacto, marketing digital consulta, formulario contacto"
      />
      <div className="contact-content">
        <h1>Contacto</h1>
        <p className="contact-description">¿Tenés un proyecto en mente o querés saber más? Escribinos y te respondemos a la brevedad.</p>

        <form onSubmit={handleSubmit} style={{
          display: 'block',
          width: '100%',
          maxWidth: '100%'
        }}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={{
              display: 'block',
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              border: '2px solid #CBD5E0',
              borderRadius: '8px',
              fontSize: '16px',
              fontFamily: 'inherit',
              backgroundColor: '#FFFFFF',
              color: '#2D3748',
              boxSizing: 'border-box'
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              display: 'block',
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              border: '2px solid #CBD5E0',
              borderRadius: '8px',
              fontSize: '16px',
              fontFamily: 'inherit',
              backgroundColor: '#FFFFFF',
              color: '#2D3748',
              boxSizing: 'border-box'
            }}
          />
          <textarea
            name="mensaje"
            placeholder="Escribí tu mensaje..."
            value={formData.mensaje}
            onChange={handleChange}
            rows={5}
            required
            style={{
              display: 'block',
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              border: '2px solid #CBD5E0',
              borderRadius: '8px',
              fontSize: '16px',
              fontFamily: 'inherit',
              backgroundColor: '#FFFFFF',
              color: '#2D3748',
              boxSizing: 'border-box',
              resize: 'vertical',
              minHeight: '120px'
            }}
          />
          <button 
            type="submit" 
            style={{
              display: 'block',
              width: '100%',
              padding: '15px',
              backgroundColor: '#2D5530',
              color: '#FFFFFF',
              border: '2px solid #2D5530',
              borderRadius: '8px',
              fontSize: '16px',
              fontFamily: 'inherit',
              cursor: 'pointer',
              boxSizing: 'border-box',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1A3A1D';
              e.target.style.borderColor = '#1A3A1D';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2D5530';
              e.target.style.borderColor = '#2D5530';
            }}
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
