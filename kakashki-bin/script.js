// script.js
// Це основний клієнтський JavaScript для FrogyBobershLappyCode2014.github.io
// Частина великої віртуальної епопеї! Ква-ква!

document.addEventListener('DOMContentLoaded', () => {
    console.log("Ква-ква! Гризь-гризь! 🐸🦫 Шляпний архітектор цифрового безладу завантажив DOM!");

    // ========================================================================
    // 1. Анімації та Ефекти для Заголовків
    // ========================================================================

    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        // Додаємо анімацію "тремтіння екрану" для всіх заголовків секцій
        // Це робиться за допомогою CSS, але JS може додавати/видаляти класи
        title.classList.add('animated-shaking-title');
    });

    // Можна додати динамічне блимання для певних елементів
    const blinkElements = document.querySelectorAll('.blink-on-load');
    blinkElements.forEach(el => {
        setInterval(() => {
            el.style.opacity = (el.style.opacity === '1' || el.style.opacity === '') ? '0.3' : '1';
        }, 500); // Кожні 0.5 секунди
    });

    // ========================================================================
    // 2. Логіка для кнопки "Розкрити Бажання"
    // ========================================================================

    const ctaButton = document.querySelector('.cta-button');
    const fullWishList = document.getElementById('fullWishListReact'); // Припустимо, ви залишили цей ID

    if (ctaButton && fullWishList) {
        ctaButton.addEventListener('click', () => {
            console.log("Кнопка 'Розкрити Бажання' натиснута! Хаос активація!");
            // Перемикаємо видимість списку бажань
            if (fullWishList.style.display === 'none' || fullWishList.style.display === '') {
                fullWishList.style.display = 'block';
                ctaButton.textContent = "СХОВАТИ МОЇ АБСУРДНІ Боброві Бажання! !!!НЕБЕЗПЕКА!!!";
                ctaButton.style.backgroundColor = '#8B0000'; // Червона кнопка при схованні
                ctaButton.style.boxShadow = '0 0 15px #FF4136'; // Червона тінь
            } else {
                fullWishList.style.display = 'none';
                ctaButton.textContent = "НАТИСНИ МЕНЕ! Розкрити всі мої АБСУРДНІ Боброві Бажання! !!!НЕБЕЗПЕКА!!!";
                ctaButton.style.backgroundColor = 'var(--button-bg)'; // Повернути до фіолетового
                ctaButton.style.boxShadow = 'none'; // Прибрати тінь
            }
        });
    }

    // ========================================================================
    // 3. Динамічний текст або "пасхалка"
    // ========================================================================

    const footerText = document.querySelector('footer p');
    if (footerText) {
        const nicknames = ['qp78zx23vy10wk54', 'Шляпний Архітектор Цифрового Безладу', 'Майстер Гіперпосилань', 'Майстер Віртуальної Реальності'];
        let currentNickIndex = 0;

        // Змінюємо нікнейм кожні 5 секунд
        setInterval(() => {
            currentNickIndex = (currentNickIndex + 1) % nicknames.length;
            footerText.innerHTML = `Пам'ятайте, ваш улюблений нікнейм сьогодні: <span style="color: var(--main-purple); font-weight: bold;">${nicknames[currentNickIndex]}</span>. І пам'ятайте про InterUDTCP! Це НАЙВАЖЛИВІШЕ!`;
        }, 5000);
    }

    // ========================================================================
    // 4. Функція перевірки браузера (ваш оригінальний скрипт, адаптований)
    //    Можна перенести сюди, якщо він був у окремому <script> блоці
    // ========================================================================

    function isBrowserTooOld() {
        try {
            eval('const test = () => {};'); // ES6 Arrow Functions
            if (!window.Promise || !window.fetch || typeof Symbol === 'undefined' || typeof Map === 'undefined') {
                return true;
            }
        } catch (e) {
            return true;
        }
        const userAgent = navigator.userAgent;
        if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
            return true;
        }
        if (userAgent.includes("Opera/") && !userAgent.includes("OPR/")) {
             const operaVersion = parseFloat(userAgent.match(/Opera\/(\d+\.\d+)/)?.[1]);
             if (operaVersion && operaVersion < 15) return true;
        }
        return false;
    }

    if (isBrowserTooOld()) {
        console.warn("Боброва тривога! Використовується застарілий браузер! Перенаправлення на сторінку попередження.");
        // window.location.replace('/old-browser.html'); // Розкоментуйте, якщо сторінка існує
        alert("УВАГА, Шляпний Архітектор! Ваш браузер застарів для цієї віртуальної епопеї! Рекомендуємо оновити!");
    }

    // ========================================================================
    // 5. Завантаження динамічного контенту з JSON (якщо ви використовуєте адмінку)
    // ========================================================================

    // Цей блок показує, як JS на клієнті може читати дані,
    // які Decap CMS (або інший спосіб) записує у JSON-файли в вашому репозиторії.
    async function loadDynamicContent() {
        try {
            // Припустимо, що у вас є файл settings.json, який оновлює Decap CMS
            const response = await fetch('src/data/settings.json'); // Шлях може відрізнятися
            if (!response.ok) {
                throw new Error(`Помилка HTTP: ${response.status} - Не вдалося завантажити боброві налаштування!`);
            }
            const settings = await response.json();
            console.log("Боброві налаштування завантажено:", settings);

            // Оновлюємо елементи на сторінці з цих налаштувань
            const dynamicTitle = document.getElementById('main-page-title'); // Припустимо, у вас є такий ID
            const dynamicIntro = document.getElementById('intro-paragraph'); // І такий ID

            if (dynamicTitle && settings.site_title) {
                dynamicTitle.textContent = settings.site_title;
            }
            if (dynamicIntro && settings.intro_text) {
                dynamicIntro.textContent = settings.intro_text;
            }

            // Можна змінити колір теми, якщо це визначено в CSS змінних
            if (settings.theme_color) {
                document.documentElement.style.setProperty('--main-purple', settings.theme_color);
                document.documentElement.style.setProperty('--main-accent-light', settings.theme_color + 'AA'); // Прозорість
            }

        } catch (error) {
            console.error("Помилка завантаження динамічного бобрового контенту:", error);
            // Можливо, показати повідомлення користувачеві
        }
    }

    // Запускаємо завантаження динамічного контенту при завантаженні сторінки
    loadDynamicContent();


    console.log("Шляпний майстер віртуальної реальності завершив завантаження script.js!");
});
