import react, { Component } from "react";
import "./component.css";
import Aciklama from "./Aciklama";
import logo1 from"./logo1.jpg";
import logo2 from "./logo2.png";



export default class Content extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    render() {
        return (
            <>
                <Aciklama 
                    name="   JForce"
                    className="logotext" 
                    img={logo1}>
              
                </Aciklama>

                <Aciklama name="  Nişantaşı"
                    className="logotext"
                    img={logo2}>
                   
                    

                </Aciklama>


            </>
        );
    }
}