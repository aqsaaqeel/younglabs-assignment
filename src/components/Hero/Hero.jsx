import "./Hero.css";
import { CardBig } from "../CardBig/CardBig";
export function Hero(props) {
  return (
    <div className="hero-body">
      <CardBig gender={props.gender} fname={props.name} />
    </div>
  );
}
