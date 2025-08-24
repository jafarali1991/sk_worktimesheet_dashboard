
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import WorkTimesheet from './pages/WorkTimesheet';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  let PageComponent;
  if (currentPage === 'home') PageComponent = Home;
  else if (currentPage === 'worktimesheet') PageComponent = WorkTimesheet;

  return (
    <div className="dashboard-layout">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="dashboard-main">
        <PageComponent />
      </main>
    </div>
  );
}

export default App;
