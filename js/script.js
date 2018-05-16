
// barvy seřazené podle segmentů

var colors = ['#EA614A', '#20649B', '#008836', '#6B96CA', '#A38456', '#A87A93', '#D19C95'];



// proměnné pro test

var cisloOtazky = 1;

var otazky = [
  ["Zúčastnil(a) byste se voleb do Poslanecké sněmovny, kdyby se konaly nyní?", "bar4", "Určitě ano", "Spíše ano", "Spíše ne", "Určitě ne"],
  ["Považujete sám(a) sebe za věřícího člověka?", "bar2", "Ano", "Ne"],
  ["Kolik je vám let?", "bar8", "do 12 let", "12-15 let", "16-24 let", "25-34 let", "35-44 let", "45-54 let", "55-64 let", "nad 65 let"],
  ["Jaký je váš čistý měsíční příjem?", "bar10", "do 4 000 Kč", "4 001 až 8 000 Kč", "8 001 až 10 000 Kč", "10 001 až 12 500 Kč", "12 501 až 15 000 Kč", "15 001 až 17 500 Kč","17 501 až 20 000 Kč", "20 001 až 25 000 Kč", "25 001 až 40 000 Kč", "nad 40 000 Kč"],
  ["Morálka dnešní společnosti mi připadá příliš uvolněná.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Jak jste spokojen(a) se společností, kde žijete?", "bar9", "1 (nejméně)", "2", "3", "4", "5 (středně)", "6", "7", "8", "9 (nejvíce)"],
  ["V životě bych chtěl(a) především dosáhnout vysokého společenského postavení.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Jaké je vaše nejvyšší dosažené vzdělání?", "bar7", "Bez vzdělání", "Základní", "Vyučen/Střední bez maturity", "Střední s maturitou nebo vyučen s maturitou", "VOŠ", "Bakalářské", "Magisterské a vyšší"],
  ["Užívat drogy je špatné.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Jste spokojení se svou životní úrovní?", "bar9", "1 (nejméně)", "2", "3", "4", "5 (středně)", "6", "7", "8", "9 (nejvíce)"],
  ["Členství ČR v Evropské unii mně osobně přináší nové možnosti a příležitosti.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Zajímám se o mezinárodní události.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["S vývojem, který proběhl v ČR od listopadu 1989, jsem spokojen(a).", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Současná politika se řídí morálními zásadami.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["EU by měla uprchlíky okamžitě vracet do státu, ze kterého přišli", "bar4", "Určitě ano", "Spíše ano", "Spíše ne", "Určitě ne"],
  ["Téměř každý den sleduji vývoj na naší politické scéně.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Úpadek naší společnosti může být zastaven pouze prosazením tvrdších zákonů.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Křesťanské zásady mají trvalou platnost.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Stát by měl zabezpečit přijatelnou životní úroveň pro každého.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Trh by měl být omezovaný zásahem státu.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
];

// inicializace mediánovým voličem
var odpovedi = [0, 1, 1, 54, 4, 3, 5, 3, 8, 3, 2, 1, 3, 5, 1, 1, 4, 4, 1, 1, 4];

var segmenty = [
  ["Levicový (ne)volič", 0.142],
  ["Materialista", 0.142],
  ["Městský liberál", 0.142],
  ["Mladý těkavý", 0.142],
  ["Obranář", 0.142],
  ["Politicky pasivní", 0.142],
  ["Skutečný křesťan", 0.142]
];



// výsledek testu

var indexSkupiny = [];

var indexOstatnichSkupin = [];

// ***
// změnit za jen některé
// ***
var otazkyKTestovani = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var vyhodnoceni = false;


// data pro grafy: politický profil

var indexStrany = [
  ["ANO",37,218.7,48.8,49.7,153,0.1,121.6],
  ["ČSSD",122.7,163.1,40.4,72.5,127.2,0,126.2],
  ["KDU-ČSL",29.3,50.4,244.7,22.4,16.6,0,364.4],
  ["KSČM",157.4,86.2,0,32.4,291.1,0,92.4],
  ["ODS",3.5,181.3,327,47.5,62.1,12.5,109],
  ["Piráti",39,53.2,403.7,180.4,71,38.3,57.6],
  ["SPD",46.7,113.2,21,54.7,334.6,0,86.9],
  ["TOP 09",61.3,151.5,320,82,34.6,12.9,98]
];

var strany = indexStrany.map(function(d) {
        return d[0];
    });

var volebniUcast = [
  ["určitě ano",14.6,56.1,70.8,15.6,65.1,1.6,58.4,40.5],
  ["spíše ano",19.9,33,20.4,21.4,24.1,0.6,22.3,20.8],
  ["spíše ne",17.3,10.4,5.3,18.8,4.6,1.8,9.3,9.6],
  ["určitě ne",47.6,0.3,3.3,43.7,4.7,95.7,8.7,28.4],
  ["neuvedeno",0.6,0.2,0.1,0.5,1.5,0.3,1.2,0.6]
];

var odpovediUcast = volebniUcast.map(function(d) {
        return d[0];
    });

// ***
// upravit nebo dát pryč
// ***
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



// data pro grafy: demografie

var pohlavi = [
  ["Muži",32.7,64.2,56.4,44.4,55.5,54.3,35.6,49.4],
  ["Ženy",67.3,35.8,43.6,55.6,44.5,45.7,64.4,50.6]
];

var odpovediPohlavi = pohlavi.map(function(d) {
        return d[0];
    });

var vek = [
  ["12-19 let",1.2,0.1,1.1,22.0,0.3,1.1,0.3,3.2],
  ["20-29 let",7.0,15.0,18.7,39.8,5.5,18.2,9.8,15.4],
  ["30-39 let",16.3,25.1,27.6,19.8,8.6,24.8,17.5,19.8],
  ["40-49 let",19.8,25.9,25.6,7.5,14.4,22.2,17.9,19.3],
  ["50-59 let",20.4,18.2,12.1,1.7,24.8,11.4,18.3,16.0],
  ["60-69 let",21.7,11.9,12.0,5.8,28.8,12.4,22.3,16.7],
  ["70-79 let",13.6,3.9,3.0,3.5,17.6,9.9,13.8,9.6]
];

var odpovediVek = vek.map(function(d) {
        return d[0];
    });

var vzdelani = [
  ["základní",26.9,5.1,3.1,36.6,15.7,17.0,10.9,15.9],
  ["vyučen/bez maturity",48.0,38.4,9.7,33.0,35.9,40.4,30.6,35.1],
  ["s maturitou",23.8,39.9,33.1,25.9,39.0,34.7,41.3,34.7],
  ["vysokoškolské",1.3,16.6,54.1,4.5,9.4,7.9,17.1,14.2]
];

var odpovediVzdelani = vzdelani.map(function(d) {
        return d[0];
    });

var prijem = [
  ["bez příjmu",1.1,0.1,1.8,19.9,1.3,0.5,2.7,3.4],
  ["do 4 tisíc",1.2,0,1.6,9.6,0.1,0.5,0.6,1.6],
  ["do 10 tisíc",23.1,2.9,7.7,17.5,12.2,4.1,10.8,10.7],
  ["do 15 tisíc",34.5,15.4,12.3,18.4,36.6,17.9,33,24.5],
  ["do 20 tisíc",12.4,21.4,19.8,9.9,17.4,19.7,18.1,17.2],
  ["do 30 tisíc",5,32.1,33.7,3.6,12.3,19.8,12.6,21.1],
  ["nad 30 tisíc",1,13.4,14,0,3.9,5.6,2.2,5.8],
  ["neuvedeno",21.7,14.7,10.3,21.2,16.1,31.8,19.9,19.6]
];

var odpovediPrijem = prijem.map(function(d) {
        return d[0];
    });

var pozice = [
  ["zaměstn./OSVČ",44.3,70,61.7,39,40.5,63.8,49.1,53.4],
  ["podnikatel",1.7,10.7,12.1,2.6,4.2,5.6,3,5.6],
  ["nezaměstnaný",5.9,0.9,2.2,7.6,2,4.1,2.3,3.4],
  ["studující",1,0.8,6.6,27.8,1.4,1.2,2,4.9],
  ["v domácnosti",8.8,2.6,6.6,10.2,2.6,5,7,5.8],
  ["důchodce",35.9,14.1,8.5,10.6,46.2,19.3,34.9,25.0],
  ["jiné/neuvedeno",2.4,0.9,2.4,2.3,3,1,1.7,1.9]
];

var odpovediPozice = pozice.map(function(d) {
        return d[0];
    });



// data pro grafy: ostatní otázky

// ***
// všechny upravit nebo dát pryč
// ***
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



// funkce pro kvíz

function novaOtazka() {

  var otazka = otazky[cisloOtazky-1];

  var progres = (cisloOtazky-1) / 20 * 100 + '%';

  var barvy = [];
  if (otazka[1] == 'bar2') {
    barvy = ['#dfc27d','#80cdc1'];
    barvy.reverse();
  } else if (otazka[1] == 'bar4') {
    barvy = ['#a6611a','#dfc27d','#80cdc1','#018571'];
    barvy.reverse();
  } else if (otazka[1] == 'bar5') {
    barvy = ['#a6611a','#dfc27d','#cccccc','#80cdc1','#018571'];
    barvy.reverse();
  } else if (otazka[1] == 'bar7') {
    barvy = ['#8c510a','#d8b365','#f6e8c3','#cccccc','#c7eae5','#5ab4ac','#01665e'];
    barvy.reverse();
  } else if (otazka[1] == 'bar8') {
    barvy = ['#8c510a','#bf812d','#dfc27d','#f6e8c3','#c7eae5','#80cdc1','#35978f','#01665e'];
    barvy.reverse();
  } else if (otazka[1] == 'bar9') {
    barvy = ['#8c510a','#bf812d','#dfc27d','#f6e8c3','#cccccc','#c7eae5','#80cdc1','#35978f','#01665e'];
    barvy.reverse();
  } else if (otazka[1] == 'bar10') {
    barvy = ['#543005','#8c510a','#bf812d','#dfc27d','#f6e8c3','#c7eae5','#80cdc1','#35978f','#01665e','#003c30'];
    barvy.reverse();
  }

  var text = '<div class="otazka">';
  text += '<p>Otázka ' + cisloOtazky + '</p>';
  text += '<div class="progresbar"></div>';
  text += '<h3>' + otazka[0] + '</h3>';
  text += '<div class="buttons">';

  for (var i = 2; i < otazka.length; i++) {
    text += '<button class="test-button" type="button" disabled="disabled" value="' + parseInt(i-1) + '" style="opacity:0.3; background-color:' + barvy[i-2] + '">' + otazka[i] + '</button>';
  }

  text += '</div>';

  document.getElementsByClassName("test")[0].innerHTML = text;

  $('.progresbar').css('width', progres);

  $('.test-button').click(function(event){
    event.preventDefault();
    // spešl chování u věku
    if (cisloOtazky == 3) {
      var odpoved = $(this)[0].value;
      if (odpoved == '1') {
        odpovedi[cisloOtazky-1] = 12;
      } else if (odpoved == '2') {
        odpovedi[cisloOtazky-1] = 14;
      } else if (odpoved == '3') {
        odpovedi[cisloOtazky-1] = 20;
      } else if (odpoved == '4') {
        odpovedi[cisloOtazky-1] = 30;
      } else if (odpoved == '5') {
        odpovedi[cisloOtazky-1] = 40;
      } else if (odpoved == '6') {
        odpovedi[cisloOtazky-1] = 50;
      } else if (odpoved == '7') {
        odpovedi[cisloOtazky-1] = 60;
      } else if (odpoved == '8') {
        odpovedi[cisloOtazky-1] = 65;
      }
    } else {
      odpovedi[cisloOtazky-1] = parseInt($(this)[0].value);
    }

//console.log('číslo otázky: ' + cisloOtazky); console.log('odpovedi: ' + odpovedi); console.log('segmenty: ' + segmenty); console.log('top segment: ' + indexSkupiny);

    // asynchronně nahoď otázku
    if (cisloOtazky < 20) {
      cisloOtazky++;
      novaOtazka();
    } else {
      vyhodnoceni = true;
    }

    // synchronně spočítej odpověď; jen po některých otázkách
    var postInput = 'https://d24y44bifobrtj.cloudfront.net/?arr=[' + odpovedi + ']';

    if ((cisloOtazky-1) in otazkyKTestovani) {

      $.getJSON(postInput, function(data) {
        var postOutput = data;

        // přehození pořadí výstupů
        segmenty[3][1] = postOutput[0];
        segmenty[4][1] = postOutput[1];
        segmenty[6][1] = postOutput[2];
        segmenty[2][1] = postOutput[3];
        segmenty[1][1] = postOutput[4];
        segmenty[0][1] = postOutput[5];
        segmenty[5][1] = postOutput[6];

        prepocitejIndexSkupiny();
        $('.test-button').animate({'opacity':'1'}, 1000);

        zmenVelikosti();

        prekresliGrafy();

        if (vyhodnoceni) {
          vyhodnotTest();
        }

//console.log('číslo otázky: ' + cisloOtazky); console.log('odpovedi: ' + odpovedi); console.log('segmenty: ' + segmenty); console.log('top segment: ' + indexSkupiny);

      });

    }

});

  return true;

}



function prepocitejIndexSkupiny() {

  var poleSegmentu = [];

  poleSegmentu = segmenty.map(function(d) {
        return d[1];
    });

  indexSkupiny = poleSegmentu.indexOf(Math.max(...poleSegmentu));

  indexOstatnichSkupin = [0, 1, 2, 3, 4, 5, 6];
  indexOstatnichSkupin.splice(indexOstatnichSkupin.indexOf(indexSkupiny), 1);

  $(".test-button").attr("disabled",false);

  return true;
}



function zmenVelikosti() {

  // přepočet šířky fotek, aby nebyly gargantuovské ani nemizely
  var poleSegmentu = segmenty.map(function(d) {
        return d[1];
    });

  for (var i = 0; i < poleSegmentu.length; i++) {
    poleSegmentu[i] = Math.max(poleSegmentu[i], 0.05);
    poleSegmentu[i] = Math.min(poleSegmentu[i], 0.4);
  }



  // Levicový (ne)volič
  var img = document.querySelectorAll(".skupina .fotka img")[0];
  img.style.width = 80 * poleSegmentu[0] + '%';

  // Materialista
  var img = document.querySelectorAll(".skupina .fotka img")[1];
  img.style.width = 80 * poleSegmentu[1] + '%';

  // Městský liberál
  var img = document.querySelectorAll(".skupina .fotka img")[2];
  img.style.width = 80 * poleSegmentu[2] + '%';

  // Mladý a těkavý
  var img = document.querySelectorAll(".skupina .fotka img")[3];
  img.style.width = 80 * poleSegmentu[3] + '%';

  // Obranář
  var img = document.querySelectorAll(".skupina .fotka img")[4];
  img.style.width = 80 * poleSegmentu[4] + '%';

  // Politicky pasivní
  var img = document.querySelectorAll(".skupina .fotka img")[5];
  img.style.width = 80 * poleSegmentu[5] + '%';

  // Skutečný křesťan
  var img = document.querySelectorAll(".skupina .fotka img")[6];
  img.style.width = 80 * poleSegmentu[6] + '%';

  return true;

}



function vyhodnotTest() {

  var segmentObjekt = objectify(segmenty);

  let serazeneSegmenty = Object.keys(segmentObjekt);

  serazeneSegmenty.sort(function(a, b) {
    return segmentObjekt[a] - segmentObjekt[b];
  });

  serazeneSegmenty.reverse();

  var serazeneVysledky = segmenty.map(function(d) {
    return d[1];
  });

  serazeneVysledky.sort().reverse();

  var text = '<div class="vyhodnoceni">';
  text += '<h3>Podle modelu Medianu jste</h3>';
  text += '<div class="vyhodnoceni-skupina" style="background-color:' + '#01665e' + '">' + serazeneSegmenty[0] + ': ' + Math.round(1000*serazeneVysledky[0],3)/10 + ' %</div>';
  text += '<div class="vyhodnoceni-skupina" style="background-color:' + '#5ab4ac' + '">' + serazeneSegmenty[1] + ': ' + Math.round(1000*serazeneVysledky[1],3)/10 + ' %</div>';
  text += '<div class="vyhodnoceni-skupina" style="background-color:' + '#c7eae5' + '">' + serazeneSegmenty[2] + ': ' + Math.round(1000*serazeneVysledky[2],3)/10 + ' %</div>';
  text += '<div class="vyhodnoceni-skupina" style="background-color:' + '#dddddd' + '">' + serazeneSegmenty[3] + ': ' + Math.round(1000*serazeneVysledky[3],3)/10 + ' %</div>';
  text += '<div class="vyhodnoceni-skupina" style="background-color:' + '#f6e8c3' + '">' + serazeneSegmenty[4] + ': ' + Math.round(1000*serazeneVysledky[4],3)/10 + ' %</div>';
  text += '<div class="vyhodnoceni-skupina" style="background-color:' + '#d8b365' + '">' + serazeneSegmenty[5] + ': ' + Math.round(1000*serazeneVysledky[5],3)/10 + ' %</div>';
  text += '<div class="vyhodnoceni-skupina" style="background-color:' + '#8c510a' + '">' + serazeneSegmenty[6] + ': ' + Math.round(1000*serazeneVysledky[6],3)/10 + ' %</div>';
  text += '</div>';
  document.getElementsByClassName("test")[0].innerHTML = text;

  return true;

}

// grafy

function prekresliGrafy() {

Highcharts.chart('koho-voli', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Koho volí vaše skupina?'
    },
    xAxis: {
        categories: strany
    },
    yAxis: {
        title: {
            text: 'Index (průměrný volič = 100)'
        },
        labels: {
            format: '{value}'
        }
    },
    tooltip: {
        formatter: function() {
            if (this.y == 0) {
                return 'Pravděpodobnost volby ' + this.x + ' <b>se blíží nule</b>';
            } else if (this.y >= 100) {
                return 'Pravděpodobnost volby ' + this.x + ' je <b>' + Math.round(this.y/10, 2)/10 + '× vyšší ▲</b> než u průměrného voliče';
            } else if (this.y < 100) {
                return 'Pravděpodobnost volby ' + this.x + ' je <b>' + Math.round(1/this.y*1000, 2)/10 + '× nižší ▼</b> než u průměrného voliče';
            }
        },
        crosshairs: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href : '',
        text : 'Zdroj: Median'
    },
    plotOptions: {
    },
    series: [{
        name: segmenty[indexSkupiny][0],
        data: indexStrany.map(function(d) {
            return d[indexSkupiny + 1];
        }),
        color: colors[indexSkupiny]
    }, {
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: colors[indexOstatnichSkupin[0]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: colors[indexOstatnichSkupin[1]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: colors[indexOstatnichSkupin[2]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: colors[indexOstatnichSkupin[3]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: colors[indexOstatnichSkupin[4]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: colors[indexOstatnichSkupin[5]],
        visible: false
    }]
});

Highcharts.chart('volebni-ucast', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jak poctivě chodíte k volbám?'
    },
    xAxis: {
        categories: odpovediUcast
    },
    yAxis: {
        title: {
            text: '% odpovědí'
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: {point.y}' + ' %' + '<br/>',
        crosshairs: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
    },
    series: [{
        name: segmenty[indexSkupiny][0],
        data: volebniUcast.map(function(d) {
            return d[indexSkupiny + 1];
        }),
        color: colors[indexSkupiny]
    }, {
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: colors[indexOstatnichSkupin[0]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: colors[indexOstatnichSkupin[1]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: colors[indexOstatnichSkupin[2]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: colors[indexOstatnichSkupin[3]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: colors[indexOstatnichSkupin[4]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: colors[indexOstatnichSkupin[5]],
        visible: false
    }, {
        name: 'Celá populace',
        data: volebniUcast.map(function(d) {
            return d[8];
        }),
        color: '#fff',
        borderWidth: 1,
        borderColor: '#000'
    }]
});

Highcharts.chart('demo-pohlavi', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Pohlaví',
        align: 'right',
        x: -30
    },
    xAxis: {
        categories: odpovediPohlavi
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: {point.y}' + ' %' + '<br/>',
        crosshairs: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'middle',
        floating: false
    },
    plotOptions: {
        series: {
            events: {
                legendItemClick: function (event) {
                    var vek = $('#demo-vek').highcharts(),
                        series = vek.get(this.options.id)

                    if (series) {
                        if (this.visible) {
                            series.hide();
                        } else {
                            series.show();
                        }
                    }

                    var vzdelani = $('#demo-vzdelani').highcharts(),
                        series = vzdelani.get(this.options.id)

                    if (series) {
                        if (this.visible) {
                            series.hide();
                        } else {
                            series.show();
                        }
                    }

                    var prijem = $('#demo-prijem').highcharts(),
                        series = prijem.get(this.options.id)

                    if (series) {
                        if (this.visible) {
                            series.hide();
                        } else {
                            series.show();
                        }
                    }

                    var pozice = $('#demo-pozice').highcharts(),
                        series = pozice.get(this.options.id)

                    if (series) {
                        if (this.visible) {
                            series.hide();
                        } else {
                            series.show();
                        }
                    }
                }
            }
        }
    },
    series: [{
        id: 'demo1',
        name: segmenty[indexSkupiny][0],
        data: pohlavi.map(function(d) {
            return d[indexSkupiny + 1];
        }),
        color: colors[indexSkupiny]
    }, {
        id: 'demo2',
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: colors[indexOstatnichSkupin[0]],
        visible: false
    }, {
        id: 'demo3',
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: colors[indexOstatnichSkupin[1]],
        visible: false
    }, {
        id: 'demo4',
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: colors[indexOstatnichSkupin[2]],
        visible: false
    }, {
        id: 'demo5',
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: colors[indexOstatnichSkupin[3]],
        visible: false
    }, {
        id: 'demo6',
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: colors[indexOstatnichSkupin[4]],
        visible: false
    }, {
        id: 'demo7',
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: colors[indexOstatnichSkupin[5]],
        visible: false
    }, {
        id: 'demo8',
        name: 'Celá populace',
        data: pohlavi.map(function(d) {
            return d[8];
        }),
        color: '#fff',
        borderWidth: 1,
        borderColor: '#000'
    }]
});

Highcharts.chart('demo-vek', {
    chart: {
        type: 'column',
        marginBottom: 100
    },
    title: {
        text: 'Věk'
    },
    xAxis: {
        categories: odpovediVek
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: {point.y}' + ' %' + '<br/>',
        crosshairs: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        id: 'demo1',
        name: segmenty[indexSkupiny][0],
        data: vek.map(function(d) {
            return d[indexSkupiny + 1];
        }),
        color: colors[indexSkupiny]
    }, {
        id: 'demo2',
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: colors[indexOstatnichSkupin[0]],
        visible: false
    }, {
        id: 'demo3',
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: colors[indexOstatnichSkupin[1]],
        visible: false
    }, {
        id: 'demo4',
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: colors[indexOstatnichSkupin[2]],
        visible: false
    }, {
        id: 'demo5',
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: colors[indexOstatnichSkupin[3]],
        visible: false
    }, {
        id: 'demo6',
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: colors[indexOstatnichSkupin[4]],
        visible: false
    }, {
        id: 'demo7',
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: colors[indexOstatnichSkupin[5]],
        visible: false
    }, {
        id: 'demo8',
        name: 'Celá populace',
        data: vek.map(function(d) {
            return d[8];
        }),
        color: '#fff',
        borderWidth: 1,
        borderColor: '#000'
    }]
});

Highcharts.chart('demo-vzdelani', {
    chart: {
        type: 'column',
        marginBottom: 100
    },
    title: {
        text: 'Vzdělání'
    },
    xAxis: {
        categories: odpovediVzdelani
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: {point.y}' + ' %' + '<br/>',
        crosshairs: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        id: 'demo1',
        name: segmenty[indexSkupiny][0],
        data: vzdelani.map(function(d) {
            return d[indexSkupiny + 1];
        }),
        color: colors[indexSkupiny]
    }, {
        id: 'demo2',
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: colors[indexOstatnichSkupin[0]],
        visible: false
    }, {
        id: 'demo3',
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: colors[indexOstatnichSkupin[1]],
        visible: false
    }, {
        id: 'demo4',
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: colors[indexOstatnichSkupin[2]],
        visible: false
    }, {
        id: 'demo5',
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: colors[indexOstatnichSkupin[3]],
        visible: false
    }, {
        id: 'demo6',
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: colors[indexOstatnichSkupin[4]],
        visible: false
    }, {
        id: 'demo7',
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: colors[indexOstatnichSkupin[5]],
        visible: false
    }, {
        id: 'demo8',
        name: 'Celá populace',
        data: vzdelani.map(function(d) {
            return d[8];
        }),
        color: '#fff',
        borderWidth: 1,
        borderColor: '#000'
    }]
});

Highcharts.chart('demo-prijem', {
    chart: {
        type: 'column',
        marginBottom: 100
    },
    title: {
        text: 'Příjem'
    },
    xAxis: {
        categories: odpovediPrijem
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: {point.y}' + ' %' + '<br/>',
        crosshairs: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        id: 'demo1',
        name: segmenty[indexSkupiny][0],
        data: prijem.map(function(d) {
            return d[indexSkupiny + 1];
        }),
        color: colors[indexSkupiny]
    }, {
        id: 'demo2',
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: colors[indexOstatnichSkupin[0]],
        visible: false
    }, {
        id: 'demo3',
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: colors[indexOstatnichSkupin[1]],
        visible: false
    }, {
        id: 'demo4',
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: colors[indexOstatnichSkupin[2]],
        visible: false
    }, {
        id: 'demo5',
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: colors[indexOstatnichSkupin[3]],
        visible: false
    }, {
        id: 'demo6',
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: colors[indexOstatnichSkupin[4]],
        visible: false
    }, {
        id: 'demo7',
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: colors[indexOstatnichSkupin[5]],
        visible: false
    }, {
        id: 'demo8',
        name: 'Celá populace',
        data: prijem.map(function(d) {
            return d[8];
        }),
        color: '#fff',
        borderWidth: 1,
        borderColor: '#000'
    }]
});

Highcharts.chart('demo-pozice', {
    chart: {
        type: 'column',
        marginBottom: 100
    },
    title: {
        text: 'Pracovní pozice'
    },
    xAxis: {
        categories: odpovediPozice
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: {point.y}' + ' %' + '<br/>',
        crosshairs: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        id: 'demo1',
        name: segmenty[indexSkupiny][0],
        data: pozice.map(function(d) {
            return d[indexSkupiny + 1];
        }),
        color: colors[indexSkupiny]
    }, {
        id: 'demo2',
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: colors[indexOstatnichSkupin[0]],
        visible: false
    }, {
        id: 'demo3',
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: colors[indexOstatnichSkupin[1]],
        visible: false
    }, {
        id: 'demo4',
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: colors[indexOstatnichSkupin[2]],
        visible: false
    }, {
        id: 'demo5',
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: colors[indexOstatnichSkupin[3]],
        visible: false
    }, {
        id: 'demo6',
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: colors[indexOstatnichSkupin[4]],
        visible: false
    }, {
        id: 'demo7',
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: colors[indexOstatnichSkupin[5]],
        visible: false
    }, {
        id: 'demo8',
        name: 'Celá populace',
        data: pozice.map(function(d) {
            return d[8];
        }),
        color: '#fff',
        borderWidth: 1,
        borderColor: '#000'
    }]
});

  return true;

}



function objectify(array) {
  return array.reduce(function(p, c) {
    p[c[0]] = c[1];
      return p;
  }, {});
}


// inicializace kvízu

novaOtazka();
$('.test-button').animate({'opacity':'1'}, 1000);
prepocitejIndexSkupiny();
zmenVelikosti();
prekresliGrafy();

