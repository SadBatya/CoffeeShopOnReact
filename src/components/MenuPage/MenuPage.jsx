import MenuCards from '../MenuCards/MenuCards'
import './../../../src/App.css'
import cardsInfo from './../../mocks/MenuCards'

const MenuPage = () => {
  return (
    <div className='wrapper'>
      <div class="menu__title">
        <div class="title__name">
          <div class="title__text--small">
            <div class="title__text-inner">OUR MENU</div>
            <div class="title__line"></div>
          </div>
          <div class="title__text">Discover Our menu Chart</div>
        </div>
        <div class="title__description">
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic..
          Through True Rich Attended does no end it his mother
        </div>
      </div>
      <div class="filter__cards">
        <div class="filter__nav">
          <nav class="buttons">
            <ul>
              <li data-f="all">All</li>
              <li data-f="fastFood">Fast Food</li>
              <li data-f="coffee">Cofee</li>
              <li data-f="cocktails">Cocktails</li>
              <li data-f="quafeCake">Quafe Cake</li>
              <li data-f="snacks">Snacks</li>
            </ul>
          </nav>
        </div>
        <div class="menu__cards">
          {cardsInfo.map((card) => <MenuCards img={card.img} name={card.name} price={card.price}/>)}
        </div>
      </div>
      <div class="contact">
        <div class="contact__info">
          <h4>Working Hour</h4>
          <p class="subtitle mod__width">
            Sunday to Saturday  <br/>
            09:00 AM to 11:00 PM
          </p>
          <h4>Working Hour</h4>
          <p class="subtitle mod__width">
            Street - 127, New York, <br/> 
            United States <br/>
            546544
          </p>
          <h4>Contact us </h4>
          <p class="subtitle mod__width">
            +123456789 <br/>
            hey@yourdomain.com
          </p>
        </div>
        <div class="contact__map">
          <img src="./../homePage/img/Map.jpg" alt=""/>
        </div>
      </div>
    </div>
  )
}


export default MenuPage