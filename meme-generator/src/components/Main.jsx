import React, {useState, useEffect} from 'react'

export default function Main() {

    const [memesData, setMemesData] = useState([])
    const [meme, setMeme] = useState({
                                        topText: "",
                                        bottomText: "",
                                        memeImage: "https://i.imgflip.com/2xscjb.png"
                                    })
    
    useEffect(()=>{
        async function getMemesdata() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setMemesData(data.data.memes)
        }
        getMemesdata()
    }, [])

    function updateMemeData(event) {
        const {name, value} = event.target
        setMeme(prevMeme=> ({...prevMeme, [name]: value}))
    }

    function selectRandomMeme() {
        const index = Math.floor(Math.random() * memesData.length + 1)
        const newMemeImage = memesData[index].url
      
        setMeme( (prevMeme)=> ({...prevMeme, memeImage: newMemeImage}))
    }

    const {topText, bottomText, memeImage} = meme
    return(
        <main>
            <form>
                <div className='text-fields'>
                    <input 
                        className='top-text text-field' 
                        type='text' 
                        placeholder='Top text' 
                        name='topText' 
                        value={topText}
                        onChange={updateMemeData}
                    />

                    <input 
                        className='bottom-text text-field' 
                        type='text' 
                        placeholder='Bottom text' 
                        name='bottomText' 
                        value={bottomText}
                        onChange={updateMemeData}
                    />
                </div>

                <button className='get-meme-btn' type='button' onClick={selectRandomMeme}>Get a new meme Image 🖼️</button>
            </form>

            <section className='meme-cntr'>
                <p className='meme-text'>{topText}</p>
                <p className='meme-text'>{bottomText}</p>
                <img className='meme-img' src={memeImage} alt='meme'/>
            </section>
        </main>
    )
}