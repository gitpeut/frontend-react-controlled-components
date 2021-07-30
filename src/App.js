import React from 'react';
import './App.css';

function App() {
  const [formName, setFormName] = React.useState('');
  const [formAge, setFormAge] = React.useState(0);
  const [formFoundWhere, setFormFoundWhere] = React.useState('Anders');
  const [formRemarks, setFormRemarks] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  function submitDone(e){
    e.preventDefault();

    setSubmitted( true );
    console.log("Verstuurd! ");
    console.log("         Naam: " + formName );
    console.log("          Age: " + formAge );
    console.log("Waar gevonden: " + formFoundWhere );
    console.log("  Opmerkingen: " + formRemarks );
  }

  // submitting a form by using enter produces a Assertion failed: Input argument is not an HTMLInputElement

  return (
    <div>
      <form onSubmit={submitDone}>
        <fieldset>
            <legend>Gegevens</legend>

            <label htmlFor="form-name">
                Naam:
                <input type="text"
                       name="form-name"
                       id="form-name"
                       value={ formName }
                       onChange={(e)=>setFormName( e.target.value)}
                />
            </label>

            <label htmlFor="form-age">
                Leeftijd:
                <input type="number"
                       name="form-age"
                       id="form-age"
                       min="3" max="55"
                       placeholder = "39"
                       value={ formAge }
                       onChange={(e)=>setFormAge( e.target.value)}
                />
            </label>
        </fieldset>
        <fieldset>
            <legend>Jouw review</legend>

            <label htmlFor="form-foundwhere">
                Hoe heb je dit recept gevonden ?<p />
                <select
                       name="form-foundwhere"
                       id="form-foundwhere"
                       value={ formFoundWhere }
                       onChange={(e)=>setFormFoundWhere( e.target.value)}
                >
                    <option value="Anders">Anders</option>
                    <option value="Google">Google</option>
                    <option value="Vriend">Vriend</option>
                    <option value="Advertentie">Advertentie</option>
                </select>
            </label>

            <label htmlFor="form-remarks" >
                Opmerkingen <p />

                <textarea
                    id="form-remarks"
                    name="form-remarks"
                    rows="10" cols="60"
                    placeholder="Wat vond je van het recept?"
                    value={formRemarks}
                    onChange={(e)=>setFormRemarks( e.target.value)}
                >
                </textarea>
            </label>

            <button type="submit"
                    disabled={ !(!submitted && formName.length > 4 && formAge > 2 && formAge < 120 && formRemarks.length > 5 )  }
                    onClick = { submitDone }
            >
                Versturen
            </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
