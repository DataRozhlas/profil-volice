// testové otázky

var cisloOtazky = 1;

var otazky = [
  ["Považujete sám/sama sebe za věřícího člověka?", "ano", "ne", "nevím"],
  ["Jste spokojení se svou životní úrovní?", "určitě ano", "spíše ano", "ani ano ani ne", "spíše ne", "určitě ne", "nevím"],
  ["Považujete sám/sama sebe za věřícího člověka 2?", "ano", "ne", "nevím"],
  ["Jste spokojení se svou životní úrovní 2?", "určitě ano", "spíše ano", "ani ano ani ne", "spíše ne", "určitě ne", "nevím"]
];

var odpovedi = [];



$('.test-button').click(function(event){
  event.preventDefault();
  odpovedi[cisloOtazky-1] = $(this).text();
  cisloOtazky++;
  novaOtazka();
});



function novaOtazka() {

  var otazka = otazky[cisloOtazky-1];

  var barvy = [];
  if (otazka.length-1 == 3) {
    barvy = ['#18807A', '#F84045', '#444']
  } else if (otazka.length-1 == 6) {
    barvy = ['#18807A', '#4FBA8A', '#FFCE6D', '#FF7858', '#F84045', '#444']
  }

  var text = '<div class="otazka">'

  text += '<p>Otázka ' + cisloOtazky + '</p>';
  text += '<h3>' + otazka[0] + '</h3>';
  text += '</div>';
  text += '<div class="buttons">';

  for (var i = 1; i < otazka.length; i++) {
    text += '<button class="test-button" type="button" style="background-color:' + barvy[i-1] + '">' + otazka[i] + '</button>';
  }

  text += '</div>';

  document.getElementsByClassName("test")[0].innerHTML = text;

  $('.test-button').click(function(event){
    event.preventDefault();
    odpovedi[cisloOtazky-1] = $(this).text();
    cisloOtazky++;
    novaOtazka();
  });

  return true;

}



// popis segmentů

var segmenty = [
  ["Mladý a těkavý"],
  ["Obranář"],
  ["Skutečný křesťan"],
  ["Městský liberál"],
  ["Materialista"],
  ["Levicový (ne)volič"],
  ["Politicky pasivní"]
];



// politický profil

var stranickePreference = [
  ["ČSSD",8.7,18.7,20.2,3.7,31.6,17.0,0.0],
  ["ANO",6.0,22.5,19.5,4.5,42.4,5.1,0.0],
  ["KSČM",3.9,42.7,14.8,0.0,16.7,21.9,0.0],
  ["TOP 09",9.8,5.1,15.7,29.6,29.4,8.5,1.9],
  ["ODS",5.7,9.1,17.5,30.2,35.2,0.5,1.8],
  ["KDU-ČSL",2.7,2.4,58.4,22.6,9.8,4.1,0.0],
  ["Piráti",21.6,10.4,9.2,37.3,10.3,5.4,5.7],
  ["SPD",6.6,49.1,13.9,1.9,21.9,6.5,0.0]
];

var volebniUcast = [
  ["určitě ano",4.6,23.6,23.1,16.2,26.9,5.0,0.6],
  ["spíše ano",12.3,17.0,17.2,9.1,30.7,13.3,0.4],
  ["spíše ne",23.5,7.0,15.6,5.1,21.0,25.1,2.7],
  ["určitě ne",18.4,2.4,4.9,1.1,0.2,23.2,49.7],
  ["neuvedeno",10.0,35.4,29.9,0.9,4.7,12.4,6.6]
]



// demografie

var pohlavi = [
  ["muži",44.4,55.5,35.6,56.4,64.2,32.7,54.3],
  ["ženy",55.6,44.5,64.4,43.6,35.8,67.3,45.7]
]

