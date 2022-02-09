import { transformNumberInCurrency } from '../../utils/transformNumberInCurrency'

describe('transformNumberInCurrency', () => {
  it('receive number and return currency', () => {
    const value = transformNumberInCurrency(99.9);

    expect(value).toBe('R$ 99,90')
  })
});
