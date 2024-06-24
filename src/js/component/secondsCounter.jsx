import React from "react";

export const SecondsCounter = (props) => {
    let { seconds, decimals, centesimals } = props;

    return (
        <>
            <h1>
                {}
            </h1>
            <div className="container">
                <div className="row d-flex gap-1 bg-dark text-center">
                    <h1 className="col-md m-3 ms-5 bg-secondary rounded text-white"><i className="fa-solid fa-house"></i></h1>
                    <h1 className="col-md m-3 bg-secondary rounded text-white">0</h1>
                    <h1 className="col-md m-3 bg-secondary rounded text-white">0</h1>
                    <h1 className="col-md m-3 bg-secondary rounded text-white">{centesimals}</h1>
                    <h1 className="col-md m-3 bg-secondary rounded text-white">{decimals}</h1>
                    <h1 className="col-md m-3 me-5 bg-secondary rounded text-white">{seconds}</h1>
                </div>
            </div>
        </>
    );
};
