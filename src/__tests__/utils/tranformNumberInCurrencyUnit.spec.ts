import { tranformNumberInCurrency } from '../../utils/tranformNumberInCurrency'

describe('TranformNumberInCurrency', () => {
  it('receive number and return currency', () => {
    const value = tranformNumberInCurrency(99.9);

    expect(value).toBe('R$ 99,90')
  })
});
