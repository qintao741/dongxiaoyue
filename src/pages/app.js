/**
 * Created by tao on 17/4/1.
 */

import React from "react";
import "./app.css";

class App extends React.Component{
    render(){
        return(
            <div>
                <ul className="app_ul">
                    <li>tab1</li>
                    <li>tab2</li>
                    <li>tab3</li>
                    <li>tab4</li>
                    <li>tab5</li>
                    <li>tab6</li>
                    <li>tab6</li>
                    <li>tab6</li>
                    <li>tab6</li>
                    <li>tab6</li>
                    <li>tab6</li>
                    <li>tab6</li>
                    <li>tab6</li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App;
