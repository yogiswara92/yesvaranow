const DISMISSED_KEY = 'wm-community-dismissed';

export function mountCommunityWidget(): void {
  if (localStorage.getItem(DISMISSED_KEY) === 'true') return;
  if (document.querySelector('.community-widget')) return;

  const widget = document.createElement('div');
  widget.className = 'community-widget';
  widget.innerHTML = `
    
  `;

  const dismiss = () => {
    widget.classList.add('cw-hiding');
    setTimeout(() => widget.remove(), 300);
  };

  widget.querySelector('.cw-close')!.addEventListener('click', dismiss);

  widget.querySelector('.cw-dismiss')!.addEventListener('click', () => {
    localStorage.setItem(DISMISSED_KEY, 'true');
    dismiss();
  });

  document.body.appendChild(widget);
}
