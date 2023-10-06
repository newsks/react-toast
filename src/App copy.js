import "./App.css";
import Toast from "./components/Toast";

function App() {
  return (
    <div className="wrapper">
      <Toast />
      <Toast />
      <Toast />
      <div className="toast toast-warning">
        <main className="toast__message">
          <header className="toast__message-title">Warning</header>
          <p className="toast__message-text">
            Hmmm. Something doesn't look right.
          </p>
        </main>
        <button className="toast__button">Dismiss</button>
      </div>
      <div className="toast toast-error">
        <main className="toast__message">
          <header className="toast__message-title">Error</header>
          <p className="toast__message-text">
            Uh oh! Something went terribly wrong!.
          </p>
        </main>
        <button className="toast__button">Dismiss</button>
      </div>
    </div>
  );
}

export default App;
