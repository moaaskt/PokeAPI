import React from "react";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";



const App: React.FC = () => {
  return (
    <div>
       <Navbar />
      <div className="container mt-4"> 
      </div>



        <h1>PokeDex</h1>
        <PokemonList />

    </div>
  );
};

export default App;