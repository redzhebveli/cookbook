document.addEventListener("DOMContentLoaded", (event) => {
    let toggler = document.querySelectorAll("[data-toggle-target]")
  
    if (toggler.length > 0) {
      toggler.forEach(function (element) {
        const target = element.getAttribute("data-toggle-target")
        const allTargets = document.querySelectorAll('.subMenu')
        const targets = Array.from( document.querySelectorAll(target))
        const toggleClass = element.getAttribute("data-toggle-class")
        
        element.addEventListener("click", (event) => {
          const allTargetsButTarget = Array.from( allTargets ).filter( ( node, index ) => !targets.includes(node))


          allTargetsButTarget.forEach(function (e) {
            console.log('allTargetsButTarget',e.classList);
            console.log('allTargetsButTarget',e );
            e.classList.remove(toggleClass)
            console.log('allTargetsButTarget',e.classList);
          })
          targets.forEach(function (e) {
            e.classList.toggle(toggleClass)

        })
        })
      })
    }


  });
