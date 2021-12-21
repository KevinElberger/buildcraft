export function throttle(func: Function, delay = 50) {
  let timeout: any = null;

  return (...args: any) => {
    if (timeout === null) {
      timeout = setTimeout(() => {
        // @ts-ignore
        func.apply(this, args);
        timeout = null;
      }, delay);
    }
  }
}
