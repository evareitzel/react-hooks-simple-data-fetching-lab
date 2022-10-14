// create your App component here
import {useEffect, useState} from "react"

function App(){
  const [dogImage, setDogImage] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(r =>r.json())
    .then(dog => {
      // console.log(dog)
      setDogImage(dog.message)
      setIsLoaded(true)
    })
  }, [])

  if(!isLoaded) return <h3>Loading...</h3>

  return <img src={dogImage} alt='A Random Dog' />
}

export default App