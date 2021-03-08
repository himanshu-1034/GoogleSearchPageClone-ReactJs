import "./Search.css";
import React, { useState } from "react";
import { Mic, SearchOutlined } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStateValue } from "../stateProvider";
import { actionTypes } from "../reducer";

export default function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const HandleSearch = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
    setInput("");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchOutlined className="search_input-icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>
      {hideButtons ? (
        <div style={{ display: "none" }} className="search_buttons">
          <Button type="submit" variant="outlined" onClick={HandleSearch}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button type="submit" variant="outlined" onClick={HandleSearch}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}
