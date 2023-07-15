import React from "react";
import products from './../../mocks/index'
import styles from './MenuPage.module.scss'

const MenuPage = () => {
  return (
    <div className={styles.wrapper}>
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
          <div class="menu__card coffee">
            <img src="./img/Image-11.png" alt="" />
            <div class="card__name">
              <span>Drp Cofee</span>
              <span>$08.85</span>
            </div>
          </div>
          <div class="menu__card snacks">
            <img src="./img/Image-10.png" alt="" />
            <div class="card__name">
              <span>Choco Cup Cake</span>
              <span>$4.85</span>
            </div>
          </div>
          <div class="menu__card fastFood">
            <img src="./img/Image-9.png" alt="" />
            <div class="card__name">
              <span>Chicken Burger</span>
              <span>$8.85</span>
            </div>
          </div>
          <div class="menu__card fastFood">
            <img src="./img/Image-8.png" alt="" />
            <div class="card__name">
              <span>French Fries</span>
              <span>$7.85</span>
            </div>
          </div>
          <div class="menu__card fastFood">
            <img src="./img/Image-7.png" alt="" />
            <div class="card__name">
              <span>Sandwitch</span>
              <span>$3.97</span>
            </div>
          </div>
          <div class="menu__card fastFood">
            <img src="./img/Image-6.png" alt="" />
            <div class="card__name">
              <span>Chinese Soup</span>
              <span>$8.85</span>
            </div>
          </div>
          <div class="menu__card fastFood">
            <img src="./img/Image-5.png" alt="" />
            <div class="card__name">
              <span>Quafe Brade</span>
              <span>$7.85</span>
            </div>
          </div>
          <div class="menu__card fastFood">
            <img src="./img/Image-7.png" alt="" />
            <div class="card__name">
              <span>Dalgona Cofee</span>
              <span>$4.97</span>
            </div>
          </div>
          <div class="menu__card snacks">
            <img src="./img/Image-3.png" alt="" />
            <div class="card__name">
              <span>Chowmin Noodle</span>
              <span>$8.85</span>
            </div>
          </div>
          <div class="menu__card cocktails">
            <img src="./img/Image-2.png" alt="" />
            <div class="card__name">
              <span>Coka Cola</span>
              <span>$7.85</span>
            </div>
          </div>
          <div class="menu__card quafeCake">
            <img src="./img/Image-1.png" alt="" />
            <div class="card__name">
              <span>Fruit Salad</span>
              <span>$3.97</span>
            </div>
          </div>
          <div class="menu__card cocktails">
            <img src="./img/Image.png" alt="" />
            <div class="card__name">
              <span>Cocktail</span>
              <span>$8.85</span>
            </div>
          </div>
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