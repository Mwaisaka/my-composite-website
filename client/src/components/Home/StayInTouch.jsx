import React, { useState, useEffect } from "react";

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleSubscribe = () => {
    if (!isValidEmail) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setIsSending(true);

    //Simulate an asynchronous operation(e.g. API call)
    setTimeout(() => {
      setIsSending(false);
      setMessage("Thanks for contacting us! We will be in touch wih you soon.");
      setEmail("");
      setIsValidEmail(false); // Reset the email validity
    }, 3000);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); // Clear the message after 3 seconds
      }, 3000);

      // Cleanup the timer if the component unmounts before the timer completes
      return () => clearTimeout(timer);
    }
  }, [message]);
  return (
    <div
      className="rounded overflow-hidden shadow-none px-6 py-1"
      style={{
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Stay In Touch
        <h3 className="text-2xl font-normal text-gray-800 mt-4 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <hr
            className="border-t-2 border-red-700 mb-2"
            style={{ width: "25%", margin: "15px auto" }}
          />
        </h3>
      </h2>

      <div className="flex justify-center mb-2">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address"
          className="px-4 py-2 rounded-l-lg border border-gray-300 w-full max-w-lg"
        />
        <button
          onClick={handleSubscribe}
          className={`${
            isSending ? "bg-gray-500" : "bg-orange-700 hover:bg-blue-800"
          } text-white px-4 py-2 rounded-lg transition`}
          style={{ marginLeft: "10px" }}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Subscribe"}
        </button>
      </div>
      {message && (
        <div className="text-center text-green-600 mt-4">{message}</div>
      )}
    </div>
  );
}

export default Contact;
