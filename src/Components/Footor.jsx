import "../Css/Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
        <span>© {new Date().getFullYear()} PIXON</span>
        <p className="Owner">Made By Mo_Wassef</p>
    </footer>
  );
}
