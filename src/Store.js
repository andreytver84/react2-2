import IconSwitch from './IconSwitch';
import { useState } from 'react';
import ListView from './ListView';
import CardsView from './CardsView';

function Store() {
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }];
    let iconState = "view_list"
    const [icon, setIcon] = useState(iconState); 
    const onSwitchHandler = () => {iconState === "view_list" ? setIcon(iconState="view_module") : setIcon(iconState="view_list");
      console.log(icon);
    }

    return (
        <>
            <IconSwitch icon={icon} onSwitch={onSwitchHandler}/>
            {icon === "view_list" ? <ListView products={products} /> : <CardsView products={products} />}
        </>
    );
}

export default Store;