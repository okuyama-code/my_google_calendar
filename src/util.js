import dayjs from "dayjs";

// 月のカレンダーを生成する関数
export function getMonth(month = dayjs().month()) {
  // 引数として与えられた月の値を整数に変換
  month = Math.floor(month);

  // 現在の年を取得
  const year = dayjs().year();

  // 与えられた年月の1日の曜日を取得
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  // カレンダーの日にちを格納するための2次元配列を生成
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      // 日にちを1日ずつ増やしていく
      currentMonthCount++;

      // 現在の日にちの日付オブジェクトを生成して返す
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  // 生成したカレンダーの日にちを含む2次元配列を返す
  return daysMatrix;
}

// dayjs().month()とは
// 公式 https://day.js.org/docs/en/get-set/month

// dayjs() は現在の日時を表す dayjs オブジェクトを生成します。
// month() メソッドは dayjs オブジェクトから月の値を取得します。
// (method) dayjs.Dayjs.month(): number (+1 overload)
// Get the month.

// Months are zero indexed, so January is month 0.

// dayjs().month()// => 0-11


//  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
 // 与えられた年月の1日の曜日を取得
  // new Date(year, month, 1) は与えられた年と月の1日を表す Date オブジェクトを生成します。
  // dayjs(new Date(year, month, 1)) でその Date オブジェクトを dayjs オブジェクトに変換します。
  // day() メソッドは dayjs オブジェクトから曜日の値（0 が日曜、1 が月曜、...、6 が土曜）を取得します。
  // この行のコードは与えられた年月の1日の曜日を firstDayOfTheMonth 変数に格納します。

