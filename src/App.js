import React from 'react';
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  
  getMoives = async() => {
    const ID_KEY = 'a';
    const SECRET_KEY = 'a';
    // const search = this.state.value;

    try {

      const {
        data: { items }
      } = await axios.get(
          '/api/v1/search/movie.json' ,{
          params:{
            query: "아이언맨",
            display: 10
          },
          headers: {
            'X-Naver-Client-Id': ID_KEY,
            'X-Naver-Client-Secret': SECRET_KEY
          }
      });

      this.setState({ movies: items, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getMoives();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ?
          "Loading..."
          : movies.map(movie => (
            <Movie
              id={movie.link}
              title={movie.title}
              poster={movie.image}
              actors={movie.actor}
              year={movie.pubDate}
            />
          ))}
      </div>
    );
  }
}

export default App;
