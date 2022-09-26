import { AppRoutes } from "./Routes";
import GlobalStyle from "./styles";
// import "./main.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <AppRoutes />
      </div>
    </>
  );
}

/*

import TaskBox from './components/TaskBox';
import './main.css'
import { ITask } from "./components/TaskBox/index";



function App() {

  const exText:ITask = {textType:"Luiz"}

  return (
    <div className="App">
      <TaskBox text={exText.textType} />
    </div>
  )
}
*/

export default App;
