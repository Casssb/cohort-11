import Card from './modules/Card';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      picture: '',
      description: '',
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  handlePokiName(data) {
    const { name } = data;
    const image = data.sprites.front_default;
    this.setState({
      name: name,
      picture: image,
    });
  }

  handlePokiSpecies(data) {
    const description = data.flavor_text_entries[0].flavor_text;
    this.setState({
      description: description,
    });
  }

  async getData() {
    const pokeId = Math.floor(Math.random() * 151);
    try {
      const responses = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`),
      ]);
      const [nameData, speciesData] = await Promise.all(
        responses.map((response) => response.json())
      );
      this.handlePokiName(nameData);
      this.handlePokiSpecies(speciesData);
    } catch (err) {
      throw err;
    }
    // fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
    //   .then((response) => response.json())
    //   .then((data) => this.handlePokiName(data));
  }

  render() {
    const { name, picture, description } = this.state;
    return (
      <div className="h-screen flex justify-center items-center bg-slate-200">
        <Card
          name={name}
          pic={picture}
          description={description}
          getPoki={this.getData}
        />
      </div>
    );
  }
}


// `https://pokeapi.co/api/v2/pokemon/${pokeId}/`  main

//`https://pokeapi.co/api/v2/pokemon-species/${}pokeId/`  species
