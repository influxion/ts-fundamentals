const button = document.querySelector('button');

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}

function clickHandler(message: string) {
  console.log('Clicked! ' + message);
}

button?.addEventListener('click', clickHandler.bind(null, 'Hello!'));
//* '?' is a null-coalescing operator. It's a short-hand for if (button) { button.addEventListener('click', ...) }
