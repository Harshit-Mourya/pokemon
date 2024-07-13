import { useEffect, useState } from "react";
import "./style/Card.css";

export default function Card({ pokemonUrl }) {
  let [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    let fetchPokeData = async () => {
      try {
        let response = await fetch(pokemonUrl);
        if (!response.ok) {
          throw new Error("Network response not ok.");
        }
        let data = await response.json();
        setPokeData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchPokeData();
  }, [pokemonUrl]);

  if (!pokeData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="card">
        <img src={pokeData.sprites.front_default} alt={pokeData.name} />
        <p>{pokeData.name}</p>
      </div>
    </>
  );
}
