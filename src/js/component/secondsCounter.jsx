import React from "react";

export const SecondsCounter = (props) => {
    let { seconds, decimals, centesimals } = props;

    return (
        <>
            <div className="container">
                <div className="row justify-content-center d-flex gap-1 bg-dark text-center mt-3">
                    <p className="col-md-1 m-3 py-5 bg-secondary rounded text-white fs-1"><i className="fas fa-clock"></i></p>
                    <p className="col-md-1 m-3 py-5 bg-secondary rounded text-white fs-1">0</p>
                    <p className="col-md-1 m-3 py-5 bg-secondary rounded text-white fs-1">0</p>
                    <p className="col-md-1 m-3 py-5 bg-secondary rounded text-white fs-1">0</p>
                    <p className="col-md-1 m-3 py-5 bg-secondary rounded text-white fs-1">{centesimals}</p>
                    <p className="col-md-1 m-3 py-5 bg-secondary rounded text-white fs-1">{decimals}</p>
                    <p className="col-md-1 m-3 py-5 bg-secondary rounded text-white fs-1">{seconds}</p>
                </div>
            </div>
        </>
    );
};
