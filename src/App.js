import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import DataTable from 'react-data-table-component';
import { CSVLink, CSVDownload } from "react-csv";

const columns = [
  {
    nombre: 'Nombre',
    selector: 'nombre',
    sortable: true,
  },
  {
    name: 'Correo',
    selector: 'correo',
    sortable: true,
  },
  {
    name: 'Estado',
    selector: 'estado',
    sortable: true,
  },
  {
    name: 'Edad',
    selector: 'edad',
    sortable: true,
  },
  {
    name: 'Telefono',
    selector: 'telefono',
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
      usuarios: []
    }
  }

  handleChange = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`);

    this.setState({ usuario: { ...this.state.usuario, [event.target.name]: event.target.value } })
  }

  getUsuarios() {
    // const url = `https://usuarios-admin-dev.eba-xmphr2hv.us-east-2.elasticbeanstalk.com/usuarios/`;
    const url = `https://api-usuarios.ivan-morales.xyz/usuarios/`;

    fetch(url)
      .then(request => request.json())
      .then(data => {
        console.log(data);
        this.setState({ usuarios: data })
      });
  }

  postUsuario = () => {
    const url = `https://api-usuarios.ivan-morales.xyz/usuarios/`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state.usuario),
      headers: {
        'Content-Type': "application/json"
      }
    })
      .then(request => request.json())
      .then(data => {

        this.setState(
          {
            usuario:{
              nombre: "",
              correo: "",
              estado: "",
              edad: "",
              telefono: ""
            },
             usuarios: [...this.state.usuarios, data],
            })
      });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row">

              <div className="col-md-4 text-center">
                <h3>Nuevo usuario</h3>
                <br/>
                <div className="form-group">
                  <input type="text" name="nombre"  value={this.state.usuario.nombre} className="form-control form-control-lg" placeholder="Nombre" onChange={this.handleChange} />
                  <br />
                  <input type="email" name="correo" value={this.state.usuario.correo}  className="form-control form-control-lg" placeholder="Correo" onChange={this.handleChange} />
                  <br />
                  <input type="text" name="estado"  value={this.state.usuario.estado} className="form-control form-control-lg" placeholder="Estado" onChange={this.handleChange} />
                  <br />
                  <input type="number" name="edad"  value={this.state.usuario.edad} className="form-control form-control-lg" placeholder="Edad" onChange={this.handleChange} />
                  <br />
                  <input type="tel" name="telefono" value={this.state.usuario.telefono}  className="form-control form-control-lg" placeholder="Teléfono" onChange={this.handleChange} />
                  <br />
                  <button className="btn btn-primary" type="button" onClick={this.postUsuario}>Enviar</button>
                </div>
              </div>
              <div className="col-lg-8">
                <CSVLink data={this.state.usuarios} className="btn btn-primary">Descargar excel</CSVLink>
                <DataTable title="Usuarios registrados" columns={columns} data={this.state.usuarios} />
              </div>
            </div>
          </div>
        </header>
      </div>
    );



  }

  componentDidMount() {
    this.getUsuarios()
  }
}

