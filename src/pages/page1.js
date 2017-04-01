/**
 * Created by tao on 17/4/1.
 */

import React from "react";

class Page1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:""
        };
    }


    componentDidMount(){
        let that = this;
        fetch('/api/getPage',{method:"POST"}).then(function(response) {
            console.log(response);
            if(response.ok) {
                response.json().then(function(json) {
                    console.log(json);
                    that.setState({name:json.name});
                });
            } else {
                console.log('Network response was not ok.');
            }
        })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    }

    render(){
        return(
            <div>
                <p>this is page1.....{this.state.name}</p>
            </div>
        )
    }
}

export default Page1;
