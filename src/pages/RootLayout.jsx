import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header.jsx";

export default function RootLayout ({}) {
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </>
  )
}