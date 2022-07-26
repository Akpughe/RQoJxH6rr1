import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

// Import and apply CSS stylesheet
import "./styles/styles.css";
import axios from "axios";

// Home function that is reflected across the site
export default function Home() {
  const [comment, setComment] = useState("");
  const [post, setPost] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reg, setReg] = useState();

  const sendComment = async (e) => {
    e.preventDefault();
    console.log('sent')
    try {
      const res = await axios.post(
        "https://crocus-trusting-gallimimus.glitch.me/create",
        { title: comment }
      );

      console.log("res", res.data);
      setComment('')
      setPost(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const registerHere = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://crocus-trusting-gallimimus.glitch.me/register",
        { email: email, password: password }
      );

      console.log("res", res.data);

      setReg(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h3>Enter a comment</h3>
        <form onSubmit={(e) => sendComment(e)}>
          <input
            name="comment"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {post}
      </div>

      <div>
        <h3>Register</h3>
        <form onSubmit={(e) => registerHere(e)}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
        {reg}
      </div>
    </>
  );
}
