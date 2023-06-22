import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain } from "@fortawesome/free-solid-svg-icons"

export const Logo = () => {
  return (
    <div className="text-3xl text-center py-4 font-heading">
      <span>Blogify</span>
      <FontAwesomeIcon
        className="text-2xl text-slate-400 pl-1"
        icon={faBrain}
      />
    </div>
  )
}
