import React, {useState, useEffect,} from 'react'

//This page  was very hard but I learned A lot. Even chatGPT wasnt helping me most of the time.
const Clicker = () => {

    //Setting up my state hooks
    const [clicks,setClicks] = useState(1);
    const [isActive, setActive] = useState(false);
    const [gameEnd,setGameEnd] = useState(false)

    //What should I do while the game is running?

    //animation for clicking so the color slowly changes the more you click (I got the gradients from chatgpt and had to figure out the Math))
    const calculateGradient = () => {
        if (clicks <= 20) {
          //  Red to Orange  for the first 20 clicks
          return `linear-gradient(to top, #FFA500 ${clicks * 5}%,  #FF0000 0%)`;
        } else if (clicks <= 30) {
          // Orange to Yellowfor clicks 21 to 30
          return `linear-gradient(to top,  #FFFF00 ${10 * (clicks - 20)}%, #FFA500 0%)`;
        } else if (clicks <= 40) {
          // Yellow to Green  for clicks 31 to 40
          return `linear-gradient(to top, #00FF00 ${10 * (clicks - 30)}%, #FFFF00  0%)`;
        } else {
          // After 40 clicks, the color will stay green
          return `linear-gradient(to top, #00FF00 100%)`;
        }
      };
      // While the game is running, The styles for the buttons are updated at every click based on the calulations above
      const buttonStyles = 
       {background: calculateGradient()
      }

      
      //setting timer when the game starts
    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setTimeout(() => {
                //after the timer ends, setting the game inactive and also ending game
                setActive(false);
                setGameEnd(true);
            },5000)
        };
        //How can I make sure the timer stops after the code above is done exicuting?
        // return () => {
        //     clearTimeout(timer)
        // }
    },[isActive])


    //What happens when I start a game?

    const startGame = () => {
        //making sure my app knows my game is active and resetting clicks so they dont overflow from last game
        setClicks(1);
        setActive(true);
     
    }
    const increment = () => {
        setClicks((clicks) => {
            return clicks+1
        });
    }

    //How am I using my results to build messages to give to the user?
    let result = 0;
    let message = ''
    //did this because results should only be compiled after the game is done running so I get all the clicks from during the game
    isActive? result = 0 : result = clicks
    //What message should I give the user based on their score?
    if (result < 20) {
        message = ` Only ${result} clicks is crazy get off my site`
    } else if (result < 30) {
        message = `Kind of slow`
    } else if (result < 40) {
        message = `Not too bad!`
    } else {
        message = `Ngl bro go outside and touch grass.`
    }

    // Declaring objects for styles that I want to set active when the game ends
    let id = 'hideMess'
    if (gameEnd) id = ''
    let stop = {};
    let go = {}
    // This creates that animation that happens when the game ends. 
    if (gameEnd) stop = {maxHeight: '1px', transform: 'translateX(100%)', opacity: '1', overFlowY: 'hidden', transition: 'all 1s, opacity 0.5s', pointerEvents: 'none'};
    if (gameEnd) go={opacity: '1', display: 'grid', transform: 'translateY(-40%)', transition: 'all 2s'}

    //This is the styling for the results page after the game ends. Similar to before, im basing it off the amount of clicks I got in the 10 second window
    const getStyle = () => {
        if (gameEnd){
            if (clicks < 20) {
                return {backgroundColor: '#FF0000', transition: 'all 0.5s ease-in-out'}
              } else if (clicks < 30) {
                // Orange to Yellow gradient for clicks 21 to 30
                return {backgroundColor: '#FFA500', transition: 'all 0.5s ease-in-out'};
              } else if (clicks < 40) {
                 return {backgroundColor: '#FFFF00', transition: 'all 0.5s ease-in-out'};
              } else {
                
                return {backgroundColor: '#00FF00' , transitionDuration: '0.5s'}
              }
        }
    }
    //Structuring the page
    return (
        <div id='clicker' style={getStyle()}>
            <div id='instruct'>
            <h1>Instructions</h1>
            <h3> Prepare yourself for the ultimate test of precision and speed! As you embark on this clicking adventure, pressing the "Start" button opens a fleeting window—mere 5 seconds—for you to unleash a flurry of clicks and strive for the highest score imaginable. Can you ascend to the title of Clicker Champion and conquer this thrilling challenge? The battlefield is set, the timer is ticking, and the clicking frenzy awaits!</h3>
            </div>
            <div id='game'>
            <div id='loader' style={stop}>
                {/* In React im able to use the objects I made earlier as styles in my JSX */}
            <button style={buttonStyles} className = 'clickGame' id={isActive? 'ClickButton' : 'inactiveClicker'} onClick={increment}>{clicks}</button>
            <button className = 'clickGame' id={isActive? 'inactiveStart' : 'startGame'} onClick={startGame}>Start</button>
            </div>
            <div id='results' style={go}>
                
                <h2 className='result' id='cs'>Clicks per second:<br /><br />{result/5}</h2>
                <h2 className='result' id='tc'>Total Clicks:<br /><br />{result} </h2>
                <div className='result'>
                    {/* what performance grade should I give the user based on their score? */}
                {result < 20 && <p id='perf'>Performance Grade:<br /><span style={{ color: 'red', fontSize: '80px'}}>F</span></p>}
                {result > 20 && result < 30 && <p id='perf'>Performance Grade:<br /><span style={{ color: 'orange', fontSize: '80px' }}>D</span></p>}
                {result > 30 && result < 40 && <p id='perf'>Performance Grade:<br /><span style={{ color: 'yellow', fontSize: '80px' }}>B</span></p>}
                {result >= 40 && <p id='perf'>Performance Grade:<br /><span style={{ color: 'green' }}>A</span></p>}
                </div>
                <h2 className='result'><u>Final Conclusion:</u><br /><br /> {message}</h2>
                <div><button id='playagain' onClick={() => setGameEnd(false)}>Play Again</button></div>
            </div>
            </div>
        </div>
    )
    }


export default Clicker