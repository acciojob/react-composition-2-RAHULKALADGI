
import React ,{useState} from "react";
import './../styles/App.css';

const App = ()=> {
    let [showprop , setShowprop] = useState(false);
    return (
        <div>
            <button onClick={()=>setShowprop(true)}>Show Modal</button>
            {
            showprop && (<div className="model-overlay" onClick={()=>setShowprop(false)}>
                <button className="model-close" onClick={()=>setShowprop(false)}>Close</button>
                <p>This is the content of the modal.</p>
            </div>)
            }
        </div>
    )
}

export default App
