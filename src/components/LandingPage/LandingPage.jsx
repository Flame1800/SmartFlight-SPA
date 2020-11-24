import '../styles/landing-page.css';


export default function LandingPage() {

    return (
        <div className="div">
            <header>
                <div class="logo test-0-logo"></div>
                <nav>
                    <ul>
                        <li>
                            <a href="#actions" class="nav-link test-0-nav-1">Акции</a>
                        </li>
                        <li>
                            <a href="#search" class="nav-link test-0-nav-2">Поиск</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link test-0-nav-3">Регистрация на рейс</a>
                        </li>
                        <li>
                            <a href="register.html" class="nav-link test-0-nav-4">Личный кабинет</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div class="decorations">
                <div class="plane"></div>
                <div class="cloud-1"></div>
                <div class="cloud-2"></div>
                <div class="cloud-3"></div>
                <div class="cloud-4"></div>
            </div>
            <section class="intro">
                <div class="content">
                    <div class="title">Мы сближаем города, вы - <br /> живете там, где хотите</div>
                    <div class="sub-title">Предоставляем услуги пассажирских авиаперевозок небольшими малогабаритными самолетами
            </div>
                    <a href="#search" class="btn">Забронировать рейс</a>
                </div>
            </section>
            <section class="booking-info">
                <div class="main-title">
                    Принципы работы
        </div>
                <div class="items">
                    <div class="item item-1">
                        Выбрать удобную <br /> дату перелета
            </div>
                    <div class="separator">
                        - - -
            </div>
                    <div class="item item-2">
                        Накопить больше 50% <br /> бронирований на рейс
            </div>
                    <div class="separator">
                        - - -
            </div>
                    <div class="item item-3">
                        Получить снижение <br /> стоимости
            </div>
                </div>
                <div class="calculate">
                    <div class="title">Попробуйте сами!</div>
                    <div class="sub-title">
                        Измените число бронированний и посмотрите как будет менятся стоимость и вероятность вылета
                <br />
                Всего может быть 60 бронирований на рейс!
            </div>
                    <div class="result">
                        <div class="enter-block">
                            <label for="">Дата</label>
                            <input type="text" value="18-11-2020" disabled class="cal-input" />
                            <div class="bookings-input">
                                <label for="">Введите число бронирований</label>
                                <input type="text" value="60" class="booking-input cal-input cal-input2" />
                            </div>
                        </div>
                        <div class="result-block">
                            <div class="item">
                                <div class="name">Стоимость</div>
                                <div class="value price">46$</div>
                            </div>
                            <div class="item">
                                <div class="name">Вероятность вылета</div>
                                <div class="value value2 availability">100%</div>
                            </div>
                        </div>
                        <div class="info-error">

                        </div>
                    </div>
                </div>
            </section>
            <section class="about">
                <div class="container">
                    <div class="text-block">
                        <div class="main-title">Главная цель</div>
                        <p class="text">
                            развить связность между городами России путем организации авиасообщений
                            на непостоянной основе по мере накопления запросов на перелет
                </p>
                    </div>
                    <div class="img-plane"></div>
                </div>
            </section>
            <section class="search" id='search'>
                <div class="main-title">Поиск рейсов</div>
                <div class="form">
                    <input type="text" placeholder="Откуда" class="test-0-fd" />
                    <input type="text" placeholder="Куда" class="test-0-fa" />
                    <input type="text" placeholder="Туда" class="test-0-fdt" />
                    <input type="text" placeholder="Обратно" class="test-0-fat" />
                    <select value="Пассажиры" class='test-0-fnp'>
                        <option id="1">Пассажиры</option>
                        <option id="1">1</option>
                        <option id="2">2</option>
                        <option id="3">3</option>
                        <option id="4">4</option>
                        <option id="5">5</option>
                        <option id="6">6</option>
                        <option id="7">7</option>
                        <option id="8">8</option>
                    </select>
                    <a href="search.html" class="btn test-0-fbs">Найти</a>
                </div>
            </section>
            <section class="actions" id='actions'>
                <div class="main-title">Акции</div>
                <div class="items">
                    <div class="item">
                        <div class="text-block">
                            <div class="title test-0-an">Returning and Changing Your Tickets</div>
                            <p class="text test-0-ad">
                                The pandemic has changed many travelers’ plans, but we know that it will not last forever.
                                Once all of this is over, we will continue...
                    </p>
                            <div class="btn2 test-0-abm">Подробнее</div>
                        </div>
                        <div class="img img-1 test-0-ai"></div>
                    </div>
                    <div class="item">
                        <div class="text-block">
                            <div class="title test-0-an">Best offers</div>
                            <p class="text test-0-ad">
                                To see again the streets that witnessed so much. To hug your beloved ones and look back to see
                                what you’ve come through. And to think of new dreams that will be so special!
                    </p>
                            <div class="btn2 test-0-abm">Подробнее</div>
                        </div>
                        <div class="img img-2 test-0-ai"></div>
                    </div>
                    <div class="item">
                        <div class="text-block">
                            <div class="title test-0-an">
                                See you more often
                    </div>
                            <p class="text test-0-ad">
                                Since the beginning of January, we have been expanding the geography of flights in Russia so that you can
                                see your loved ones more often. Choose our company to fly to where you are always expected.
                    </p>
                            <div class="btn2 test-0-abm">Подробнее</div>
                        </div>
                        <div class="img img-3 test-0-ai"></div>
                    </div>
                    <div class="item">
                        <div class="text-block">
                            <div class="title test-0-an">
                                Everything is on again
                    </div>
                            <p class="text test-0-ad">
                                From August 10, we will resume flights to Turkey. Flights from Moscow to Antalya will be operated twice
                                a day daily, and flights on the Moscow-Dalaman route will be operated three to seven times a week.
                    </p>
                            <div class="btn2 test-0-abm">Подробнее</div>
                        </div>
                        <div class="img img-4 test-0-ai"></div>
                    </div>
                </div>
            </section>
            <section class="subscribe">
                <div class="title">Хочешь увидеть больше акций? Оформи подписку!</div>
                <input type="text" class="test-0-sie" placeholder="Введите email" />
                <div class="btn test-0-sbs">Подписаться</div>
            </section>
            <footer>
                <div class="phone test-0-phone">8 (800) 100-10-10</div>
                <div class="navigate">
                    <nav>
                        <ul>
                            <li>
                                <a href="http://xbzvsszs-m1.wsr.ru" class="nav-link">Home</a>
                            </li>
                            <li>
                                <a href="http://xbzvsszs-m1.wsr.ru/login" class="nav-link">Login</a>
                            </li>
                            <li>
                                <a href="http://xbzvsszs-m1.wsr.ru/signup" class="nav-link">Sign up</a>
                            </li>
                            <li>
                                <a href="http://xbzvsszs-m1.wsr.ru/contact" class="nav-link">Contact </a>
                            </li>
                            <li>
                                <a href="http://xbzvsszs-m1.wsr.ru/news" class="nav-link">News</a>
                            </li>
                            <li>
                                <a href="http://xbzvsszs-m1.wsr.ru/return" class="nav-link">Return</a>
                            </li>
                            <li>
                                <a href="http://xbzvsszs-m1.wsr.ru/feedback" class="nav-link">Feedback</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
