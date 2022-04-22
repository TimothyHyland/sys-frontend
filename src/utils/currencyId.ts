import { Currency, SYS, Token } from 'syscoin-swap'

export function currencyId(currency: Currency): string {
  if (currency === SYS) return 'SYS'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
