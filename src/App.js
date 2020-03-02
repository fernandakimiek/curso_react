import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Header from "./Header";

import ApiService from './ApiService'

class App extends Component {
  state = {
    autores: [
      {
        nome: "Paulo",
        livro: "React",
        preco: "1000"
      },
      {
        nome: "Daniel",
        livro: "Java",
        preco: "99"
      },
      {
        nome: "Marcos",
        livro: "Design",
        preco: "150"
      },
      {
        nome: "Bruno",
        livro: "DevOps",
        preco: "100"
      }
    ]
  };

  removeAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      })
    });
  };

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
  };
  render() {
    const autores = ApiService.listaAutores()
    .then(res => console.log(res.data));


    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do código</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
