import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';

const App = () => {
  return (
    <main style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}

export default App;
