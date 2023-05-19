import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { AppLayout } from "../../components/AppLayout"

export default function NewPost(props) {
  console.log("TESTING PROPS", props)
  const handleClick = async () => {
    const response = await fetch(`/api/generatePost`, {
      method: "POST",
    })
    const json = await response.json()
    console.log("RESPONSE: ", json)
  }
  return (
    <div>
      <h1>this is new post page</h1>
      <button className="btn" onClick={handleClick}>
        Generate
      </button>
    </div>
  )
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  }
})
