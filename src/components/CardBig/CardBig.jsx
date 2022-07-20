import "./CardBig.css";
export function CardBig(props) {
  return (
    <div className="b-card-container">
      <div className="card-photo-container">
        <img
          className="card-photo"
          src="https://i.ibb.co/t88BSgh/aqsa-s-profile-picture.jpg"
          alt="aqsa-s-profile"
          border="0"
        />
      </div>
      <div className="b-card-body">
        <div className="b-card-header">Ms. Teatske Nijenhuis</div>
        <div className="b-card-address">
          <span className="address-purple">775, </span>Heindertweg, Born,
          Zeeland, Netherlands, 18818 +6:00 - Almaty, Dhaka, Colombo Female
        </div>
        <div className="b-card-footer">Female</div>
      </div>
    </div>
  );
}
