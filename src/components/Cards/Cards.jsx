
import './Cards.css';
import CardItem from '../CardItem/CardItem';
import img from '../../assets/imageCard/card.jpg'
//import AboutUs from '../AboutUs/AboutUs';

function Cards() {
  return (
    <div className='cards'>
      <h1></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img}
              text='Landing Page'
              path='/'
            />
            <CardItem
              src={img}
              text='Diseño Básico'
              label='Info'
              path='/services'
            />
             <CardItem
              src={img}
              text='Diseño Ecommerce'
              label='Info'
              path='/services'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src=''
              text=''
              label=''
              path='/services'
            />
            <CardItem
              src=''
              text=''
              label=''
              path='/products'
            />
            <CardItem
              src=''
              text=''
              label=''
              path='/sign-up'
            />
          </ul> */}
          {/* <AboutUs/> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;