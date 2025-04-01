import React from "react";

const Arrow = () => {
    // return (
    //     <div>
    //         <h1>This is an arrow function</h1>
    //     </div>
    // )

    return React.createElement("div", null, React.createElement("h1", null, "This is an arrow function"));
}

export default Arrow;