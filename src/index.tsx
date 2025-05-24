import ReactDOM from 'react-dom/client';
import React from "react" ; 
import './scss/index.scss';
import Rectangles from "./components/rectangles" ; 
import Squares from "./components/squares" ; 
import Form from "./components/form" ; 

function LoginPage(){
  return( 
    <section className="z-0 relative w-screen h-screen">
      <Rectangles />
      <Squares />
      <Form />
    </section>
  ) ;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<LoginPage />);