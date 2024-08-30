import { Link } from "react-router-dom";

export default function Header ({}) {
  return (
    <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Movie Search App</h1>
        <nav>
            <Link to='/' className={"text-white hover:text-gray-300 px-3"}>Home</Link>
            <Link to={'favorites/'} className="text-white hover:text-gray-300 px-3">Favorites</Link>
        </nav>
    </div>
</header>
  )
}