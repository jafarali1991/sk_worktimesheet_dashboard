export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Dashboard</h1>
        <p className="text-lg text-gray-600 mb-6">Welcome to your modern dashboard. Stylish, responsive, and ready for your data.</p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition-transform font-semibold">Get Started</button>
      </div>
    </div>
  );
}
