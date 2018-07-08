export default class Tab {
  /**
   * Создаем вкладку.
   */
  constructor({ element, onActivate = () => {} }) {
    this._element = element;
    this._active = false;
    this._onActivate = onActivate;

    this.init();
  }

  /**
   * Инициализируем объект.
   * Устанавливаем свойство акивности вкладки.
   * Устанавливаем обработчик для обработки нажатия на элемент.
   */
  init() {
    this._active = this.element.classList.contains("active");
    this.element.addEventListener("click", this.handleClick.bind(this));
  }

  /**
   * Возвращаем HTML элемент.
   */
  get element() {
    return this._element;
  }

  /**
   * Возвращаем ID вкладки.
   */
  get id() {
    return this.element.getAttribute("href").substr(1);
  }

  /**
   * `get` - Возвращает `true` или `false` в зависимости от того активна вкладка или нет.
   *
   * `set` - Устанавливает активность вкладки, добавляя или удаляя соответствующий класс
   * @returns {boolean}
   */
  get isActive() {
    return this._active;
  }
  set isActive(value) {
    this._active = value;
    this.element.classList.toggle("active", value);
  }

  /**
   * Вызываем при нажатии на вкладку.
   *
   * Устанавливаем активность вкладки.
   * Вызываем коллбэк, отправляя туда ссылку на текущий объект, т.е. саму вкладку.
   */
  handleClick(event) {
    event.preventDefault();

    this.isActive = true;

    this._onActivate(this);
  }
}
