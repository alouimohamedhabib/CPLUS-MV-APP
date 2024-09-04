import { memo } from "react"
import { SlInfo } from "react-icons/sl"

function Button({label, onClick, className, type}:{label:string, onClick:() => void, className?:string, type?:'info'|'warning'}) {
  return (
    <button className={`bg-red-500 flex items-center gap-2 text-white px-4 py-2 rounded-md ${className}`} onClick={onClick}>
     {type == 'info' ? <SlInfo /> : ''} {label}
    </button>
  )
}
export default memo(Button)
