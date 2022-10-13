import { NavLink } from "react-router-dom";

import './Header.css';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Latest News', path: '/latest-news' },
  { id: 3, title: 'Popular News', path: '/popular-news' },
];

const Header = () => (
  <header>
    <nav className="nav">
      <div className="links">
        {navigation.map(({ id, title, path }) => (
          <NavLink key={id} to={path}>{title}</NavLink>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;