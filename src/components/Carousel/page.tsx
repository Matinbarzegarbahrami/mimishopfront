"use client";
import { useState } from "react";
import style from "./style.module.css";

type ProductT = {
  id: string;
  name: string;
  type: "T-shirt" | "pants";
  price: number;
  quantity: string;
  final_price: number;
};

type CarouselProps = {
  products: ProductT[];
};

export default function Carousel({ products }: CarouselProps) {
  if (!products || products.length === 0) {
    return (
      <div className={style.mainbox}>
        <p>هیچ محصولی یافت نشد</p>
      </div>
    );
  }

  const [index, setIndex] = useState<number>(0);

  const next = () => {
    setIndex(prev => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex(prev => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const product = products[index];

  return (
    <div className={style.mainbox}>
      
      <div className={style.btnbox}>
        <button
          onClick={prev}
          className={style.btn}
        >
          قبلی
        </button>
      </div>
      <div
        className={style.productbox}
      >
        <img className={style.img} src="https://www.hectaton.com/content/media/product/177076/pro_9774.jpg" alt="asdad"/>
        <h3>{product.name}</h3>
        <p style={{display:"flex"}}>  <p style={{textDecoration:"line-through", marginLeft:3}}> {product.price}</p></p>
        <p> تومان <span style={{marginLeft:4}}>{product.final_price}</span></p>

        <p>موجودی: {product.quantity}</p>
      </div>

      <div className={style.btnbox}>

        <button
          onClick={next}
          className={style.btn}
        >
          بعدی
        </button>
      </div>
    </div>
  );
}
