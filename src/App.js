
import './App.css';
import { JobListing } from './components/JobListing';
function App() {
  return (
     <div className='App'>
        <div className='topApp'></div>
        <div className='bottonApp'>
    	    <JobListing/>
        </div>
     </div>
  );
}

export default App;
