document.addEventListener("DOMContentLoaded", () => {
  const cities = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Нижний Новгород",
    "Челябинск",
    "Самара",
    "Омск",
    "Ростов-на-Дону",
    "Уфа",
    "Красноярск",
    "Воронеж",
    "Пермь",
    "Волгоград",
    "Краснодар",
    "Саратов",
    "Тюмень",
    "Тольятти",
    "Ижевск",
    "Барнаул",
    "Ульяновск",
    "Иркутск",
    "Хабаровск",
    "Ярославль",
    "Владивосток",
    "Махачкала",
    "Томск",
    "Оренбург",
    "Кемерово",
    "Новокузнецк",
    "Рязань",
    "Астрахань",
    "Набережные Челны",
    "Пенза",
    "Липецк",
    "Киров",
    "Чебоксары",
    "Тула",
    "Калининград",
    "Балашиха",
    "Курск",
    "Севастополь",
    "Сочи",
    "Ставрополь",
    "Улан-Удэ",
    "Тверь",
    "Магнитогорск",
    "Иваново",
    "Брянск",
    "Белгород",
    "Сургут",
    "Владимир",
    "Нижний Тагил",
    "Архангельск",
    "Чита",
    "Симферополь",
    "Калуга",
    "Смоленск",
    "Волжский",
    "Якутск",
    "Саранск",
    "Череповец",
    "Вологда",
    "Курган",
    "Орёл",
    "Владикавказ",
    "Грозный",
    "Мурманск",
    "Тамбов",
    "Петрозаводск",
    "Нижневартовск",
    "Кострома",
    "Новороссийск",
    "Йошкар-Ола",
    "Химки",
    "Таганрог",
    "Сыктывкар",
    "Нальчик",
    "Шахты",
    "Дзержинск",
    "Братск",
    "Орск",
    "Ногинск",
    "Ангарск",
    "Старый Оскол",
    "Великий Новгород",
    "Благовещенск",
    "Прокопьевск",
    "Бийск",
    "Энгельс",
    "Рыбинск",
    "Балаково",
    "Северодвинск",
    "Армавир",
    "Подольск",
    "Королёв",
    "Южно-Сахалинск",
    "Петропавловск-Камчатский",
    "Сызрань",
    "Норильск",
    "Златоуст",
    "Мытищи",
    "Каменск-Уральский",
    "Люберцы",
    "Волгодонск",
    "Новочеркасск",
    "Абакан",
    "Находка",
    "Уссурийск",
    "Березники",
    "Салават",
    "Электросталь",
    "Миасс",
    "Рубцовск",
    "Альметьевск",
    "Коломна",
    "Майкоп",
    "Пятигорск",
    "Одинцово",
    "Копейск",
    "Хасавюрт",
    "Новомосковск",
    "Кисловодск",
    "Серпухов",
    "Первоуральск",
    "Нефтеюганск",
    "Новочебоксарск",
    "Нефтекамск",
    "Димитровград",
    "Щёлково",
    "Новый Уренгой",
    "Орехово-Зуево",
    "Дербент",
    "Камышин",
    "Невинномысск",
    "Красногорск",
    "Муром",
    "Батайск",
    "Новошахтинск",
    "Сергиев Посад",
    "Новокуйбышевск",
    "Черкесск",
    "Кызыл",
    "Раменское",
    "Домодедово",
    "Железнодорожный",
    "Жуковский",
    "Северск",
    "Назарово",
    "Пушкино",
    "Арзамас",
    "Бугульма",
    "Междуреченск",
    "Ленинск-Кузнецкий",
    "Саров",
    "Обнинск",
    "Великие Луки",
    "Соликамск",
    "Киселёвск",
    "Губкинский",
    "Воткинск",
    "Гатчина",
    "Елабуга",
    "Ачинск",
    "Назрань",
    "Ухта",
    "Ступино",
    "Бердск",
    "Мичуринск",
    "Кунгур",
    "Лесосибирск",
    "Зеленодольск",
    "Новотроицк",
    "Балашов",
    "Ессентуки",
    "Сосновый Бор",
    "Воскресенск",
    "Долгопрудный",
    "Анапа",
    "Реутов",
    "Коркино",
    "Жигулёвск",
    "Кстово",
    "Чапаевск",
  ];

  //   Все города в нижний регистр
  const normalizedCities = cities.map((city) => city.toLowerCase());

  // символы исключения
  const exceptions = {
    ь: "",
    ъ: "",
    ы: "",
    й: "й",
  };

  // DOM элементы
  const cityInput = document.querySelector(".cityInput");
  const submintBtn = document.querySelector(".submitBtn");
  const gameHistory = document.querySelector(".game-history");
  const currentLetterElement = document.querySelector(".current-letter");

  // Игровые переменные
  let usedCities = [];
  let currentLetter = "";
  let gameStarted = false;

  // Получение последней буквы с исключениями
  function getLastLetter(city) {
    let lastChar = city.slice(-1);

    while (exceptions[lastChar] !== undefined) {
      city = city.slice(0, -1);
      lastChar = city.slice(-1);
    }

    return lastChar;
  }

  // Добавление сообщения в игру
  function addMessage(text, type) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", type);
    messageElement.textContent = text;
    gameHistory.appendChild(messageElement);
    gameHistory.scrollTop = gameHistory.scrollHeight;
  }

  // Ход робота
  function robotTurn() {
    // Проверка на символ и названный город
    let possibleCities = normalizedCities.filter(
      (city) => city.startsWith(currentLetter) && !usedCities.includes(city)
    );

    if (possibleCities.length === 0) {
      addMessage(
        "Робот: Я не знаю больше городов на эту букву. Вы победили!",
        "robot-message"
      );
      currentLetterElement.textContent = "Игра окончена! Вы победили!";
      submintBtn.disabled = true;
      cityInput.disabled = true;
      return;
    }

    // Рандомный город
    const randomIndex = Math.floor(Math.random() * possibleCities.length);
    const robotCity = possibleCities[randomIndex];

    // Добавить город в использованные
    usedCities.push(robotCity);

    // Определение следующей буквы
    currentLetter = getLastLetter(robotCity);

    // Показать ход робота
    addMessage(
      `Робот: ${cities[normalizedCities.indexOf(robotCity)]}`,
      "robot-message"
    );
    currentLetterElement.textContent = `Текущая буква: ${currentLetter.toUpperCase()}`;
  }

  // Обработка отправки города
  function handleCitySubmit() {
    const userCity = cityInput.value.trim().toLowerCase();

    if (!userCity) {
      addMessage("Пожалуйста, введите город", "error-message");
      return;
    }

    if (!normalizedCities.includes(userCity)) {
      addMessage(
        "Такого города нет в списке или он введен неправильно",
        "error-message"
      );

      cityInput.value = "";
      return;
    }

    // Первый запуск
    if (!gameStarted) {
      // Проверка имеющего города в списке
      gameStarted = true;
      usedCities.push(userCity);
      currentLetter = getLastLetter(userCity);

      addMessage(
        `Вы: ${cities[normalizedCities.indexOf(userCity)]}`,
        "user-message"
      );
      currentLetterElement.textContent = `Текущая буква: ${currentLetter.toUpperCase()}`;

      // Очистка поля ввода
      cityInput.value = "";

      // ход робота
      setTimeout(robotTurn, 1000);
      return;
    }

    // Проверка, что город начинается на нужную букву
    if (!userCity.startsWith(currentLetter)) {
      addMessage(
        `Город должен начинаться на букву ${currentLetter.toUpperCase()}`,
        "error-message"
      );
      return;
    }

    if (usedCities.includes(userCity)) {
      addMessage("Такой город уже был назван!", "error-message");
      cityInput.value = "";
      return;
    }

    // Добавить город в использованные
    usedCities.push(userCity);

    // Определение следующей буквы
    currentLetter = getLastLetter(userCity);

    // Ход пользователя
    addMessage(
      `Вы: ${cities[normalizedCities.indexOf(userCity)]}`,
      "user-message"
    );
    currentLetterElement.textContent = `Текущая буква: ${currentLetter.toUpperCase()}`;

    // Чистка поле ввода
    cityInput.value = "";

    //   ход робота
    setTimeout(robotTurn, 1000);
  }

  //  Обработчик событий
  submintBtn.addEventListener("click", handleCitySubmit);
  cityInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleCitySubmit();
    }
  });

  // Начальное сообщение
  addMessage("Начните игру! Введите любой город России", "info-message");
});
