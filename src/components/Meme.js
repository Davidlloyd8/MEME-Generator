import memesData from "../memesData"
import {useState} from "react"

function Meme() {
    // const [memeImage, setMemeImage] = useState("")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // setMemeImage(memesArray[randomNumber].url)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="Top Text" />
                <input type="text" className="form-input" placeholder="Bottom Text" />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} alt="MemeImage to show" className="meme-image" />
        </main>
    )
}

export default Meme