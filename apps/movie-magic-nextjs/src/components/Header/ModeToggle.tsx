'use client';

const THEME_LIGHT = 'theme-light';
const THEME_DARK = 'theme-dark';

function SunIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path
        strokeLinecap="round"
        d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
      />
    </svg>
  );
}

function MoonIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z" />
    </svg>
  );
}

export function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    // toggle theme on <html> element
    const classes = document.documentElement.className.split(' ');
    if (classes.includes(THEME_LIGHT)) {
      document.documentElement.classList.remove(THEME_LIGHT);
      document.documentElement.classList.add(THEME_DARK);
    } else {
      document.documentElement.classList.remove(THEME_DARK);
      document.documentElement.classList.add(THEME_LIGHT);
    }
  }

  return (
    <button
      type="button"
      className="h-6 w-6 transition inline-flex items-center justify-center rounded-md hover:bg-default-hover"
      aria-label="Toggle dark mode"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 stroke-brand dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 stroke-brand dark:block" />
    </button>
  );
}
