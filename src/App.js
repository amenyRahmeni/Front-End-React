
import "./App.css";
// import Navbar from './Navbar';
// import Footer from './Footer';

import Exemple from "./composant/Exemple";
import React , {useState , useEffect} from "react";

function App() {
  const name = "Ahmed jouini";

  const element = <h1>hello world</h1>;

  const etudiant = { nom: "mohamed Aziz ", prenom: "Ben Ismail" };

  function AfficherEtudiant(val) {
    return val;
  }

  const listEtudiants = [
    { nom: "ahmed", prenom: "jouini", age: 5, ObjectID: 0 },
    { nom: "aziz", prenom: "ismail", age: 10, ObjectID: 1 },
    { nom: "nada", prenom: "ben foulen", age: 8, ObjectID: 2 },
    { nom: "ines", prenom: "ben flouen", age: 15, ObjectID: 3 },
  ];

  const maStyle = {
    color: "#2ecc71",
    FontSize: "16px",
  };

  // const count = 0;

  const [ count , setCount ] = useState(0);

  const [ color , setColor ] = useState("red");

  // useEffect(() => {
  //   // console.log(isOnline)
  //    console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable color ');
  //    console.log('car le deuxieme argument est color ');
  //    return () => {
  //    console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
  //    }
  //    }, [color])
     
    //  useEffect(() => {
    //  console.log('cette fonction va etre execute une fois seulement ');
    //  console.log('car le deuxieme argument est un tableau vide ');
    //  return () => {
    //  console. log(' cette partie va etre execute seulement lors de loperation unmounting ')
    //  }
     
    //  }, [])
     
    //  useEffect(() => {
    //  console.log('cette fonction va etre execute chaque re-render');
    //  console.log('car pas de deuxieme argument passer');
    //  });

  return (
    <div className="App">
      <header className="App-header">
        {/* {name}

        {element}

        {etudiant.nom}

        {etudiant.prenom}

        <h1> Bonjour {AfficherEtudiant("ines")} </h1>

        {listEtudiants.map(function (item) {
          return <div key={item.ObjectID}>{item.nom}</div>;
        })} */}

        <div className="maClasse">
          {" "}
          {/*//normal*/}
          <p style={maStyle}>Hi React Class</p> {/*//injection */}
          <p >Hi React Class</p> {/*//injection */}
        </div>

        {/* <Exemple name={etudiant} prenom="hammadi"/> */}

          <div>
            <p>Vous avez clique {count} fois</p>

            <button onClick={() => { setCount(count + 2)}} > Clicquez ici</button>
          </div>

          <div>
          <h1>My favorite color is {color}!</h1>
          <input onChange={ (e) => { setColor( e.target.value) }}/>
          </div>

          

      </header>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
/*
function xxx (options) { return option}

() => { }

  if () { } else {}

  () ? cosntion 1: condtion 2


*/