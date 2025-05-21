import BlueButton from "../../../components/BlueButton/BlueButton"
import Card from "../Card/Card"
import styles from "./Catalog.module.css"
import { products } from "../../../products"
import Search from "../../../components/Search/Search"
import { useState } from "react"
import s from "../../../components/BlueButton/BlueButton.module.css"

export default function Catalog({ cart, setCart }) {
	const [find, setFind] = useState("")
	const [sorting, setSorting] = useState(0)
	const [category, setCategory] = useState("all")
	const isCard = true

	// выбор option
	// Возвращает массив с карточками, в котором они отсортированы по цене
	// Если сортировки нет, то return default products
	function sortProducts(sorting, products) {
		switch (sorting) {
			case "asc":
				return [...products].sort((a, b) => a.price - b.price)

			case "desc":
				return [...products].sort((a, b) => b.price - a.price)
			default:
				return products
		}
	}

	// поиск совпадает с товаром и категорией
	// filter создает новый массив, элементы в котором соответствуют условию
	// includes ищет в строке текст и возвращает true
	const filtered = products.filter(
		(item) =>
			item.name.toLowerCase().includes(find.toLowerCase()) &&
			(item.categoryId == category || category == "all")
	)

	const sortedFiltered = sortProducts(sorting, filtered)

	return (
		<div className={styles.catalog}>
			<h2 className={styles.catalog__title}>Каталог товаров</h2>

			<Search handleChange={(e) => setFind(e.target.value)} />

			<select
				value={sorting}
				onChange={(e) => setSorting(e.target.value)}
				style={{
					padding: "9px",
					border: "1px solid #0009ea",
					borderRadius: "5px",
					marginLeft: "20px",
				}}
			>
				<option value="0">Сортировать</option>
				<option value="asc">По возрастанию</option>
				<option value="desc">По убыванию</option>
			</select>
			<br />

			<div className={styles.catalog__line}>
				<p>Категории:</p>
				<div className={styles.category}>
					<button onClick={() => setCategory("all")} className={s.btnBlue}>
						Все товары
					</button>
					<button onClick={() => setCategory(0)} className={s.btnWhite}>
						Шины
					</button>
					<button onClick={() => setCategory(1)} className={s.btnWhite}>
						Ароматизаторы
					</button>
				</div>
			</div>
			<div className={styles.wrap}>
				{sortedFiltered.length ? (
					sortedFiltered.map((product) => (
						<Card
							id={product.id}
							key={product.id}
							name={product.name}
							price={product.price}
							imagePath={product.imagePath}
							isCard={isCard}
							addToCart={() => setCart([...cart, product.id])}
							// когда нажимается кнопка в Card, то вызывается addToCart
							// cart это пустой массив, в который добавляем id карточки при нажатии
						/>
					))
				) : (
					<p>{find} not founded</p>
				)}
			</div>
			<div className={styles.catalog__footer}>
				<BlueButton text={"Загрузить еще товары"} type="btnGrayBig" />
			</div>
		</div>
	)
}
