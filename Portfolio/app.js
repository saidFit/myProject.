console.log('app')
let date = document.querySelector('.date')
const wrapper = document.querySelector('.wrapper'),
    icon_left = wrapper.querySelector('.fa-angle-left'),
    allh1 = wrapper.querySelectorAll('h1,h3'),
    btn_normal = wrapper.querySelector('.Nurmal'),
    samp = wrapper.querySelector('samp'),
    small = wrapper.querySelector('small'),
    all_A = wrapper.querySelectorAll('a'),
    color = wrapper.querySelector('.color'),
    allp = wrapper.querySelectorAll('p'),
    allbutton = wrapper.querySelectorAll('button:not(.Nurmal)'),
   img_about  = wrapper.querySelector('.about'),
      paraa   = wrapper.querySelector('.paraa'),
      samp_article_p   = wrapper.querySelectorAll('samp article p'),
      nam    = wrapper.querySelector('.nameee'),
      open_navbar  = wrapper.querySelector('.container-open-navbar i'),
      close_navbar  = wrapper.querySelector('.icon-close'),
      container_Nav_Bar_media  = wrapper.querySelector('.container-Nav-Bar-media'),
      container_tree_point_Allp  = wrapper.querySelectorAll('.container-tree-point p'),
    icon_right = wrapper.querySelector('.fa-angle-right')
    const datee =new Date
    date.innerHTML=datee.getFullYear()
   function removeActive(){
    for(let i=0;i<container_tree_point_Allp.length;i++){
        container_tree_point_Allp[i].classList.remove('active')
    }
   }
  
   
    // <!------------- getColor --------------->

 function addcolorFront(color){
wrapper.querySelector('.container-Nav-Bar').style.transition= `all 0s ease` 
wrapper.querySelector('.container-Nav-Bar').style.backgroundColor=`${color}`
allh1.forEach(element=>{
    element.style.transition=`all 0s ease`
    element.style.color=`${color}`
})
    
allbutton.forEach(element=>{
    element.style.transition=`all 0s ease`
    element.style.backgroundColor=`${color}`
})
    
allp.forEach(element=>{
    element.style.transition=`all 0s ease`
    element.style.color=`${color}`
})

 }

 addcolorFront(getColor())
    
allp.forEach(element=>{
    element.style.transition=`all 0s ease`
    element.style.color=`${getColor()}`
})

 icon_left.classList.add('disabled')
    const APIII ="appp.json"
    let i=0
console.log(allh1)
let colorClick

