import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions/actionCreator";

export default function RegisterView() {
  // local state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordFlag, setPasswordFlag] = useState(false);
  // requirement
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // global state

  // function
  function handleForm(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleRegister(e) {
    setIsLoading(true);
    e.preventDefault();
    dispatch(registerUser(formData))
      .then((result) => {
        setIsLoading(false);
        navigate("/login");
      })
      .catch((err) => {});
  }

  function handleBack(e) {
    setIsLoading(true);
    e.preventDefault();
    navigate("/");
  }

  function handlePassword() {
    if (passwordFlag) {
      setPasswordFlag(false);
    } else {
      setPasswordFlag(true);
    }
  }

  // lifecycle

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
    <>
      <section className="w-screen h-screen bg-blue-300">
        <div className=" mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg bg-">
            <form
              action=""
              className="bg-white mb-0 mt-20 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
              <h1 className="text-center text-2xl font-bold sm:text-3xl">
                Cariin Buku Dong
              </h1>
              <p className="text-center text-lg font-medium">Daftar disini</p>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    onChange={handleForm}
                    value={formData.email}
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    name="email"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {!passwordFlag ? (
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      onChange={handleForm}
                      value={formData.password}
                      type="password"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                      name="password"
                    />

                    <div
                      onClick={handlePassword}
                      className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      onChange={handleForm}
                      value={formData.password}
                      type="text"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                      name="password"
                    />

                    <span
                      onClick={handlePassword}
                      className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              )}

              <button
                onClick={handleRegister}
                className="block w-full rounded-l bg-sky-500 px-5 py-3 text-sm font-medium text-white"
              >
                Daftar
              </button>
              <button
                onClick={handleBack}
                className="block w-full rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white"
              >
                kembali
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
