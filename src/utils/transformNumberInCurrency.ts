export function transformNumberInCurrency(value: number): string {
  return new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(value);
}
