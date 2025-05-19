import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response){
    setPhotos(response.data.photos);
  }

  function search(){
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let SheCodesApiKey = "a7f4435600oc7ca6bdf3abed988ftf39";
    let SheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${SheCodesApiKey}`;  
    axios.get(SheCodesApiUrl).then(handlePexelsResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();    
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
      search();
  }
  
  if(loaded){
    return (
      <div className="Dictionary">
        <section>
          <h1>What word are you interested in looking up?</h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="search" 
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword} />
          </form>
          <div className="hint">
            suggested words: sunset, hero, boxing, flower...
          </div>
        </section>
        <Results results={results} />
        <Photos photos = {photos}/>
      </div>
    );
  } else{
    load();
    return "Loading";
  }
  
}
