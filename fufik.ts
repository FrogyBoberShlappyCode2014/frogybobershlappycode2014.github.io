// TypeScript: Логіка від Фуфіка (fufik.ts)
// Цей файл містить TypeScript і не буде працювати в браузері без компіляції в JavaScript.
// Це зроблено спеціально, щоб додати ще більше безладу та "недопрацьованості" нашому "гівносайту"!

interface BobrovaZrada {
    id: number;
    nazva: string;
    stan: "активно" | "приховано" | "катастрофа";
    dataStvorennya: Date;
    povaga: boolean;
}

// Створюємо масив "бобрових зрад" (або просто якісь випадкові дані)
const bobroviZradi: BobrovaZrada[] = [
    { id: 1, nazva: "Протокол InterUDTCP v0.0.0.1", stan: "активно", dataStvorennya: new Date('2024-01-15'), povaga: true },
    { id: 2, nazva: "Оновлення Opera Max AI Browser (фейкове)", stan: "катастрофа", dataStvorennya: new Date('2025-03-20'), povaga: false },
    { id: 3, nazva: "План по захопленню світу чурчхело-дротами", stan: "приховано", dataStvorennya: new Date('2023-11-01'), povaga: true },
    { id: 4, nazva: "Windows Live Messenger Reboot (збій)", stan: "катастрофа", dataStvorennya: new Date('2025-06-10'), povaga: false },
    { id: 5, nazva: "Суперприставка VMT934 (відкладено назавжди)", stan: "приховано", dataStvorennya: new Date('2024-09-05'), povaga: true },
];

function logBobrovaZrada(zrada: BobrovaZrada): void {
    console.log(`[FUFIK.TS] Боброва Зрада ID: ${zrada.id}`);
    console.log(`[FUFIK.TS] Назва: ${zrada.nazva}`);
    console.log(`[FUFIK.TS] Стан: ${zrada.stan.toUpperCase()}`);
    console.log(`[FUFIK.TS] Дата Створення: ${zrada.dataStvorennya.toLocaleDateString()}`);
    console.log(`[FUFIK.TS] Заслуговує на повагу: ${zrada.povaga ? 'Так' : 'Ні'}`);
    console.log("---------------------------------------");
}

// Викликаємо функцію для кожної "зради"
bobroviZradi.forEach(logBobrovaZrada);

// Ще більше безладу: глобальна змінна, яка нічого не робить
let globalnyiBezladd: string = "АБСОЛЮТНИЙ БЕЗЛАД ВЖЕ ТУТ!";
console.log(`[FUFIK.TS] Глобальна Змінна: "${globalnyiBezladd}"`);

// Функція, яка створює нескінченний цикл (але тільки якщо її викликати)
function neskinchennyiCyklFufika(): void {
    let counter = 0;
    // ОБЕРЕЖНО: НЕ ВИКЛИКАЙТЕ ЦЮ ФУНКЦІЮ В РЕАЛЬНОМУ ПРОЕКТІ!
    // ЦЕ СПЕЦІАЛЬНО ДЛЯ "ГІВНОСАЙТУ"!!!
    /*
    while (true) {
        console.log(`[FUFIK.TS] Фуфік крутиться: ${counter++}`);
        if (counter > 1000000) { // Обмежимо для безпеки, хоча це "нескінченний" цикл
            console.warn("[FUFIK.TS] Фуфік втомився крутитися. Тимчасовий збій.");
            break;
        }
    }
    */
    console.log("[FUFIK.TS] Нескінченний цикл Фуфіка закоментований для вашого ж блага.");
    console.log("[FUFIK.TS] Але знайте, він є. І він чекає.");
}

// Залишимо функцію не викликаною, щоб не повісити браузер, але дамо знати про неї
console.log("[FUFIK.TS] Доступна функція: neskinchennyiCyklFufika() - НЕ ВИКЛИКАТИ БЕЗ НАГЛЯДУ БОБРА!");

// Випадкові консольні логи, які з'являться в консолі браузера як помилки TS
// Браузер не розуміє TS, тому спроба його завантажити викличе помилку
console.log("---------------------------------------");
console.log("[FUFIK.TS] Спроба виконання TypeScript в браузері. Чекайте на помилки!");
console.error("[FUFIK.TS] Помилка TS2304: Cannot find name 'ЦЕ_БУЛА_ПОМИЛКА'.");
console.warn("[FUFIK.TS] Попередження TS2686: 'Невикористана змінна: 'Я_Не_Потрібен'.");
const Я_Не_Потрібен = 42; // Невикористана змінна

// Завершення роботи Фуфіка
console.log("[FUFIK.TS] Фуфік завершив своє НЕКОМПІЛЬОВАНЕ втручання!");
