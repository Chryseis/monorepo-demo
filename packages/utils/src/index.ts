export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0]
}

export const sum = (a: number, b: number): number => {
  return a + b
}

export const getParams = () => {
  console.log(123)
}
