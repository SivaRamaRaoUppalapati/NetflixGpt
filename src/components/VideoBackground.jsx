import { useSelector } from "react-redux";
import useMovieTrailer from "../hoooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
  const trailerid = useSelector((store)=>store.movies?.trailerVedio);
  useMovieTrailer({movieId});

  return (
    <div><iframe width="560" height="315" 
    src={"https://www.youtube.com/embed/"+trailerid}
    title="YouTube video player" frameBorder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe></div>
  )
}

export default VideoBackground;