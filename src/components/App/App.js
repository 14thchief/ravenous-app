import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Yelp from '../../util/yelp.js';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      businesses: []
    }
    this.searchYelp= this.searchYelp.bind(this)
  }


  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy).then((modList) => {
        this.setState({ businesses: [modList][0]})
       })
    }

  render(){
    return (
      <div className="App">
        <h1>RavenouS</h1>
        <SearchBar searchYelp={ this.searchYelp } />
        <BusinessList businesses={ this.state.businesses } />
      </div>
    )
  }
}





/*const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5 + 'stars',
  reviewCount: 90 + 'reviews'
};

const businesses =[business, business, business, business, business, business];*/



export default App;
