import VDom from './vdom';

export class Lucia extends VDom {
  constructor(options: Record<string, unknown>) {
    super(options || {});
  }
}

export const createApp = (options: Record<string, unknown>) => {
  return new Lucia(options);
};

export const components: Lucia[] = [];

document.addEventListener('DOMContentLoaded', () => {
  const elements = Array.from(document.querySelectorAll('[l-use]'));

  for (const el of elements) {
    const options = el.getAttribute('l-use');
    if (options === null) return;
    const app = createApp(new Function(`return (${options})`)());
    components.push(app);
    app.mount(el);
  }
});
