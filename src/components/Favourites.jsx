import React from 'react';
import '../App';
import { useAppContext } from './context/appContext';

const Favourites = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

  console.log('favs are', favourites);

  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favourites">
      {favourites.length > 0 ? (
        favourites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt={book.title} />
            </div>
            <div>
              {favouritesChecker(book.id) ? (
                <button onClick={() => removefromFavourites(book.id)}>
                  Remove from Favourites
                </button>
              ) : (
                <button onClick={() => addToFavourites(book)}>Add to Favourites</button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You don't have any favourites yet. Click add to favourites to see some books here.</h1>
      )}
    </div>
  );
};

export default Favourites;
