import React, { useState } from "react";
import axios from "axios";
import './chatbot.css';

import {
  Alert,
  Collapse
} from "@mui/material";

const ChatBot = () => {
  // states
  const [text, settext] = useState("");
  const [response, setResponse] = useState("Bot Response");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("trying");
      const { data } = await axios.post("https://intelli-bot-backend.onrender.com/api/v1/openai/chatbot", { text });
      console.log(data);
      setResponse(data);
    } catch (err) {
      console.log("error in receiving  " + error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
      <>
        <div className="container2">
          <Collapse in={error}>
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          </Collapse>
          <form className="form2" onSubmit={handleSubmit}>
            <h3 className="title2">Ask with Chatbot</h3>
            <textarea
              className="text-input2"
              placeholder="add your text"
              required
              onChange={(e) => {
                settext(e.target.value);
              }}
            >{text}</textarea>

            <button type="submit" className="chat-button2">
              Chat
            </button>

            <p className="go-back2">
              not this tool ? <a href="/">GO BACK</a>
            </p>
          </form>

          <div className="card2">
            <p className="response-text2" style={{ whiteSpace: "pre-wrap", overflowY: "scroll", maxHeight: "400px", scrollbarWidth: "none" }}>{response}</p>
          </div>
        </div>
      </>
    </>
  );
};

export default ChatBot;
