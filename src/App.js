
import './App.css';
import { router } from './Route/Router';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh()
},[])
  return (
    <div className='bodyColor'>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
