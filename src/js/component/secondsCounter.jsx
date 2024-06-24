import React from "react";

export const SecondsCounter = (props) => {
    return (
        <>
            <h1>
                {props.seconds}
            </h1>
            <div className="container">
                <div className="row d-flex bg-dark gap-2">
                    <span className="col bg-secondary">{props.seconds}</span>
                    <span className="col bg-secondary">{props.seconds}</span>
                    <span className="col bg-secondary">{props.seconds}</span>
                    <span className="col bg-secondary">{props.seconds}</span>
                    <span className="col bg-secondary">{props.seconds}</span>
                </div>
            </div>
        </>
    );
};
