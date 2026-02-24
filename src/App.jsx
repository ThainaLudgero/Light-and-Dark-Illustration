import Border from './components/Border'
import { useState } from 'react';
import ToggleBtn from './components/ToggleBtn';
import Section from './components/Section';
  function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    return (
      <>  
        <Border theme={theme}/>
        <ToggleBtn theme={theme} setTheme={setTheme} />
        <Section />
      </>
    )
  }

  export default App
