import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.js";

export class GameCardElement extends LitElement {
  @property()
  href?: string;

  @property({ attribute: "icon-ref" })
  iconRef?: string;

  override render() {
    return html`
      <section class="card">
        <h2>
          ${this.iconRef ? html`
            <svg class="icon" width="22" height="22" aria-hidden="true" focusable="false">
              <use href="${this.iconRef}" />
            </svg>
          ` : ''}
          <slot name="title">Card Title</slot>
        </h2>
        <ul class="sequence-grid">
          <slot>Default content</slot>
        </ul>
      </section>
    `;
  }

  static styles = [
    reset.styles,
    css`
      :host {
        display: block;
      }

      .card {
        background: var(--color-surface, #FFFFFF);
        border: 1px solid var(--color-border, #B8B8AA);
        border-radius: var(--radius-md, 12px);
        box-shadow: var(--shadow-sm, 0 1px 2px rgba(16,24,40,.06));
        padding: var(--space-3, 1.5rem);
      }

      h2 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: var(--space-2, 1rem);
        color: var(--color-accent, #2F3E3B);
        font-size: var(--font-size-lg, 1.25rem);
        font-family: var(--font-family-display, Georgia, serif);
        line-height: var(--line-height-heading, 1.25);
      }

      svg.icon {
        display: inline-block;
        height: 1.1em;
        width: 1.1em;
        fill: currentColor;
      }

      .sequence-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--space-2, 1rem);
        list-style: none;
        padding: 0;
        margin: 0.25rem 0 0;
      }

      @media (max-width: 640px) {
        .sequence-grid {
          grid-template-columns: 1fr;
        }
      }

      ::slotted(li) {
        margin: 0.25rem 0;
      }

      ::slotted(a) {
        color: var(--color-accent, #2F3E3B);
        text-decoration: none;
        font-weight: 500;
      }

      ::slotted(a:hover),
      ::slotted(a:focus) {
        color: var(--color-accent-strong, #2E3A37);
        text-decoration: underline;
      }
    `
  ];
}