import { useSelector } from "react-redux";
import useMovieTrailer from "../hoooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
  const trailerid = useSelector((store)=>store.movies?.trailerVedio);
  useMovieTrailer({movieId});

  return (
    <div className="w-screen">
      <iframe 
      className="w-screen aspect-video "
    src={`https://www.youtube.com/embed/${trailerid}?autoplay=1&mute=1&rel=0&showinfo=0`}
    title="YouTube video player" frameBorder="0" allow="autoplay; accelerometer; 
     clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe></div>
  )
}

export default VideoBackground;