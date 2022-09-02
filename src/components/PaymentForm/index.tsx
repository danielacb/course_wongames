import { useEffect, useState } from 'react'

import * as S from './styles'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ShoppingCart } from '@styled-icons/material-outlined'
import { useCart } from 'hooks/use-cart'
import { Session } from 'next-auth'
import { ErrorOutline } from 'styled-icons/material'
import theme from 'styles/theme'
import { createPaymentIntent } from 'utils/stripe/methods'

import Button from 'components/Button'
import Heading from 'components/Heading'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string
        })

        if (data.freeGames) {
          setFreeGames(true)
          return
        }

        if (data.error) {
          setError(data.error)
        } else {
          setFreeGames(false)
          setClientSecret(data.client_secret)
        }
      }
    }

    setPaymentMode()
  }, [freeGames, items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const payload =
      stripe &&
      (await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements?.getElement(CardElement) || { token: '' }
        }
      }))

    if (payload && payload.error) {
      setError(`Payment failed: ${payload.error.message}`)
      setLoading(false)
    } else {
      setError(null)
      setLoading(false)
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>

        {freeGames ? (
          <S.FreeGames>Free to play, click buy now and enjoy!</S.FreeGames>
        ) : (
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
        )}

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
          loading={loading}
          disabled={!freeGames && (disabled || !!error)}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
