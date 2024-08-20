function remToPx(rem: number) {
  if (typeof window !== 'undefined') {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
  }
}
export default remToPx
