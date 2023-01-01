import "./App.css";
import { BiSearchAlt } from "react-icons/bi";
import Card from "./components/card";
import axios from "axios";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = () => {
    {
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" +search +"&key=AIzaSyAx3M0owFiqbejoLfmQHBk0j5pRpJQH9ak" +"&maxResults=40")
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  const submit = () => {
    searchBook();
  };
  

  return (
    <div className="bg-black bg-no-repeat bg-cover bg-center text-white poppin h-screen overflow-auto bg-[url('../src/images/bg44.jpg')]">
      <div>
        <h1 className="text-9xl cursor-default remboy w-4/5 m-auto text-center pt-32 max-[600px]:text-5xl">
          Book &nbsp;&nbsp; World
        </h1>
        <div className="text-center  mt-24 flex align-center justify-center">
          <input
            placeholder="Enter Book Name...."
            className="bg-transparent poppin rounded-full p-4 placeholder:text-white border-[#978d61] outline-white text-2xl max-[600px]:text-xs w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="ml-4 pl-16" onClick={submit}>
            <BiSearchAlt size={30} />
          </button>
        </div>
      </div>
      <div className="w-2/3 m-auto mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-[320px]:grid-cols-1 gap-5 box-border ">
        <Card book={bookData} />
      </div>
    </div>
  );
}

export default App;
