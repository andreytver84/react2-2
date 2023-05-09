import './CardsView.css';
import ShopCard from './ShopCard';

function CardsView(props) {
    const products = props.products;
    return (
        <div className='cards'>
            {products.map((p,i) => <div key={i}><ShopCard cards={products[i]}/></div>)}
        </div>
    )
}

export default CardsView;