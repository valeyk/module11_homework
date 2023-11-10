function sum(x) {
    return function(y) {
      return x + y;
    };
  };
   sum(1)(2);