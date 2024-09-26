import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav
      role="navigation"
      aria-label="Main menu"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <ul>
        <li>
          <Link itemProp="url" to="/" title="Go to homepage">
            Home
          </Link>
        </li>
        <li>
          <Link itemProp="url" to="about" title="Learn more about us">
            About
          </Link>
        </li>
        <li>
          <Link itemProp="url" to="login" title="Access your account">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
