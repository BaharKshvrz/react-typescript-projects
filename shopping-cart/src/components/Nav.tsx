type PropsType = {
  viewCart: boolean,
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart
     ? <button className="viewButton" onClick={() => setViewCart(false)}>View Products</button>
     : <button className="viewButton" onClick={() => setViewCart(true)}>View Cart</button>
  
  return (
    <nav>
        {button}
    </nav>
  )
}

export default Nav
