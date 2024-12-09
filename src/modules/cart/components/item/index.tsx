import { useStore } from "@lib/context/store-context"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import NativeSelect from "@modules/common/components/native-select"
import Trash from "@modules/common/icons/trash"
import Thumbnail from "@modules/products/components/thumbnail"
import { getProductImage } from "@lib/util/prices"
import Spinner from "@modules/common/icons/spinner";
import {useState} from 'react';

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
}

const Item = ({ item, region }: ItemProps) => {
  const { updateItem, deleteItem } = useStore()
  const [deletingItemLoader, setDeletingItemLoader] = useState(false);

  const truncate = (string = '', limit = 200) => {
    return (string.length <= limit) ? string : string.slice(0, limit) + "...";
  }

  return (
    <div className="grid grid-cols-[122px_1fr] gap-x-4">
      <div className="w-[122px]">
        <a href={`/products/${item.variant.product.handle}`}>
        <Thumbnail thumbnail={getProductImage(item?.thumbnail)} size="full" />
        </a>
      </div>
      <div className="text-base-regular flex flex-col">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <a href={`/products/${item.variant.product.handle}`} className="text-xl pb-4">{item.title}</a>
            <span className="text-md pb-4">{item.variant.product.subtitle ? truncate(item.variant.product.subtitle, 60) : ""}</span>
            <span className="text-md ">Type : eBook</span>
            {/* <LineItemOptions variant={item.variant} /> */}
          </div>
          <LineItemPrice item={item} region={region} />
          {/* <NativeSelect
            value={item.quantity}
            onChange={(value) =>
              updateItem({
                lineId: item.id,
                quantity: parseInt(value.target.value),
              })
            }
            className="max-h-[35px] w-[75px]"
          >
            {Array.from(
              [
                ...Array(
                  item.variant.inventory_quantity > 0
                    ? item.variant.inventory_quantity
                    : 10
                ),
              ].keys()
            )
              .slice(0, 10)
              .map((i) => {
                const value = i + 1
                return (
                  <option value={value} key={i}>
                    {value}
                  </option>
                )
              })}
          </NativeSelect> */}
        </div>
        <div className="flex items-end justify-between text-small-regular flex-1 font-graphikBold">
          <div>
            <button
              className="flex items-center gap-x-1 text-[#fff] "
              onClick={() => (setDeletingItemLoader(true),deleteItem(item.id))}

            >
              <svg fill="#7ac8b3" height="14px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 27.965 27.965" >
              <g>
                <g id="c142_x">
                  <path d="M13.98,0C6.259,0,0,6.261,0,13.983c0,7.721,6.259,13.982,13.98,13.982c7.725,0,13.985-6.262,13.985-13.982
                    C27.965,6.261,21.705,0,13.98,0z M19.992,17.769l-2.227,2.224c0,0-3.523-3.78-3.786-3.78c-0.259,0-3.783,3.78-3.783,3.78
                    l-2.228-2.224c0,0,3.784-3.472,3.784-3.781c0-0.314-3.784-3.787-3.784-3.787l2.228-2.229c0,0,3.553,3.782,3.783,3.782
                    c0.232,0,3.786-3.782,3.786-3.782l2.227,2.229c0,0-3.785,3.523-3.785,3.787C16.207,14.239,19.992,17.769,19.992,17.769z"/>
                </g>
                <g id="Capa_1_104_">
                </g>
              </g>
              </svg>
              {/* <Trash size={14} /> */}
              <span>Remove</span>
              {deletingItemLoader ? <Spinner /> : null}
            </button>
          </div>
          <div>
            {/* <LineItemPrice item={item} region={region} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
