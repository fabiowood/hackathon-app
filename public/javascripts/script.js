document.addEventListener('DOMContentLoaded', () => {

  //button submit index
  if(document.getElementsByClassName("prevent-default").length !== 0) {
    document.getElementsByClassName("prevent-default")[0].onclick = function(e){
      e.preventDefault()
      axios.get("/login/sendmail").then((s) => console.log(s))
    }
  }

}, false);
