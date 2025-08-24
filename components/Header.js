import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h2 className="text-2xl font-bold tracking-wide">Dashboard</h2>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-pink-300 font-medium">Home</a></li>
            <li><a href="#" className="hover:text-pink-300 font-medium">Analytics</a></li>
            <li><a href="#" className="hover:text-pink-300 font-medium">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
