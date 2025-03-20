// Данные для перевода
const translations = {
    ru: {
        main_menu: "Главное меню",
        game_history: "История игр",
        device_check: "Проверка устройства",
        lucky_jet: "Lucky Jet",
        mines: "Mines",
        new_mines: "New Mines",
        coinflip: "CoinFlip",
        royal_mines: "Royal Mines",
        aviator: "Aviator",
        instruction_button: "ИНСТРУКЦИЯ",
        referral_button: "ИГРАЕМ ТУТ",
        instruction_title: "Инструкция",
        instruction_text: `Для того, чтобы получить сигнал, выбери режим в главном меню. Если ты сделал все правильно и зарегистрировался через кнопку в боте, то твой аккаунт привязан к приложению с сигналами и будет работать в штатном режиме. Указывая промокод <span class="promo">«MINWIN25»</span> при регистрации, шансы на точность сигналов возрастают до 98%. Удачных сигналов!`,
        close_button: "Закрыть",
        device_scanning: "Определяем ваше устройство...",
        device_result: "Ваше устройство: {device}. Рекомендуемые режимы: Lucky Jet, Mines.",
        in_development: "В разработке"
    },
    en: {
        main_menu: "Main Menu",
        game_history: "Game History",
        device_check: "Device Check",
        lucky_jet: "Lucky Jet",
        mines: "Mines",
        new_mines: "New Mines",
        coinflip: "CoinFlip",
        royal_mines: "Royal Mines",
        aviator: "Aviator",
        instruction_button: "INSTRUCTION",
        referral_button: "PLAY HERE",
        instruction_title: "Instruction",
        instruction_text: `To receive a signal, select a mode in the main menu. If you have done everything correctly and registered through the button in the bot, your account is linked to the signal application and will work in normal mode. By specifying the promo code <span class="promo">«MINWIN25»</span> during registration, the chances of signal accuracy increase to 98%. Good luck with your signals!`,
        close_button: "Close",
        device_scanning: "Detecting your device...",
        device_result: "Your device: {device}. Recommended modes: Lucky Jet, Mines.",
        in_development: "In Development"
    },
    in: {
        main_menu: "मुख्य मेनू",
        game_history: "खेल इतिहास",
        device_check: "डिवाइस जांच",
        lucky_jet: "लकी जेट",
        mines: "माइन्स",
        new_mines: "न्यू माइन्स",
        coinflip: "कॉइनफ्लिप",
        royal_mines: "रॉयल माइन्स",
        aviator: "एविएटर",
        instruction_button: "निर्देश",
        referral_button: "यहां खेलें",
        instruction_title: "निर्देश",
        instruction_text: `सिग्नल प्राप्त करने के लिए, मुख्य मेनू में एक मोड चुनें। यदि आपने सब कुछ सही ढंग से किया है और बॉट में बटन के माध्यम से पंजीकरण किया है, तो आपका खाता सिग्नल एप्लिकेशन से जुड़ा होगा और सामान्य रूप से काम करेगा। पंजीकरण के दौरान प्रोमो कोड <span class="promo">«MINWIN25»</span> निर्दिष्ट करने से, सिग्नल सटीकता की संभावना 98% तक बढ़ जाती है। शुभकामनाएँ!`,
        close_button: "बंद करें",
        device_scanning: "आपका डिवाइस पहचाना जा रहा है...",
        device_result: "आपका डिवाइस: {device}. अनुशंसित मोड: Lucky Jet, Mines.",
        in_development: "विकास में"
    }
};

// Установка языка
let currentLang = localStorage.getItem('selectedLanguage') || 'ru';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    const languageButton = document.getElementById('language-button');
    languageButton.textContent = lang.toUpperCase() + ' ▼';
    const flagIcon = document.getElementById('flag-icon');
    flagIcon.src = `flags/${lang === 'ru' ? 'ru' : lang === 'en' ? 'us' : 'in'}.svg`;
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translations[lang][key];
        } else {
            element.innerHTML = translations[lang][key];
        }
    });
    const royalMines = document.querySelector('.game.disabled');
    if (royalMines) {
        royalMines.setAttribute('data-in-development', translations[lang].in_development);
    }
    document.querySelector('.language-switcher').classList.remove('active');
}

// Открытие/закрытие выпадающего списка языков
function toggleLanguageDropdown() {
    const switcher = document.querySelector('.language-switcher');
    switcher.classList.toggle('active');
}

// Открытие модального окна
function openModal() {
    document.getElementById('instructionModal').style.display = 'flex';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('instructionModal').style.display = 'none';
}

// По умолчанию русский язык
setLanguage(currentLang);

// Создание звезд
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
}

createStars();

// Регистрация Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registered'))
        .catch((err) => console.error('Service Worker registration failed:', err));
}