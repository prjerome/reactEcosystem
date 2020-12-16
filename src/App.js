import React, { useState, useEffect } from 'react';

const title = 'React.js hooks demo app.';

function App () {
    const [count, setCount] = useState(0);

    const [divColor, setDivColor] = useState('');

    useEffect(() => document.title = count)

    const handleChange = ({target}) => setDivColor(target.value) ;

    return(
    <div style={{ background:divColor }}>
        {title}
        <input style={{display:'block'}}  type="text" placeholder="Type in a color eg cyan" onChange={handleChange} />
        
        <button style={{display:'block'}} onClick={() => setCount(count + 1 )}>Click me and observe the tab title change</button>
    </div>)
};  

export default App;