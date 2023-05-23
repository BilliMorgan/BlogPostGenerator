import { getSession } from "@auth0/nextjs-auth0"
import clientPromise from "../lib/mongodb"

export const getAppProps = async (ctx) => {
  const userSession = await getSession(ctx.req, ctx.res)
  const client = await clientPromise
  const db = client.db("BlogGenerator")
  const user = await db.collection("users").findOne({
    auth0Id: userSession.user.sub,
  })
}
