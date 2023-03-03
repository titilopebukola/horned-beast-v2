import React from "react";
import HornedBeast from "./HornedBeast";

export default function Main({ data, handleModal, hornsFilter }) {
  const filteredData = data.filter((beast) => !hornsFilter || beast.horns === parseInt(hornsFilter));
  return (
    <main>
      {filteredData.map((beast) => {
        return (
          <div className="horned-beast">
            <HornedBeast
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              handleModal={handleModal}
              beast={beast}
              keyword={beast.keyword}
              horns={beast.horns}
            />
          </div>
        );
      })}
    </main>
  );
}

// use the data.json file to showw all the horned beasts you will need to import your json file, or just copy the whole thing and put it into a variable

// Tip: use the array method.map[]
// Tip 2: You will need to have written 1 HornedBeast component and the map will do the rest
