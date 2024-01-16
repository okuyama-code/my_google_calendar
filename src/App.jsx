import './App.css';
import CalendarHeader from './components/CalendarHeader';
import { getMonth } from './util';

function App() {
  console.table(getMonth());

  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
      </div>
    </>
  );
}

export default App;
