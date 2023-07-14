import './../../App.css'
import map from './../../img/Map.jpg'
import headerImg from './../../img/Header_Image.png';
import knowMore1 from './../../img/Know_more_Image_1.jpg';
import knowMore2 from './../../img/Know_more_Image_2.jpg';
import profileImg from './../../img/profileImg.png';
import Button from './../../components/Button/Button';
import Card from './../../components/Card/Card';
import FoodCard from './../../components/FoodCard/FoodCard';
import BlogCard from './../../components/BlogCard/BlogCard';


const HomePage = () => {
  return (
    <main>
      <div class='welcome'>
        <div class='welcome__text'>
          <h1 class='title'>We serve high quality foods of all kinds.</h1>
          <p class='subtitle'>
            Edit this text to make it your own. To edit, simply click directly
            on the text to start adding your own words. You can move the text.
          </p>
          <Button />
          <div class='header__subtext'>
            <h2 class='text__medium'>Opening Times</h2>
            <p class='subtext__medium'>
              Sunday to Saturday  l  09:00 AM to 11:00 PM
            </p>
            <h2 class='text__medium'>Location</h2>
            <p class='subtext__medium'>Master canteen, BBSR , Odisha 752054</p>
            <h2 class='text__medium'>Call us</h2>
            <p class='subtext__medium'>+9776462441</p>
          </div>
        </div>
        <div class='header__img'>
          <img src={headerImg} alt='' />
        </div>
      </div>
      <div class='know__more'>
        <div class='know__more-info'>
          <div class='header__element'>
            KNOW MORE ABOUT US
            <span class='border'></span>
          </div>
          <div class='know__more-text'>
            <h1 class='title mod__fz'>
              We source sustainable & line caught Foods
            </h1>
            <p class='subtitle'>
              Edit this text to make it your own. To edit, simply click directly
              on the text to start adding your own words. You can move the text
              by dragging and dropping the text anywhere on the page.
            </p>
          </div>
          <div class='features'>
            <div class='feature'>
              <div class='feature__header'>
                <div class='feature__header--logo'></div>
                <div class='feature__header--text'>10+ People</div>
              </div>
              <p class='subtitle'>We are Small Team</p>
              <p class='subtitle'>
                Through True Rich Attended does no end it his mother since
                favourable.
              </p>
            </div>
            <div class='feature'>
              <div class='feature__header'>
                <div class='feature__header--logo'></div>
                <div class='feature__header--text'>2014</div>
              </div>
              <p class='subtitle'>We are From</p>
              <p class='subtitle'>
                Through True Rich Attended does no end it his mother since
                favourable.
              </p>
            </div>
            <div class='feature'>
              <div class='feature__header'>
                <div class='feature__header--logo'></div>
                <div class='feature__header--text'>200k</div>
              </div>
              <p class='subtitle'>We Served</p>
              <p class='subtitle'>
                Through True Rich Attended does no end it his mother since
                favourable.
              </p>
            </div>
          </div>
          <Button />
        </div>
        <div class='feature__img'>
          <img src={knowMore1} alt='' />
          <img src={knowMore2} alt='' />
        </div>
      </div>
      <div class='serving'>
        <div class='header__element'>
          KNOW MORE ABOUT US
          <span class='border'></span>
        </div>
        <div class='serving__header'>
          <h1 class='title mod__fz'>
            We all have to eat, so why not do it beautifully?
          </h1>
          <p class='subtitle mod__width'>
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.. Through True Rich Attended does no end it his mother
          </p>
        </div>
        <div class='serving__cards'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          {/* <div class='card'>
                  <div class='card__icon-1'></div>
                  <div class='card__title'>Quafe Cake</div>
                  <p class='subtitle'>
                    Through True Rich Attended no end it his mother since
                    favourable real had half every him.
                  </p>
                </div>
                <div class='card'>
                  <div class='card__icon-2'></div>
                  <div class='card__title'>Quafe Cake</div>
                  <p class='subtitle'>
                    Through True Rich Attended no end it his mother since
                    favourable real had half every him.
                  </p>
                </div>
                <div class='card'>
                  <div class='card__icon-3'></div>
                  <div class='card__title'>Quafe Cake</div>
                  <p class='subtitle'>
                    Through True Rich Attended no end it his mother since
                    favourable real had half every him.
                  </p>
                </div>
                <div class='card'>
                  <div class='card__icon-4'></div>
                  <div class='card__title'>Quafe Cake</div>
                  <p class='subtitle'>
                    Through True Rich Attended no end it his mother since
                    favourable real had half every him.
                  </p>
                </div>
                <div class='card'>
                  <div class='card__icon-5'></div>
                  <div class='card__title'>Quafe Cake</div>
                  <p class='subtitle'>
                    Through True Rich Attended no end it his mother since
                    favourable real had half every him.
                  </p>
                </div>
                <div class='card'>
                  <div class='card__icon-6'></div>
                  <div class='card__title'>Quafe Cake</div>
                  <p class='subtitle'>
                    Through True Rich Attended no end it his mother since
                    favourable real had half every him.
                  </p>
                </div> */}
        </div>
        {/* <ServingCard /> */}
      </div>
      <div class='menu'>
        <div class='header__element'>
          KNOW MORE ABOUT US
          <span class='border'></span>
        </div>
        <div class='menu__header'>
          <div class='menu__title'>
            <h1 class='title mod__fz'>Discover our menu chart</h1>
            <p class='subtext'>Most Popular Picks</p>
          </div>
          <p class='subtitle mod__width'>
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.. Through True Rich Attended does no end it his mother
          </p>
        </div>
        <div class='menu__cards'>
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          {/* <div class='menu__card'>
                  <img src={cardImg5} alt='' />
                  <div class='card__name'>
                    <span>Drp Cofee</span>
                    <span>$08.85</span>
                  </div>
                </div>
                <div class='menu__card'>
                  <img src={cardImg4} alt='' />
                  <div class='card__name'>
                    <span>Choco Cup Cake</span>
                    <span>$4.85</span>
                  </div>
                </div>
                <div class='menu__card'>
                  <img src={cardImg1} alt='' />
                  <div class='card__name'>
                    <span>Chicken Burger</span>
                    <span>$8.85</span>
                  </div>
                </div>
                <div class='menu__card'>
                  <img src={cardImg2} alt='' />
                  <div class='card__name'>
                    <span>French Fries</span>
                    <span>$7.85</span>
                  </div>
                </div>
                <div class='menu__card'>
                  <img src={cardImg3} alt='' />
                  <div class='card__name'>
                    <span>Sandwitch</span>
                    <span>$3.97</span>
                  </div>
                </div>
                <div class='menu__card'>
                  <img src={cardImg} alt='' />
                  <div class='card__name'>
                    <span>Chinese Soup</span>
                    <span>$8.85</span>
                  </div>
                </div> */}
        </div>
        <Button />
      </div>
      <div class='quote'>
        <div class='quote__info'>
          <div class='symbol'></div>
          <div class='text'>
            Edit this text to make it your own. To edit, simply click directly
            on the text to start adding your own words. You can move the text by
            dragging and dropping the text
          </div>
          <div class='profile'>
            <div class='man'>
              <div class='name'>Joheny Andro</div>
              <div class='surname'>Bhubaneswar, Odisha</div>
            </div>
            <img src={profileImg} alt='' />
          </div>
        </div>
        <video
          controls='controls'
          src='https://www.youtube.com/watch?v=P46HMVxBMc8&ab_channel=Bronzehoresman'
        ></video>
      </div>
      <div class='blog'>
        <div class='menu__title'>
          <h1 class='title mod__fz'>Read Our Lastest Blog</h1>
        </div>
        <div class='blog__cards'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          {/* <div class='blog__card'>
                  <div class='blog__info'>
                    <div class='card__date'>21 Jun 2021</div>
                    <div class='card__title'>Extra Thick Homemad Pizza Sauce</div>
                    <p class='subtitle mod__width'>
                      Through True Rich Attended does no end it his mother since
                      favourable real had half every him case in packages enquire
                      we up ecstatic.. Through True Rich Attended does no end it
                      his mother
                    </p>
                  </div>
                  <img src={imageCoffee} alt='' />
                </div>
                <div class='blog__card'>
                  <div class='blog__info'>
                    <div class='card__date'>21 Jun 2021</div>
                    <div class='card__title'>
                      The Best Way to Store Fresh Herbs
                    </div>
                    <p class='subtitle mod__width'>
                      Through True Rich Attended does no end it his mother since
                      favourable real had half every him case in packages enquire
                      we up ecstatic.. Through True Rich Attended does no end it
                      his mother
                    </p>
                  </div>
                  <img src={imageBurger} alt='' />
                </div>
                <div class='blog__card'>
                  <div class='blog__info'>
                    <div class='card__date'>21 Jun 2021</div>
                    <div class='card__title'>5 ways to prepare porridge</div>
                    <p class='subtitle mod__width'>
                      Through True Rich Attended does no end it his mother since
                      favourable real had half every him case in packages enquire
                      we up ecstatic.. Through True Rich Attended does no end it
                      his mother
                    </p>
                  </div>
                  <img src={imageSandwich} alt='' />
                </div> */}
          <div class='contact'>
            <div class='contact__info'>
              <h4>Working Hour</h4>
              <p class='subtitle mod__width'>
                Sunday to Saturday <br />
                09:00 AM to 11:00 PM
              </p>
              <h4>Working Hour</h4>
              <p class='subtitle mod__width'>
                Street - 127, New York, <br />
                United States <br />
                546544
              </p>
              <h4>Contact us </h4>
              <p class='subtitle mod__width'>
                +123456789 <br />
                hey@yourdomain.com
              </p>
            </div>
            <div class='contact__map'>
              <img src={map} alt='' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};


export default HomePage