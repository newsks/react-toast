import "./App.css";
import Toast from "./components/Toast";
import ToastButton from "./components/ToastButton";
import ToastMessage from "./components/ToastMessage";

function App() {
  const msgArray = [
    {
      title: "success",
      text: "Right on! Your account has been updated",
    },
    {
      title: "warning",
      text: "Hmmm. Something doesn't look right.",
    },
    {
      title: "error",
      text: "Uh oh! Something went terribly wrong!.",
    },
  ];
  return (
    <div className="wrapper">
      <Toast message={msgArray[0]}>
        <ToastMessage message={msgArray[0]} />
        <ToastButton />
      </Toast>
      <Toast message={msgArray[1]}>
        <ToastMessage message={msgArray[1]} />
        <ToastButton />
      </Toast>
      <Toast message={msgArray[2]}>
        <ToastMessage message={msgArray[2]} />
        <ToastButton />
      </Toast>

      {/*  {msgArray.map((message) => (
        <Toast message={message} />
      ))} */}
    </div>
  );
}

export default App;
