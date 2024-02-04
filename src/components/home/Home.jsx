import { useParams } from "react-router-dom"

function Home() {
    const params = useParams();
    console.log(params);

    return (
        <div class="container">
            <div class="map" id="mapContainer"> 
            </div>
            <div class="text">
            <h1>Kierrätys-sivusto</h1>
            <p></p>
            </div>
        </div>
        
    )
}

export default Home