import slugify from 'slugify'

/**
 * Render date
 */
export const renderDate = (date: string | Date): string => {
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

/**
 * Optimize slugify
 * @param str
 * @returns {string}
 */
export const optimizeSlugify = (str: string): string => {
  return slugify(str, {
    locale: 'vi',
    lower: true
  })
}

/**
 * Get url params
 * @param params
 * @returns {string}
 */

export const getUrlParams = (params: string): string => {
  return params.split('.html')[0].split('tagiit-')[1]
}
