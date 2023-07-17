import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovieAction } from '../store/movies/action';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if(searchValue) {
        dispatch(searchMovieAction(searchValue))
      }
    }, 500);
    return () => {
      clearTimeout(debounceTimer)
    }
  }, [searchValue, dispatch]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  // useEffect(() => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(searchMovieAction(searchValue));
  //     setSearchValue("");
  //   };

  //   document.addEventListener('submit', handleSubmit);

  //   return () => {
  //     document.removeEventListener('submit', handleSubmit);
  //   };
  // }, [dispatch, searchValue]);

  return (
    <header className="flex justify-end p-4 bg-indigo-900">
      <form>
        <input
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={handleChange}
          className="bg-transparent border-2 border-black rounded-3xl text-base text-white px-4 py-2 placeholder:bg-indigo-900 focus:outline-none focus:bg-blue-950"
        />
      </form>
    </header>
  );
};

export default Header;
