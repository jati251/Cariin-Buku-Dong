import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBooksSearch } from "../store/actions/actionCreator";

export default function HomeView() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");

  const { books} = useSelector((state) => {
    return state.books;
  });

  console.log(books);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function inputHandler(event) {
    event.preventDefault();
    setInputText(event.target.value);
  }

  function handleBookSearch() {
    setIsLoading(true)
    dispatch(fetchBooksSearch(inputText))
    .then((result) => {
        setIsLoading(false)
    }).catch((err) => {
        
    });
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          className=" scale-100 w-[60vh]"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt=""
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-4">
        <input
          onChange={inputHandler}
          type="search"
          className="w-auto rounded-lg border border-gray-300 text-sm shadow-sm px-4"
          placeholder="Cari buku"
        />
        <button
          onClick={handleBookSearch}
          className="block rounded-md bg-[#1db5ab] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#19958c]"
        >
          Cari
        </button>
      </div>

      <h1>HomeView</h1>
    </div>
  );
}
