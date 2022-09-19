import './App.css';
import Echart from './components/Echart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Barchart from './components/Barchart';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Echart />} />
          <Route path="/barchart" element={<Barchart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
