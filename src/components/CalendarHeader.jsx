import React, { useContext } from 'react'
import logo from "../assets/logo.png";
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';


const CalendarHeader = () => {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext)

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">
        Calendar
      </h1>

      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button
        onClick={handleNextMonth}
      >
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
    </header>
  )
}

export default CalendarHeader

// 「dayjs(new Date(dayjs().year(), monthIndex))」
// 現在の年を取得し、その年と指定された月（monthIndex）で新しい Date オブジェクトを生成する
// dayjs ライブラリを使用して、この Date オブジェクトを日付として処理

// 「.format("MMMM YYYY")」
// "MMMM YYYY" フォーマットで日付を文字列に変換する
// MMMM: 月のフルネーム（例: "1月"、"2月"）
// YYYY: 年（例: "2023"）

// これにより、指定された月の年と月が文字列として表示される
