import "./component.css";
export default function Text(props) {
  return (
    <div className={props.className} > 
    {props.yazi}
    </div>
  );
}
