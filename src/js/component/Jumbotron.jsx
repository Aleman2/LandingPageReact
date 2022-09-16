import React from "react";

//include images into your bundle


//create your first component
const Jumbotron = () => {
	return (
        <div className="ps-5  bg-light m-5 rounded-3 mx-auto w-50">
        <div className="container-fluid pt-1 pb-5">
          <h1 className="display-5 fw-bold">Custom jumbotron</h1>
          <p className="col-md-11 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          <button className="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
        </div>
	);
};

export default Jumbotron;
