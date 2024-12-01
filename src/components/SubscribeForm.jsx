import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { subscribe } from "../redux/slices/subscribeSlice";
import DOMPurify from "dompurify";

const SubscribeForm = () => {
  const dispatch = useDispatch();

  // Get the subscribe state from the Redux store
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.subscribe
  );

  // State variables for email input and form submission
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Sanitize the email input on submission, not on change
    const purified = DOMPurify.sanitize(email);
    dispatch(subscribe({ email: purified }));
  };

  // Set form submission to empty on success
  useEffect(() => {
    if (isSuccess) {
      setEmail("");
    }
  }, [isSuccess]);

  return (
    <section className="flex flex-col gap-5 items-center justify-center mb-20">
      <header className="flex flex-col justify-center items-center gap-5">
        <p className="text-sm font-semibold text-violet">Newlatters</p>
        <h2 className="text-3xl font-bold">Stories and interviews</h2>
        <p className="text-text text-base text-center max-w-screen-sm">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
      </header>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <label className="hidden" htmlFor="email" aria-hidden>
            Email
          </label>
          <input
            className="border border-text/45 p-3 rounded-md outline-1 outline-violet "
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            disabled={isLoading}
            type="submit"
            className="bg-violet text-white p-3 rounded-md"
          >
            Subscribe
          </button>
        </div>
        {isError && <p className="text-red-500 text-sm">{message}</p>}
        <p className="text-text/45 text-sm">
          We care about your data in our <span>privacy policy</span>
        </p>
      </form>
    </section>
  );
};

export default SubscribeForm;
