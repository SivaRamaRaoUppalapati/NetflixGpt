import useNowPlaying from '../hoooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryConatainer from './SecondaryConatainer';


const Browse = () => {

  useNowPlaying();
   
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryConatainer/>
    </div>
  )
}

export default Browse