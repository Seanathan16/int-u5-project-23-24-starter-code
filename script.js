// Declare your arrays here
let Isekai = ["slime_isekai.jpg ", "shield_isekai.jpg ", "re_zero.jpg"]
let Shonen = ["black_clover.jpg", "naruto.jpg ", "demon_slayer.jpg"]
let School = ["jujutsu_kaisen.jpg", "windbreaker.jpg", "tokyo_revengers.jpg"];
let results = document.querySelector(".results");
let anime;

console.log(anime)





// Submit Button

let submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function(){
    results.innerHTML="";
    let S = document.querySelector(".anime");
    S = S.value;


if (S ==="Isekai"){
    anime = Isekai
  
}
else if (S ==="Shonen"){
    anime = Shonen
    
}

else if (S ==="School"){
    anime = School
}

anime.forEach(function(g){
    let pic = document.createElement("img");
    pic.src = g;
    results.appendChild(pic);  
}
)
});        

// $(".suggestion-button").click(function() {
//     let e = $(".give-suggestions").val();
//     $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!"),
//     Isekai.push(e),
//     drama.push(e),
//     console.log(Isekai),
//     console.log(drama)
// });

// Make sure to declare your HTML elements as variables! 