var vek = [
  ["12-19 let",22.0,0.3,0.3,1.1,0.1,1.2,1.1],
  ["20-29 let",39.8,5.5,9.8,18.7,15.0,7.0,18.2],
  ["30-39 let",19.8,8.6,17.5,27.6,25.1,16.3,24.8],
  ["40-49 let",7.5,14.4,17.9,25.6,25.9,19.8,22.2],
  ["50-59 let",1.7,24.8,18.3,12.1,18.2,20.4,11.4],
  ["60-69 let",5.8,28.8,22.3,12.0,11.9,21.7,12.4],
  ["70-79 let",3.5,17.6,13.8,3.0,3.9,13.6,9.9]
]

var vzdelani = [
  ["základní",36.6,15.7,10.9,3.1,5.1,26.9,17.0],
  ["vyučen/SŠ bez maturity",33.0,35.9,30.6,9.7,38.4,48.0,40.4],
  ["středoškolské s maturitou",25.9,39.0,41.3,33.1,39.9,23.8,34.7],
  ["vysokoškolské",4.5,9.4,17.1,54.1,16.6,1.3,7.9]
]

var prijem = [
  ["bez příjmu",19.9,1.3,2.7,1.8,0.1,1.1,0.5],
  ["do 4000 Kč",9.6,0.1,0.6,1.6,0.0,1.2,0.5],
  ["do 10000 Kč",17.5,12.2,10.8,7.7,2.9,23.1,4.1],
  ["do 15000 Kč",18.3,36.6,33.0,12.2,15.4,34.4,18.0],
  ["do 20000 Kč",10.0,17.4,18.1,18.7,21.3,12.5,19.7],
  ["do 30000 Kč",3.6,12.3,12.6,33.7,32.1,5.0,19.8],
  ["nad 30000 Kč",0.0,4.0,2.3,13.9,13.4,1.0,5.6],
  ["neuvedeno",19.9,16.1,19.9,10.3,14.7,21.7,31.8]
]

var pozice = [
  ["v zaměstnaneckém poměru/OSVČ",39.0,40.5,49.1,61.6,70.0,44.3,63.9],
  ["soukromý podnikatel (vlastník/spoluvlastník firmy)",2.5,4.3,3.0,12.1,10.7,1.7,5.6],
  ["nezaměstnaný",7.6,2.0,2.3,2.2,0.9,5.9,4.1],
  ["studující",27.8,1.4,2.0,6.6,0.8,1.0,1.2],
  ["v domácnosti",10.2,2.6,7.0,6.6,2.6,8.8,5.0],
  ["důchodce (nepracující)",10.6,46.2,34.9,8.5,14.1,35.9,19.3],
  ["jiné/neuvedeno",2.3,3.0,1.7,2.4,0.9,2.4,0.9]
]



// otázky

var verici = [
  ["ano",22.3,28.1,98.5,30.1,2.2,16.5,10.1],
  ["ne",75.1,70.4,0.5,68.6,96.9,81.6,89.0]
]

var polistopadovyVyvoj = [
  ["určitě ano",5.0,1.7,5.8,9.7,5.7,2.8,4.8],
  ["spíše ano",21.0,6.2,25.5,32.1,26.7,7.1,23.4],
  ["ani ano ani ne",36.3,15.1,35.3,37.7,37.4,38.7,36.0],
  ["spíše ne",20.2,30.2,20.9,14.8,18.6,22.3,21.0],
  ["určitě ne",14.3,46.0,10.7,4.6,9.0,27.4,12.2],
  ["neuvedeno",3.2,0.9,1.9,1.1,2.6,1.7,2.7]
]

var tvrdsiZakony = [
  ["určitě ano",9.9,38.7,23.3,9.3,18.6,23.1,19.5],
  ["spíše ano",19.4,28.9,31.0,15.7,36.0,30.5,23.8],
  ["ani ano ani ne",38.1,22.2,29.7,30.0,31.2,27.3,36.8],
  ["spíše ne",19.3,6.0,10.6,31.4,9.4,10.5,12.8],
  ["určitě ne",10.2,2.7,2.4,12.8,2.3,5.3,2.6],
  ["neuvedeno",3.2,1.5,3.0,0.7,2.4,3.4,4.5]
]

