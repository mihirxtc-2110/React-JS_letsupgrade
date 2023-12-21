import Product from "./Product";
function Products_List() {
    return (
        <div className="products">
                <Product name="Iphone 14" price="72000" url="https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg" />
                <Product name="Samsung s23 Ultra" price="129000" url="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6529/6529717cv14d.jpg" />
                <Product name="Pixel 7" price="79000" url="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51jahbKN6AL.jpg" />
        </div>
    );
}

export default Products_List;