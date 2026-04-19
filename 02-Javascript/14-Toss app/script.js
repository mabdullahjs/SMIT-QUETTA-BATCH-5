// let result = document.querySelector('.result')
let image = document.querySelector('.img')

function tossCoin(){
let random = Math.random()
    console.log(random)
    if(random < 0.5){
      image.src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhT_Ug3fKIAH4suzz_vcnbBSphb-VGfbgOA&s'
    }else{
        // result.innerHTML = 'tails'

        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MZjwQmnaqtWu7GvQeG8I4D37WUwzfH5SleJ29G3PWA&s'
    }

   
}