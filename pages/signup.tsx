import { MobileFormLayout } from "components/layouts/MobileFormLayout"

import dynamic from "next/dynamic"
import Link from "next/link"
import { useEffectWithAuth } from "hooks/use-auth"
import { useRouter } from "next/router"
import { useIntl } from "translations/useIntl"

const RegisterForm = dynamic(() => import("../components/partials/RegisterForm"), {
  ssr: false
})

const Signup = () => {
  const router = useRouter()
  const { formatMessage } = useIntl()
  useEffectWithAuth(
    (auth) => {
      if (router && auth.user) {
        router.push("/app")
      }
    },
    [router]
  )

  return (
    <MobileFormLayout>
      <RegisterForm />
      <p className="pt-4">
        {formatMessage({ id: "alreadyHaveAnAccount" })}&nbsp;
        <Link href="/login">
          <a className="button-link">
            <span className="text-gradient">{formatMessage({ id: "signInNow" })}</span>
          </a>
        </Link>
      </p>
    </MobileFormLayout>
  )
}

export default Signup
