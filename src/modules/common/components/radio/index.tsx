import clsx from "clsx"

const Radio = ({ checked }: { checked: boolean }) => {
  return (
    <div
      className={clsx(
        "h-3 w-3 rounded-full border-2 border-white flex items-center justify-center "
      
      )}
    >
      {checked && <div className="w-2 h-2 rounded-full bg-[#7cc9b5]" />}
    </div>
  )
}

export default Radio
