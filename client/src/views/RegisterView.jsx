import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  registerUser,
} from "../store/actions/actionCreator";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterView() {
  // local state
  const [form, setForm] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  // global state
  const [isLoading, setIsLoading] = useState(true);

  // requirement
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // function
  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleRegister(e) {
    e.preventDefault();
    dispatch(registerUser(form));
    console.log(form);
    navigate("/menu");
  }
  // lifecycle
  useEffect(() => {
   setIsLoading(false)
  }, []);

  return (
    <>
      <div className="flex-grow  ml-48 my-20 px-2 ">
        <div className="mb-4 md:flex md:justify-between m-5 relative top-0">
          <div className="mb-4 md:mr-2 md:mb-0">
            <h2 className="font-bold text-xl">
              McDonald's Register Admin Form
            </h2>
          </div>
        </div>
        {!isLoading ? (
          <form action="" className="space-y-4 m-4">
            <div>
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={handleForm}
                value={form.email}
                className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                placeholder="Insert email here"
                type="email"
                name="email"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={handleForm}
                value={form.password}
                className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                placeholder="Insert password here"
                type="password"
                name="password"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="phoneNumber"
              >
                Telephone Number
              </label>
              <input
                onChange={handleForm}
                value={form.phoneNumber}
                className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                placeholder="Insert phone number here"
                type="text"
                name="phoneNumber"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="address"
              >
                Address
              </label>

              <textarea
                onChange={handleForm}
                value={form.address}
                className="border border-gray-400 w-full rounded-lg p-3 text-sm"
                placeholder="Insert address here"
                rows="8"
                name="address"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                onClick={handleRegister}
                className="inline-block w-full m-1 rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Submit
              </button>
              <Link
                to="/menu"
                className="inline-block w-full m-1 rounded-lg bg-red-600 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Cancel
              </Link>
            </div>
          </form>
        ) : (
          <img
            className="w-full pl-60 scale-50"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt=""
          />
        )}
      </div>
    </>
  );
}


