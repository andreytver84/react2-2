import './ShopItem.css';

function ShopItem(props) {
    const name = props.items.name;
    const price = props.items.price;
    const color = props.items.color;
    const img = props.items.img;
    return (
        <div className='item'>
            <div className='item-img'><img src={img} alt={name} /></div>
            <div className='item-name'><h3>{name}</h3></div>
            <div className='item-color'><span>{color}</span></div>
            <div className='item-price'><span>${price}</span></div>
            <div className='item-btn'><a>Add to cart</a></div>
        </div>
    )
}

export default ShopItem;