samp_article_p.forEach(element=>{
    element.addEventListener('click',e=>{
        const color =element.getAttribute('data-color')
        colorClick=color
        console.log(color)
        addColor()
       console.log(color)
    })
    
})






 container_tree_point_Allp.forEach((element,index)=>{
    element.addEventListener('click',e=>{
        removeActive()
        element.classList.add('active')
        icon_left.classList.remove('disabled')
        icon_right.classList.remove('disabled')
       
        async function getAPI() {
        try{
            const getinfos = await fetch(APIII)//1=0
            const APIJSON = await getinfos.json()
            console.log(APIJSON)
            let affiche   = APIJSON.map(character=>{
               return character
               
            })

            if(index==0){
                icon_left.classList.add('disabled')
            }else if(index==affiche.length-1){
                icon_right.classList.add('disabled')
            }
            i=index
            console.log(i)
            // i!=0 ? icon_left.classList.remove('disabled'):icon_left.classList.add('disabled')
            nam.textContent=affiche[i].name
            img_about.src=affiche[i].img;
            paraa.textContent=affiche[i].content

        }
        catch(e){
            console.log("Error!:",e.message)
        }
    }
    getAPI()
    })
 })


 

   
    async function getAPI(e) {
     
        try{
            const getinfos = await fetch(APIII)//1=0
            const APIJSON = await getinfos.json()
            console.log(APIJSON)
            let affiche   = APIJSON.map(character=>{
               return character
            })

           if(e.target.classList.contains('fa-angle-right')){
            icon_left.classList.remove('disabled')
          
            console.log(true)
            if(i==affiche.length-2){
                console.log('arrive')
                e.target.classList.add('disabled')
                
            }
            i < affiche.length-1 ? i++ :console.log(false)
            console.log(i)
            removeActive()
            console.log(container_tree_point_Allp[i].classList.add('active'))
            console.log(affiche)
            console.log(affiche[i].name)
            nam.textContent=affiche[i].name
            img_about.src=affiche[i].img;
            paraa.textContent=affiche[i].content

           }else{
            i--
            console.log(i)
            console.log(e.target)

            icon_right.classList.contains('disabled') ? icon_right.classList.remove('disabled'):
            
            
            removeActive()
            console.log(container_tree_point_Allp[i].classList.add('active'))
            i==0?e.target.classList.add('disabled'):
            console.log(i)
            console.log(affiche)
            console.log(affiche[i].name)
            nam.textContent=affiche[i].name
            img_about.src=affiche[i].img;
            paraa.textContent=affiche[i].content
           }
          
            
            }
            catch(e){
                console.log("Error!:",e.message)
            }
    
    
    }    


    icon_right.addEventListener('click',getAPI)
    icon_left.addEventListener('click',getAPI)
   
    open_navbar.addEventListener('click',e=>{
        console.log('nav')
      container_Nav_Bar_media.classList.add('showw')
   
    })

   
    document.addEventListener('click',e=>{
    e.target.classList.contains('container-Nav-Bar-media') ? container_Nav_Bar_media.classList.remove('showw'):false
   if(e.target.classList.contains('samp')||e.target.classList.contains('color','fa-palette','fa-sort-down')||e.target.classList.contains('fa-palette')||e.target.classList.contains('fa-sort-down')){
    console.log('samp')
   }else{
    color.classList.remove('change')
    samp.classList.remove('show-samp')
    
   }
    })

    close_navbar.addEventListener('click',e=>{
        console.log(!e.target)
        container_Nav_Bar_media.classList.remove('showw')
    })
    
// <!------------- localStorage --------------->

function getColor(){
    return JSON.parse(localStorage.getItem('key')||"[]")
}

// localStorage.clear()
function saveColor(color){
    return localStorage.setItem('key',JSON.stringify(color))
}


function addColor(){
    if(colorClick){//has value;
        addcolorFront(colorClick)
       console.log (colorClick)
       return saveColor(colorClick)
       
    }
}

color.addEventListener('click',e=>{
    color.classList.toggle('change')
    samp.classList.add('show-samp')
    !color.classList.contains('change') ? samp.classList.remove('show-samp') :false
})

btn_normal.addEventListener('click',e=>{
    localStorage.clear()
    addcolorFront(getColor())
})

// <!------------- links --------------->

 function removective(){
   all_A.forEach(element=>{
    element.classList.remove('add')
   })
    }
  for(let i=0;i<all_A.length;i++){
      all_A[i].addEventListener('click',e=>{
        removective()
        all_A[i].classList.add('add')
      })
  }

  
  window.addEventListener('scroll',e=>{
    console.log(window.scrollY)
    if(window.scrollY>=90){
        console.log('oui')
        wrapper.querySelector('.container-Nav-Bar').style.opacity='0'  
    }else{
        wrapper.querySelector('.container-Nav-Bar').style.opacity='1' 
    }
    if(window.scrollY>=120){

       console.log(true)
       wrapper.querySelector('.container-Nav-Bar').classList.add('Fexid') 
       small.classList.add('popup')  
    }else{
        wrapper.querySelector('.container-Nav-Bar').classList.remove('Fexid') 
        small.classList.remove('popup')  
    }
  })

function scRooll(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
        
    
}
small.addEventListener('click',scRooll)