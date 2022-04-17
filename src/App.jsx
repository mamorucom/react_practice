import "./styles.css";
import { ColoredMessage } from "./components/ColoredMessage";

const onClickButton = () => {
  alert();
};

// export default function App() {
export const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
};
