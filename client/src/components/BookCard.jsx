import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createWishlist } from "../store/actions/actionCreator";

export default function BookCard({ book }) {
  function limitStringWithEllipsis(str) {
    if (str.length <= 80) {
      return str;
    } else {
      return str.substring(0, 80 - 3) + "...";
    }
  }
  
  const data = {
    bookId: book.id,
    name: book.volumeInfo.title,
    imgUrl: book.volumeInfo.imageLinks?.thumbnail,
    authors: book.volumeInfo?.authors,
    rating: book.volumeInfo.averageRating,
  };
  const token = localStorage.access_token;
  const navigate = useNavigate();
  const dispatch= useDispatch()
  function handleWishlist() {
    if (!token) {
      Swal.fire({
        icon: "error",
        title: `Gagal menambahkan`,
        text: "Anda perlu login terlebih dahulu",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    } else {
      Swal.fire({
        icon: "success",
        title: "Berhasil menambahkan wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(createWishlist(data))
    }
  }

  return (
    <div className="bg-blue-100 shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700 mx-2 overflow-hidden transition duration-100 ease-in-out transform hover:scale-105">
      <div className="h-[14vh]">
        <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white text-center mx-3 mt-5">
          {limitStringWithEllipsis(data.name)}
        </h3>
      </div>

      <img
        className="rounded-t-lg p-3 mx-auto h-[35vh]"
        src={data.imgUrl}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h1 className="font-medium">Penulis</h1>
        {book.volumeInfo.authors?.length > 0
          ? book.volumeInfo?.authors
              .slice(0, 4)
              .map((el, index) => <li key={index}> {el}</li>)
          : "-"}
        {book.volumeInfo.authors?.length > 4 && <h1>& Dkk</h1>}
        <div className="flex items-center mt-2.5 mb-5">
          {[1, 2, 3, 4, 5].map((value) => (
            <svg
              key={value}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 fill-current ${
                value <= book.volumeInfo.averageRating
                  ? "text-yellow-500"
                  : "text-gray-400"
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2l2.587 6.946h6.826l-5.25 4.49 2.587 6.946-6.35-4.95-6.35 4.95 2.587-6.946-5.25-4.49h6.826z"
              />
            </svg>
          ))}
          <span className="bg-blue-300 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {data.rating || "-"}
          </span>
        </div>
        <button
          onClick={handleWishlist}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tambahkan ke wishlist
        </button>
      </div>
    </div>
  );
}
