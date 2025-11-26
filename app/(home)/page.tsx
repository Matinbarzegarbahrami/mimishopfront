import Header from "@/src/components/header/page"
import Carousel from "@/src/components/Carousel/page";
import style from "./style.module.css";

export default async function home() {

    let products = [];
    let tShirts = [];
    let pants = [];

    //all products
    {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/products/", {
                method: "GET",
                cache: "no-store"
            });
            if (!data.ok) {
                throw new Error("cant catch data");
            }
            const res = await data.json();


            products = res;
        } catch (error) {
            console.error("API ERROR:", error);
        }
    }
    // T-shirts
    {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/product/T-shirt/", {
                method: "GET",
                cache: "no-store"
            });
            if (!data.ok) {
                throw new Error("cant catch data");
            }
            const res = await data.json();


            tShirts = res;
        } catch (error) {
            console.error("API ERROR:", error);
        }
    }
    // pants
    {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/product/pants/", {
                method: "GET",
                cache: "no-store"
            });
            if (!data.ok) {
                throw new Error("cant catch data");
            }
            const res = await data.json();


            pants = res;
        } catch (error) {
            console.error("API ERROR:", error);
        }
    }


    return (
        <div>
            <div>
                <Header />
            </div>
            <div className={style.main}>
                <div>
                    {/* special offer */}
                    <div className={style.offerTextBox}>
                        <a className={style.offerText} href="#">فروش ویژه</a>
                    </div>
                    <div className={style.menuBox}>
                        <Carousel products={products} />
                    </div>

                    {/* T-Shirt */}
                    <div className={style.offerTextBox}>
                        <a className={style.offerText} href="#"> تی شرت</a>
                    </div>
                    <div className={style.menuBox}>
                        <Carousel products={tShirts} />
                    </div>

                    {/* pants */}
                    <div className={style.offerTextBox}>
                        <a className={style.offerText} href="#">شلوار</a>
                    </div>
                    <div className={style.menuBox}>
                        <Carousel products={pants} />
                    </div>

                </div>
            </div>
        </div>
    )
}