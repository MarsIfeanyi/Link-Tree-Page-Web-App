import React from "react";

const Contact = () => {
  return (
    <form>
      <div className=" flex flex-col mt-10 mb-30 p-8">
        <h1 className="text-gray-900 font-inter font-semibold text-4xl mb-2">
          Contact Me
        </h1>
        <p className="text-Gray700  mb-8">
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <div className="flex flex-col md:flex-row mb-6 space-y-6 md:space-y-0  justify-between">
          <div className=" firstName flex flex-col space-y-3 text-Gray700 ">
            <label htmlFor="first_name ">First name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter your first name"
              className=" inputStyle "
            />
          </div>

          <div className="lastName flex flex-col space-y-3 text-Gray700  ">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter your first name"
              className=" inputStyle"
            />
          </div>
        </div>

        <div className="userEmail flex flex-col space-y-3 mb-8 text-Gray700  ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="yourname@email.com"
            className=" inputStyle"
          />
        </div>

        <div className="textArea flex flex-col space-y-3 mb-8 text-Gray700 ">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="5"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            className=" inputStyle"
          ></textarea>
        </div>

        <div className=" userCheckbox flex flex-row  mb-6 space-x-4">
          <input
            type="checkbox"
            name="userCheck"
            id="userCheck"
            className="space-x-10"
          />
          <label htmlFor="userCheck" className="text-Gray600">
            You agree to providing your data to {name} who may contact you
          </label>
        </div>

        <button
          type="submit"
          id="btn__submit"
          className="bg-sendBtn rounded-lg p-4 text-white mb-20"
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default Contact;
