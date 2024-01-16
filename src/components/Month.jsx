import React from 'react'
import Day from "./Day"

// このコンポーネントは1ヶ月のカレンダーを表示するためのものです
// month プロパティには、週ごとに日付が2次元配列として渡されます
const Month = ({ month }) => {
  return (
    // カレンダーのコンテナ。1行に7日、5行分のグリッドを使用しています
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
      {/* 週ごとにループ */}
      {month.map((row, i) => (
        // ユニークなキーを指定するために React.Fragment を使用
        <React.Fragment key={i}>
          {/* 各日付ごとにループ */}
          {row.map((day, idx) => (
            // Day コンポーネントに日付とそのインデックス、行のインデックスを渡す
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Month
