import './App.css';
import {Route, Routes} from 'react-router-dom';
import KnowYourMovie from "./KnowYourMovie";
import ChoosenMovie from "./ChoosenMovie";
import Error from "./Error"

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<ChoosenMovie/>} />
      <Route path="/KnowYourMovie/:imdbID" element={<KnowYourMovie/>} />
      <Route path="/*" element={<Error/>}/>
    </Routes>
  </div>

  );
}

export default App;
