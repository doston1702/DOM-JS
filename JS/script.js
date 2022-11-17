let my_wrap = document.body.firstElementChild

console.warn("Homewrok №1: исходя из wrap дать span какой-либо класс");

my_wrap.lastElementChild.firstElementChild.classList.add("item-span");
console.log(my_wrap.lastElementChild.firstElementChild);

console.warn("Homewrok №2: дать тексту цвет через js: классу wrap дал ещё один класс get-orange где цвет стоит оранжевым");

my_wrap.classList.add('get-orange')
console.log(my_wrap);