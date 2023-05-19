import Link from "next/link"
import Image from "next/image"
import { useUser } from "@auth0/nextjs-auth0/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoins } from "@fortawesome/free-solid-svg-icons"
import { Logo } from "../Logo"

export const AppLayout = ({ children }) => {
  const { user } = useUser()

  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="flex flex-col text-white overflow-hidden">
        <div className="bg-slate-800 px-2">
          <Logo />
          <Link className="btn" href="/post/new">
            New post
          </Link>
          <Link className="block mt-2 text-center" href="/token-topup">
            <FontAwesomeIcon className="text-yellow-500" icon={faCoins} />
            <span className="pl-1">0 tokens available</span>{" "}
          </Link>
        </div>
        <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
          list of posts
        </div>
        <div className="bg-cyan-800 flex items-center gap-2 border-t border-t-black/50 h-20 px-2">
          {!!user ? (
            <>
              <div className="min-w-[50px]">
                <Image
                  className="rounded-full"
                  src={user.picture}
                  alt={user.name}
                  height={50}
                  width={50}
                />
              </div>

              <div className="flex-1">
                <div className="font-bold">{user.name}</div>
                <Link className="text-sm" href="/api/auth/logout">
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <Link href="/api/auth/login">Login</Link>
          )}
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  )
}
