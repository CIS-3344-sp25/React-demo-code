import React from "react";

const NyTimes = () => {
//   const endpoint =
//     "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=UP111zK0DdSmwTCpEnRtntLM6qLCPrro";

// const baseUrl ="https://api.nytimes.com/svc/search/v2/articlesearch.json"
const query = "vacation"
// const apiKey = "UP111zK0DdSmwTCpEnRtntLM6qLCPrro"
const baseUrl= import.meta.env.VITE_NYT_BASEURL
// const apiKey = import.meta.env.VITE_NYT_API_KEY

const endpoint = `${baseUrl}/api/articles?q=${query}`;

 const fetchArticles = () => {
    fetch(endpoint).then((response) => response.json())
    .then((data) => console.log(data));
  };

// const getArticles = async () => {
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     console.log("Data Fetched: ", data);
//   };

  return (
    <div>
      <h1>NyTimes Component</h1>
      <button onClick={fetchArticles}>Fetch Articles</button>
    </div>
  );
};

export default NyTimes;
