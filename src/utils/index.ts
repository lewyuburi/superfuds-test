export const moneyFormat = (number: number) => {
  return new Intl.NumberFormat('es-CO').format(number)
}
