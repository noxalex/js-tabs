export default class TabBar {
  /* Создаём объект */
  constructor({ element, tabs, onChange = () => {} }) {
    this._element = element;
    this._tabs = tabs;
    this._onChange = onChange;

    this.init();
  }

  /**
   * Инициализируем объект.
   * Устанавливаем обработчик для обработки активации вкладки.
   */
  init() {
    this._tabs.forEach(
      tab => (tab._onActivate = this.handleActivate.bind(this))
    );
  }

  /**
   * Возвращаем HTML элемент.
   */
  get element() {
    return this._element;
  }

  /**
   * Возвращаем массив вкладок.
   */
  get tabs() {
    return this._tabs;
  }

  /**
   * Возвращаем активную вкладку.
   */
  get activeTab() {
    let activeTab = this.tabs.filter(tab => tab.isActive);
    return activeTab;
  }

  /**
   * Возвращает индекс активной вкладки.
   */
  get activeTabIndex() {
    return this.tabs.findIndex(tab => tab.isActive);
  }

  /**
   * Вызываем при активации вкладки.
   * Делаем все вкладки кроме активной неактивными.
   * Вызываем коллбэк, отправляя туда активную вкладку.
   */
  handleActivate(activeTab) {
    this.tabs.forEach(tab => {
      if (tab !== activeTab) {
        tab.isActive = false;
      }
    });

    this._onChange(activeTab);
  }
}
