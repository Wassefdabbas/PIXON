import "../Css/Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} PIXON </span>
        <div className="footer-nav">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </a>
          <a href="/">Home</a>
          <a href="/favorites">Favoraites</a>
        </div>
        <p className="Owner">Made By Mo_Wassef</p>
      </div>
    </footer>
  );
}
