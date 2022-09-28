// $(document).ready(function () {

//     $("ul").on("click", "li", function () {
//         $(this).toggleClass("completed");
//     });


//     $("ul").on("click", "span", function (event) {
//         $(this).parent().fadeOut(500, function () {
//             $(this).remove();
//         });
//         event.stopPropagation();
//     });

//     $("input[type='text']").keypress(function (event) {
//         if (event.which === 13) {

//             var todoText = $(this).val();
//             $(this).val("");
            
//             $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
//         }
//     });
    
//     $(".fa-plus").click(function () {
//         $("input[type='text']").fadeToggle();
//     });
    
    
// });
let text_add = document.querySelector("#listChild");

const getData=()=>{

    axios.get(`http://localhost:3000/todos`)
    .then(function (response) {
        console.log(response.data);

        
        response.data.data.map(eachTodo => {
            // text_add.appendChild(eachTodo)
            document.querySelector("#listChild").innerHTML += eachTodo
            // document.querySelector("#listChild").innerHTML += '<br>'
        })

    })
    .catch(function (error) {
        console.log(error);
    })
}

setInterval(getData, 1000);
let userInput = document.querySelector("#userInput")

const addItems = () => {
    axios.post(`http://localhost:3000/item`, {
        text: userInput
    })
        .then(function (response) {
            console.log(response.data);


            // response.data.data.map(eachTodo => {
            //     text_add.appendChild(eachTodo)
            //     // document.getElementsByClassName(".fa-trash").innerHTML += eachTodo
            //     // document.getElementsByClassName(".fa-trash").innerHTML += '<br>'
            // })

        })
        .catch(function (error) {
            console.log(error);
        })
}