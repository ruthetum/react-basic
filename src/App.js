import React from 'react';
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
    value: ""
  };
  
  getMoives = async() => {
    const ID_KEY = 'id';
    const SECRET_KEY = 'key';
    const search = this.state.value;

    const {
      data: {
        data: {movies}
      }
    } = await axios.get('https://openapi.naver.com/v1/search/movie.json' ,{
      params:{ query: search, display: 20 },
      headers: { 'X-Naver-Client-Id': ID_KEY, 'X-Naver-Client-Secret': SECRET_KEY }
    });
    this.setState({ movies, isLoading:false });
    console.log(movies);
  };

  componentDidMount() {
    this.getMoives();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
