import { DialogContent } from '@mui/material';
import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img className="home_image" src="https://img.freepik.com/free-vector/set-
            torii-gates-water_52683-44986.jpg" alt="" />
        </div>

        <div className="home_row">
            <Product title="ASUS Graphics Card ROG STRIX GeForce RTX4090 OC Edition" price={10750} image="https://external-preview.redd.it/fJETfq1Ki297mQ1CAhgFllhT5C4vX4wqcH92exR4ojQ.jpg?auto=webp&s=ca6e42d7b0632df53c0c6e4067e5806a3ae9ea2e"
            rating={5}/>
            <Product title="ASUS ROG STRIX Z790-E GAMING WIFI Intel® Z790 LGA 1700 ATX motherboard" price={2900} image="https://www.tech-critter.com/wp-content/uploads/2022/10/ASUS-ROG-Strix-Z790-E-Gaming-Wifi-1.jpg" 
            rating={5}/>
            <Product title="AMD RYZEN 7 5800X PROCESSOR 8 CORES AM4 SOCKET PROCESSOR" price={1179} image="https://cf.shopee.com.my/file/49df170a44e5a6e305f60a4cabb3dacb" 
            rating={5}/>

        </div>

        <div className="home_row">
        <Product title="Apple iPhone 14 Pro Max" price={5549} image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896" 
        rating={3}/>
        <Product title="Samsung Galaxy S23 Ultra 5G" price={5699} image="https://images.samsung.com/my/smartphones/galaxy-s23-ultra/buy/kv_group_MO_v2.jpg" 
        rating={5}/>
        <Product title="Apple AirPods Pro (2nd generation)" price={2900} image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361" 
        rating={4}/>
            
        </div>

        <div className="home_row">
        <Product title="BenQ ZOWIE XL2566K eSports Gaming Monitor - 24.5" price={2838} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41big9Zl9eL._AC_UF894,1000_QL80_.jpg" 
            rating={5}/>
        </div>

    </div>
  )
}

export default Home;