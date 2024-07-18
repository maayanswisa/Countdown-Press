import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="EASY" targetTime={1} />
        <TimerChallenge title="NOT EASY" targetTime={5} />
        <TimerChallenge title="GETTING TOUGH" targetTime={10} />
        <TimerChallenge title="HARD" targetTime={15} />
      </div>
    </>
  );
}

export default App;
