import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 32,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 33,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 41,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 11,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 14,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 34,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: '/game-covers/pubg.jpeg',
        title: 'PUBG MOBAIL: Последствия',
        genres: ['Экшен', 'Королевская битва', 'Шутер'],
        video: 'https://www.youtube.com/embed/S0wCM-zNrfM',
        price: 40,
        id: 7,
        description: 'PUBG Mobile - это мобильная версия шутера в жанре "king of the hill", в котором выигрывает последний оставшийся в живых участник. Начиная игру ни с чем, игроки должны раздобыть оружие и припасы чтобы бороться за первое место и стать последним героем, выжившим в битве.'
    },
    {
        image: '/game-covers/freefire.png',
        title: 'Garena Free Fire',
        genres: ['Экшен', 'Королевская битва', 'Шутер'],
        video: 'https://www.youtube.com/embed/M9ygwJNzYwE',
        price: 11,
        id: 8,
        description: 'Free Fire – мобильный шутер в жанре королевской битвы. Игрокам предстоит столкнуться друг с другом и проявить смекалку для того, чтобы остаться в живых и победить. Начините эту битву с выбора точки высадки на удаленном острове, до которой вы доберетесь на парашюте.'
    },
    {
        image: '/game-covers/newstate.jpg',
        title: 'PUBG: NEW STATE',
        genres: ['Экшен', 'Королевская битва', 'Шутер'],
        video: 'https://www.youtube.com/embed/htld_r86pfI',
        price: 24,
        id: 9,
        description: 'PUBG: NEW STATE оригинальная королевская битва теперь на мобильных устройствах. Обновление нового режима! Играйте в КБ: ЭКСТРИМ для более захватывающих 20-минутных раундов! Сезон 1: Начинается Первый Регулярный Сезон!'
    },
    {
        image: '/game-covers/golf.jpg',
        title: 'Golf With Your Friends',
        genres: ['Спортивный симулятор', 'Инди-игра'],
        video: 'https://www.youtube.com/embed/9-U4qW1evJ8?start=3',
        price: 19,
        id: 10,
        description: '«Гольф с друзьями» — это увлекательная захватывающая многопользовательская игра в мини-гольф, где могут участвовать до 12 игроков. На данный момент в игре есть 7 уровней, на каждом — по 18 лунок.'
    },
    {
        image: '/game-covers/Theforest.jpg',
        title: 'The Forest',
        genres: ['Шутер', 'Нелинейность', 'Файтинг'],
        video: 'https://www.youtube.com/embed/76dHkDhOZ04',
        price: 23,
        id: 11,
        description: 'The Forest (с англ. — «Лес») — компьютерная игра в жанре survival horror с открытым миром и видом от первого лица, разработанная и изданная канадской компанией Endnight Games. ... Игроку придётся сопротивляться природным факторам, искать ресурсы для выживания, противостоять аборигенам.'
    },
    {
        image: '/game-covers/dying.webp',
        title: 'Dying Light 2 Stay Human',
        genres: ['Платформер', 'Файтинг', 'Хорор'],
        video: 'https://www.youtube.com/embed/2MD4gTitmzw',
        price: 13,
        id: 12,
        description: 'Dying Light 2 Stay Human — продолжение динамичного шутера с видом от первого лица в мире зомби-апокалипсиса. Действия игры разворачивается в городе Вилледоре спустя 20 лет после событий первой части. ... Как и в оригинале вас ожидает большой открытый мир, орды кровожадных живых мертвецов и проработанная система паркура.'
    },
    {
        image: '/game-covers/dayz.jpeg',
        title: 'DayZ',
        genres: ['Симулятор', 'Квест', 'Шутер'],
        video: 'https://www.youtube.com/embed/vfw_Qap1xDg',
        price: 18,
        id: 13,
        description: 'DayZ — многопользовательская компьютерная игра в жанре survival horror с открытым миром, разрабатываемая компанией Bohemia Interactive. Игра является ремейком одноимённой модификации к Arma 2, созданной геймдизайнером Дином Холлом.'
    },
    {
        image: '/game-covers/rust.jpg',
        title: 'Rust',
        genres: ['Шутер', 'Симулятор', 'Инди-игра'],
        video: 'https://www.youtube.com/embed/LGcECozNXEw',
        price: 18,
        id: 14,
        description: 'Rust — компьютерная игра в жанре симулятора выживания, была создана независимой британской студией Facepunch, возглавляемой c 2014 года Гарри Ньюмэном. Игра вышла на платформах Windows и macOS. С декабря 2013 года игра находилась в раннем доступе. Выпуск игры состоялся 8 февраля 2018 года. '
    },
    {
        image: '/game-covers/terraria.jpg',
        title: 'Terraria',
        genres: ['Песочница', 'Открытый мир', 'Шутер'],
        video: 'https://www.youtube.com/embed/H77Zfzy4LWw',
        price: 17,
        id: 15,
        description: 'Terraria — компьютерная игра в жанре приключенческой песочницы, разработанная американской студией Re-Logic. Была выпущена в 2011 году для компьютеров Microsoft Windows с распространением через систему цифровой дистрибуции Steam.'
    },
    {
        image: '/game-covers/hitman.jpg',
        title: 'HITMAN 3',
        genres: ['Стелс', 'Шутер', 'Квест'],
        video: 'https://www.youtube.com/embed/aAglID1Bjyk',
        price: 15,
        id: 16,
        description: 'Hitman 3 — компьютерная игра в жанре стелс-экшена, разработанная и изданная IO Interactive. Игра стала восьмой по счёту в основной серии Hitman, а также третьей и последней в трилогии World of Assassination после Hitman и Hitman 2.'
    },
    {
        image: '/game-covers/reddead.jpg',
        title: 'Red Dead Redemption 2',
        genres: ['Шутер', 'Вестерн', 'Развлечение'],
        video: 'https://www.youtube.com/embed/0kqEBOZaP94',
        price: 20,
        id: 17,
        description: 'Red Dead Redemption 2 — компьютерная игра в жанрах action-adventure и шутера от третьего лица с открытым миром, разработанная Rockstar Studios и выпущенная Rockstar Games для консолей PlayStation 4 и Xbox One 26 октября 2018 года и для персональных компьютеров под управлением Windows 5 ноября 2019 года.'
    },
    {
        image: '/game-covers/sims4.png',
        title: 'The Sims™ 4',
        genres: ['Симулятор жизни'],
        video: 'https://www.youtube.com/embed/xr_5WU_nWrA',
        price: 16,
        id: 18,
        description: 'The Sims 4 — однопользовательская компьютерная игра в жанре симулятора жизни, четвёртая по счёту из серии игр The Sims, разработанная компанией Maxis и издаваемая Electronic Arts для Windows и macOS. ... В The Sims 4 нет чётко выраженного сюжета, а игровой процесс нелинеен и не имеет заданной конечной цели.'
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}
