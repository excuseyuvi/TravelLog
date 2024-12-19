import Header from "../components/Header.jsx";
import Entry from "../components/Entry.jsx"
import travelData from "../components/data.js"

export default function App() {

    const travelElement = travelData.map((item) => {
        return(
            <Entry 
                id = {item.id}
                img = {item.img}
                title = {item.title}
                country = {item.country}
                googleMapsLink = {item.googleMapsLink}
                dates = {item.dates}
                text = {item.text}
            />
        )
    })

    return (
        <main>
            <Header />
            {travelElement}
        </main>
    )
}