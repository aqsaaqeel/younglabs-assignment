import "./Navbar.css";
export function Navbar() {
  return (
    <div className="nav-container">
      <div className="menu-items">
        <div className="logo">YourChallnge</div>
      </div>

      <div className="menu-items">
        <ul className="menu-items">
          <li className="list-item">
            <a className="menu-link" href="/login">
              Product
            </a>
          </li>
          <li className="list-item">
            <a className="menu-link" href="/login">
              Download
            </a>
          </li>
          <li className="list-item">
            <a className="menu-link" href="/login">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
