import './MainNews.css'

function MainNews() {
   return (
      <div className="MainNewsContainer">
         <div className='LeftContainer'>Left</div>
         <div className='RightTopContainer'>
            <div className='RightTopLeftContainer'>Right Top Left</div>
            <div className='RightTopMidContainer'>Right Top Mid</div>
            <div className='RightTopRightContainer'>Right Top Right</div>
         </div>
         <div className="RightMidContainer">Right Mid</div>
         <div className="RightBottomContainer">Right Bottom</div>
      </div>
   )
}

export default MainNews