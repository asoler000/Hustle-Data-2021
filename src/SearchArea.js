import React, {Component} from 'react';

const SearchArea = (props) =>{
    
   
        
        return (
            <div  className="search-area">


        <form onSubmit={props.searchStock} action=" " className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input  onChange= {props.handleSearch} type="text" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"></input>
          <button type="text" className="input-group-append">Search</button>
        </form>

        
            </div>
        );
    
}
export default SearchArea;