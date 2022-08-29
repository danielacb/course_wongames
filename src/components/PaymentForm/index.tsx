import { useState } from 'react'

import * as S from './styles'
import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ShoppingCart } from '@styled-icons/material-outlined'
import { ErrorOutline } from 'styled-icons/material'
import theme from 'styles/theme'

import Button from 'components/Button'
import Heading from 'components/Heading'

const PaymentForm = () => {
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>

        <CardElement
          onChange={handleChange}
          options={{
            hidePostalCode: true,
            style: {
              base: {
                fontSize: '16px',
                fontFamily: theme.font.family
              }
            }
          }}
        />

        {error && (
          <S.Error>
            <ErrorOutline size={20} />
            {error}
          </S.Error>
        )}
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal href="/">
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          disabled={disabled || !!error}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
