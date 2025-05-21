import "../scss/squares.scss" ; 
import React from "react" ; 

function Squares(){
    const squares = Array.from({length: 300}) ; 
    const handleMouseOverTransition = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transition = "0.05s" ; 
    }

    const handleMouseLeaveTransition = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transition = "2s" ;
    }

    return(
        <div id="squares_container" className="z-20">
        {
          squares.map((_, index) => (
            <div key={"square" + index}
            className="square"
            onMouseOver={(e) => handleMouseOverTransition(e)}
            onMouseLeave={(e) => handleMouseLeaveTransition(e)}
            >

            </div>
          ))
        }
      </div>
    ) ;
}

export default Squares ; 