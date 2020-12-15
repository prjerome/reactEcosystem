import React, { useState } from 'react';

const title = 'Hello World';

function App () {
    const [count, setCount] = useState(0);
    return(
    <div>
        {title}
        <button onClick={() => setCount(count +1 )}>{count}</button>
    </div>)
};

export default App;