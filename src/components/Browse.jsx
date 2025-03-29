import useNowPlaying from '../hoooks/useNowPlayingMovies'
import usePopularMovies from '../hoooks/usePopularMovies';
import useTopRated from '../hoooks/useToprated';
import useUpcomingMovies from '../hoooks/useUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryConatainer from './SecondaryConatainer';


const Browse = () => {

  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
   
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryConatainer/>
    </div>
  )
}

export default Browse