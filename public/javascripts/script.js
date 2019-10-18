document.addEventListener('DOMContentLoaded', () => {

  //button submit index
  if(document.getElementsByClassName("prevent-default").length !== 0) {
    document.getElementsByClassName("prevent-default")[0].onclick = function(e){
      e.preventDefault()
      const inputName = document.getElementsByClassName("input-name")[0].value
      const inputEmail = document.getElementsByClassName("input-email")[0].value
      axios.get(`/login/sendmail?name=${inputName}&email=${inputEmail}`).then((s) => console.log(s))
    }
  }

}, false);
