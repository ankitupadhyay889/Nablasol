import React from 'react';
import "./App.css";

const Main = () => {
    return (
        <>
            <div className="container" id="pok">
                <div className="jumbotron" id="kp">
                    <div className="container lp">
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lp">This is a template for a simple marketing or informational website. <br/>
                        It includes a large callout called a jumbotron and three supporting pieces of content. <br/>
                        Use it as a starting point to create something more unique.</p>
                    <p id="pp" className="btn btn-danger mt-5">Over to you</p>
                    </div>
                </div>
                <hr></hr>
                <div id="a">
                <div className="pll">
                <div id="aw" className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="../image/aws.jpg" alt="Ca"/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div id="aw" className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="../image/aws.jpg" alt="Ca"/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div id="aw" className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="../image/aws.jpg" alt="Ca"/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                </div>
                </div>
                </div>
        </>    
    );
};

export default Main;