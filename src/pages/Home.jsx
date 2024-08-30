import { useState } from "react";

import Search from "../components/Search";
import MovieList from '../components/MovieList'

export default function Home ({}) {
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <>
      <Search setSearchPhrase={setSearchPhrase}/>
      <MovieList searchPhrase={searchPhrase}/>
    </>
  )
}