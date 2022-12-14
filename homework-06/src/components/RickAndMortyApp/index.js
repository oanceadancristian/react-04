import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RickAndMortyApp.css';

const RickAndMortyApp = () => {
  const [randomCharacterList, getRandomCharacterList] = useState([]);

  const generateRandomCharacterList = () => {
    let sixCharacterList = [];
    let characterCount = 826;
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * characterCount) + 1;
      if (sixCharacterList.indexOf(randomNumber) === -1) {
        sixCharacterList.push(randomNumber);
      }
    }

    const endPoint = sixCharacterList.join(',');
    return endPoint;
  };

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/${generateRandomCharacterList()}`
      )
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          getRandomCharacterList(data);
        }
      });
  }, []);

  return (
    <>
      <header>
        <h1>The Rick and Morty API</h1>
      </header>
      <main>
        <div className="random-character-container">
          {randomCharacterList.map((randomCharacter) => {
            const showCharacterStatus = () => {
              let className = '';
              if (randomCharacter.status === 'Alive') {
                return (className = 'dynamic-green');
              } else if (randomCharacter.status === 'Dead') {
                return (className = 'dynamic-red');
              } else {
                return (className = 'dynamic-dark-gray');
              }
            };

            const showCharacterGender = () => {
              return (
                randomCharacter.gender.charAt(0).toUpperCase() +
                randomCharacter.gender.slice(1)
              );
            };

            const showCharacterSpecies = () => {
              return (
                randomCharacter.species.charAt(0).toUpperCase() +
                randomCharacter.species.slice(1)
              );
            };

            const showCharacterLocation = () => {
              return (
                randomCharacter.location.name.charAt(0).toUpperCase() +
                randomCharacter.location.name.slice(1)
              );
            };

            const showCharacterOrigin = () => {
              return (
                randomCharacter.origin.name.charAt(0).toUpperCase() +
                randomCharacter.origin.name.slice(1)
              );
            };

            const characterLocationId = randomCharacter.location.url.substring(
              randomCharacter.location.url.lastIndexOf('/') + 1
            );

            const characterOriginId = randomCharacter.origin.url.substring(
              randomCharacter.origin.url.lastIndexOf('/') + 1
            );

            return (
              <div
                className="random-character-details"
                key={randomCharacter.id}
              >
                <img
                  src={randomCharacter.image}
                  alt={randomCharacter.name}
                  className="random-character-image"
                />
                <div className="random-character-info">
                  <div className="random-character-name">
                    <Link
                      to={`/episodes/${randomCharacter.id}/characters/${randomCharacter.id}`}
                      className="random-character-link"
                    >
                      {randomCharacter.name}
                    </Link>
                  </div>
                  <div className="random-character-species">
                    <div className={showCharacterStatus()}></div>
                    {showCharacterGender()} - {showCharacterSpecies()}
                  </div>
                  <div className="random-character-location">
                    <span className="random-last-known-location">
                      Last known location:
                    </span>
                    <div>
                      <Link
                        to={`/locations/${characterLocationId}`}
                        className="dynamic-character-link"
                      >
                        {showCharacterLocation()}
                      </Link>
                    </div>
                  </div>
                  <div className="random-character-origin">
                    <span className="random-first-seen-in">First seen in:</span>
                    <div>
                      <Link
                        to={`/locations/${characterOriginId}`}
                        className="dynamic-character-link"
                      >
                        {showCharacterOrigin()}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="episodes-link-btn-container">
          <Link to="/episodes" className="episodes-link">
            <button className="episodes-btn">See episodes</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default RickAndMortyApp;
