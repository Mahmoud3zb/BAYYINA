import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-slate-800 flex flex-col antialiased">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
