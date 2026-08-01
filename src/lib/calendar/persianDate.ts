import moment from 'moment-jalaali';
import { PersianDate } from './types';

// تنظیم locale برای خروجی فارسی
// توجه: این کار باید یک بار در کل برنامه انجام شود
if (typeof window !== 'undefined') {
  // تنظیم locale فقط در کلاینت
  moment.locale('fa');
}

/**
 * تبدیل تاریخ میلادی به شمسی با استفاده از moment-jalaali
 */
export function toPersianDate(date: Date = new Date()): PersianDate {
  try {
    // روش صحیح استفاده از moment-jalaali
    const m = moment(date);
    
    // دریافت تاریخ شمسی به صورت عددی
    const year = m.jYear();
    const month = m.jMonth() + 1; // jMonth از 0 شروع میشه
    const day = m.jDate();
    
    return {
      year,
      month,
      day,
      monthName: getPersianMonthName(month),
      dayOfWeek: m.day(), // 0=Sunday, 1=Monday, ...
      dayOfWeekName: getPersianDayOfWeek(m.day()),
      gregorianDate: m.toDate(),
    };
  } catch (error) {
    console.error('Error in toPersianDate:', error);
    // برگرداندن یک تاریخ پیش‌فرض
    return {
      year: 1400,
      month: 1,
      day: 1,
      monthName: 'فروردین',
      dayOfWeek: 0,
      dayOfWeekName: 'یکشنبه',
      gregorianDate: new Date(),
    };
  }
}

/**
 * تبدیل تاریخ شمسی به میلادی
 */
export function toGregorianDate(persianDate: PersianDate): Date {
  try {
    // روش صحیح برای ساخت تاریخ شمسی
    const m = moment();
    m.jYear(persianDate.year);
    m.jMonth(persianDate.month - 1); // ماه از 0 شروع میشه
    m.jDate(persianDate.day);
    return m.toDate();
  } catch (error) {
    console.error('Error in toGregorianDate:', error);
    return new Date();
  }
}

/**
 * ایجاد شیء تاریخ شمسی از روی سال، ماه و روز
 */
export function createPersianDate(year: number, month: number, day: number): PersianDate {
  try {
    const m = moment();
    m.jYear(year);
    m.jMonth(month - 1);
    m.jDate(day);
    
    return {
      year,
      month,
      day,
      monthName: getPersianMonthName(month),
      dayOfWeek: m.day(),
      dayOfWeekName: getPersianDayOfWeek(m.day()),
      gregorianDate: m.toDate(),
    };
  } catch (error) {
    console.error('Error in createPersianDate:', error);
    return {
      year,
      month,
      day,
      monthName: getPersianMonthName(month),
      dayOfWeek: 0,
      dayOfWeekName: 'یکشنبه',
      gregorianDate: new Date(),
    };
  }
}

/**
 * دریافت نام ماه شمسی
 */
export function getPersianMonthName(month: number): string {
  const monthNames = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];
  
  return monthNames[month - 1] || '';
}

/**
 * دریافت نام روز هفته شمسی
 */
export function getPersianDayOfWeek(dayOfWeek: number): string {
  const dayNames = [
    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
    'جمعه',
    'شنبه',
  ];
  
  return dayNames[dayOfWeek] || '';
}

/**
 * دریافت تعداد روزهای ماه شمسی
 */
export function getPersianMonthDays(year: number, month: number): number {
  try {
    // روش صحیح محاسبه تعداد روزهای ماه
    if (month >= 1 && month <= 6) return 31;
    if (month >= 7 && month <= 11) return 30;
    
    // ماه اسفند (۱۲) - بررسی کبیسه
    return isLeapYear(year) ? 30 : 29;
  } catch (error) {
    console.error('Error in getPersianMonthDays:', error);
    return 30;
  }
}

/**
 * تشخیص سال کبیسه شمسی با الگوریتم دقیق
 */
export function isLeapYear(year: number): boolean {
  // الگوریتم محاسبه کبیسه شمسی
  const y = year - 1342;
  const a = (y % 33);
  const b = (a * 4 + 1) % 33;
  return b < 4;
}

/**
 * بررسی برابری دو تاریخ شمسی
 */
export function isSamePersianDate(date1: PersianDate, date2: PersianDate): boolean {
  return date1.year === date2.year && 
         date1.month === date2.month && 
         date1.day === date2.day;
}

/**
 * اضافه کردن تعداد روز به تاریخ شمسی
 */
export function addDaysToPersianDate(persianDate: PersianDate, days: number): PersianDate {
  try {
    const m = moment(persianDate.gregorianDate);
    m.add(days, 'days');
    return toPersianDate(m.toDate());
  } catch (error) {
    console.error('Error in addDaysToPersianDate:', error);
    return persianDate;
  }
}