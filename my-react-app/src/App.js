import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import BirdCard from "./components/BirdCard";
import birds from "./birds.json";

const App = () => (
  <Wrapper>
    <Title>Bird Clicky Game</Title>
    <BirdCard
      image={birds[0].image}
    />
    <BirdCard
      image={birds[1].image}
    />
    <BirdCard
      image={birds[2].image}
    />
    <BirdCard
      image={birds[3].image}
    />
    <BirdCard
      image={birds[4].image}
    />
    <BirdCard
      image={birds[5].image}
    />    
    <BirdCard
      image={birds[6].image}
    />    
    <BirdCard
      image={birds[7].image}
    />
        <BirdCard
      image={birds[8].image}
    />
    <BirdCard
      image={birds[9].image}
    />
    <BirdCard
      image={birds[10].image}
    />
    <BirdCard
      image={birds[11].image}
    />
  </Wrapper>
);

export default App;