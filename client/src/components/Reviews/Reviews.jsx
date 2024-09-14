
import React, { useRef, useState } from "react";
import "../ContactUs/ContactUs.css";

function Reviews() {

    const textareaRef = useRef(null);
    const charCountRef = useRef(null);
    const maxLength = 40;
    const reviewsPerPage = 3; // Limit to 4 reviews per page

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [submittedMessages, setSubmittedMessages] = useState([]);
    const [page, setPage] = useState(1);

    function updateCharacterCount() {
        if (textareaRef.current && charCountRef.current) {
            var charCount = textareaRef.current.value.length;
            charCountRef.current.textContent = `${maxLength - charCount} characters remaining.`;
        }
    }
    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() && message.trim()) {

            // Get the current date and time
            const timestamp = new Date().toLocaleString();

            // Add new message to the submittedMessages array
            setSubmittedMessages(prevMessages => [...prevMessages, { name, message, timestamp }]);

            // Clear form fields after submission
            setName('');
            setMessage('');

            // confirm if message was submitted
            console.log('name:', name);
            console.log('message:', message);
            console.log('timestamp:', timestamp);

        } else {
            // show error message
            console.log('Please fill in all fields');
        }
    }

    //Calculate the total page numbers
    const totalPages = Math.ceil(submittedMessages.length / reviewsPerPage);

    // Determine the reviews to display on the current page
    const startIndex = (page - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const currentReviews = submittedMessages.slice().reverse().slice(startIndex, endIndex);

    // Handle going to the first page
    const goToFirstPage = () => {
        setPage(1);
    };

    // Handle going to the last page
    const goToLastPage = () => {
        setPage(totalPages);
    };

    // Handle changing the page number
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle changing the number of reviews per page
    const handleChangeRowsPerPage = (event) => {
        setReviewsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };

    // Handle input change for name field
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    // Handle input

    //Handle going to the next page
    const goToNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    //Handle going to the previous page
    const goToPreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="w-full m-auto pt-3 max-w-none" >
            <div className="rounded overflow-hidden shadow-none px-6 py-3" style={{
                marginBottom: "10px",
                marginTop: "20px",
            }}>

                <div className="row">

                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7" style={{
                        maxWidth: "1200px",
                        marginBottom: "10px",
                        marginTop: "10px",
                    }}>

                        <div className="col-lg-7 col-span-2" >

                            <div className="contact-from mt-1" style={{ padding: "10px", }}>
                                <div className="section-title">
                                    <h2>Please share your feedback with us...</h2>
                                    <hr
                                        class="border-t-2 border-red-700  mb-2 py-1"
                                        style={{ width: "10%", margin: "15px" }}
                                    />
                                </div>
                                <div className="main-form pt-45">
                                    <form
                                        id="contact-form"
                                        action="#"
                                        method="post"
                                        data-toggle="validator"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="singel-form form-group">
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        data-error="Name is required."
                                                        required
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="singel-form form-group ">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Message"
                                                        value={message}
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        data-error="Please, leave us a message."
                                                        required
                                                        ref={textareaRef}
                                                        onInput={updateCharacterCount}
                                                        maxLength={maxLength}
                                                        style={{ resize: "vertical" }}
                                                        spellCheck={true}
                                                    ></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="mt-2" ref={charCountRef}>{maxLength} characters remaining.</div>
                                            </div>
                                            <p className="form-message"></p>
                                            <div className="col-md-12">
                                                <div className="singel-form">
                                                    <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-span-1">
                            <h3 className="text-xl font-bold mb-2">User reviews [{submittedMessages.length}]:</h3>
                            {submittedMessages.length > 0 ? (
                                <div className="bg-gray-100 p-4 rounded shadow-md">
                                    {currentReviews.map((entry, index) => (
                                        <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-2 border border-gray-300"
                                            style={{
                                                wordWrap: "break-word", // Ensures words are broken at boundaries
                                                overflowWrap: "break-word", // Prevents overflow and wraps long words
                                            }}
                                        >

                                            <p className="text-sm text-gray-500">
                                                <strong>Name:</strong> {entry.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                <strong>Message:</strong> {entry.message}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                <strong>Date:</strong> {entry.timestamp}
                                            </p>
                                        </div>
                                    ))}
                                    <div>
                                        <button
                                            onClick={goToPreviousPage}
                                            disabled={page === 1}
                                            className={`px-3 py-1 text-sm bg-gray-300 rounded ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
                                        >
                                            Previous
                                        </button>
                                        <span>Page {page} of {totalPages}</span>
                                        <button
                                            onClick={goToNextPage}
                                            disabled={page === totalPages}
                                            className={`px-3 py-1 text-sm bg-gray-300 rounded ${page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-gray p-4 rounded-lg shadow-md mb-1 border border-gray-300">
                                    <p>No feedback yet.</p>
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;

