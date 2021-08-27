document.getElementById("button-search").addEventListener("click", () => {
  let inputField = document.getElementById("food-input");

  let foodValue = inputField.value;

  // Api call
  let foodMeal = async () => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodValue}`;

    let res = await fetch(url);
    let data = await res.json();
    searchFood(data.meals);

    // fetch(url)
    //   .then(repsonse => repsonse.json())
    //   .then(data => searchFood(data.meals));
  };

  let searchFood = food => {
    let searchFoodDiv = document.getElementById("search-food");
    searchFoodDiv.innerHTML = "";
    food.forEach(foods => {
      console.log(foods);

      let div = document.createElement("div");
      div.innerHTML = `<div class="col">
          <div class="card shadow">
            <img src='${foods.strMealThumb}' class="card-img-top"" />
            <div class="card-body">
              <h5 class="card-title">${foods.strMeal}</h5>
              <p class="card-text">
                ${foods.strInstructions.slice(0, 150)}
              </p>
            </div>
          </div>
        </div>`;

      searchFoodDiv.appendChild(div);
    });
  };
  foodMeal();

  inputField.value = "";
});
