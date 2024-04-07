import useMovieTrailer from "../../utils/api/hooks/useMovieTrailer";

function TrailerBackground({ movieId }) {

  const youtubeKey = useMovieTrailer(movieId);

  return (
    // <div>
    //   <iframe
    //     className="w-screen aspect-video"
    //     src={`https://www.youtube.com/embed/lV1OOlGwExM?autoplay=1&controls=0&modestbranding=0&loop=0&playlist=${youtubeKey}&showinfo=0`}
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     referrerPolicy="strict-origin-when-cross-origin"
    //   ></iframe>
    // </div>




    <div>
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/lV1OOlGwExM?autoplay=1&controls=0&modestbranding=0&loop=0&playlist=${youtubeKey}&showinfo=0&fs=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>




    // <div class="w-full h-full flex justify-center items-center">
    //   <iframe
    //     class="w-full h-full max-w-screen-lg max-h-screen-3/4 aspect-w-16 aspect-h-9"
    //     src={`https://www.youtube.com/embed/lV1OOlGwExM?autoplay=1&controls=0&modestbranding=0&loop=0&playlist=${youtubeKey}&showinfo=0`}
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     referrerpolicy="strict-origin-when-cross-origin"
    //   ></iframe>
    // </div>
  );
}

export default TrailerBackground;