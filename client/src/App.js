import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

  
    render() {
        return (

<div class="container">
  <h2>GramworkX: FileUpload</h2>
  <p>The form below contains details of the file to upload:</p>

  <div class="card">
    <div class="card-header">File Upload</div>
    <div class="card-body">
      <form action="http://localhost:9000/testAPI" method="POST">
    <div class="form-group">
      <label for="sel1">Device Model (select one):</label>
      <select class="form-control" id="sel1">
        <option>--Select Device --</option>
        <option>gwx100</option>
        <option>gwx200</option>
      </select>
      <br/>
    </div>
    
    
     
    <div class="row">
    <div class="col-sm">
      <div class="form-group">
      <label for="sel2">Firmware Version</label>
      <input type="text" class="form-control" id="sel2" placeholder="FirmVersion" />
    <br/>
    </div>
    
    </div>
    <div class="col-sm">
      <label for="customFileLang">Choose Firmware</label>
        <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">
      Upload
    </span>
  </div>
  <div className="custom-file">
    <input
      type="file"
      className="custom-file-input"
      id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"
    />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      Choose file
    </label>
  </div>
</div>

    </div>
    </div>
    <center>
   <button type="submit" class="btn btn-primary">Update Firmware</button>
</center>
</form>
    </div> 
  </div>

<br/><br/>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Model Name</th>
      <th scope="col">Firmware Version</th>
      <th scope="col">File Path</th>
      <th scope="col">Created At</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>


            
        );
    }
}

export default App;
