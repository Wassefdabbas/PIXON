import "../Css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} PIXON</span>
        <div className="footer-nav">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </a>
          <Link to="/">Home</Link>            {/* client-side navigation */}
          <Link to="/favorites">Favorites</Link>  {/* fixed typo */}
        </div>
        <p className="Owner">Made By Mo_Wassef</p>
      </div>
    </footer>
  );
}
