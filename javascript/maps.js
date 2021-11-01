var mymap = L.map('mapid');

var options = {
  key: geocoder_api_key,
  limit: 10
};
var control = L.Control.openCageSearch(options).addTo(mymap);

var ZoomViewer = L.Control.extend({
  onAdd: function(){
    var gauge = L.DomUtil.create('div');
    gauge.style.width = '200px';
    gauge.style.background = 'rgba(255,255,255,0.5)';
    gauge.style.textAlign = 'left';
    mymap.on('zoomstart zoom zoomend', function(ev){
      gauge.innerHTML = 'Zoom level: ' + mymap.getZoom()
    })
    return gauge;
  }
});

(new ZoomViewer).addTo(mymap);

//DISTORT IMAGE VIEWER
adds a Google Satellite layer with a toner label overlay
map.addGoogleMutant();

map.whenReady(function() {
  // By default, 'img' will be placed centered on the map view specified above
  img = L.distortableImageOverlay('example.jpg').addTo(map);
});

//alternative options
// img = L.distortableImageOverlay('example.jpg', {
//   mode: 'freeRotate',
// }).addTo(map);



//FULL SCREEN PLUGIN
map.addControl(new L.Control.Fullscreen());


//EDITABLE MARKER STUFF -- ADDED
// var myMarker =  L.marker( [33.270, -116.650] );
// myMarker
//    .bindPopup( "Center Marker" , {removable: true, editable: true} )
//    .addTo(leafletMap)
//

//MAKE MARKERS LOOK REALLY PRETTY
//First, specify your Mapbox API access token
// L.MakiMarkers.accessToken = "<YOUR_ACCESS_TOKEN>";
//
// // Specify a Maki icon name, hex color, and size (s, m, or l).
// // A list of available icon names can be found at
// //   https://raw.githubusercontent.com/mapbox/maki/master/layouts/all.json
// // Lowercase letters a-z and digits 0-9 can also be used. A value of null will result in no icon.
// // Color may also be set to null, which will result in a gray marker.
// var icon = L.MakiMarkers.icon({icon: "rocket", color: "#b0b", size: "m"});
// L.marker([30.287, -97.72], {icon: icon}).addTo(map);


mymap.setView([0,0,], 1);

// var marker = L.marker([51.5,-0.09]).addTo(mymap);
// marker.bindPopup("<b>Hello World!</b><br>I am a popup.").openPopup();
var Taj_icon = L.MakiMarkers.icon({icon: "castle-JP", color: "#b0b", size: "m"});
var Taj = L.Taj([27.174961,78.042385], {icon: Taj_icon}).addTo(mymap);
Taj.bindPopup("<b>India's Taj Mahal</b> <br> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Taj_Mahal.png/1280px-Taj_Mahal.png' alt='Taj Mahal' height='200' width='200'> <br> <p><b>The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, a Persian princess who died giving birth to their 14th child, Gauhara Begum.  Construction of the Taj Mahal began in 1632. The imperial court documenting Shah Jahan's grief after the death of Mumtaz Mahal illustrate the love story held as the inspiration for Taj Mahal. The principal mausoleum was completed in 1643 and the surrounding buildings and garden were finished about five years later.</b></p>").openPopup();
Taj
    .bindPopup( "Center Marker" , {removable: true, editable: true} )
    .addTo(mymap)

var Great_icon = L.MakiMarkers.icon({icon: "barrier", color: "#a1a", size: "l"});
var Great = L.Great([40.334245,116.477652], {icon: Great_icon}).addTo(mymap);
Great.bindPopup("<b>Great Wall of China</b> <br> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Great_Wall_of_China_in_tourist_season.jpg/1280px-Great_Wall_of_China_in_tourist_season.jpg' alt='Great Wall of China' height='200' width='200'> <br> <p><b>The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe with an eye to expansion.</b></p>").openPopup();
Great.bindPopup( "Center Marker" , {removable: true, editable: true} ).addTo(mymap);

var Petra_icon = L.MakiMarkers.icon({icon: "religious-muslim", color: "#c9c", size: "s"});
var Petra = L.Petra([30.328611,35.441944], {icon: Petra_icon}).addTo(mymap);
Petra.bindPopup("<b>Petra in Jordan<b> <br> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Gravkammare_2.jpg/1280px-Gravkammare_2.jpg' alt='Petra in Jordan' height='200' width='200'> <br> <p> <b>Petra, originally known to its inhabitants as Raqmu, is a historical and archaeological city in southern Jordan. Petra lies on the slope of Jabal Al-Madbah in a basin among the mountains which form the eastern flank of Arabah valley that run from the Dead Sea to the Gulf of Aqaba.</b></p>").openPopup();
Petra.bindPopup( "Center Marker" , {removable: true, editable: true} ).addTo(mymap);

