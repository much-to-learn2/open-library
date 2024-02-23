import { useState } from "react";

import Book from "./components/Book";
import Input from "./components/Input";
import Loading from "./components/Loading";
import SortBy from "./components/SortBy";
import { query, Doc } from "./api";

const App = () => {
  const [recentChange, setRecentChange] = useState<boolean>(false);
  const [results, setResults] = useState<Doc[]>([]);
  const [sortedResults, setSortedResults] = useState<Doc[]>([]);
  const [queryString, setQueryString] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("relevance");

  const onChange = (e: any) => {
    setQueryString(e.target.value);
    setRecentChange(true);
    setTimeout(() => {
      if (recentChange) return;

      console.log("triggering api call");
      setLoading(true);
      query(e.target.value)
        .then((d) => {
          setResults(d.docs);
          setSortedResults([...d.docs].sort((a, b) => a.first_publish_year - b.first_publish_year));
          })
        .finally(() => {
          setRecentChange(false);
          setLoading(false);
          console.log(results);
        })
    }, 1000)
  }

  const onSelectChange = (e: any) => {
    setSortBy(e.target.value);
  }

  return (
    <div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{"clipPath": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div> 
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="my-10 text-4xl font-bold tracking-tight text-slate-900">Open Library Search Tool</h1>
        <div className="relative w-full flex justify-center">
          <Input value={queryString} onChange={onChange} />
          <div className="absolute h-full right-0 flex flex-row items-center">
          <SortBy value={sortBy} onChange={onSelectChange} />
          </div>
        </div>
        {loading && <Loading />}
        {!loading && (sortBy === "relevance") && results.map((d) => {
          return <Book book={d} />
        })}
        {!loading && (sortBy === "year_published") && sortedResults.map((d) => {
          return <Book book={d} />
        })}
      </div>
    </div>   
  )
}

export default App
