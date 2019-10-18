document.addEventListener('DOMContentLoaded', () => {

  if(document.getElementsByClassName("prevent-default").length !== 0) {
    document.getElementsByClassName("prevent-default")[0].onclick = function(e){
      console.log(e)
      e.preventDefault()
    }
  }

}, false);
