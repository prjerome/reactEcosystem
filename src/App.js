import React, { useState, useEffect } from 'react';

const title = 'Hello World';

function App () {
    const [count, setCount] = useState(0);

    useEffect(() => document.title = count)

    return(
    <div>
        {title}
        <button onClick={() => setCount(count +1 )}>{count}</button>
    </div>)
};

export default App;