"use client";
import { useState } from "react";
import bcrypt from "bcrypt";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = { name, email, pass };

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit Form");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };
  return (
    <div className="p-5 bg-dark text-light flex sm:justify-center items-center h-screen">
      <form
        id="form"
        onSubmit={handleSubmit}
        className="p-2.5 bg-modal rounded-xl w-full sm:max-w-[400px]"
      >
        <a href="/">Passlock</a>
        <div className="flex flex-col pt-5 space-y-2.5 w-full">
          <label htmlFor="name">Name</label>
          <input
            required
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="p-2.5 rounded-lg bg-dark border border-pink focus:outline-none w-full"
          />
        </div>
        <div className="flex flex-col pt-5 space-y-2.5 w-full">
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2.5 rounded-lg bg-dark border border-pink focus:outline-none w-full"
          />
        </div>
        <div className="flex flex-col pt-5 space-y-2.5 w-full">
          <label htmlFor="password">Password</label>
          <input
            required
            id="password"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            className="p-2.5 rounded-lg bg-dark border border-pink focus:outline-none w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-pink text-dark w-full mt-5 p-2.5 rounded-lg font-medium"
        >
          Submit
        </button>
        <p className="pt-2.5">
          Already have an account?{" "}
          <span className="text-pink">
            <a href="/signin" className="ml-2.5">
              Signin
            </a>
          </span>
        </p>
      </form>
    </div>
  );
}
