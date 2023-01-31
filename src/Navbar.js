
import "./styles.css"

function Navbar() {
  return (
    <nav className="nav">
      <a href="/dogs " className="site-title">Home</a>
      <ul>
        <li>
          <a href="/dogs/whiskey">Whiskey</a>
          <a href="/dogs/duke">Duke</a>
          <a href="/dogs/perry">Perry</a>
          <a href="/dogs/Tubby">Tubby</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
