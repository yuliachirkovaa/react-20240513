Дз1
+Создать репозиторий(Публичный) на github
+Создать ветку с названием - lecture-1/hw
+Создать проект(используем vite - https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
+Очистить проект
+Скопировать себе в проект мокковые данные(materials/mock.js в этом проекте)
+Отобразить все рестораны из моковых данных. Отображаем рестораны друг за другом.
  Название ресторана
  Заголовок - Меню (h3)
  Список названий блюд (используем тег ul и li)
  Заголовок - Отзывы (h3)
  Список текстов отзывов (используем тег ul и li)
+Создать компонент Header и Footer. Разместить их до и после ресторанов соответственно;
+Сделать коммит
+Запушить
+Открыть ПР из ветки с дз в ветку main
+Отправить ссылку на ПР в ветку дз 1 в Discord

Дз2
+Добавить счетчик в блюдо. Кнопки +,- и числом количество. Дефолтное значение 0. Максимальное 5, минимальное 0.
+Добавить проверки(условный рендеринг) на некорректные пропсы(на свое усмотрение)
+Доп задание. Реализовать табы - кнопки с названием ресторана, по одной на каждый ресторан. Кнопки отображаем между хедером и рестораном. Единовременно отображаем только 1 ресторан. Дефолтно отображаем первый. По клику на кнопку отображаем соответствующий ей ресторан. При повторном клике на активную кнопку ничего не происходит.

Дз3
+Пересмотреть лекцию
+Сделать хук useCount(самостоятельно)

Дз4
+Сделать форму отзыва:
  Состоит из 3 контролов: имя, текст, рейтинг и кнопки сохранить
  Рейтинг отдельный компонент рисующий 5 кнопок с цифрами от 1 до 5. (Вспомните разбор компонента Counter)
  По клику на кнопку "сохранить" форма сбрасывается
+Доп задание. Размножить активный ресторан, чтобы на странице появился длинный скролл и сделать "скролл прогресс".

Дз5
+Добавляем контекст темы. Кнопка переключения темы в шапке. По клику на кнопку все кнопки меняют тему(стили с дефолтных на альтернативные).
+Добавляем контекст пользователя. В шапке делаем кнопку войти, по клику на кнопку добавляем в контекст мок-пользователя(просто имя любое). Если пользователь авторизован(есть в контексте имя), то кнопку войти меняем на имя пользователя и кнопку выйти, по клику на выйти убираем пользователя из контекста и снова рисуем кнопку войти. Кнопки +/- у блюда рисуются только для авторизованного пользователя.
+Доп. По клику на кнопку войти в контекст добавляем не мок пользователя, а открываем модалку с инпутом для имени и двумя кнопками - Войти(по клику закрываем модалку и добавляем пользователя в контекст) и Отмена(закрывает модалку). Если модалка открыта, то остальной фон затемнен и по клику на затемнение модалка закрывается.
+Доп Посмотреть про внутрянку редакса - https://disk.yandex.ru/i/piA2-m-hs4-gIA
Доп Классический редакс - https://disk.yandex.ru/i/XvI6W2EQFvo_mg

Дз6
+Установить библиотеки reduxToolkit и React-Redux
+Сконфигурировать стор
+Скопировать нормализованные мокковые данные (materials/normalized-mock.js в этом проекте)
+Создать 4 слайса: рестораны, блюда, отзывы, юзеры
+Отобразить данные из стора в приложении(заменить старые данные на данные из стора) (незабываем перевести и табы на стор)

Дз7
+Скопировать директорию simple_api в корень проекта (materials/simple_api в этом проекте)
+Установить зависимости сервера(любым менеджером зависимостей внутри папки сервера)
+Скопировать в основной package.json команду start-server
+Запустить сервер
+Перейти с использования мокков на данные с сервера (загружать данные с сервера как делали на лекции)

Дз8
+Переделать получение данных на RTK Query
+Доп задание.Добавить создание нового отзыва(используем форму отзыва. Важно, чтобы при сохранении показывался лоадер на форме, после успешного сохранения она очищалась и выполнялся перезапрос отзывов ресторана)
+Доп задание. Реализовать для отзывов режим редактирования. На карточке отзыва рисуем кнопку редактировать, по клику на которую карточка заменяется формой отзыва с данными отзыва в полях. По клику на сохранить обновляем отзыв, по клику на отмену выключаем редактирование без изменений отзыва. Сохранение сопровождаем лоадером, после сохранения перезапрос отзывов ресторана.

Дз9
+Сделать страницу HomePage(контент на ваше усмотрение)
+Сделать страницу /restaurants. На ней рисуем табы ресторанов
+По клику на таб открываем подстраницу restaurants/:restaurantId с названием ресторана и двумя табами - меню и отзывы. Дефолтно открыт таб меню.
+По клику на табы меню, отзывы открываем подстраницу с меню или отзывами. restaurants/:restaurantId/menu и restaurants/:restaurantId/reviews
+По клику на блюдо открываем отдельную страницу блюда. На ней отображаем инфу о блюде и количество с кнопками. Страница блюда не является подстраницей ресторана. ее путь dish/:dishId
+Добавить инпут с фильтрацией ресторанов. Используем useSearchParams.
Смотрим - https://www.youtube.com/live/HDajDASxn-w?si=3eZ8zrvObaY2xnqN
Смотрим по желанию - https://youtu.be/DDN9himU5PE?si=A603v_G9Fq5yybPo
