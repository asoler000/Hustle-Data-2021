import React, {Component} from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';

class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            chart1:[],
            searchField: ''
        }
    }

    searchStock = (e) => {
        e.preventDefault();
request
    .get ("https://financialmodelingprep.com/api/v3/apikey=20629958a07cb118b035be1139694449")
    .query({ q: this.state.searchField})
    .then ((data) => {
        console.log(data);
    })
    }

    handleSearch = (e) =>{
   
        this.setState({searchField: e.target.value})
    }

    render() {
        return (
            <div >
<header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
   

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <SearchArea searchStock={this.searchStock} handleSearch={this.handleSearch}/>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
            </div>
        );
    }
}
export default Header;