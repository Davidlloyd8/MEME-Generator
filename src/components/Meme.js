import memesData from "../memesData"
import {useState} from "react"

function Meme() {
    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="Top Text" />
                <input type="text" className="form-input" placeholder="Bottom Text" />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} alt="MemeImage to show" className="meme-image" />
        </main>
    )
}

export default Meme