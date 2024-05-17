// import './App.css
import Main from './routes/Main.tsx';
import About from './routes/About.tsx';

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
    <About />
    </div>
  )
}
export default App
