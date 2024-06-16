
import { createBrowserRouter,RouterProvider } from 'node_modules/react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import About from './components/About';
import GrapicDesigns from './GrapicDesigns';
import MotionGraphics from './MotionGraphics';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/graphic-designs',
      element: <GrapicDesigns />,
    },
    {
      path: '/motion-graphics',
      element: <MotionGraphics />,
    },
  ]);
  

  return (
    <>
      <div className="max-w-[1300px] w-[95%] m-auto bg-white shadow-lg my-4 rounded-xl overflow-hidden ">
        <Navbar />
        <RouterProvider router={router}  />
      </div>
      <div className="max-w-[1300px] w-[95%] m-auto text-white  my-4 rounded-xl overflow-hidden ">
        <Footer />
      </div>
    </>
  );
}

export default App;
