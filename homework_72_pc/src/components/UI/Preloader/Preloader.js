import preloader from '../../../animations/pizza_slice.gif'
import './Preloader.css'

function Preloader(props) {
  return (
    <div id="preloader" style={{display: `${props.showPlaceholder ? 'block' : ' none' }`}}>
      <img src={preloader} alt="preloader" id="preloader_animation"/>
    </div>
  )
}

export default Preloader