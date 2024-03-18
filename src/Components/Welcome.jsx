import { Link } from "react-router-dom"

const Welcome = (props) => {
    return (
        <section className="welcome-page">
            <div className="text-and-button">
                <div className="text-for-h1-h2">
                    <h2>Välkommen till Hunddagiset!</h2>
                </div>
                    <Link to={"/Catalog"}>
                    <button className="catalog-button">Katalog</button>
                    </Link>
            </div>
            <div className="dogs">
                <img src="https://www.omlet.se/images/originals/Dog-Dog_Guide-A_happy_little_puppy_enjoying_some_exercise_outside.jpg" alt="dog" width={800} height={700} className="big-dog"/>
            </div>
        </section>
        )
}

export default Welcome