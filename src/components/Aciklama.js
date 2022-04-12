import "./component.css";
import logo1 from "./logo1.jpg";

export default function Aciklama(props) {
  return (
    <>
      <div className={props.className}>
        {" "}
        <img src={props.img} style={{ marginTop: "20px" }} width="40px "></img>
        {props.name}
      </div>
    </>
  );
}
