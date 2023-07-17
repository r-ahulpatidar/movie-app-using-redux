import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieAction } from './store/movies/action';
import MovieCard from './components/MovieCard';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state?.movie?.results);

  useEffect(() => {
    dispatch(getMovieAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <section className="flex justify-center flex-wrap">
        {movies.length > 0 ? (
          movies.map((movie, index) => <MovieCard movie={movie} key={index} />)
        ) : (
          <div className="text-white text-2xl m-5">No Result Found</div>
        )}
      </section>
    </>
  );
}

export default App;
