export const Menu = ({ clicked }) => {
  return (
    <div
      className="fixed top-4 left-2 bg-slate-800 border rounded"
      onClick={clicked}
    >
      <div className="w-6 h-1  bg-white m-1"></div>
      <div className="w-6 h-1  bg-white m-1"></div>
      <div className="w-6 h-1  bg-white m-1"></div>
    </div>
  )
}
