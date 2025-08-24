import { FaHome, FaRegClock } from 'react-icons/fa';

function Sidebar({ currentPage, setCurrentPage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">ShellKode Dashboard</div>
      <nav>
        <ul>
          <li className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>
            <FaHome className="sidebar-icon" />
            <span className="sidebar-label">Home</span>
          </li>
          <li className={currentPage === 'worktimesheet' ? 'active' : ''} onClick={() => setCurrentPage('worktimesheet')}>
            <FaRegClock className="sidebar-icon" />
            <span className="sidebar-label">Work Timesheet</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
