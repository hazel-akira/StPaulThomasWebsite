// src/App.tsx
import { Outlet } from 'react-router-dom';
import HomePage from './pages/Homepage';
//import { Import } from 'lucide-react';
//import HeroSlider from './components/HeroSlider';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
     <HomePage/>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}