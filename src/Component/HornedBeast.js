import { useState } from "react";

export default function HornedBeast({ title, description, handleModal, beast, keyword, imageUrl, horns }) {
  const [votes, setVotes] = useState(0);

  function handleVote() {
    setVotes(votes + 1);
    handleModal(beast);
  }
  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img src={imageUrl} alt="" onClick={handleVote} />
      <p>Description:{description}</p>
      <p>Keyword:{keyword}</p>
      <p>Horns:{horns}</p>
      <p>Votes:{votes}</p>
    </div>
  );
}
