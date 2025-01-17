import { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App.tsx'
import './index.css'


const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
    <App />,
    </StrictMode>,
  );
}

