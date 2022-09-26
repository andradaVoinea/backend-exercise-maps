// Faceti un request catre: https://jsonplaceholder.typicode.com/users
// Pentru primii 5 useri sa afisati: adresa si pin-ul pe harta, folosind API-ul de la google maps; 
// Link ul cu site-ul web, sa poti da click; email-ul in momentul in care apesi pe el 
// sa iti deschida aplicatia de mail, outlook, etc; numarul de telefon, in momentul in care dai click
//  pe el sa iti deschida o aplicatie de sunat; 

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }, 

function placeMarker(map, location, info) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content: info
    });
    infowindow.open(map,marker);
}