import { useEffect, useState } from "react"
import { revalidateTags } from "app/actions"
import { useStore } from "@lib/context/store-context"

const useIP = () => {
  const [ipData, setIpData] = useState({})
  const { setRegion } = useStore()

  let GlobalRegId ="reg_01HKVJVPKGHCF97BC0QEFEKHZE"
  let Globalcurr ="usd"
  let IndRegId ="reg_01HEF5G3JT8S2ZS3H1X8JGYK8K"
  let Indcurr ="inr"
  
    /** Country Regions switch and Currecny change */
    const regionId = typeof window !== "undefined" && window.localStorage.getItem('regionId');
    const currentyCode = typeof window !== "undefined" && window.localStorage.getItem('currentyCode');
    

  useEffect(() => {
    if((regionId == null && currentyCode == null))
    { 
      fetch("https://freeipapi.com/api/json/")
        .then((res) => res.json())
        .then((data) => {
          if (data.countryCode != "IN"){
            revalidateTags(["medusa_request", "products", "collections"])
            setRegion(GlobalRegId, Globalcurr)
            if( typeof window != "undefined"){
              window.localStorage.setItem('regionId', GlobalRegId)
              window.localStorage.setItem('currentyCode', Globalcurr)
            }
          }
          else{
            revalidateTags(["medusa_request", "products", "collections"])
            if( typeof window != "undefined"){
              window.localStorage.setItem('regionId', IndRegId)
              window.localStorage.setItem('currentyCode', Indcurr)
            }
            setRegion(IndRegId, Indcurr)
          }
          // console.log("data",data)    
        })
        .catch((err) => {
          console.log("🚀 ~ useIP:", err)
        })
    }

  }, [GlobalRegId, Globalcurr, IndRegId, Indcurr, currentyCode, regionId, setRegion])

  return {
    ...ipData,
  }
}

export default useIP


// const LoadRegion =  () => {
//   const regionId = localStorage.getItem('regionId', '');
//   const currentyCode = localStorage.getItem('currentyCode', '');
//   if(regionId && currentyCode){
//     console.log("Its empty")
//   }else{
//     console.log("Its empty")
//   }
//   // const { regions } = useRegions()
//     // const medusa = new Medusa({ baseUrl: MEDUSA_API_BASE_URL, maxRetries: 3 })
//     // try{
//     //   const data = await medusa.customers.retrieve();
//     //   return data;
//     // }catch(error){
//     //   console.error("Error : " + error)
//     // }
  
//   }