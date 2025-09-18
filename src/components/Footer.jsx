import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      background: "#fff",
      borderTop: "1px solid #e5e7eb",
      padding: "1.5rem 1rem",
      marginTop: "2.5rem"
    }}>
      <div style={{
        maxWidth: "1120px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: "#1f2937"
        }}>Bitnova</div>
        <div style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem"
        }}>
          <a
            href="https://www.instagram.com/bitnova"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4b5563" }}
          >
            <Instagram style={{ width: 20, height: 20 }} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-marques-de-paiva-510024385/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4b5563" }}
          >
            <Linkedin style={{ width: 20, height: 20 }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
