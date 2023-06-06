import { useState } from "react"
import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { AppLayout } from "../../components/AppLayout"
import { useRouter } from "next/router"
import { getAppProps } from "../../utils/getAppProps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain } from "@fortawesome/free-solid-svg-icons"

export default function NewPost(props) {
  const router = useRouter()
  const [topic, setTopic] = useState("")
  const [keywords, setKeyWords] = useState("")
  const [isLoading, setIsLoading] = useState(false)

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

      console.log("RESULT: ", json)

      if (json?.postId) {
        router.push(`/post/${json.postId}`)
      }
    } catch (error) {
      setIsLoading(false)
    }
  }
  return (
    <div className="h-full overflow-hidden">
      {!!isLoading && (
        <div className="text-green-500 flex h-full animate-pulse w-full flex-col justify-center items-center">
          <FontAwesomeIcon className="text-8xl" icon={faBrain} />
          <h6>
            Information is generated. <br />
            It would take some time to display formatted data.
          </h6>
        </div>
      )}
      {!isLoading && (
        <div className="w-full h-full flex flex-col overflow-auto">
          <form
            className="m-auto w-full max-w-screen-sm bg-slate-100 p-4 rounded-md shadow-xl border border-slate-200 shadow-slate-200"
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
