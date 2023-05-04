import { useState, useEffect } from "react";

import { UserInput } from "./components/UserInput";
import { DataDisplay } from "./components/DataDisplay";
import LoginForm from "./components/LoginForm";

export default function App () {
  const [Data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((Data) => setData(Data))
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);




  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionnaire anglais</h1>
        <hr />
      </header>
      <main>
        <UserInput />
        <DataDisplay />

        {Data.map(item => (
          <p key={item}>{item.word}</p>
        ))
        }

        <hr />

        <div>
          <LoginForm />
        </div>

      </main>
    </div>
  );
}

