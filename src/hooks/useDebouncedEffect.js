import { useEffect, useRef } from "react";

function useDebouncedEffect(cb, delay, deps = []) {
  if (!cb)
    throw new Error(
      "колбэк является обязательным параметром для хука useDebouncedEffect"
    );
  if (!delay)
    throw new Error(
      "Задержка является обязательным параметром для хука useDebouncedEffect"
    );

  const timer = useRef();

  useEffect(() => {
    if (timer) clearTimeout(timer.current);
    timer.current = setTimeout(cb, delay);

    return () => clearTimeout(timer.current);
  }, deps);
}

export default useDebouncedEffect;
