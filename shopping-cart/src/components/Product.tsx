import { ReactElement, memo } from "react"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ProductType } from "../context/ProductsProvider"

type PropsType = {
    product: ProductType,
    inCart: boolean,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
}

const Product = ({product, inCart, dispatch, REDUCER_ACTIONS}: PropsType): ReactElement => {
    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;
    const itemInCart = inCart ? ' → Item in Cart: ✔️' : null
    const onAddToCart = () => {
        dispatch({type: REDUCER_ACTIONS.ADD, payload: {...product, qty: 1}});
    }
    const content = (
        <article className="product">
            <img src={img} alt={product.name} className="product__img"/>
            <h3>{product.name}</h3>
            <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: "USD"}).format(product.price)}</p>
            {itemInCart}
            <p className="product__desc">{product.discription}</p>
            <button className="addButton" onClick={onAddToCart}> Add to Cart </button>
        </article>
    )

    return content
}


// use memo to memoize products in detail page
function areProductsEqual({ product: preveProduct, inCart: prevInCart }: PropsType,
{product: nextProduct, inCart: nextInCart}: PropsType) {
    return Object.keys(preveProduct).every(key => {
        return preveProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
               &&
               prevInCart === nextInCart
  })
}
const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct
