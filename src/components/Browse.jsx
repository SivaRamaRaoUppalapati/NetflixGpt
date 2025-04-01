import { useSelector } from 'react-redux';
import useNowPlaying from '../hoooks/useNowPlayingMovies'
import usePopularMovies from '../hoooks/usePopularMovies';
import useTopRated from '../hoooks/useToprated';
import useUpcomingMovies from '../hoooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryConatainer from './SecondaryConatainer';


const Browse = () => {
  const gptSearch =useSelector(store=>store.gpt.showGptSearch);

  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
   
  return (
    <div>
      <Header/>
      {
        gptSearch ?  <GPTSearch/> : 
        <> 
        <MainContainer/>
        <SecondaryConatainer/>
        </>
      }
     
    </div>
  )
}

export default Browse