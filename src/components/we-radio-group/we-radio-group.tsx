import { Component, ComponentInterface, Host, h, Prop, Listen, Element } from '@stencil/core';
import { parseFunction } from '@utils';

@Component({
  tag: 'we-radio-group',
  shadow: true,
})
export class WeRadioGroup implements ComponentInterface {
  @Element() el: HTMLElement;
  @Prop() name!: string;
  @Prop() changeCallback: any;

  @Listen('onRadioChange')
  onRadioChangeHandler(event: any) {
    const { value } = event.target;
    const radios = this.el.querySelectorAll('we-radio');
    this.changeCallback = parseFunction(this.changeCallback);

    radios.forEach(radio => {
      if (radio.getAttribute('value') === value) {
        radio.setAttribute('checked', 'true');
      } else {
        radio.setAttribute('checked', 'false');
      }
    });
    this.changeCallback({ name: this.name, value });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
