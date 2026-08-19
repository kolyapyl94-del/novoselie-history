// Articles data - здесь вы можете редактировать тексты
const articles = {
    church: {
        title: "Старая церковь",
        year: "1723 год",
        image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800",
        description: `
            <p>Церковь была построена в 1723 году на средства местных купцов и стала духовным центром Новоселья. Архитектура здания сочетает в себе элементы барокко и классицизма, что было характерно для храмов того периода.</p>
            
            <p>Во время Великой Отечественной войны церковь была закрыта, а в её здании размещался госпиталь. В 1990-е годы храм был возвращён верующим и отреставрирован.</p>
            
            <p>Сегодня это действующий православный храм и одна из главных достопримечательностей города. Здесь сохранились уникальные фрески XIX века и старинный иконостас.</p>
        `
    },
    market: {
        title: "Центральная площадь",
        year: "1850 год",
        image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?w=800",
        description: `
            <p>Центральная площадь исторически была местом торговли и народных гуляний. В XIX веке здесь проходили ежегодные ярмарки, на которые съезжались купцы из соседних губерний.</p>
            
            <p>В советское время площадь была переименована и стала местом проведения демонстраций и праздников. В 2000-е годы была проведена реконструкция, вернувшая площади исторический облик.</p>
            
            <p>Сейчас это любимое место отдыха горожан. Здесь проводятся фестивали, концерты и рождественские ярмарки.</p>
        `
    },
    school: {
        title: "Первая школа",
        year: "1892 год",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        description: `
            <p>Первое учебное заведение в Новоселье открылось в 1892 году. Это было земское училище, где обучались дети из разных сословий.</p>
            
            <p>Здание школы было построено по проекту губернского архитектора и считалось одним из самых современных в регионе. Здесь были просторные классы, библиотека и даже небольшой спортивный зал.</p>
            
            <p>Сегодня в этом историческом здании располагается краеведческий музей, где можно узнать больше об истории образования в нашем городе.</p>
        `
    },
    bridge: {
        title: "Исторический мост",
        year: "1875 год",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
        description: `
            <p>Каменный мост через реку был построен в 1875 году и стал важным транспортным узлом. До его появления переправа осуществлялась на паромах, что было неудобно и опасно в половодье.</p>
            
            <p>Мост выдержал испытание временем и до сих пор используется для пешеходного движения. С него открывается прекрасный вид на старую часть города.</p>
            
            <p>В 2010 году мост был признан памятником архитектуры регионального значения и отреставрирован с сохранением исторического облика.</p>
        `
    },
    museum: {
        title: "Краеведческий музей",
        year: "1955 год",
        image: "https://images.unsplash.com/photo-1599940824399-b87987ce0799?w=800",
        description: `
            <p>Музей истории Новоселья был основан в 1955 году группой энтузиастов-краеведов. Первые экспонаты собирали по крупицам: старые фотографии, документы, предметы быта.</p>
            
            <p>Сегодня музейная коллекция насчитывает более 5000 экспонатов. Здесь представлены археологические находки, этнографические коллекции, документы и фотографии разных эпох.</p>
            
            <p>Музей проводит экскурсии, лекции и мастер-классы для школьников и всех желающих узнать больше об истории родного края.</p>
        `
    },
    park: {
        title: "Городской парк",
        year: "1901 год",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        description: `
            <p>Парк был заложен в 1901 году по инициативе городского головы. Для его создания пригласили ландшафтного архитектора из столицы, который спроектировал живописные аллеи и пруды.</p>
            
            <p>В парке росли редкие породы деревьев, многие из которых сохранились до наших дней. Здесь были установлены беседки, фонтаны и летняя эстрада.</p>
            
            <p>Сегодня парк остаётся излюбленным местом отдыха. Здесь проводятся концерты, спортивные мероприятия и городские праздники.</p>
        `
    }
};

// Timeline articles
const timelineArticles = {
    1700: {
        title: "Основание поселения",
        year: "1700 год",
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800",
        description: `
            <p>Новоселье было основано в начале XVIII века переселенцами из центральных губерний России. Первые поселенцы занимались сельским хозяйством и ремёслами.</p>
            
            <p>Название «Новоселье» отражает суть поселения — это было новое село, основанное на ранее необжитых землях.</p>
            
            <p>К середине XVIII века в поселении уже насчитывалось около 50 дворов, была построена первая церковь и открыта торговая лавка.</p>
        `
    },
    1850: {
        title: "Расцвет торговли",
        year: "1850 год",
        image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800",
        description: `
            <p>Середина XIX века стала периодом экономического процветания Новоселья. Через поселение проходил важный торговый путь, что способствовало развитию ремёсел и торговли.</p>
            
            <p>В это время были построены каменные купеческие дома, открыты первые фабрики и мастерские. Население выросло до нескольких тысяч человек.</p>
            
            <p>Ежегодные ярмарки привлекали купцов из Москвы, Петербурга и других городов. Новоселье получило статус уездного города.</p>
        `
    },
    1920: {
        title: "Новая эпоха",
        year: "1920 год",
        image: "https://images.unsplash.com/photo-1534447677768-be430bb080f7?w=800",
        description: `
            <p>После революции 1917 года в жизни города произошли кардинальные изменения. Была установлена советская власть, началась коллективизация.</p>
            
            <p>В 1920-е годы были открыты новые школы, больницы, клубы. Началась электрификация города и прокладка водопровода.</p>
            
            <p>Несмотря на трудности, город продолжал развиваться, росла промышленность и инфраструктура.</p>
        `
    },
    1960: {
        title: "Промышленный рост",
        year: "1960 год",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        description: `
            <p>1960-е годы стали периодом индустриального бума. В городе были построены крупные заводы и фабрики, что привело к росту населения.</p>
            
            <p>Ведётся активное жилищное строительство — появляются новые микрорайоны с современными (по тем временам) пятиэтажками.</p>
            
            <p>Развивается социальная инфраструктура: строятся новые школы, детские сады, поликлиники. Город становится важным промышленным центром региона.</p>
        `
    },
    2000: {
        title: "Новое тысячелетие",
        year: "2000 год",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
        description: `
            <p>Наступление нового тысячелетия принесло новые вызовы и возможности. Город начал активно развиваться в сфере услуг и малого бизнеса.</p>
            
            <p>Проводится реконструкция исторического центра, восстанавливаются памятники архитектуры. Город становится более комфортным для жизни.</p>
            
            <p>Развивается туризм, проводятся культурные мероприятия и фестивали. Новоселье сохраняет свою историческую идентичность, одновременно развиваясь как современный город.</p>
        `
    }
};

// DOM Elements
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');

// Gallery items click
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const articleKey = item.getAttribute('data-article');
        const article = articles[articleKey];
        
        if (article) {
            openModal(article);
        }
    });
});

// Timeline items click
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        const year = item.getAttribute('data-year');
        const article = timelineArticles[year];
        
        if (article) {
            openModal(article);
        }
    });
});

// Open modal
function openModal(article) {
    modalTitle.textContent = article.title;
    modalYear.textContent = article.year;
    modalDescription.innerHTML = article.description;
    modalImage.style.backgroundImage = `url(${article.image})`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.timeline-item, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});