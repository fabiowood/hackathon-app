document.addEventListener('DOMContentLoaded', () => {

  //button submit index
  if(document.getElementsByClassName("prevent-default").length !== 0) {
    document.getElementsByClassName("prevent-default")[0].onclick = function(e){
      e.preventDefault()
      const inputName = document.getElementsByClassName("input-name")[0].value
      const inputEmail = document.getElementsByClassName("input-email")[0].value
      console.log(inputName, inputEmail)
      axios.get(`/login/sendmail?email=${inputEmail}&name=${inputName}`).then((s) => console.log(s))
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

  //maps google
  // function makerMapGoogle(map, latParam = 41.3977381, lngParam = 2.190471916, titleParam = "i'm here too") {
  //   const myMarker = new google.maps.Marker({
  //   position: {
  //     lat: 41.3977381,
  //     lng: 2.190471916
  //   },
  //     map: map,
  //     title: "i'm here too"
  //   });
  // }

  function startMap() {
    const resturants = {
      lat: -23.6052026,
      lng: -46.6720421};
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 16,
        center: resturants
      }
    );

    const myMarkerOne = new google.maps.Marker({
      position: {
        lat: -23.6052026,
        lng: -46.6720421
      },
        map: map,
        title: "i'm here too"
      });

    const myMarker = new google.maps.Marker({
      position: {
        lat: -23.604044,
        lng: -46.6720245
      },
        map: map,
        title: "i'm here too"
      });

    const myMarkerTwo = new google.maps.Marker({
      position: {
        lat: -23.6040578,
        lng: -46.6720245
      },
        map: map,
        title: "i'm here too"
      });

      const myMarkerThree = new google.maps.Marker({
        position: {
          lat: -23.6007768,
          lng: -46.6707231
        },
          map: map,
          title: "i'm here too"
        });
      }
  
  startMap();

}, false);