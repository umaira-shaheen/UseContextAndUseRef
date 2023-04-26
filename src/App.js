import logo from './logo.svg';
import './App.css';
export const CurrencyContext = React.createContext(null);
function App() {
   const[darkTheme,setDarlTheme]=useState(true);
   function toggleTheme(){
    setDarlTheme(prevDarkTheme=>!prevDarkTheme);
   }
  return (
   <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toogle Theme</button>
        <FunctionContextComponent/>
        <ClassContextComponent/>
      </ThemeContext.Provider>
    </div>
  );

}

export default App;
