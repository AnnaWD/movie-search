export default function Search ({setSearchPhrase}) {

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    if (fieldValue.length < 3)
      return true;

    setSearchPhrase(fieldValue);
  }

  return (
    <div className="mb-4">
      <input type="text" placeholder="Search for a movie..." className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange}/>
    </div>
  )
}