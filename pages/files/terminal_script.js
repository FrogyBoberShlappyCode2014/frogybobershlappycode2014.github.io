document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');
    const typedCommandDisplay = document.getElementById('typed-command-display');
    const customCursor = document.getElementById('custom-cursor');

    let history = [];
    let historyIndex = -1;
    const maxHistory = 50;

    // Вхідне повідомлення
    function welcomeMessage() {
        printOutput("Завантаження БоберОС v1.0.0... Ква-ква! Гризь-гризь!", 'info-message');
        printOutput("Ініціалізація віртуальної греблі...", 'info-message');
        printOutput("Шляпний Архітектор вітає вас у своєму цифровому безладі!", 'success-message');
        printOutput("Введіть 'help' для списку команд, або 'about' для бобрової історії.", 'info-message');
        printOutput("");
    }

    // Функція для виведення тексту в консоль
    function printOutput(message, className = '') {
        const div = document.createElement('div');
        div.textContent = message;
        if (className) {
            div.classList.add(className);
        }
        terminalOutput.prepend(div); // Додаємо на початок, щоб новіші були внизу при прокрутці
        // Зберігаємо лише останні N рядків, щоб не перевантажувати DOM
        while (terminalOutput.children.length > 200) { // Обмежимо до 200 рядків
            terminalOutput.lastChild.remove();
        }
    }

    // Обробка команд
    function processCommand(command) {
        let output = '';
        let className = '';

        const parts = command.toLowerCase().split(' ');
        const mainCommand = parts[0];
        const args = parts.slice(1);

        switch (mainCommand) {
            case 'help':
                output = "Доступні команди БоберОС:\n";
                output += "  help          - Показати цей список (дуже корисно!)\n";
                output += "  about         - Дізнатися більше про Шляпного Архітектора та бобрів\n";
                output += "  clear         - Очистити екран (як бобер чистить свою греблю)\n";
                output += "  echo <текст>  - Повторити ваш текст (бобри люблять ехо)\n";
                output += "  ls / dir      - Показати віртуальний вміст каталогу\n";
                output += "  cd <папка>    - Змінити віртуальний каталог (не працює, але виглядає круто!)\n";
                output += "  ping <host>   - Пропінгувати віртуальний сервер (відповідь завжди 'ОК', бо бобри стабільні)\n";
                output += "  opera         - Показати бажання по Opera (бобри вже гризуть конкурентів!)\n";
                output += "  windows95     - Згадати Windows 95 (ностальгія гарантована)\n";
                output += "  interudtcp    - Щось про InterUDTCP (дуже важливо!)\n";
                output += "  beaverfacts   - Випадковий бобровий факт\n";
                output += "  exit          - Вийти з терміналу (але ви ж не захочете!)";
                className = 'info-message';
                break;
            case 'about':
                output = "Я, qp78zx23vy10wk54, Шляпний Архітектор Цифрового Безладу! Цей термінал – імітація мого геніального мозку. Бобри – мої вірні помічники, що гризуть дроти для віртуальної стабільності та надихають на хаотичні технологічні мрії. Мої бажання запам'ятані НАЗАВЖДИ! Особливо фіолетовий колір.";
                className = 'success-message';
                break;
            case 'clear':
                terminalOutput.innerHTML = '';
                output = "Екран чистий, як після бобрової греблі.";
                className = 'info-message';
                break;
            case 'echo':
                output = args.join(' ');
                className = 'success-message';
                break;
            case 'ls':
            case 'dir':
                output = "Віртуальний каталог C:\\BOBER_OS\\:\n";
                output += "  .           <DIR>   Поточний каталог\n";
                output += "  ..          <DIR>   Батьківський каталог\n";
                output += "  README.TXT  <FILE>  Дуже важливі боброві інструкції\n";
                output += "  DAMS        <DIR>   Секретні схеми гребель\n";
                output += "  VIRUS.EXE   <FILE>  Не запускати! (Можливо, це просто мем)\n";
                output += "  OPERA.TXT   <FILE>  Список бажань Опери\n";
                output += "  BOBER.SYS   <FILE>  Основний файл БоберОС (не чіпати!)\n";
                output += "  FISH.LOG    <FILE>  Журнал риболовлі бобрів\n";
                output += "  WIN95SIM.EXE <FILE>  Запуск симуляції Windows 95 (тільки у вашій уяві!)";
                className = 'info-message';
                break;
            case 'cd':
                if (args.length > 0) {
                    output = `Не можу змінити каталог на '${args[0]}'. БоберОС ігнорує навігацію файлової системи, бо занадто зайнята віртуальними греблями!`;
                    className = 'warning-message';
                } else {
                    output = "Використання: cd <папка>";
                    className = 'warning-message';
                }
                break;
            case 'ping':
                if (args.length > 0) {
                    output = `Пінг ${args[0]}... Відповідь: 'ОК'. Боброві сервери завжди стабільні! (Навіть якщо їх не існує).`;
                    className = 'success-message';
                } else {
                    output = "Використання: ping <хост>";
                    className = 'warning-message';
                }
                break;
            case 'opera':
                output = "Мої бажання від Opera: Opera Max AI Browser, Opera Xtra, Opera Cast, Opera Fast, Opera Aegir, Opera Pay, Opera Connect, Opera Kids, Opera Free Antivirus (у партнерстві з аваст), відродження Opera Crypto, Opera Mail, Opera Unite, Opera Neon, Opera Touch і інші Опер! Бобри вже готуються гризти конкурентів!";
                className = 'info-message';
                break;
            case 'windows95':
                output = "Ах, Windows 95! Ця повна симуляція в браузері – це моя гордість! Відродження Skype, MSN Messenger та бренду Windows Live – уся ця ностальгія закручується тут! Навіть бобри вчать MS-DOS!";
                className = 'info-message';
                break;
            case 'interudtcp':
                output = "InterUDTCP - це моя концепція! Це НАЙВАЖЛИВІШЕ! Просто ПОВІРТЕ МЕНІ! Бобри не брешуть!";
                className = 'success-message';
                break;
            case 'beaverfacts':
                const facts = [
                    "Бобри будують греблі, щоб створити собі ставки для захисту від хижаків. Вони справжні архітектори!",
                    "Зуби бобра ніколи не перестають рости, тому вони повинні постійно гризти дерева. Це як мій потяг до кодування!",
                    "Бобри є другим за величиною гризуном у світі після капібари. А Шляпний Архітектор – другий за величиною хаосник після Всесвіту!",
                    "Бобри дуже охайні тварини і постійно доглядають за своїм хутром.",
                    "Бобер може перебувати під водою до 15 хвилин.",
                    "Греблі бобрів можуть бути настільки великими, що їх видно з космосу. Як і моя віртуальна епопея!",
                    "Бобри використовують свої широкі плоскі хвости для балансування, коли вони несуть важкі гілки, і як попередження про небезпеку, б'ючи ними по воді.",
                    "Середня гребля бобра має довжину близько 50 метрів.",
                    "Бобри активні вночі (нічні тварини), що дуже зручно для кодування без свідків.",
                    "Сім'я бобрів називається колонією."
                ];
                output = getRandom(facts);
                className = 'info-message';
                break;
            case 'exit':
                output = "Завершення сесії БоберОС... Натисніть F5, щоб почати знову! Або поверніться на головну сторінку, щоб продовжити віртуальну епопею! (Але ви ж не захочете вийти!)";
                className = 'warning-message';
                setTimeout(() => {
                    window.location.href = 'index.html'; // Перенаправлення на головну сторінку
                }, 3000); // Через 3 секунди
                break;
            case '':
                output = ''; // Ігноруємо порожні команди
                break;
            default:
                output = `Помилка: Команда '${command}' не знайдена. Спробуйте 'help'. Можливо, бобри з'їли цю команду!`;
                className = 'error-message';
                break;
        }

        if (output) {
            printOutput(output, className);
            printOutput(""); // Додаємо порожній рядок для кращої читабельності
        }
    }

    // Обробка введення
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim();
            if (command === '') {
                printOutput(""); // Просто новий рядок, якщо нічого не введено
                typedCommandDisplay.textContent = '';
                terminalInput.value = '';
                // Прокручуємо донизу (або до верху, залежно від prepend/append)
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
                return;
            }

            // Додаємо команду в історію
            history.unshift(command); // Додаємо на початок
            if (history.length > maxHistory) {
                history.pop(); // Видаляємо найстарішу
            }
            historyIndex = -1; // Скидаємо індекс історії

            printOutput(`C:\\BOBER_OS>${command}`);
            processCommand(command);

            typedCommandDisplay.textContent = '';
            terminalInput.value = '';
            // Прокручуємо донизу (або до верху, залежно від prepend/append)
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        } else if (e.key === 'ArrowUp') {
            e.preventDefault(); // Запобігаємо переміщенню курсора в полі введення
            if (history.length > 0 && historyIndex < history.length - 1) {
                historyIndex++;
                terminalInput.value = history[historyIndex];
                typedCommandDisplay.textContent = history[historyIndex];
                // Переміщуємо курсор в кінець
                setTimeout(() => terminalInput.setSelectionRange(terminalInput.value.length, terminalInput.value.length), 0);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault(); // Запобігаємо переміщенню курсора в полі введення
            if (historyIndex > 0) {
                historyIndex--;
                terminalInput.value = history[historyIndex];
                typedCommandDisplay.textContent = history[historyIndex];
                // Переміщуємо курсор в кінець
                setTimeout(() => terminalInput.setSelectionRange(terminalInput.value.length, terminalInput.value.length), 0);
            } else if (historyIndex === 0) {
                historyIndex = -1; // Очистити введення, якщо далі в історії нічого немає
                terminalInput.value = '';
                typedCommandDisplay.textContent = '';
            }
        }
        // Відображаємо набраний текст у span, щоб курсор блимав поруч
        else {
            setTimeout(() => {
                typedCommandDisplay.textContent = terminalInput.value;
                // Автоматичний скролл до кінця поля введення
                terminalInput.scrollLeft = terminalInput.scrollWidth;
            }, 0);
        }
    });

    // Фокусування на полі введення при кліку будь-де
    document.addEventListener('click', () => {
        terminalInput.focus();
    });

    // Оновлення відображення набраної команди під час введення
    terminalInput.addEventListener('input', () => {
        typedCommandDisplay.textContent = terminalInput.value;
        // Забезпечуємо, щоб інпут був завжди в полі зору, якщо текст дуже довгий
        terminalInput.scrollLeft = terminalInput.terminalInput.scrollWidth;
    });

    // Кастомний курсор миші
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });

    // При першому завантаженні сторінки
    welcomeMessage();
    terminalInput.focus(); // Фокусуємося на полі введення одразу
});

// Допоміжна функція для випадкового вибору
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
