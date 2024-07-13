import { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import "./style/Pokemon.css";

export default function Pokemon() {
  let [pokemons, setPokemons] = useState([]);
  let [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    let fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const info = await response.json();
        setPokemons(info.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <div className="Pokemon">
      <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} />
      {pokemons.map((pokemon, index) => (
        <Card key={index} pokemonUrl={pokemon.url} />
      ))}
    </div>
  );
}
