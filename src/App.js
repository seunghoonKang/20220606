import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { getRadioUtilityClass } from "@mui/material";
import styled from "styled-components";

function HeaderTag(props) {
  return (
    <header className={props.className}>
      <h1>
        <a
          href="/"
          onClick={(evt) => {
            console.log("evt", evt);
            evt.preventDefault();
            props.onSelect();
          }}
        >
          WEB
        </a>
      </h1>
    </header>
  );
}

const HeaderStyled = styled(HeaderTag)`
  border-bottom: 1px solid gray;
`;

function NavlistTag(props) {
  //console.log(props.data);
  const list = props.data.map((e) => {
    return (
      <li key={e.id}>
        <a
          href={"/read/" + e.id}
          onClick={(evt) => {
            evt.preventDefault();
            props.onSelect(e.id);
          }}
        >
          {e.title}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  // console.log(props);
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  let [mode, setMode] = useState("WELCOME");
  let [id, setId] = useState(null);

  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
  ];
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB!"></Article>;
  } else if (mode === "READ") {
    const topic = topics.filter((e) => {
      if (e.id === id) {
        return true;
      } else {
        return false;
      }
    })[0];
    console.log(topic);
    content = <Article title={topic.title} body={topic.body}></Article>;
  }

  return (
    <div>
      <HeaderStyled
        onSelect={() => {
          // mode = "WELCOME";
          setMode("WELCOME");
        }}
      ></HeaderStyled>
      <NavlistTag
        data={topics}
        onSelect={(id) => {
          // mode = "READ";
          setMode("READ");
          setId(id);
        }}
      ></NavlistTag>
      {content}
      <ButtonGroup>
        <Button
          variant="outlined"
          onClick={() => {
            alert("create!");
          }}
        >
          Create
        </Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
    </div>
  );
}

export default App;
