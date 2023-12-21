import React from "react";
import "./App.css";
import Header from "./Header";
import Products from "./Products_List";
import Products_List from "./Products_List";


function App() {

    function doSomething(data) {
        console.log("Button is clicked! " + data);
    }

    return (
        <div>
            <Header/>
            <Products_List/>
            <button className="btn" onClick={(event) => {
                console.log(event);
                doSomething("Mihir");
            }}>Click</button>
        </div>
    );
}

export default App;