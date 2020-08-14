import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Director',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
  },
];

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      usuario: {
        nombre: "",
        correo: "",
        estado: "",
        edad: "",
        telefono: ""
      },
      usuarios: [
        {
          title: 'Title 01',
          director: 'title',
          year: 'true',
        },
        {
          title: 'Title 02',
          director: 'title',
          year: 'true',
        },
        {
          title: 'Title 03',
          director: 'title',
          year: 'true',
        }
      ]
    }
  }

  handleChange = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`);

    this.setState({ usuario: { ...this.state.usuario, [event.target.name]: event.target.value } })
  }

  handleEnviar = () => {
    console.log(this.state.usuario);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row">

              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" name="nombre" className="form-control" placeholder="Nombre" onChange={this.handleChange} />
                  <br />
                  <input type="email" name="correo" className="form-control" placeholder="Correo" onChange={this.handleChange} />
                  <br />
                  <input type="text" name="estado" className="form-control" placeholder="Estado" onChange={this.handleChange} />
                  <br />
                  <input type="number" name="edad" className="form-control" placeholder="Edad" onChange={this.handleChange} />
                  <br />
                  <input type="tel" name="telefono" className="form-control" placeholder="Teléfono" onChange={this.handleChange} />
                  <br />
                  <button className="btn btn-primary" type="button" onClick={this.handleEnviar}>Enviar</button>
                </div>
              </div>
              <div className="col-lg-8">
                <DataTable title="Usuarios" columns={columns} data={this.state.usuarios} />
              </div>
            </div>
          </div>
        </header>
      </div>
    );



  }
}

