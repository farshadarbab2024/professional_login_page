import React, {useState, useEffect} from "react" ; 
import "../scss/rectangles.scss" ; 


function Rectangles(){
    const numberOfActiveRectangles = 8 ;
    const rectangles = Array.from({length: 1000}) ; 
    const [selectedRectangle, setSelectedRectangle] = useState(-numberOfActiveRectangles) ; 

    const isActiveRectangle = (index:number):boolean => {
        if((Math.abs(selectedRectangle - index) <= numberOfActiveRectangles)){
            return true ;
        }else{
            return false ;
        }
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedRectangle(prev => prev + 1 ) ; 
        },100) ;

        return () => clearInterval(interval) ; 
    }, [] ) ;

    return(
        <div className="z-10 absolute top-0 left-0 bg-black w-screen h-screen">
            {
                rectangles.map((_, index) => {
                    const rectangleStatus = isActiveRectangle(index) ; 
                    return (
                        <div key={"rectangle" + index}
                        className="rectangle"
                        style={{
                            backgroundColor: rectangleStatus ? "blue" : "transparent",
                            boxShadow: rectangleStatus ? "0px 0px 30px blue" : "none",
                        }} />
                    ) ;
                })
            }
        </div>
    ) ;
    
}

export default Rectangles ;