// JavaScript: Логіка від Майстра Гіперпосилань та Цифрових Глюків (script.js)
document.addEventListener('DOMContentLoaded', () => {
    const engineerBeaverMessage = document.getElementById('engineerBeaverMessage');
    const beaverText = document.getElementById('beaverText');
    const showWishesButton = document.getElementById('showWishesButton');
    const fullWishList = document.getElementById('fullWishList');
    const progressBar = document.getElementById('progressBar');
    const body = document.body;
    const audio = document.getElementById('backgroundAudio');

    // Автоматичне відтворення звуку (може бути заблоковано браузерами)
    // Додамо хаотичну спробу відтворення при взаємодії
    let hasInteracted = false;
    document.addEventListener('click', () => {
        if (!hasInteracted) {
            audio.play().catch(e => console.error("Помилка відтворення звуку:", e));
            hasInteracted = true;
        }
    }, { once: true }); // Лише один раз при першому кліку
    // Додатково спробуємо відтворити при завантаженні (часто блокується)
    audio.play().catch(e => console.log("Автоматичне відтворення звуку заблоковано, спробуйте клікнути."));


    // Функція для оновлення прогрес-бару
    function updateProgressBar() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        let progress = (scrollHeight === 0) ? 0 : (scrolled / scrollHeight) * 100;
        
        // Додамо випадкові стрибки прогресу
        progress += (Math.random() * 5) - 2.5; // +- 2.5% випадково
        if (progress < 0) progress = 0;
        if (progress > 100) progress = 100;

        progressBar.style.width = progress + '%';
        
        // Ще більше абсурду: випадкова зміна кольору фону
        const colors = ['var(--bg-light)', 'var(--main-purple)', 'var(--main-green)', 'var(--main-orange)', 'var(--clashing-red)', 'var(--toxic-yellow)'];
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        body.style.background = `repeating-linear-gradient(
            ${Math.random() * 360}deg,
            ${colors[Math.floor(Math.random() * colors.length)]},
            ${colors[Math.floor(Math.random() * colors.length)]} ${Math.random() * 20}px,
            ${colors[Math.floor(Math.random() * colors.length)]} ${Math.random() * 20 + 10}px,
            ${colors[Math.floor(Math.random() * colors.length)]} ${Math.random() * 20 + 30}px
        )`; /* Хаотичний паттерн */

        // Додамо випадкове розмиття
        body.style.filter = `blur(${Math.random() * 0.5}px) contrast(${100 + Math.random() * 100}%)`;
    }

    window.addEventListener('scroll', updateProgressBar);
    setInterval(updateProgressBar, 1000); // Оновлюємо кожну секунду, навіть без прокрутки
    updateProgressBar(); // Викликаємо один раз для початкового стану

    // Повідомлення від бобра-інженера
    const beaverMessages = [
        "Бобер-інженер: 'ПОВНИЙ ХАОС! Я В ЗАХВАТІ!'",
        "Бобер-інженер: 'Патчую дірки в реальності, які сам і створив!'",
        "Бобер-інженер: 'Оптимізую потоки гіперпосилань до абсолютного безглуздя!'",
        "Бобер-інженер: 'Ква-ква! Гризь-гризь! Майбутнє НЕ НАСТУПИЛО, воно ВИБУХНУЛО!'",
        "Бобер-інженер: 'Симуляція Windows 95 вимагає більше БОБРОВИХ ШЛЮЗІВ!'"
    ];

    let messageIndex = 0;
    setInterval(() => {
        beaverText.textContent = beaverMessages[messageIndex];
        messageIndex = (messageIndex + 1) % beaverMessages.length;
    }, 3000); // Кожні 3 секунди змінюємо повідомлення

    // Кнопка, що показує/ховає повний список бажань - додамо "гівносайтну" логіку
    showWishesButton.addEventListener('click', () => {
        if (fullWishList.style.display === 'block') {
            fullWishList.style.display = 'none';
            showWishesButton.textContent = 'НАТИСНИ МЕНЕ! Розкрити всі мої АБСУРДНІ Боброві Бажання! !!!НЕБЕЗПЕКА!!!';
            showWishesButton.style.backgroundColor = 'var(--main-green)';
        } else {
            fullWishList.style.display = 'block';
            showWishesButton.textContent = 'О НІ! ЯКИЙ ЖАХ! (Приховати цей список, бо він ЗАПАМ\'ЯТОВАНИЙ!)';
            showWishesButton.style.backgroundColor = 'var(--clashing-red)';
            fullWishList.scrollIntoView({ behavior: 'auto', block: 'center' }); // Без плавного прокручування
            // Випадкове перенаправлення (для "гівносайту")
            if (Math.random() < 0.1) { // 10% шанс на перенаправлення
                alert("О НІ! ВАС ПЕРЕНАПРАВЛЯЄ НА САЙТ З БЕЗЛАДОМ! (це лише імітація)");
                // window.location.href = "https://example.com/some-random-bad-site"; // Закоментовано для безпеки
            }
        }
    });

    // Додатковий глюк: випадкове трясіння екрану при кліку на будь-яке посилання
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('click', (e) => {
            if (Math.random() < 0.5) { // 50% шанс на тряску
                body.style.animation = 'screenShake 0.05s 5 ease-in-out'; // Дуже швидка і багаторазова тряска
                setTimeout(() => {
                    body.style.animation = '';
                }, 250);
            }
            // Випадкове зміна курсору
            const cursors = ['crosshair', 'wait', 'grab', 'progress', 'help', 'not-allowed'];
            document.body.style.cursor = cursors[Math.floor(Math.random() * cursors.length)];
            setTimeout(() => {
                document.body.style.cursor = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="%23FF0000"><path d="M12 0L0 12l12 12 12-12L12 0z"/></svg>\') 10 10, auto';
            }, 500);
        });
    });

    // Анімації, які раніше були в <style> в HTML, тепер додаються динамічно через JS
    // Щоб зберегти функціонал, оскільки вони не в styles.css
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes screenShake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            25% { transform: translate(-1px, -2px) rotate(-1deg); }
            50% { transform: translate(1px, -1px) rotate(1deg); }
            75% { transform: translate(-1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, 1px) rotate(-1deg); }
        }
        @keyframes textShake {
            0% { transform: translateX(0); }
            25% { transform: translateX(1px); }
            50% { transform: translateX(-1px); }
            75% { transform: translateX(1px); }
            100% { transform: translateX(0); }
        }
        @keyframes glitchRotate {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(5deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(-5deg); }
            100% { transform: rotate(0deg); }
        }
    `;
    document.head.appendChild(style);


    // Генеруємо випадкові слова
    const words = ["хаос", "безлад", "глюк", "помилка", "вірус", "ква-ква", "гризь-гризь", "абсурд", "нісенітниця"];
    document.querySelectorAll('.random-word').forEach(span => {
        setInterval(() => {
            span.textContent = words[Math.floor(Math.random() * words.length)];
        }, 1000 + Math.random() * 2000); // Кожні 1-3 секунди
    });

    // "Імітація" повільного завантаження
    const simulateSlowLoad = () => {
        const elementsToHide = document.querySelectorAll('.container, .footer, .engineer-beaver');
        elementsToHide.forEach(el => el.style.display = 'none');
        
        let loadProgress = 0;
        const interval = setInterval(() => {
            loadProgress += Math.random() * 10; // Нелінійне зростання
            if (loadProgress > 100) loadProgress = 100;
            progressBar.style.width = loadProgress + '%';

            if (loadProgress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    elementsToHide.forEach(el => el.style.display = ''); // Показуємо все
                    // "Випадкові помилки" в консолі
                    console.error("Помилка 404: Ваша логіка не знайдена. Шукайте далі.");
                    console.warn("Попередження: Надмірна кількість абсурду виявлена. Продовжуйте.");
                    console.log("Успіх! Сайт повністю завантажено (якось).");
                    alert("ЗАВАНТАЖЕННЯ ЗАВЕРШЕНО! АБО НІ. НАТИСНІТЬ ОК, ЩОБ ПРОДОВЖИТИ СТРАЖДАТИ.");
                }, 500); // Затримка перед показом
            }
        }, 100); // Кожні 100 мс оновлення
    };
    simulateSlowLoad(); // Запускаємо симуляцію повільного завантаження
});
