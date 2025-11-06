import React from 'react'

export default function Footer() {
      const footerStyle = {
    backgroundColor: "#0f0f0f",
    color: "#f1f1f1",
    textAlign: "center",
    padding: "20px 10px",
    fontSize: "14px",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    borderTop: "1px solid #222",
  };

  const linkStyle = {
    color: "#00bcd4",
    textDecoration: "none",
    margin: "0 10px",
  };

  const linkHover = (e) => (e.target.style.color = "#ff00de");
  const linkLeave = (e) => (e.target.style.color = "#00bcd4");
    return (
        <div>
            <footer style={footerStyle}>
                <p style={{ marginBottom: "8px" }}>
                    © {new Date().getFullYear()} Class Activities. All rights reserved.
                </p>
                <div>
                    <a
                        href="#about"
                        style={linkStyle}
                        onMouseEnter={linkHover}
                        onMouseLeave={linkLeave}
                    >
                        About
                    </a>
                    <a
                        href="#privacy"
                        style={linkStyle}
                        onMouseEnter={linkHover}
                        onMouseLeave={linkLeave}
                    >
                        Privacy
                    </a>
                    <a
                        href="#contact"
                        style={linkStyle}
                        onMouseEnter={linkHover}
                        onMouseLeave={linkLeave}
                    >
                        Contact
                    </a>
                </div>
            </footer>
        </div>
    )
}
