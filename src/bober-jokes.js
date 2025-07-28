// Це основний клієнтський JavaScript для FrogyBobershLappyCode2014.github.io
// Тепер він інтегрує РЖАЧ з папки src! НА-ЗА-ВЖДИ!

// ІМПОРТУЄМО РЖАЧ! (ЦЕ ПРАЦЮЄ, ЯКЩО ВИ ВИКОРИСТОВУЄТЕ СИСТЕМУ ЗБІРКИ, ЯК WEBPACK/ROLLUP.
// ДЛЯ ЧИСТОГО HTML+JS БЕЗ ЗБІРКИ, ТРЕБА БУДЕ ЗАВАНТАЖУВАТИ ЯК ЗВИЧАЙНІ ФАЙЛИ.)
// import boberJokes from '../src/bober-jokes.js'; // Це НЕ ПРАЦЮВАТИМЕ без збірки!

document.addEventListener('DOMContentLoaded', async () => { // Додали async
    console.log("Ква-ква! Гризь-гризь! 🐸🦫 Шляпний архітектор цифрового безладу завантажив DOM!");

    // ========================================================================
    // Завантаження РЖАЧУ з src (якщо немає системи збірки)
    // ========================================================================
    let boberJokes = [];
    try {
        const jokesResponse = await fetch('src/bober-jokes.js'); // Завантажуємо як текст
        const jokesText = await jokesResponse.text();
        // Дуже простий парсер, щоб дістати масив з тексту (не надійний для реального коду!)
        const match = jokesText.match(/const boberJokes = \[([\s\S]*?)\];/);
        if (match && match[1]) {
            // Ця частина дуже спрощена і може зламатися, якщо формат файлу src/bober-jokes.js зміниться.
            // Для реального використання краще зберігати жарти в src/bober-jokes.json
            const jokesArrayString = `[${match[1]}]`;
            boberJokes = JSON.parse(jokesArrayString.replace(/'/g, '"')); // Замінюємо одинарні лапки на подвійні для JSON
        }
        console.log("Боброві жарти завантажено (з РЖАЧ-папки src):", boberJokes);
    } catch (error) {
        console.error("Не вдалося завантажити боброві жарти для РЖАЧУ:", error);
    }

    // ========================================================================
    // Нова функція для виводу випадкового жарту!
    // ========================================================================
    const boberOutputDiv = document.getElementById('bober-output');
    const gryzGryzButton = document.querySelector('.button-gryz-gryz');

    if (gryzGryzButton && boberOutputDiv) {
        gryzGryzButton.addEventListener('click', () => {
            if (boberJokes.length > 0) {
                const randomJoke = boberJokes[Math.floor(Math.random() * boberJokes.length)];
                boberOutputDiv.innerHTML = `<p class="random-joke">${randomJoke}</p>`;
                boberOutputDiv.classList.add('make-it-wiggle'); // Додаємо "ржачний" CSS клас
                setTimeout(() => { boberOutputDiv.classList.remove('make-it-wiggle'); }, 1000);
                console.log("Новий жарт виведено! РЖАЧ-РЖАЧ!");
            } else {
                boberOutputDiv.innerHTML = `<p class="random-joke">Бобри пішли по сірники! РЖАЧУ НЕМА!</p>`;
            }
        });
    }

    // ========================================================================
    // Інші ваші функції з попереднього script.js...
    // ========================================================================

    // Анімації та Ефекти
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('animated-shaking-title');
    });

    const blinkElements = document.querySelectorAll('.blink-on-load');
    blinkElements.forEach(el => {
        setInterval(() => {
            el.style.opacity = (el.style.opacity === '1' || el.style.opacity === '') ? '0.3' : '1';
        }, 500);
    });

    // Логіка для кнопки "Розкрити Бажання" (якщо є)
    const ctaButton = document.querySelector('.cta-button');
    const fullWishList = document.getElementById('fullWishListReact');
    if (ctaButton && fullWishList) {
        ctaButton.addEventListener('click', () => {
            if (fullWishList.style.display === 'none' || fullWishList.style.display === '') {
                fullWishList.style.display = 'block';
                ctaButton.textContent = "СХОВАТИ МОЇ АБСУРДНІ Боброві Бажання! !!!НЕБЕЗПЕКА!!!";
                ctaButton.style.backgroundColor = '#8B0000';
                ctaButton.style.boxShadow = '0 0 15px #FF4136';
            } else {
                fullWishList.style.display = 'none';
                ctaButton.textContent = "НАТИСНИ МЕНЕ! Розкрити всі мої АБСУРДНІ Боброві Бажання! !!!НЕБЕЗПЕКА!!!";
                ctaButton.style.backgroundColor = 'var(--button-bg)';
                ctaButton.style.boxShadow = 'none';
            }
        });
    }

    // Динамічний текст або "пасхалка"
    const footerText = document.querySelector('footer p');
    if (footerText) {
        const nicknames = ['qp78zx23vy10wk54', 'Шляпний Архітектор Цифрового Безладу', 'Майстер Гіперпосилань', 'Майстер Віртуальної Реальності'];
        let currentNickIndex = 0;
        setInterval(() => {
            currentNickIndex = (currentNickIndex + 1) % nicknames.length;
            footerText.innerHTML = `Пам'ятайте, ваш улюблений нікнейм сьогодні: <span style="color: var(--main-purple); font-weight: bold;">${nicknames[currentNickIndex]}</span>. І пам'ятайте про InterUDTCP! Це НАЙВАЖЛИВІШЕ!`;
        }, 5000);
    }

    // Функція перевірки браузера (ваш оригінальний скрипт, адаптований)
    function isBrowserTooOld() { /* ... ваш код перевірки ... */ return false;} // Скорочено для прикладу
    if (isBrowserTooOld()) {
        console.warn("Боброва тривога! Використовується застарілий браузер! РЖАЧ може не працювати!");
    }

    // Завантаження динамічного контенту з JSON (якщо використовуєте адмінку)
    async function loadDynamicContent() { /* ... ваш код завантаження контенту ... */ } // Скорочено для прикладу
    loadDynamicContent();


    console.log("Шляпний майстер віртуальної реальності завершив завантаження script.js з РЖАЧЕМ!");
});

// Додайте ці стилі до вашого styles.css, щоб вони були активні
/*
.random-joke {
    font-size: 1.5em;
    color: #FFDC00;
    margin-top: 20px;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
}
*/
