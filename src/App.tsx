// import './App.css
import Main from './routes/Main.tsx';
import SubPages from './routes/SubPages.tsx';

// have a separate background for the main section and the about section

// put the separate IDs of Projects and Contact within the About component
// with the same background
// allow it all to be scrollable plus linkable within a navbar at the top of About
// and persisting as you scroll down
// the background above About - in Main - Should have the extra hover effect
// regarding the animation

function App() {

  return (
    <div id="app">
    <Main />
    <SubPages />
    </div>
  )
}
export default App
