
import React ,{useState} from "react";
import './../styles/App.css';

const App = ()=> {
    let [showprop , setShowprop] = useState(false);
    return (
        <div>
            <div className="model-overlay">
                <button onClick={()=>setShowprop(true)}>Show Modal</button>
            { showprop && (<div className="model-close">
                <button onClick={()=>setShowprop(false)}>Close</button>
                <p>This is the content of modal.</p>
            </div>)
            }   
            </div>
        </div>
    )
}

export default App
