import { useState } from "react";

export default function ApiTest() {
  const [hello, setHello] = useState("");
  const [time, setTime] = useState("");

  const fetchHello = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    setHello(data.message);
  };

  const fetchTime = async () => {
    const res = await fetch("/api/time");
    const data = await res.json();
    setTime(data.serverTime);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>API Test Page</h1>

      <button onClick={fetchHello}>Get Hello Message</button>
      <p>{hello}</p>

      <button onClick={fetchTime}>Get Server Time</button>
      <p>{time}</p>
    </div>
  );
}
