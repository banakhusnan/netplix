import { useRef, useState } from "react";
import Loading from "react-loading";
import Body from "./components/Body";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Input from "./components/Input";
import Jumbotron from "./components/Jumbotron";
import Modal from "./components/Modal";

function App() {
  const apikey = "abdbc751";
  const [movies, setMovies] = useState([]);
  const [detailMovie, setDetailMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef();

  function getMovies(search) {
    return fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${search}`)
      .then((res) => res.json())
      .then((res) => res.Search);
  }

  function getDetailMovie(imdbid) {
    return fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${imdbid}`)
      .then((res) => res.json())
      .then((res) => res);
  }

  async function handleDetailMovie(imdbid) {
    modalRef.current.showModal();
    setLoading(true);
    const data = await getDetailMovie(imdbid);
    setLoading(false);
    setDetailMovie(data);
  }

  async function handleSearch(e) {
    e.preventDefault();

    const input = e.target.search.value;
    const data = await getMovies(input);

    setMovies(data);
  }

  return (
    <div className="bg-black w-full min-h-screen text-white">
      <Header>
        <Header.Brand>NETPLIX.</Header.Brand>

        <form method="post" onSubmit={handleSearch}>
          <Header.SearchBar>
            <Input
              name={"search"}
              type="search"
              id={"search"}
              className="bg-transparent w-full"
              placeholder="Cari film favoritmu disini..."
              autoComplete="off"
            />

            <Button>Cari</Button>
          </Header.SearchBar>
        </form>
      </Header>

      <Jumbotron>Cari Buruan</Jumbotron>

      <Body>
        <div className="grid grid-cols-5 gap-x-4 gap-y-10">
          {movies.map((movie) => (
            <Button
              key={movie.imdbID}
              className="bg-transparent text-start"
              onClick={() => handleDetailMovie(movie.imdbID)}
            >
              <Card>
                <Card.Image src={movie.Poster} />
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Body>
                  <p>
                    <span className="text-red-600">Release</span> at{" "}
                    {movie.Year}
                  </p>
                </Card.Body>
              </Card>
            </Button>
          ))}
        </div>
      </Body>

      <Modal ref={modalRef}>
        <Modal.Header>
          <h4 className="text-xl font-semibold text-red-700">Detail Film</h4>
          <div
            onClick={() => modalRef.current.close()}
            className="cursor-pointer"
          >
            <i className="fa-regular fa-xmark text-white"></i>
          </div>
        </Modal.Header>

        {loading ? (
          <div className="flex justify-center pb-10">
            <Loading type="bars" />
          </div>
        ) : (
          <Modal.Body>
            <div className="w-full flex gap-4">
              <div
                className={` w-56 h-80 bg-cover bg-center]`}
                style={{
                  backgroundImage: `url(${detailMovie.Poster})`,
                }}
              ></div>
              <div className="w-3/4">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold">Judul</h4>
                  <p>{detailMovie.Title}</p>
                </div>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold">Rating</h4>
                  <p>
                    <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                    {detailMovie.imdbRating}
                  </p>
                </div>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold">Writer</h4>
                  <p>{detailMovie.Writer}</p>
                </div>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold">Director</h4>
                  <p>{detailMovie.Director}</p>
                </div>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold">Genre</h4>
                  <p>{detailMovie.Director}</p>
                </div>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold">Plot</h4>
                  <p>{detailMovie.Plot}</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        )}
      </Modal>
    </div>
  );
}

export default App;
