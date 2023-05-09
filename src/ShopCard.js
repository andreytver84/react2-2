import './ShopCard.css';

function ShopCard(props) {
    const name = props.cards.name;
    const price = props.cards.price;
    const color = props.cards.color;
    const img = props.cards.img;

    return (
        <div className='card'>
            <div className='card-name'><h3>{name}</h3></div>
            <div className='card-color'><span>{color}</span></div>
            <div className='card-img'><img src={img} alt={name} /></div>            
            <div className='card-info'>
                <div className='card-price'><span>${price}</span></div>
                <div className='card-btn'><a>Add to cart</a></div>
            </div>
        </div>
    )
}

export default ShopCard;