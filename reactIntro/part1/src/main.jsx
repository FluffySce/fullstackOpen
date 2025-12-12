import ReactDOM from "react-dom/client";
import App from "./App";
// the line below renders App.jsx (it's content) into the "div" element with val=root defined in the index.html
//by default index.html doesn't contain html visible by browser, all content need to be rendered using react components
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
