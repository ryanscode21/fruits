document.getElementById("fruits").addEventListener("click", function () {

    console.log("called");
    document.getElementById("fruits-products").classList.remove("hidden");
    document.getElementById("vegetables-products").classList.add("hidden");
})

document.getElementById("vegetables").addEventListener("click", function () {
    document.getElementById("fruits-products").classList.add("hidden");
    document.getElementById("vegetables-products").classList.remove("hidden");
})

document.getElementById("all-products").addEventListener("click", function () {
    document.getElementById("fruits-products").classList.remove("hidden");
    document.getElementById("vegetables-products").classList.remove("hidden");
})