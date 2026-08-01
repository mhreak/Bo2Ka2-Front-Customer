import { PersianDate, CalendarDay, MonthDaysResult } from './types';
import { 
  toPersianDate, 
  getPersianMonthDays, 
  createPersianDate,
  isSamePersianDate 
} from './persianDate';

/**
 * دریافت تمام روزهای ماه جاری از امروز تا پایان ماه
 */
export function getRemainingDaysOfMonth(date: Date = new Date()): MonthDaysResult {
  try {
    const todayPersian = toPersianDate(date);
    const totalDays = getPersianMonthDays(todayPersian.year, todayPersian.month);
    
    const days: CalendarDay[] = [];
    
    // ساخت روزها از امروز تا پایان ماه
    for (let day = todayPersian.day; day <= totalDays; day++) {
      const persianDate = createPersianDate(
        todayPersian.year,
        todayPersian.month,
        day
      );
      
      // محاسبه timestamp
      const timestamp = new Date(
        todayPersian.gregorianDate.getFullYear(),
        todayPersian.gregorianDate.getMonth(),
        todayPersian.gregorianDate.getDate() + (day - todayPersian.day)
      ).getTime();
      
      days.push({
        date: persianDate,
        isToday: day === todayPersian.day,
        isPast: day < todayPersian.day,
        isFuture: day > todayPersian.day,
        timestamp: timestamp,
        jalaliTimestamp: `${todayPersian.year}/${todayPersian.month}/${day}`,
      });
    }
    
    return {
      days,
      currentMonth: todayPersian,
      totalDaysInMonth: totalDays,
      remainingDays: totalDays - todayPersian.day + 1,
      firstDayOfMonth: createPersianDate(todayPersian.year, todayPersian.month, 1).dayOfWeek,
      lastDayOfMonth: createPersianDate(todayPersian.year, todayPersian.month, totalDays).dayOfWeek,
    };
  } catch (error) {
    console.error('Error in getRemainingDaysOfMonth:', error);
    // برگرداندن یک مقدار پیش‌فرض
    return {
      days: [],
      currentMonth: {
        year: 1400,
        month: 1,
        day: 1,
        monthName: 'فروردین',
        dayOfWeek: 0,
        dayOfWeekName: 'یکشنبه',
        gregorianDate: new Date(),
      },
      totalDaysInMonth: 30,
      remainingDays: 0,
      firstDayOfMonth: 0,
      lastDayOfMonth: 0,
    };
  }
}

/**
 * دریافت تمام روزهای ماه جاری (از اول تا آخر ماه)
 */
export function getFullMonthDays(date: Date = new Date()): MonthDaysResult {
  try {
    const todayPersian = toPersianDate(date);
    const totalDays = getPersianMonthDays(todayPersian.year, todayPersian.month);
    
    const days: CalendarDay[] = [];
    
    // ساخت تمام روزهای ماه
    for (let day = 1; day <= totalDays; day++) {
      const persianDate = createPersianDate(
        todayPersian.year,
        todayPersian.month,
        day
      );
      
      // محاسبه timestamp
      const timestamp = new Date(
        todayPersian.gregorianDate.getFullYear(),
        todayPersian.gregorianDate.getMonth(),
        todayPersian.gregorianDate.getDate() + (day - todayPersian.day)
      ).getTime();
      
      days.push({
        date: persianDate,
        isToday: day === todayPersian.day,
        isPast: day < todayPersian.day,
        isFuture: day > todayPersian.day,
        timestamp: timestamp,
        jalaliTimestamp: `${todayPersian.year}/${todayPersian.month}/${day}`,
      });
    }
    
    return {
      days,
      currentMonth: todayPersian,
      totalDaysInMonth: totalDays,
      remainingDays: totalDays - todayPersian.day + 1,
      firstDayOfMonth: createPersianDate(todayPersian.year, todayPersian.month, 1).dayOfWeek,
      lastDayOfMonth: createPersianDate(todayPersian.year, todayPersian.month, totalDays).dayOfWeek,
    };
  } catch (error) {
    console.error('Error in getFullMonthDays:', error);
    return {
      days: [],
      currentMonth: {
        year: 1400,
        month: 1,
        day: 1,
        monthName: 'فروردین',
        dayOfWeek: 0,
        dayOfWeekName: 'یکشنبه',
        gregorianDate: new Date(),
      },
      totalDaysInMonth: 30,
      remainingDays: 0,
      firstDayOfMonth: 0,
      lastDayOfMonth: 0,
    };
  }
}

/**
 * دریافت روزهای یک محدوده مشخص
 */
export function getDaysInRange(startDate: PersianDate, endDate: PersianDate): CalendarDay[] {
  try {
    const days: CalendarDay[] = [];
    const today = toPersianDate();
    
    const start = new Date(startDate.gregorianDate);
    const end = new Date(endDate.gregorianDate);
    
    let current = new Date(start);
    
    while (current <= end) {
      const persianDate = toPersianDate(current);
      const isToday = isSamePersianDate(persianDate, today);
      
      days.push({
        date: persianDate,
        isToday,
        isPast: !isToday && current < new Date(),
        isFuture: !isToday && current > new Date(),
        timestamp: current.getTime(),
        jalaliTimestamp: `${persianDate.year}/${persianDate.month}/${persianDate.day}`,
      });
      
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  } catch (error) {
    console.error('Error in getDaysInRange:', error);
    return [];
  }
}

/**
 * دریافت هفته‌های ماه (برای نمایش تقویم به صورت هفتگی)
 */
export function getWeeksOfMonth(date: Date = new Date()) {
  try {
    const today = toPersianDate(date);
    const firstDay = createPersianDate(today.year, today.month, 1);
    const totalDays = getPersianMonthDays(today.year, today.month);
    
    // پیدا کردن روز اول هفته (شنبه)
    // در جاوااسکریپت: 0=شنبه, 1=یکشنبه, ..., 6=جمعه
    const startOffset = firstDay.dayOfWeek; // 0=شنبه
    
    const weeks = [];
    let currentDay = 1 - startOffset;
    
    while (currentDay <= totalDays) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        const dayNumber = currentDay + i;
        if (dayNumber >= 1 && dayNumber <= totalDays) {
          const persianDate = createPersianDate(today.year, today.month, dayNumber);
          week.push({
            ...persianDate,
            isToday: dayNumber === today.day,
            isEmpty: false,
          });
        } else {
          week.push({
            isEmpty: true,
          });
        }
      }
      weeks.push(week);
      currentDay += 7;
    }
    
    return weeks;
  } catch (error) {
    console.error('Error in getWeeksOfMonth:', error);
    return [];
  }
}