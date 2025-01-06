const btnBuscar = document.getElementById('btnBuscar');
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


function searchText() {
    const textBuscar = document.getElementById('textBuscar').value.toLowerCase();
    const h2 = document.getElementsByTagName('h2');

    for (let d of h2) {
        if (d.innerText.toLowerCase().includes(textBuscar)) {
            
            d.classList.add('highlight');
            d.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
        } else {
            d.classList.remove('highlight');
            console.log("eliminado");
        }
    }
}
btnBuscar.addEventListener('click', searchText);