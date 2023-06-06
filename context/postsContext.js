import React, { useCallback, useState } from "react"

const PostsContext = React.createContext({})

export default PostsContext

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [noMorePosts, setNoMorePosts] = useState(false)

  const setPostsFromSSR = useCallback((postsFromSSR = []) => {
    console.log("Posts from SSR", postsFromSSR)

    setPosts((value) => {
      const newPosts = [...value]
      postsFromSSR.forEach((post) => {
        const postExists = newPosts.find((pst) => pst._id === post._id)
        if (!postExists) {
          newPosts.push(post)
        }
      })
      return newPosts
    })
  }, [])

  const getPosts = useCallback(
    async ({ lastPostDate, getNewerPosts = false }) => {
      const result = await fetch(`/api/getPosts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ lastPostDate, getNewerPosts }),
      })
      const json = await result.json()
      const postResult = json.posts || []
      console.log("POSTS RESULT: ", postResult)
      if (postResult.length < 5) {
        setNoMorePosts(true)
      }
      setPosts((value) => {
        const newPosts = [...value]
        postResult.forEach((post) => {
          const postExists = newPosts.find((pst) => pst._id === post._id)
          if (!postExists) {
            newPosts.push(post)
          }
        })
        return newPosts
      })
    },
    []
  )

  return (
    <PostsContext.Provider
      value={{ posts, setPostsFromSSR, getPosts, noMorePosts }}
    >
      {children}
    </PostsContext.Provider>
  )
}
