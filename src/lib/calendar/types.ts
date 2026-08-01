export interface PersianDate {
  year: number;
  month: number;
  day: number;
  monthName: string;
  dayOfWeek: number;
  dayOfWeekName: string;
  gregorianDate: Date; // تاریخ میلادی معادل
}

export interface CalendarDay {
  date: PersianDate;
  isToday: boolean;
  isPast: boolean;
  isFuture: boolean;
  timestamp: number;
  jalaliTimestamp: string; // برای مقایسه در تاریخ شمسی
}

export interface MonthDaysResult {
  days: CalendarDay[];
  currentMonth: PersianDate;
  totalDaysInMonth: number;
  remainingDays: number;
  firstDayOfMonth: number; // روز اول ماه (0=شنبه)
  lastDayOfMonth: number; // روز آخر ماه
}

export interface MonthRange {
  start: PersianDate;
  end: PersianDate;
}