var clenstviNATO = [
  ["určitě ano",10.3,5.6,12.1,31.1,10.2,3.6,9.3],
  ["spíše ano",18.3,17.3,28.4,38.6,33.8,12.6,19.1],
  ["ani ano ani ne",37.4,31.8,38.8,24.3,36.8,45.4,47.9],
  ["spíše ne",21.5,17.4,12.8,3.9,12.9,18.2,15.5],
  ["určitě ne",9.9,25.8,5.6,0.7,3.8,16.8,3.1],
  ["neuvedeno",2.6,2.1,2.4,1.5,2.5,3.4,5.2]
]

var volbyOvlivni = [
  ["určitě ano",6.4,15.9,17.4,19.9,16.2,4.6,10.1],
  ["spíše ano",13.3,21.2,35.7,42.3,33.2,15.8,20.2],
  ["ani ano ani ne",32.1,25.5,26.5,21.5,31.8,30.9,35.9],
  ["spíše ne",26.8,21.9,12.2,11.4,11.7,24.7,18.0],
  ["určitě ne",17.6,14.8,5.0,2.9,4.2,20.0,11.1],
  ["neuvedeno",3.7,0.6,3.1,2.0,2.9,3.9,4.6]
]

var konzumniSpolecnost = [
  ["určitě ano",13.6,49.6,26.9,26.8,19.2,30.2,15.5],
  ["spíše ano",24.5,34.3,42.1,48.5,44.4,30.0,25.8],
  ["ani ano ani ne",34.2,14.9,25.6,14.8,27.4,29.4,36.4],
  ["spíše ne",17.9,1.0,2.5,7.5,4.2,4.9,12.1],
  ["určitě ne",7.3,0.1,0.1,0.3,1.3,2.7,4.7],
  ["neuvedeno",2.5,0.2,2.8,2.1,3.5,2.8,5.6]
]

var drogyJsouZlo = [
  ["určitě ano",33.1,87.2,77.4,65.3,60.4,72.4,47.4],
  ["spíše ano",16.2,7.8,7.6,19.4,17.6,6.3,15.9],
  ["ani ano ani ne",23.2,2.7,8.9,9.6,13.6,11.8,18.9],
  ["spíše ne",14.1,0.8,2.5,1.5,3.3,2.7,8.0],
  ["určitě ne",9.9,0.7,1.2,2.2,1.4,3.5,5.5],
  ["neuvedeno",3.5,0.8,2.3,2.1,3.6,3.1,4.3]
]

var clenstviEU = [
  ["určitě ano",7.9,1.5,6.9,19.1,7.2,3.0,4.9],
  ["spíše ano",13.9,5.5,18.3,24.2,21.1,7.4,14.7],
  ["ani ano ani ne",31.0,18.3,38.4,31.7,40.1,31.5,41.1],
  ["spíše ne",24.6,21.0,18.8,19.3,20.1,25.6,19.8],
  ["určitě ne",19.2,52.5,14.8,4.5,8.9,29.2,12.5],
  ["neuvedeno",3.5,1.2,2.8,1.2,2.6,3.3,7.0]
]

var uprchlikyVracet = [
  ["určitě ano",48.3,79.9,41.2,19.4,55.9,70.1,45.0],
  ["spíše ano",31.4,15.5,38.6,31.7,29.6,23.0,35.1],
  ["spíše ne",15.3,3.1,16.3,31.7,11.9,4.1,14.6],
  ["určitě ne",4.1,0.3,3.6,16.3,2.2,2.6,4.4],
  ["neuvedeno",0.9,1.2,0.4,0.8,0.4,0.1,0.8]
]