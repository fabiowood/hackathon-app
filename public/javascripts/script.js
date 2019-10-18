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

  //cookie logout

  if(document.getElementById("logout-button") !== null) {
    function eCS(name) {
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:001 GMT"
    }
    document.getElementById("logout-button").onclick = function() {
      eCS("logged")
      window.location.replace("/")
    }
  }

}, false);