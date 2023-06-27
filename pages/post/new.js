import { useState } from "react"
import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { AppLayout } from "../../components/AppLayout"
import { useRouter } from "next/router"
import { getAppProps } from "../../utils/getAppProps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBrain,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"

export default function NewPost(props) {
  const router = useRouter()
  const [topic, setTopic] = useState("")
  const [keywords, setKeyWords] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch(`/api/generatePost`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ topic, keywords }),
      })
      if (!response.ok) {
        console.log("NO RESPONSE")
      }
      const json = await response.json()

      if (json?.postId) {
        router.push(`/post/${json.postId}`)
      }
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
      console.error(error)
    }
  }
  return (
    <div className="h-full overflow-auto">
      {!!isLoading && (
        <div className="text-green-500 flex h-full animate-pulse w-full flex-col justify-center items-center">
          <FontAwesomeIcon className="text-8xl" icon={faBrain} />
          <h6 className="text-center">
            Information is generating... <br />
            It would take some time to display formatted data. <br />
            Please, don&apos;t close or reload the window.
          </h6>
        </div>
      )}
      {isError && (
        <div className="text-red-500 flex h-full  w-full flex-col justify-center items-center">
          <FontAwesomeIcon
            className="text-8xl animate-pulse"
            icon={faExclamationTriangle}
          />
          <h6 className="text-center">
            Server error is happened. <br />
            please reload the page.
          </h6>
          <button
            className="btn w-40 bg-red-500 hover:bg-red-300"
            onClick={() => setIsError(false)}
          >
            Close
          </button>
        </div>
      )}
      {!isLoading && (
        <div className="w-full h-full md:flex flex-col overflow-auto">
          <form
            className="mt-14 md:m-auto w-full max-w-screen-sm bg-slate-100 p-4 rounded-md shadow-xl border border-slate-200 shadow-slate-200 "
            onSubmit={handleSubmit}
          >
            <div>
              <label>
                <strong>Generate a blog post on the topic of:</strong>
              </label>
              <textarea
                className="resize-none border border-slate-500 w-full block my-2 px-4 py-2 rounded-sm"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                maxLength={80}
              />
            </div>
            <div>
              <label>
                <strong>Targeting the following keywords:</strong>
              </label>
              <textarea
                className="resize-none border border-slate-500 w-full block my-2 px-4 py-2 rounded-sm"
                value={keywords}
                onChange={(e) => setKeyWords(e.target.value)}
                maxLength={80}
              />
            </div>
            <small className="block mb-2">Separate keywords with a comma</small>
            <button
              className="btn"
              type="submit"
              disabled={!topic.trim() || !keywords.trim()}
            >
              Generate
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const props = await getAppProps(ctx)

    if (!props.availableTokens) {
      return {
        redirect: {
          destination: "/token-topup",
          permanent: false,
        },
      }
    }
    return {
      props,
    }
  },
})
