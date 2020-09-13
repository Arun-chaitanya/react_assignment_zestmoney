import React from 'react';
import Navbar from './Navbar.js';
import Viewport from './Viewport';
import DetailPage from './DetailPage'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      genres:[],
      items: [],
      isMoviesLoaded: false,
      isSeriesLoaded: false,
      searchInput:"",
      detailsVisible:false,
      itemDetails:{}
    }
  }

  changeInput = (event) => {
    this.setState({ searchInput: event.target.value });
  }

  fetchMovies = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=699aa1f6bb0b3f6a60e074824770ac61')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isMoviesLoaded:true,
          isSeriesLoaded:false,
          items:json.results,
          searchInput:""
        })
      }).catch(function() {
        console.log("error");
    });
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=699aa1f6bb0b3f6a60e074824770ac61&page=2')
      .then(res => res.json())
      .then(json => {
        var items = this.state.items
        items = [...items,...json.results]
        this.setState({
          items:items
        })
      }).catch(function() {
        console.log("error");
    });
    fetch('https://api.themoviedb.org/3/genre/movie/list?&api_key=699aa1f6bb0b3f6a60e074824770ac61')
      .then(res => res.json())
      .then(json => {
        this.setState({
          genres:json.genres
        })
      }).catch(function() {
        console.log("error");
    });
  }

  fetchSeries = () => {
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=699aa1f6bb0b3f6a60e074824770ac61')
      .then(res => res.json())
      .then(json => {
        json.results.forEach(obj => {
          obj['title'] = obj['name']
          delete obj['name']
          return obj
        });
        json.results.forEach(obj => {
          obj['release_date'] = obj['first_air_date']
          delete obj['first_air_date']
          return obj
        });
        this.setState({
          isMoviesLoaded:false,
          isSeriesLoaded:true,
          items:json.results,
          searchInput:""
        })
      }).catch(function() {
        console.log("error");
    });
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=699aa1f6bb0b3f6a60e074824770ac61&page=2')
      .then(res => res.json())
      .then(json => {
        json.results.forEach(obj => {
          obj['title'] = obj['name']
          delete obj['name']
          return obj
        });
        json.results.forEach(obj => {
          obj['release_date'] = obj['first_air_date']
          delete obj['first_air_date']
          return obj
        });
        var items = this.state.items
        items = [...items,...json.results]
        this.setState({
          items:items
        })
      }).catch(function() {
        console.log("error");
    });
    fetch('https://api.themoviedb.org/3/genre/tv/list?&api_key=699aa1f6bb0b3f6a60e074824770ac61')
      .then(res => res.json())
      .then(json => {
        this.setState({
          genres:json.genres
        })
      }).catch(function() {
        console.log("error");
    });
  }

  submitMovieSearch = () => {
    let value = this.state.searchInput
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=699aa1f6bb0b3f6a60e074824770ac61&query=${value}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items:json.results,
          searchInput:""
        })
      }).catch(function() {
        console.log("error");
    });
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=699aa1f6bb0b3f6a60e074824770ac61&query=${value}&page=2`)
      .then(res => res.json())
      .then(json => {
        var items = this.state.items
        items = [...items,...json.results]
        this.setState({
          items:items
        })
      }).catch(function() {
        console.log("error");
    });
  }

  selectMovieGenre = (event) => {
    let value = event.target.value
    if(value === 'Genre'){
      this.fetchMovies();
    }
    else{
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=699aa1f6bb0b3f6a60e074824770ac61&with_genres=${value}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            items:json.results,
            searchInput:""
          })
        }).catch(function() {
          console.log("error");
      });
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=699aa1f6bb0b3f6a60e074824770ac61&with_genres=${value}&page=2`)
        .then(res => res.json())
        .then(json => {
          var items = this.state.items
          items = [...items,...json.results]
          this.setState({
            items:items
          })
      }).catch(function() {
        console.log("error");
    });
    }    
  }

  submitSeriesSearch = () => {
    let value = this.state.searchInput
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=699aa1f6bb0b3f6a60e074824770ac61&query=${value}`)
      .then(res => res.json())
      .then(json => {
        json.results.forEach(obj => {
          obj['title'] = obj['name']
          delete obj['name']
          return obj
        });
        json.results.forEach(obj => {
          obj['release_date'] = obj['first_air_date']
          delete obj['first_air_date']
          return obj
        });
        this.setState({
          items:json.results,
          searchInput:""
        })
      }).catch(function() {
        console.log("error");
    });
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=699aa1f6bb0b3f6a60e074824770ac61&query=${value}&page=2`)
      .then(res => res.json())
      .then(json => {
        json.results.forEach(obj => {
          obj['title'] = obj['name']
          delete obj['name']
          return obj
        });
        json.results.forEach(obj => {
          obj['release_date'] = obj['first_air_date']
          delete obj['first_air_date']
          return obj
        });
        var items = this.state.items
        items = [...items,...json.results]
        this.setState({
          items:items
        })
      }).catch(function() {
        console.log("error");
    });
  }

  selectSeriesGenre = (event) => {
    let value = event.target.value
    if(value === 'Genre'){
      this.fetchSeries();
    }
    else{
      fetch(`https://api.themoviedb.org/3/discover/tv?api_key=699aa1f6bb0b3f6a60e074824770ac61&with_genres=${value}`)
      .then(res => res.json())
      .then(json => {
        json.results.forEach(obj => {
          obj['title'] = obj['name']
          delete obj['name']
          return obj
        });
        json.results.forEach(obj => {
          obj['release_date'] = obj['first_air_date']
          delete obj['first_air_date']
          return obj
        });
        this.setState({
          items:json.results,
          searchInput:""
        })
      }).catch(function() {
        console.log("error");
    });
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=699aa1f6bb0b3f6a60e074824770ac61&with_genres=${value}&page=2`)
      .then(res => res.json())
      .then(json => {
        json.results.forEach(obj => {
          obj['title'] = obj['name']
          delete obj['name']
          return obj
        });
        json.results.forEach(obj => {
          obj['release_date'] = obj['first_air_date']
          delete obj['first_air_date']
          return obj
        });
        var items = this.state.items
        items = [...items,...json.results]
        this.setState({
          items:items
        })
      }).catch(function() {
        console.log("error");
    });
    }    
  }

  showDetails = (item) => {
    const itemDetails = item;
    console.log(item)
    this.setState({
      detailsVisible:true,
      itemDetails:itemDetails
    })
  }

  closeDetail = () => {
    this.setState({
      detailsVisible:false,
      itemDetails:{}
    })
  }

  componentDidMount(){
    this.fetchMovies()    
  }

  render(){
    var {genres, items, isMoviesLoaded, isSeriesLoaded, searchInput, detailsVisible, itemDetails} = this.state;

    if(!isMoviesLoaded && !isSeriesLoaded){
      return <div> Loading.... </div>
    }
    else if(detailsVisible){
      return (
        <div className='App'>
          <DetailPage itemDetails={itemDetails} genres={genres} closeDetail={this.closeDetail}/>
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <Navbar 
            genres = {genres} 
            fetchMovies = {this.fetchMovies}
            fetchSeries = {this.fetchSeries}
            searchInput = {searchInput}
            changeInput = {this.changeInput}
            submitSearch = {isMoviesLoaded ? this.submitMovieSearch : this.submitSeriesSearch}
            selectGenre = {isMoviesLoaded ? this.selectMovieGenre : this.selectSeriesGenre}
          />
          <Viewport items = {items}  showDetails={this.showDetails} />
          </div>
      );
    }    
  }  
}

export default App;
