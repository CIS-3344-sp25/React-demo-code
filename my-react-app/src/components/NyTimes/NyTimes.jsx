import React, { useState } from "react";

const NyTimes = () => {
//   const endpoint =
//     "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=";

// const baseUrl ="https://api.nytimes.com/svc/search/v2/articlesearch.json"
const query = "vacation"
const baseUrl= import.meta.env.VITE_NYT_BASEURL
// const apiKey = import.meta.env.VITE_NYT_API_KEY

const endpoint = `${baseUrl}/api/articles?q=${query}`;
const [search, setSearch] = useState("");
const [articles, setArticles] = useState([]);

 const fetchArticles = (event) => {
  event.preventDefault();
  fetch(endpoint).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }).then((data) => {
    console.log("Data Fetched: ", data);
    console.log("Articles: ", data.response);
    setArticles(data.response.docs);
  })
  .catch((error) => {
    console.error("Error fetching articles:", error);
  });
  };

// const getArticles = async () => {
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     console.log("Data Fetched: ", data);
//   };

  return (
    <div>
      {/* <h1>NyTimes Component</h1>
      <button onClick={fetchArticles}>Fetch Articles</button> */}
            <h1>NY Times</h1>
      <form>
        <input
          type="text"
          placeholder="Search"
          name="search"
          id="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={fetchArticles}>Fetch Articles</button>

        {/* <button>
          <Link to="/home">Go To Home</Link>
        </button> */}
      </form>

      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <h3>{article.headline?.main}</h3>
            <p>{article.abstract}</p>
            {article.source && <small>Source: {article.source}</small>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NyTimes;
