import { toEnglishDigits } from "./numberConversions";

export default function validateNationalCode(
  code: number | string,
): boolean | undefined {
  const eCode = toEnglishDigits(code);

  if (eCode === undefined) return undefined;
  if (eCode.length !== 10) return false;

  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += Number(eCode[i]) * (10 - i);
  }

  const remainder = sum % 11;
  const checkDigit = Number(eCode[9]);

  return remainder < 2
    ? checkDigit === remainder
    : checkDigit === 11 - remainder;
}

export function toInternationalFormat(phoneNumber: string): string {
  // حذف فاصله‌ها، خط تیره و پرانتز
  const cleaned = phoneNumber.replace(/[\s\-()]/g, "");

  // اگر با +98 شروع شده باشد
  if (cleaned.startsWith("+98")) {
    return cleaned;
  }

  // اگر با 0098 شروع شده باشد
  if (cleaned.startsWith("0098")) {
    return "+98" + cleaned.slice(4);
  }

  // اگر با 98 شروع شده باشد (بدون +)
  if (cleaned.startsWith("98") && cleaned.length === 12) {
    return "+98" + cleaned.slice(2);
  }

  // اگر با 0 شروع شده باشد (فرمت محلی مثل 09131234567)
  if (cleaned.startsWith("0")) {
    return "+98" + cleaned.slice(1);
  }

  // در غیر این صورت فرض می‌کنیم شماره بدون 0 وارد شده
  return "+98" + cleaned;
}
