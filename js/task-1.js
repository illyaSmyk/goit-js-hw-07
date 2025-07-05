const itemEls = document.querySelectorAll(".item");
console.log(`Number of categories : ${itemEls.length}`);

itemEls.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elCount}`);
});
