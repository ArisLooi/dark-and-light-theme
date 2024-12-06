import { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Form from './form'

/* Main component that handles theme toggling. */
export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <Form theme={theme} />
      <label>
        <input type="checkbox" checked={theme === 'dark'} onChange={(e) => { setTheme(e.target.checked ? 'dark' : 'light'); }} />
      </label>
      Use dark mode
    </>
  );
}
