import CalendarHeader from './components/CalendarHeader';
import Sidebar from'./components/Sidebar';
import Month from'./components/Month';
import { getMonth } from './util';
import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from './context/GlobalContext';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {/* {showEventModal && <EventModal />} */}


      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className='flex flex-1'>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
