import { useEffect, useState } from "react";

export function useInput() {
  const [input, setInput] = useState({
    forward: false,
    backwards: false,
    left: false,
    right: false,
    shift: false,
    jump: false,
  });

  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    ShiftLeft: "shift",
    Space: "jump",
  };

  const findKey = (key) => keys[key];

  useEffect(() => {
    function handleKeyDown(e) {
      setInput((m) => ({ ...m, [findKey(e.code)]: true }));
    }
    function handleKeyUp(e) {
      setInput((m) => ({ ...m, [findKey(e.code)]: false }));
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return input;
}
