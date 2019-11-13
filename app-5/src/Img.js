import React, { Component } from "react";

class Img extends Component {


    render(){
        return(
            <div>
                <img src={this.props.url} />
                <div>Error 599</div>

            </div>
        )
    }
}

export default Img;
