import BlueButton from "../../../components/BlueButton/BlueButton"
import styles from "./Card.module.css"
import { Link } from "react-router-dom"

export default function Card({id, name, price, imagePath, isCard, addToCart}) {

	

	return (
		<>
			<div className={styles.catalog} >
				<div>
					<img src={imagePath} alt="#" />
				</div>
				<div className={styles.content}>
					<p className={styles.text}>{name}</p>
					<div className={styles.footer}>
						<h3 className={styles.price}>{price}₽</h3>
						<div
							className="df"
							style={{ display: "flex",  gap:"20px" }}
						>
							{isCard &&  <button
								onClick={addToCart}
								style={{
									backgroundColor: "#0009ea",
									color: "white",
									borderRadius: "5px",
									cursor: "pointer",
									width:"50px"
								}}
							>
								<div className="hz" style={{ width: "30px", height: "30px", margin:"auto" }}>
									<img
										src="src\assets\icons8-cart-60.png"
										alt="cart"
										style={{ width: "30px", height: "30px",  }}
									/>
								</div>
							</button>}
							
							<Link to={`/catalog/${id}`}>
								<BlueButton text={"Подробнее"} type="btnBlueBig" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
