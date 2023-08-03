import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBooksSearch } from "../store/actions/actionCreator";
import BookCard from "../components/BookCard";

export default function HomeView() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");

  const { books } = useSelector((state) => {
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
    setIsLoading(true);
    dispatch(fetchBooksSearch(inputText))
      .then((result) => {
        setIsLoading(false);
      })
      .catch((err) => {});
  }

  return (
    <div>
      <h1 className="text-center my-5 mt-10 text-2xl font-bold">Cariin Buku Dong</h1>
      <div className="items-center flex justify-center">
        <div className="flex gap-4">
          <input
            onChange={inputHandler}
            type="search"
            className="w-auto rounded-lg border border-gray-300 text-lg shadow-sm px-4"
            placeholder="Pencarian buku"
          />
          <button
            onClick={handleBookSearch}
            className="block rounded-md bg-blue-600 px-8 py-2.5 text-lg font-medium text-white transition hover:bg-blue-800"
          >
            Cari
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen pb-[40vh]">
          <img
            className=" scale-100 w-[60vh]"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt=""
          />
        </div>
      ) : (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.length > 0 &&
              books.map((el, index) => (
                <BookCard key={index} book={el}></BookCard>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
