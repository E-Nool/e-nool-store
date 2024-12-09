import repeat from "@lib/util/repeat"

const SkeletonProductList = () => {
  return (
    <div className="flex flex-col animate-pulse w-full">     
      <div className="py-8">
        <div className="grid grid-cols-4 gap-x-8">         
              {repeat(4).map((index) => (
                <div className="flex flex-col gap-y-2" key={index}>
                  <div className="bg-gray-100 h-[300px] w-[250px]"></div>
                </div>             
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkeletonProductList
