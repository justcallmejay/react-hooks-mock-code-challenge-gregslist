import React from "react";

function ListingCard( {list, handleToggleStar, toggleStar, handleDelete} ) {

  function onClickDelete() {
    fetch(`http://localhost:6001/listings/${list.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => handleDelete(list))
  }

  return (
    <li className="card" id={list.id} key={list}>
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details" onClick={handleToggleStar}>
        {toggleStar ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button className="emoji-button delete" onClick={onClickDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
