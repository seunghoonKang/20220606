import logo from "./logo.svg";
import "./App.css";

function HeaderTag() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}
function NavlistTag() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello,WEB!
    </article>
  );
}

function App() {
  return (
    <div>
      <HeaderTag></HeaderTag>
      <NavlistTag></NavlistTag>
      <Article></Article>
    </div>
  );
}

export default App;
