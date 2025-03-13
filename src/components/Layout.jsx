import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <footer>
        <p>© 2025 React Router Shop</p>
      </footer>
    </div>
  );
}

export default Layout;
