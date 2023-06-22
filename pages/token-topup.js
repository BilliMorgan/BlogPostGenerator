import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { AppLayout } from "../components/AppLayout"
import { getAppProps } from "../utils/getAppProps"

export default function TokenTopup() {
  const handleClick = async () => {
    const result = await fetch("/api/addTokens", {
      method: "POST",
    })
    const json = await result.json()
    console.log("RESULT: ", json)
    window.location.href = json.session.url
  }
  return (
    <div className="w-full h-full flex flex-col overflow-auto">
      <div className="m-auto w-full max-w-screen-sm bg-slate-100 p-4 rounded-md shadow-xl border border-slate-200 shadow-slate-200">
        <h1>Token Top-up Page Instructions</h1>

        <h3>Information:</h3>
        <ol className="p-4">
          <li>
            To start using the Blogify functionality, users need to have a
            positive balance of tokens in their account.
          </li>
          <li>
            To buy tokens, users will be prompted to a secure page where they
            can enter their credit card credentials.
          </li>
          <li>
            The payment functionality is set to testing mode, so no real payment
            can be made.
          </li>
          <li>
            To test this functionality, use the following credit card details:
            <br />
            <strong>Credit Card Number: 4242 4242 4242 4242</strong>
            <br />
            <strong>Expiration Card Date: Any date in the future</strong>
            <br />
            <strong>CVV Number: Any 3 digits</strong>
          </li>
        </ol>

        <p>
          Please note that the provided credit card details are for testing
          purposes only and should not be used for real transactions.
        </p>

        <button className="btn" onClick={handleClick}>
          Add tokens
        </button>
      </div>
    </div>
  )
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const props = await getAppProps(ctx)
    return {
      props,
    }
  },
})
