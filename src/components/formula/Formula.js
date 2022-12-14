import {ExcelComponent} from '../../core/ExcelComponent';
import {$} from '../../core/dom';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options,
    });
  }
  toHTML() {
    return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable="true" spellcheck="false"></div>
    `;
  }

  init() {
    super.init();
    this.$formula = this.$root.findOnce('#formula');
    this.$on('Table:select', ($el) => {
      this.$formula.text($el.text());
    })

    this.$on('Table:input', ($el) => {
      this.$formula.text($el.text());
    })
  }

  onInput(event) {
    this.$emit(`${this.name}:input`, $(event.target).text());
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(event.key)) {
      event.preventDefault();
      this.$emit(`${this.name}:enter`);
    }
  }
}
