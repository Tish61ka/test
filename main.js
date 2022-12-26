let arr = ['Превью1.png', 'Превью2.png', 'Хижиначудес.jpg'];
let i = 0
    function imgsrc() {
        document.getElementById("image1").style.transform = 'scale(1.5)';
        document.getElementById("image1").style.transition = 2 + 's';
        setTimeout(() => { 
            document.getElementById("image2").style.opacity = 1;
            document.getElementById("image2").style.transition = 400 + 'ms';
        }, 2000);
        setTimeout(() => { 
            document.getElementById("image2").style.opacity = 0;
            document.getElementById("image2").style.transition = 400 + 'ms';
        }, 2400);
        setTimeout(() => {  
            for(; i <= 10;){
                document.getElementById("image2").style.opacity = 0;
                document.getElementById("image2").style.transition = 800 + 'ms';
                document.getElementById("image1").style.backgroundImage = "url(" + arr[i] + ")"; 
                document.getElementById("image1").style.transition = 0 + 'ms';
                break;
            }
            i++;
            document.getElementById("image1").style.transform = 'scale(1.0)';
        }, 2400);
        }

        // document.addEventListener('keypress', function(event){
//     if(event.code === 'KeyW'){
//         event.preventDefault;
//         document.getElementById("image1").style.transform = 'scale(1.5)';
//         document.getElementById("image1").style.transition = 2 + 's';
//         setTimeout(() => { 
//             document.getElementById("image2").style.opacity = 1;
//             document.getElementById("image2").style.transition = 400 + 'ms';
//         }, 2000);
//         setTimeout(() => { 
//             document.getElementById("image2").style.opacity = 0;
//             document.getElementById("image2").style.transition = 400 + 'ms';
//         }, 2400);
//         setTimeout(() => {  
//             for(; i <= 10;){
//                 console.log(i);
//                 document.getElementById("image2").style.opacity = 0;
//                 document.getElementById("image2").style.transition = 800 + 'ms';
//                 document.getElementById("image1").style.backgroundImage = "url(" + arr[i] + ")"; 
//                 document.getElementById("image1").style.transition = 0 + 'ms';
//                 break;
//             }
//             i++;
//             document.getElementById("image1").style.transform = 'scale(1.0)';
//         }, 2400);
        
//     }
// })