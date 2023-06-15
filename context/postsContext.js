import React, { useCallback, useReducer, useState } from "react"

const PostsContext = React.createContext({})

export default PostsContext

const ADDPOSTS = "addPosts"
const DELETEPOSTS = "deletePosts"

function postsReducer(state, action) {
  switch (action.type) {
    case ADDPOSTS: {
      const newPosts = [...state]
      action.posts.forEach((post) => {
        const postExists = newPosts.find((pst) => pst._id === post._id)
        if (!postExists) {
          newPosts.push(post)
        }
      })
      return newPosts
    }
    case DELETEPOSTS: {
      const newPosts = []
      state.forEach((post) => {
        if (post._id !== action.postId) {
          newPosts.push(post)
        }
      })
      return newPosts
    }
    default:
      return state
  }
}

export const PostsProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postsReducer, [])
  const [noMorePosts, setNoMorePosts] = useState(false)

  const deletePost = useCallback((postId) => {
    dispatch({
      type: DELETEPOSTS,
      postId,
    })
  }, [])

  const setPostsFromSSR = useCallback((postsFromSSR = []) => {
    dispatch({
      type: ADDPOSTS,
      posts: postsFromSSR,
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
      dispatch({
        type: ADDPOSTS,
        posts: postResult,
      })
    },
    []
  )

  return (
    <PostsContext.Provider
      value={{ posts, setPostsFromSSR, getPosts, noMorePosts, deletePost }}
    >
      {children}
    </PostsContext.Provider>
  )
}
