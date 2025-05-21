import ReactDOM from 'react-dom/client';
import React from "react" ; 
import './scss/index.scss';
import Rectangles from "./components/rectangles" ; 
import Squares from "./components/squares" ; 

function LoginPage(){
  return(
    <section id="container" className="z-0">
      <Rectangles />
      <Squares />
    </section>
  ) ;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<LoginPage />);