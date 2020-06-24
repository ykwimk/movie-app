import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import '../components/Movie.css';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      movies: [],
    }
  }

  componentDidMount() {
    this.getMovieData()
  }

  getMovieData = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json')
    this.setState({
      movies,
      isLoading: false,
    })
  }

  render() {
    const { isLoading, movies } = this.state
    return (
      <section className="container">
        {isLoading ? (
          <div className="loading">
            <span className="loading__text">
              로딩중...
            </span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(data => (
              <Movie
                key={data.id}
                id={data.id}
                year={data.year}
                title={data.title}
                summary={data.summary}
                poster={data.medium_cover_image}
                genres={data.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default Home;