import { ComponentInterface, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'we-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}