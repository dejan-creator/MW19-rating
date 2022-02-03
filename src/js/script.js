let textRating = document.querySelector(".rating__value");
const stars = document.querySelectorAll(".rating__star");

stars.forEach((star, index) => {
  star.addEventListener("click", (e) => {
    //removing the styling for all the stars
    stars.forEach((element) => {
      element.classList.remove("rating__star--on");
    });

    //getting the order
    const order = index + 1;
    //changing the text in the text
    textRating.textContent = order;
    //adding the styling for every star with index lower than the order
    for (let i = 0; i < order; i++) {
      stars[i].classList.add("rating__star--on");
    }
  });
});
