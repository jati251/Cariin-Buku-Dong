import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../store/actions/actionCreator";
import { useEffect, useState } from "react";
import WishlistCard from "../components/WishlistCard";
import { useNavigate } from "react-router-dom";

export default function WishlistView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { wishlist } = useSelector((result) => {
    return result.user;
  });

  function handleBack() {
    navigate("/");
  }
  
  useEffect(() => {
    dispatch(getWishlist())
    .then((result) => {
        setIsLoading(false)
    }).catch((err) => {
        
    });
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center mt-10 text-2xl font-bold">Wishlist saya</h1>
      </div>
      <div className="items-center flex justify-center my-4">
        <button
          onClick={handleBack}
          className="block rounded-md bg-sky-500 px-8 py-2.5 text-md font-medium text-white transition hover:bg-sky-700 mx-2"
        >
          Kembali
        </button>
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
          {wishlist.length > 0 &&
            wishlist.map((el, index) => (
              <WishlistCard key={index} book={el}></WishlistCard>
            ))}
        </div>
      </div>
      )}
    </>
  );
}
