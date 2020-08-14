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

  constructor(props){
    super(props);

    this.state = {
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
  
  render(){

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div class="row">

            <div className="col-md-4">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nombre" />
                <br/>
                <input type="text" className="form-control" placeholder="Correo" />
                <br/>
                <input type="text" className="form-control" placeholder="Estado" />
                <br/>
                <input type="text" className="form-control" placeholder="Edad" />
                <br/>
                <input type="text" className="form-control" placeholder="Teléfono" />
                <br/>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>
            <div className="col-lg-8">
              <DataTable title="Usuarios" columns={columns} data={this.state.usuarios}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );



}
}

