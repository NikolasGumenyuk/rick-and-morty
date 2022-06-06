import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from "../../components/Card";
import Search from "../../components/Search";
import Pagination from "../../components/Pagination";

const HomePage = () => {
  let [fetchedData, setFetchedData] = useState({});
  let { info, results } = fetchedData;
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              {results?.map((result) => {
                return <Card result={result} key={result.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={setPageNumber}
      />
    </div>
  );
};

export default HomePage;
