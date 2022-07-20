import "./CardSmall.css";
export function CardSmall(props) {
  return (
    <>
      <div className="s-card-container">
        <div className="s-card-header">
          {props.gender}. {props.nat}
        </div>
        <div className="s-card-body">
          {props.title} {props.fname} {props.lname}
        </div>
        <div className="s-card-footer">{props.email}</div>
      </div>
    </>
  );
}
