/**
 * Render date
 */
export const renderDate = (date: string): string => {
  const dateObject = new Date(date)
  const year = dateObject.getFullYear()
  const month = dateObject.getMonth() + 1 // Months are zero-based, so add 1
  const day = dateObject.getDate()
  const hours = dateObject.getHours()
  const minutes = dateObject.getMinutes()
  const seconds = dateObject.getSeconds()
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}
/**
  ---------------------------------------------------
  */
