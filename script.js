const cubeRainContainer = document.getElementById("cube-rain");

// Массив ссылок на изображения кубиков
const cubeImages = [
    "assets/cube.png",
];

function createFallingCube() {
    const cube = document.createElement("div");
    cube.classList.add("cube");

    // Устанавливаем случайное изображение кубика
    const randomImage = cubeImages[Math.floor(Math.random() * cubeImages.length)];
    cube.style.backgroundImage = `url(${randomImage})`;

    // Устанавливаем случайное начальное положение
    const randomLeft = Math.random() * 100;
    cube.style.left = `${randomLeft}vw`;

    // Устанавливаем случайную продолжительность анимации
    const randomDuration = Math.random() * 3 + 2; // От 2 до 5 секунд
    cube.style.animationDuration = `${randomDuration}s`;

    // Добавляем кубик в контейнер
    cubeRainContainer.appendChild(cube);

    // Удаляем кубик после завершения анимации
    cube.addEventListener("animationend", () => {
        cube.remove();
    });
}

// Запускаем "дождь" кубиков с интервалом
setInterval(createFallingCube, 1500);


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
