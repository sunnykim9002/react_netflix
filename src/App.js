import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Row from "./components/Row"
import './App.css';
import requests from "./api/requests";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
        title="NETFILX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
      title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}
      />
      <Row
      title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}
      />
      <Row
      title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies}
      />
      <Row
      title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}

export default App;
