import React, { useState } from "react";
import axios from "axios";
import {
  Alert,
  Collapse
} from "@mui/material";
import "./chatbot.css";

const Paragraph = () => {
  // states
  const [text, settext] = useState("");
  const [para, setPara] = useState("Your Paragraph will appear here");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://intelli-bot-backend.onrender.com/api/v1/openai/paragraph", { text });
      console.log(data);
      setPara(data);
    } catch (err) {
      console.log(error);
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
    <div className="container2">
          <Collapse in={error}>
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          </Collapse>
          <form className="form2" onSubmit={handleSubmit}>
            <h3 className="title2">Paragraph Generation</h3>
            <textarea
              className="text-input2"
              placeholder="add your text"
              required
              onChange={(e) => {
                settext(e.target.value);
              }}
            >{text}</textarea>

            <button type="submit" className="chat-button2">
              Generate Paragraph
            </button>

            <p className="go-back2">
              not this tool ? <a href="/">GO BACK</a>
            </p>
          </form>

          <div className="card2">
            <pre><p className="response-text2" style={{ whiteSpace: "pre-wrap", overflowY: "scroll", maxHeight: "400px" }}>{para}</p></pre>
          </div>
        </div>
      </>
  );
};

export default Paragraph;