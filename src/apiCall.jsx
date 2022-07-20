import { useEffect, useState } from "react";
import { CardSmall } from "./components/CardSmall/CardSmall";
export const ApiCall = () => {
  const [cardData, setCardData] = useState([]);
  const [currentCardId, setCurrentCardId] = useState("");
  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020"
    )
      .then((response) => response.json())
      .then((data) => {
        let cardInfo = data.results;
        setCardData(cardInfo);
      });
  }, []);

  return (
    <div class="cards-container">
      {cardData.map((element) => (
        <CardSmall
          onClick={() => setCurrentCardId(true)}
          gender={element.gender}
          title={element.name.title}
          fname={element.name.first}
          lname={element.name.last}
          photo={element.picture.large}
          email={element.email}
          nat={element.nat}
        />
      ))}
    </div>
  );
};
