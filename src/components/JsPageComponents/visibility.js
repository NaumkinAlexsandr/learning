// Global Scope
export function globalScope() {
  var a = 5;
  let b = 8;
  const c = 9;
  function sum() {
    return a + b + c;
  }
  console.log(sum());
  const jsGlobalScope = document.getElementById("jsGlobalScope");
  jsGlobalScope.textContent = ` 22 `;
}

// Local Scope
export function localScope() {
  function sum() {
    var a = 5;
    let b = 8;
    const c = 9;
    return a + b + c;
  }
  console.log(sum());
  const jsLocalScope = document.getElementById("jsLocalScope");
  jsLocalScope.textContent = ` 22 `;
}

// Function Scope
export function functionScope() {
  function sum() {
    if (true) {
      var a = 5;
      let b = 8;
      const c = 9;
      console.log(a);
      console.log(b);
      console.log(c);
    }
    console.log(a);
  }
  sum();

  const jsFunctionScope = document.getElementById("jsFunctionScope");
  jsFunctionScope.innerHTML = " 5 <br />  8 <br /> 9 <br /> 5 ";
}

// Block Scope
export function blockScope() {
  function example() {
    var x = 10;

    if (true) {
      var y = 20;
      let z = 30;
      console.log(x, y, z);
    }

    console.log(x, y);
  }

  example();
  const jsBlockScope = document.getElementById("jsBlockScope");
  jsBlockScope.innerHTML = " 10, 20, 30 <br />  10, 20";
}

// Lexical Scope
export function lexicalScope() {
  function example() {
    var a = 5;
    let b = 8;
    const c = 9;
    function example2() {
      console.log(a);
      console.log(b);
      console.log(c);
    }
    example2();
  }
  example();
  const jsLexicalScope = document.getElementById("jsLexicalScope");
  jsLexicalScope.innerHTML = "5 <br />   8 <br />   9";
}

// Dynamic Scope
export function dynamicScope() {
  function outer() {
    const x = 10;

    function inner() {
      console.log(x);
    }

    return inner;
  }

  const innerFunc = outer();
  innerFunc();
  const jsDynamicScope = document.getElementById("jsDynamicScope");
  jsDynamicScope.innerHTML = "10";
}
