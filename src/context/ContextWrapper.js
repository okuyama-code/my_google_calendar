import React, { useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs';

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  // const [savedEvents, dispatchCalEvent] = useReducer(
  //   savedEventsReducer,
  //   [],
  //   initEvents
  // );

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        // dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        // savedEvents,
        setLabels,
        labels,
        // updateLabel,
        // filteredEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

