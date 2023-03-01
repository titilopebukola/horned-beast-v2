import React from "react";
import HornedBeast from "./HornedBeast";
import data from "../data.json";

export default function Main() {
  return (
    <main>
      {data.map((beast) => {
        return (
          <div className="horned-beast">
            <HornedBeast
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              keyword={beast.keyword}
              horns={beast.horns}
            />
          </div>
        );
      })}

      {/* <HornedBeast
        title="Smaug"
        imageUrl="https://qph.cf2.quoracdn.net/main-qimg-d7cceaac6251d5e158e25165e380e606-lq"
        description="Smaug is the last of the Middle East dargon"
      />
      <HornedBeast
        title="Rhino"
        imageUrl="https://www.worldanvil.com/uploads/images/5d83dd7368765a511f416eb2186fe78d.jpg"
        description=""
      /> */}
    </main>
  );
}

// use the data.json file to showw all the horned beasts you will need to import your json file, or just copy the whole thing and put it into a variable

// Tip: use the array method.map[]
// Tip 2: You will need to have written 1 HornedBeast component and the map will do the rest
