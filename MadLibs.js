const MadLib = () => {
    const [nounOne, setNounOne] = useState("");
    const [nounTwo, setNounTwo] = useState("");
    const [adjective, setAdjective] = useState("");
    const [color, setColor] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add logic for processing the form data
      console.log(nounOne, nounTwo, adjective, color);
    };
  
    return (
      <div className="MadLib-form ">
        <h1>Madlibs!</h1>
        <form onSubmit={handleSubmit}>
          
          <label>Noun One</label>
          <input
            type="text"
            required
            value={nounOne}
            onChange={(e) => setNounOne(e.target.value)}
          ></input>
  
          <label>Noun Two</label>
          <input
            type="text"
            required
            value={nounTwo}
            onChange={(e) => setNounTwo(e.target.value)}
          ></input>
  
          <label>Adjective</label>
          <input
            type="text"
            required
            value={adjective}
            onChange={(e) => setAdjective(e.target.value)}
          ></input>
          
          <label>Color</label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Orange">Orange</option>
          </select>
          <button type="submit">Get Story</button>
        </form>
      </div>
    );
  };
  
  export default MadLib;
  