var Brazil_icon = L.MakiMarkers.icon({icon: "religious-christian", color: "#d5c", size: "m"});
var Brazil = L.Brazil([-22.951389,-43.2108334], {icon: Brazil_icon}).addTo(mymap);
Brazil.bindPopup("<b>Brazil's statue of Christ the Redeemer</b> <br> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg/800px-Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg' alt='Brazil's statue of Christ the Redeemer' height='200' width='200'> <br> <p><b>Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.</b></p>").openPopup();
Brazil.bindPopup( "Center Marker" , {removable: true, editable: true} ).addTo(mymap);

var Peru_icon = L.MakiMarkers.icon({icon: "landmark", color: "#h7i", size: "m"});
var Peru = L.Peru([-13.163056,-72.545556], {icon: Peru_icon}).addTo(mymap);
Peru.bindPopup("<b>Peru's Machu Picchu</b> <br> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg/1024px-80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg' alt='Peru's Machu Picchu' height='200' width='200'> <br> <p><b>Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a mountain ridge 2,430 metres (7,970 ft) above sea level. It is in the Cusco Region, Urubamba Province, Machupicchu District in Peru, above the Sacred Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows, which cuts through the Cordillera and originates a canyon with tropical mountain climate.</b></p>").openPopup();
Peru.bindPopup( "Center Marker" , {removable: true, editable: true} ).addTo(mymap);

var Mexico_icon = L.MakiMarkers.icon({icon: "triangle", color: "#a2c", size: "m"});
var Mexico = L.Mexico([-13.163056,-72.545556], {icon: Mexico_icon}).addTo(mymap);
Mexico.bindPopup("<b>Mexico's Chichen Itza pyramid</b> <br> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1920px-Chichen_Itza_3.jpg' alt='Mexico's Chichen Itza pyramid' height='200' width='200'> <br> <p><b>Chichen Itz was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is in Tinúm Municipality, Yucatán State, Mexico. Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic (c. AD 600–900) through the Terminal Classic (c. AD 800–900) and into the early portion of the Postclassic period (c. AD 900–1200).</b></p>").openPopup();
Mexico.bindPopup( "Center Marker" , {removable: true, editable: true} ).addTo(mymap);

var C_icon = L.MakiMarkers.icon({icon: "stadium", color: "#b0b", size: "m"});
var Colosseum = L.Colosseum([-13.163056,-72.545556], {icon: C_icon}).addTo(mymap);
Colosseum.bindPopup("<b>The Colosseum in Rome</b> <br> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Roma06%28js%29.jpg/1280px-Roma06%28js%29.jpg' alt='The Colosseum in Rome' height='200' width='200'> <br> <p><b>The Colosseum or Coliseum also known as the Flavian Amphitheatre is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine, tuff, and brick-faced concrete, it is the largest amphitheatre ever built. The Colosseum is situated just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir Titus. Further modifications were made during the reign of Domitian (81–96). These three emperors are known as the Flavian dynasty, and the amphitheatre was named in Latin for its association with their family name</b></p>").openPopup();
Colosseum.bindPopup( "Center Marker" , {removable: true, editable: true} ).addTo(mymap);

marker.on('click', function(e){
  mymap.setView(e.latlng, 14);
});


/* MAPBOX TITLE LAYER
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox/satellite-streets-v11',
  accessToken: mapbox_access_token,
}).addTo(mymap);
*/

// OPEN STREET VIEW TILE LAYER
// L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
// }).addTo(mymap);
//
// var marker = L.marker([51.5,-0.09]).addTo(mymap);
//
// var circle = L.circle([51.508, -0.11], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 500
// }).addTo(mymap);
//
// var polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047]
// ]).addTo(mymap);
//
// var polyline = L.polyline([
//   [51.506, -0.08],
//   [51.502, -0.06],
//   [51.507, -0.047]
// ]).addTo(mymap);
//
// marker.bindPopup("<b>Hello World!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
//
// marker.on('click', function(e){
//   mymap.setView(e.latlng, 14);
// });
//
// circle.on('click', function(e){
//   mymap.setView(e.latlng, 13);
// });
//
// polygon.on('click', function(e){
//   mymap.setView(e.latlng, 13);
// });
