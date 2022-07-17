import FormRequestPassword from 'components/FormRequestPassword'
import Auth from 'templates/Auth'

export default function RequestPassword() {
  return (
    <Auth title="Request new password">
      <FormRequestPassword />
    </Auth>
  )
}
