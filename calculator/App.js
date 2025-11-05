import { useState } from "react";

export default function App() {
  return (
    <div>
      <Bill />
    </div>
  );
}

function Bill() {
  const [myTip, setMyTip] = useState(0.1);
  const [friendTip, setFriendTip] = useState(0.1);
  const [bill, setBill] = useState("");

  function handleReset() {
    setBill("");
    setMyTip(0.1);
    setFriendTip(0.1);
  }

  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <br />
      <label for="tip">How did you like the service?</label>
      <select value={myTip} onChange={(e) => setMyTip(Number(e.target.value))}>
        How did you like the service?
        <option value={0.1}>10%</option>
        <option value={0.15}>15%</option>
        <option value={0.5}>50%</option>
        <option value={100}>100%</option>
      </select>
      <br />
      <label>How did your friend like the service?</label>
      <select
        value={friendTip}
        onChange={(e) => setFriendTip(Number(e.target.value))}
      >
        <option value={0.1}>10%</option>
        <option value={0.15}>15%</option>
        <option value={0.5}>50%</option>
        <option value={100}>100%</option>
      </select>
      <br />
      <ShowTotal bill={bill} myTip={myTip} friendTip={friendTip} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function ShowTotal({ bill, myTip, friendTip }) {
  if (!bill) return null;

  let tipAmount = myTip * bill + friendTip * bill;
  let total = bill + tipAmount;

  return (
    <p>
      You pay ${total} (${bill} + ${tipAmount} tip )
    </p>
  );
}
