const observa = new IntersectionObserver((entra)=>{
    entra.forEach(entry=>{
        // entry.target.classList.toggle('inativo')                                                                                      
        
        if (entry.isIntersecting) {
            entry.target.classList.add('activo');
          
              observa.unobserve(entry.target) // cuando ya entre no lo volvera a cargar
        } else {
        
            entry.target.classList.remove('activo');
          //  observa.unobserve(entry.target) // cuando ya entre no lo volvera a cargar
        }
        console.log(entry)
    })
   
},{ threshold: 0.5} )

const imagen = document.querySelectorAll("img");

imagen.forEach(miimg=>{
    observa.observe(miimg)

})
