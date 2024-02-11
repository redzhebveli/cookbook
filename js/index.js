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
const getPage = ((page) => {

  let response =  fetch(page).then(response => response.text()).then(data => {
    document.getElementById('ajaxHere').innerHTML = data;
    return data 
  }
  );

});


  let subpages = document.querySelectorAll('.subMenu a');

  subpages.forEach( (element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const page = element.getAttribute('href') 
      getPage(page);

      // const myAsync = async () => {
      //   const newPageHtml = await newPage;
      //   console.log('###',newPageHtml);
      //   // document.getElementById('ajaxHere').innerHTML = newPageHtml;
      // };
      // myAsync();

      // const newPageHtml = () => {
      //   newPage.then((a) => {
      //     console.log(a);
      //   });
      // };
      // newPageHtml();
       
    })
  }
  );

// let text =  response.text(); // read response body as text
// console.log(response.then(response => response.text()));

  });
