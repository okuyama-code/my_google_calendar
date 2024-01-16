import React from "react"

// グローバルなコンテキストの作成
const GlobalContext = React.createContext({
  // 月のインデックスを管理するステートと、それを更新する関数
  monthIndex: 0,
  setMonthIndex: (index) => {},

  // 小さなカレンダーの月のインデックスを管理するステートと、それを更新する関数
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},

  // 選択された日付を管理するステートと、それを更新する関数
  daySelected: null,
  setDaySelected: (day) => {},

  // イベントモーダルの表示状態を管理するステートと、それを更新する関数
  showEventModal: false,
  setShowEventModal: () => {},

  // カレンダーイベントを処理するためのディスパッチ関数
  dispatchCalEvent: ({ type, payload }) => {},

  // 保存されたイベントの一覧
  savedEvents: [],

  // 選択されたイベントを管理するステートと、それを更新する関数
  selectedEvent: null,
  setSelectedEvent: () => {},

  // ラベルの設定を管理する関数
  setLabels: () => {},

  // ラベルの一覧
  labels: [],

  // ラベルを更新する関数
  updateLabel: () => {},

  // フィルタリングされたイベントの一覧
  filteredEvents: [],
})

export default GlobalContext;
