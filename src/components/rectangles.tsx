// Turn on rectangles one after another, moving from top to bottom


import React, {useState, useEffect, useRef} from "react" ; 
import "../scss/rectangles.scss" ; 
import { variables } from "./variables.js" ;

function Rectangles(){
    let plusWithRef = useRef(1) ;
    const numberOfRectangles = 45 ;
    const numberOfActiveRectangles = 12 ;
    const rectangles = Array.from({length: numberOfRectangles}) ; 
    const [selectedRectangle, setSelectedRectangle] = useState(-numberOfActiveRectangles) ; 

    const isActiveRectangle = (index:number):boolean => {
        if((Math.abs(selectedRectangle - index) <= numberOfActiveRectangles)){ // numberOfActiveRectangles before and numberOfActiveRectangles after selectedRectangles turning on.
            return true ;
        }else{
            return false ;
        }
    }
    
    useEffect(() => {
        const interval = setTimeout(() => {
            if((selectedRectangle >= (numberOfRectangles + numberOfActiveRectangles) && (plusWithRef.current === 1)) || (selectedRectangle < -numberOfActiveRectangles-4 && plusWithRef.current === -1)){ //when reached to end, come back
                plusWithRef.current = (-1) * plusWithRef.current ;
            }
            setSelectedRectangle(prev => prev + plusWithRef.current ) ; 
        },100) ;

        return () => clearTimeout(interval) ; 
    }, [selectedRectangle] ) ;

    return(
        <div className="z-10 absolute top-0 left-0 bg-black w-screen h-screen">
            {
                rectangles.map((_, index) => {
                    const rectangleStatus = isActiveRectangle(index) ; 
                    return (
                        <div key={"rectangle" + index}
                        className="rectangle"
                        style={{
                            backgroundColor: rectangleStatus ? variables.color : "transparent",
                            boxShadow: rectangleStatus ? "0px 0px 30px " + variables.color : "none",
                        }} />
                    ) ;
                })
            }
        </div>
    ) ;
    
}

export default Rectangles ;