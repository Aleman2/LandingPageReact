import React from "react";

//include images into your bundle


//create your first component
const Card = () => {
	return (
    <div ClassName="row">
    <div ClassName="col-12  justify-content-center ">
      <div ClassName="cards card m-4 ">
        <img ClassName="card-img-top" src="https://nacionanime.com/wp-content/uploads/2021/10/endride-x-fragments-500x325.jpg" alt="Card image cap"></img>
        <div ClassName="card-body">
          <h5 ClassName="card-title">Card title</h5>
          <p ClassName="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div ClassName="card-footer">
          <small ClassName="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div ClassName="cards card m-4">
        <img ClassName="card-img-top" src="https://nacionanime.com/wp-content/uploads/2021/10/endride-x-fragments-500x325.jpg" alt="Card image cap"></img>
        <div ClassName="card-body">
          <h5 ClassName="card-title">Card title</h5>
          <p ClassName="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div ClassName="card-footer">
          <small ClassName="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div ClassName="cards card m-4">
        <img ClassName="card-img-top" src="https://nacionanime.com/wp-content/uploads/2021/10/endride-x-fragments-500x325.jpg" alt="Card image cap"></img>
        <div ClassName="card-body">
          <h5 ClassName="card-title">Card title</h5>
          <p ClassName="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div ClassName="card-footer">
          <small ClassName="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div ClassName="cards card m-4">
        <img ClassName="card-img-top" src="https://www.1zoom.me/prev/294/293671.jpg" alt="Card image cap"></img>
        <div ClassName="card-body">
          <h5 ClassName="card-title">Card title</h5>
          <p ClassName="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div ClassName="card-footer">
          <small ClassName="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
	);
};

export default Card;
