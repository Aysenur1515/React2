import "./component.css";
export default function Comp3(props){
    return(
        <div className="comp3">
            <img src={props.img} width="30px" style={{marginTop:"4px"}}></img>
        </div>
    )
}
