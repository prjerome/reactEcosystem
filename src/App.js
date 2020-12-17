import React, { useState, useEffect } from 'react';
import './App.css';

const title = 'React.js hooks demo app.';

function App () {
    const [count, setCount] = useState(0);

    const [divColor, setDivColor] = useState('');

    useEffect(() => document.title = count)

    const handleChange = ({target}) => setDivColor(target.value) ;

    return(
    <div>
         <header> <h1>{title}</h1> </header> 
       <div className="container" style={{ background:divColor }}>
        <section>
            <input className="input" style={{display:'block'}}  type="text" placeholder="Type in a color eg cyan" onChange={handleChange} />
            
            <button style={{display:'block'}} onClick={() => setCount(count + 1 )}>Click me and observe the browser tab title change</button>
        </section>
        
    </div>
    </div>
      )
};  

export default App;