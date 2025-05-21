import { product, products } from "../../products" // id: "", name:"", price:""
import Card from "../CatalogPage/Card/Card"
import s from "./CartPage.module.css"

export default function CartPage({ cart }) {
	// сначала cart пустой

	//console.log(cart) // [0, 1, 2] id тех карточек, что выбрали

	const cartProducts = cart.map(
		(id) => products.find((item) => item.id == id)
		// если id совпадает, то возвращает весь объект
	)
	//console.log(cartProducts) // {id:"1" name:"lol" price:"20" ...}

	// в 1 итерации: sum = 0 т.к. initialValue, а item {id:"1" name:"lol" price:"20" ...}
	const allPrice = cartProducts.reduce((sum, item) => sum + item.price, 0) // 0 это initialValue

	// const numbers = [1, 2, 3, 4];
	// const sum = numbers.reduce((acc, num) => acc + num, 0);
	// console.log(sum); 10

	const isCard = false

	return (
		<>
			<div className={s.catalog}>
				<h2 style={{ fontStyle: "Arial", marginTop: "20px" }}>
					К оплате: {allPrice}
				</h2>
				<div className={s.wrap}>
					{cartProducts.map((item) => (
						<Card
							id={item.id}
							key={item.id}
							name={item.name}
							price={item.price}
							imagePath={item.imagePath}
							isCard={isCard}
						></Card>
					))}
				</div>
			</div>
		</>
	)
}
