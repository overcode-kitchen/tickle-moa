import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 금액을 억/만 단위로 포맷팅하는 함수
 * @param amount - 원 단위 금액 (number) 또는 만원 단위 금액 (string)
 * @returns "X.X억" 또는 "XX만원" 형식의 문자열
 */
export function formatCurrency(amount: number | string): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount
  
  if (isNaN(num) || num === 0) {
    return '0원'
  }
  
  if (num >= 100000000) {
    return `${(num / 100000000).toFixed(1)}억`
  } else if (num >= 10000) {
    return `${(num / 10000).toFixed(0)}만원`
  }
  return `${num.toLocaleString()}원`
}
