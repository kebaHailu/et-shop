
export const Button = ({children, customFunction}) => {
  return (
    <div>
        <button onClick={customFunction} className="w-40 m-1 text-md bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-2 rounded-lg hover:from-orange-400 hover:to-red-500 hover:shadow-lg hover:shadow-orange-300">
            {children}
        </button>
    </div>
  )
}
