import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import SingleCategory from "./components/SIngleCategory";
import NewArrival from "./components/NewArrival";
import ProductCard from "./components/ProductCard";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="container pt-5">
        <dd className="d-flex">
          <dt>
            <SingleCategory />
          </dt>
          <dt>
            <SingleCategory />
          </dt>
          <dt>
            <SingleCategory />
          </dt>
          <dt>
            <SingleCategory />
          </dt>
          <dt>
            <SingleCategory />
          </dt>
          <dt>
            <SingleCategory />
          </dt>
        </dd>
      </div>
      <NewArrival />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <img src="http://ecommerce.webprotec.org/assets/uploads/media-uploader/01-irrz2z1649652132.jpg" alt="" className="img-fluid" />
          </div>
        </div>
      
      </div>


    </>
  );
}
