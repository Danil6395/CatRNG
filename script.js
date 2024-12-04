const meteorContainer = document.getElementById("meteor-rain");

// Функция для создания монеты
function createMeteor() {
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");

    // Устанавливаем начальную позицию монеты (верхний правый угол экрана)
    meteor.style.top = `${Math.random() * window.innerHeight * 3}px`; // Случайная высота на 20% экрана сверху
    meteor.style.left = `${window.innerWidth + 100}px`; // За пределами экрана справа

    // Устанавливаем случайный размер монеты
    const size = Math.random() * 50 + 70; // Размер от 30px до 50px
    meteor.style.width = `${size}px`;
    meteor.style.height = `${size}px`;

    // Устанавливаем случайную продолжительность падения
    const duration = Math.random() * 2 + 2; // От 2 до 4 секунд
    meteor.style.animationDuration = `${duration}s`;

    // Добавляем монету в контейнер
    meteorContainer.appendChild(meteor);

    // Удаляем монету после завершения анимации
    meteor.addEventListener("animationend", () => {
        meteor.remove();
    });
}

// Запускаем генерацию монет каждые 200 миллисекунд
setInterval(createMeteor, 500);



const cubeRainContainer = document.getElementById("cube-rain");

const cubeImages = [
    "assets/cuberain.png",
    "assets/cloverrain.png",
];

function createFallingCube() {
    const cube = document.createElement("div");
    cube.classList.add("cube");

    // Устанавливаем случайное изображение кубика
    const randomImage = cubeImages[Math.floor(Math.random() * cubeImages.length)];
    cube.style.backgroundImage = `url(${randomImage})`;

    // Устанавливаем случайное начальное положение
    const randomLeft = Math.random() * 100; // Процент от ширины экрана
    cube.style.left = `${randomLeft}vw`;

    // Продолжительность падения
    const randomDuration = Math.random() * 3 + 2; // От 2 до 5 секунд
    cube.style.animationDuration = `${randomDuration}s`;

    // Добавляем и удаляем кубик
    cubeRainContainer.appendChild(cube);
    cube.addEventListener("animationend", () => cube.remove());
}

// Генерация кубиков
setInterval(createFallingCube, 750);


// Установите конечное время (например, через 1 час от текущего момента)
const targetDate = new Date("2025-03-01T10:00:00");

const timerElement = document.getElementById("timer");

function updateTimer() {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        timerElement.textContent = "RELEASE!"; // Если таймер истек
        clearInterval(timerInterval); // Остановить таймер
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Обновление текста таймера
    timerElement.textContent = `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Обновление таймера каждую секунду
const timerInterval = setInterval(updateTimer, 1000);

// Запуск таймера сразу при загрузке страницы
updateTimer();
