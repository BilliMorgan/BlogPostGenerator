import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { AppLayout } from "../components/AppLayout"
import { getAppProps } from "../utils/getAppProps"

export default function Success() {
  return (
    <div className="w-full h-full flex flex-col overflow-auto">
      <div className="m-auto w-full max-w-screen-sm bg-slate-100 p-4 rounded-md shadow-xl border border-slate-200 shadow-slate-200 text-center">
        <h1>Thank you for your purchase!</h1>
      </div>
    </div>
  )
}

Success.getLayout = function getLayout(page, pageProps) {
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
