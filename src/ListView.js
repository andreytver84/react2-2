import './ListView.css';
import ShopItem from './ShopItem';

function ListView(props) {
    const products = props.products;
    return (
        <>
            {products.map((p,i) => <div key={i}><ShopItem items={products[i]} /></div>)}
        </>
    )
}

export default ListView;