function runStack (n) {
    console.log('789')
    if (n === 0) return 100;
    return runStack.bind(null, n- 2); // 返回自身的一个版本
  }
  // 蹦床函数，避免递归
  function trampoline(f) {
    console.log('1',f)
    // while (f && f instanceof Function) {
    // console.log('test')
    //   f = f();
    // }
    return f;
  }
  trampoline(runStack(100))