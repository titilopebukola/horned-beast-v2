import { useState } from "react";

export default function HornedBeast({ title, imageUrl, description, keyword, horns }) {
  const [votes, setVotes] = useState(0);

  function handleVote() {
    setVotes(votes + 1);
  }
  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img src={imageUrl} alt="" onClick={handleVote} />
      <p>{description}</p>
      <p>{keyword}</p>
      <p>{horns}</p>
    </div>
  );
}
