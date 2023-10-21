import React from "react";
import { technoSubgenres } from "./data";

function TechnoSubgenreTable({ subgenres }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Subgenre</th>
            <th>Description</th>
            <th>Years of Popularity</th>
          </tr>
        </thead>
        <tbody>
          {subgenres.map((subgenre, index) => (
            <tr key={index}>
              <td>{subgenre.subgenre}</td>
              <td>{subgenre.description}</td>
              <td>{subgenre.yearsOfPopularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer>
        <p>Made with assistance from ChatGPT in under 20 minutes</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>Techno Subgenres</h1>
      <TechnoSubgenreTable subgenres={technoSubgenres} />
    </div>
  );
}

export default App;
