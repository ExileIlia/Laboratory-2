function four(a,b,c) {
    a = parseInt(prompt("Task 4. Введіть перше число:"));
    b = parseInt(prompt ("Task 4. Введіть друге число:"));
    c = parseInt(prompt ("Task 4.Введіть трете число:"));
    console.log(a);
    if (a > b && a > c) {
        console.log("Максимальне число: " + a);
        alert(`Максимальне число:${a}`);
      } else if (b > a && b > c) {
       alert(`Максимальне число:${b}`);
      } else if (c > a && c > b) {
       alert(`Максимальне число:${c}`);
      } else {
       alert("Введені числа рівні.");
      }
  }
  four();
