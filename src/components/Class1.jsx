import React from "react";
class Class1 extends React.Component {
    constructor() {
        super();
        console.log("1st call")
    }
    componentDidMount() {
        console.log("4rth call")
    }
    render() {
        return (

            <div>
                {console.log("2nd call")}
            </div>
        );
    }
}

export default Class1;