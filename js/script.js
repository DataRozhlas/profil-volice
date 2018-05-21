
// barvy seřazené podle segmentů

var barvySkupiny = ['#EA614A', '#20649B', '#008836', '#6B96CA', '#A38456', '#A87A93', '#D19C95'];

var barvyCudliky = {
  "bar2": ["#018571", "#a6611a"],
  "bar4": ["#018571", "#80cdc1", "#dfc27d", "#a6611a"],
  "bar5": ["#018571", "#80cdc1", "#aaaaaa", "#dfc27d", "#a6611a"],
  "bar6": ["#01665e", "#42918a", "#82bcb6", "#c19c66", "#a67638", "#8c510a"],
  "bar7": ["#01665e", "#42918a", "#82bcb6", "#aaaaaa", "#c19c66", "#a67638", "#8c510a"],
  "bar9": ["#8c510a", "#9d6a29", "#af8347", "#c09c66", "#aaaaaa", "#75b3ad", "#4e9a93", "#288078", "#01665e"],
  "bar10": ["#003c30", "#1c5449", "#3f7369", "#5a8b83", "#7daaa2", "#b29c74", "#987e55", "#83663c", "#69481e", "#543005"]
};



// proměnné pro test

var cisloOtazky = 1;

var stamp = Date.now() + Math.floor(Math.random() * 10000);

var otazky = [
  ["Zúčastnil(a) byste se voleb do Poslanecké sněmovny, kdyby se konaly nyní?", "bar4", "Určitě ano", "Spíše ano", "Spíše ne", "Určitě ne"],
  ["Považujete sám(a) sebe za věřícího člověka?", "bar2", "Ano", "Ne"],
  ["Kolik je vám let?", "bar6", "18-24 let", "25-34 let", "35-44 let", "45-54 let", "55-64 let", "nad 65 let"],
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
  ["EU by měla uprchlíky okamžitě vracet do státu, ze kterého přišli.", "bar4", "Určitě ano", "Spíše ano", "Spíše ne", "Určitě ne"],
  ["Téměř každý den sleduji vývoj na naší politické scéně.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Úpadek naší společnosti může být zastaven pouze prosazením tvrdších zákonů.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Křesťanské zásady mají trvalou platnost.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Stát by měl zabezpečit přijatelnou životní úroveň pro každého.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"],
  ["Trh by měl být omezovaný zásahem státu.", "bar5", "Určitě ano", "Spíše ano", "Ani ano ani ne", "Spíše ne", "Určitě ne"]
];

// inicializace mediánovým voličem
var odpovedi = [0, 2, 2, 4, 7, 2, 6, 3, 4, 1, 6, 3, 3, 3, 4, 1, 3, 3, 3, 2, 3];

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

var otazkyKTestovani = [5, 10, 15, 20];

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

var stranickePreference = [
  ["ČSSD",17.0,31.6,3.7,8.7,18.7,0,20.2],
  ["ANO",5.1,42.4,4.5,6.0,22.5,0,19.5],
  ["KSČM",21.9,16.7,0,3.9,42.7,0,14.8],
  ["TOP 09",8.5,29.4,29.6,9.8,5.1,1.9,15.7],
  ["ODS",0.5,35.2,30.2,5.7,9.1,1.8,17.5],
  ["KDU-ČSL",4.1,9.8,22.6,2.7,2.4,0,58.4],
  ["Piráti",5.4,10.3,37.3,21.6,10.4,5.7,9.2],
  ["SPD",6.5,21.9,1.9,6.6,49.1,0,13.9]
];

var stranickePreferenceNames = stranickePreference.map(function(d) {
        return d[0];
    });



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



// funkce pro kvíz

function novaOtazka() {

  var otazka = otazky[cisloOtazky-1];

  var progres = cisloOtazky / 20 * 100 + '%';

  var barvy = barvyCudliky[otazka[1]];

  // hlavička otázky
  var text = '<div class="otazka">';
  text += '<div id="pandulaci"></br></div>';
  text += '<p>Otázka ' + cisloOtazky + '</p>';
  text += '<div class="progresbar"></div>';
  text += '<h3>' + otazka[0] + '</h3>';
  text += '<div class="buttons">';

  // čudlíky s odpověďmi
  for (var i = 2; i < otazka.length; i++) {
    text += '<button class="test-button" type="button" disabled value="' + parseInt(i-1) + '" style="opacity:0.3; background-color:' + barvy[i-2] + '">' + otazka[i] + '</button>';
  }

  // vracecí čudlík
  if (cisloOtazky > 1) {
    text += '<button class="test-button" type="button" id="zpet" disabled style="opacity:0.3; background-color:white; color:#999999; border: 1px solid #999999;">ZPĚT</button>';
  }

  text += '</div>';

  document.getElementsByClassName("test")[0].innerHTML = text;

  // změna šířky progresbaru
  $('.progresbar').css('width', progres);

  // kliknutí na tlačítko
  $('.test-button').click(function(event){

    event.preventDefault();

    // zaznamenání odpovědi; spešl chování u věku
    if (cisloOtazky == 3) {

      var odpoved = $(this)[0].value;

      if (odpoved == '1') {
        odpovedi[cisloOtazky] = 21;
      } else if (odpoved == '2') {
        odpovedi[cisloOtazky] = 30;
      } else if (odpoved == '3') {
        odpovedi[cisloOtazky] = 40;
      } else if (odpoved == '4') {
        odpovedi[cisloOtazky] = 50;
      } else if (odpoved == '5') {
        odpovedi[cisloOtazky] = 60;
      } else if (odpoved == '6') {
        odpovedi[cisloOtazky] = 65;
      }

    // zaznamenání odpovědi; standardní chování
    } else {
      if (!isNaN(parseInt($(this)[0].value))) {
        odpovedi[cisloOtazky] = parseInt($(this)[0].value);
      }
    }

    // kliknutí na čudlík zpět posune počítadlo -1 a nahodí otázku
    if ($(this)[0].id == 'zpet') {
      cisloOtazky--;
      novaOtazka();

    // kliknutí na odpověď (kromě poslední) posune počítadlo +1 a nahodí otázku
    } else if (cisloOtazky < 20) {
      cisloOtazky++;
      novaOtazka();

    // kliknutí na poslední odpověď nahodí výsledek
    } else {
      cisloOtazky++;
      vyhodnoceni = true;
    }

    ozivCudliky();

    // spočítej odpověď a překresli; synchronně, jen po některých otázkách
    if ($.inArray(cisloOtazky-1, otazkyKTestovani) != -1) {

      var postInput = 'https://d24y44bifobrtj.cloudfront.net/?arr=[' + odpovedi + ']';

      $.getJSON(postInput, function(data) {

        var postOutput = data;

        // zaznamenej nové rozdělení do segmentů
        segmenty[3][1] = postOutput[0];
        segmenty[4][1] = postOutput[1];
        segmenty[6][1] = postOutput[2];
        segmenty[2][1] = postOutput[3];
        segmenty[1][1] = postOutput[4];
        segmenty[0][1] = postOutput[5];
        segmenty[5][1] = postOutput[6];

        // urči dominantní segment
        prepocitejIndexSkupiny();

        // změň velikost panáčků
        zmenVelikosti();

        // aktualizovali jsme panďuláky
        var text = '<div id="pandulaci"><p style="color:#cc0000">AKTUALIZOVALI JSME PRŮBĚŽNÉ VÝSLEDKY A GRAFY V ČLÁNKU</p></div>';
        document.getElementById("pandulaci").innerHTML = text;

        // překresli grafy
        prekresliGrafy();

        // po poslední otázce nahoď vyhodnocení
        if (vyhodnoceni) {
          zalogujVysledek();
          vyhodnotTest();
        }


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

  indexSkupiny = poleSegmentu.indexOf(Math.max.apply(null,poleSegmentu));

  indexOstatnichSkupin = [0, 1, 2, 3, 4, 5, 6];
  indexOstatnichSkupin.splice(indexOstatnichSkupin.indexOf(indexSkupiny), 1);

  return true;

}



function zmenVelikosti() {

  // přepočet šířky fotek, aby nebyly gargantuovské ani nemizely

  // odmocnění, aby se velikosti srovnaly
  var poleSegmentu = segmenty.map(function(d) {
        return Math.sqrt(Math.sqrt(d[1]));
  });

  // srovnání zpět na 100 procent
  var sumaFotek = eval(poleSegmentu.join('+'));
  for (var i = 0; i < poleSegmentu.length; i++) {
    poleSegmentu[i] = poleSegmentu[i]/sumaFotek;
  }

  // ořezání extrémních rozměrů
  for (var i = 0; i < poleSegmentu.length; i++) {
    poleSegmentu[i] = Math.max(poleSegmentu[i], 0.07);
    poleSegmentu[i] = Math.min(poleSegmentu[i], 0.2);
  }

  // opět srovnání na 100 procent
  sumaFotek = eval(poleSegmentu.join('+'));
  for (var i = 0; i < poleSegmentu.length; i++) {
    poleSegmentu[i] = poleSegmentu[i]/sumaFotek;
  }

  // a změna velikosti, maximum je 80 procent šířky
  for (var i = 0; i < poleSegmentu.length; i++) {
    var img = document.querySelectorAll(".skupina .fotka img")[i];
    img.style.width = 80 * poleSegmentu[i] + '%';
  }

  return true;

}



function nicenum(num) {

  return (Math.round(1000*num,3)/10).toString().replace(".",",");

}



function ozivCudliky() {

  $(".test-button").removeAttr("disabled");
  $('.test-button').animate({'opacity':'1'}, 1000);

}



function zalogujVysledek() {
   $.ajax({
                url: "https://r0e3ykepmd.execute-api.eu-central-1.amazonaws.com/prod",
                type: "POST",
                crossDomain: !0,
                contentType: "application/json",
                data: JSON.stringify({ "uid": stamp, "resp": odpovedi.toString(), "ok": 0 }),
                dataType: "json"
  });
}



function vyhodnotTest() {

  // neseřazené hodnoty (pro share): levicový nevolič, materialista, městský liberál, mladý těkavý, obranář, politicky pasivní, skutečný křesťan
  var sdileciVysledky = segmenty.map(function(d) {
    return Math.round(1000*d[1],3)/10;
  });

  // seřazení výsledků; ve výpisu pak nicenum() pro pěkná procenta
  var serazeneSegmenty = segmenty.sort(function(a,b){return b[1] - a[1]});

  // vygenerování vyhodnocení
  var sdileciURL = "https://www.facebook.com/sharer/sharer.php?u=https://www.irozhlas.cz/zpravy-domov/data-median-prokop-segmentace-volby-autoritari-liberalove_1805210740_cib"
  var text = '<div class="vyhodnoceni">';
  text += '<h3>Podle modelu Medianu jste</h3>';
  for(var i = 0; i < 7; i++) {
    text += '<div class="vyhodnoceni-skupina" style="background-color:' + barvyCudliky.bar7[i] + '">' + serazeneSegmenty[i][0] + ': ' + nicenum(serazeneSegmenty[i][1]) + ' %</div>';
  }
  text += '<button id="sdilitko">Sdílet</button>';

  $(".test").html(text);

  $("#sdilitko").click(function() {
    window.open(sdileciURL,'test','left=20,top=20,width=550,height=650,toolbar=0,resizable=0,menubar=0');
  });

  // sdílítko - defaultní URL článku se dynamicky nahradí vygenerovanou
  $.ajax({
    url: "https://s0zqrf2j0b.execute-api.eu-central-1.amazonaws.com/prod?arr=[" + sdileciVysledky.toString() + "]",
    type: "GET",
    crossDomain: !0,
    dataType: "json",
    success: function (response) {
      sdileciURL = "https://www.facebook.com/sharer/sharer.php?u=https://dev.datarozhlas.cz/profil-volice/share/" + response + ".html";
      $("#sdilitko").click(function() {
        window.open(sdileciURL,'test','left=20,top=20,width=550,height=650,toolbar=0,resizable=0,menubar=0');
      });
    }
  });

}



// grafy

function prekresliGrafy() {

Highcharts.chart('koho-voli', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Koho volíte?'
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
        color: barvySkupiny[indexSkupiny]
    }, {
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[0]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[1]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[2]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[3]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[4]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: indexStrany.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[5]],
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
        color: barvySkupiny[indexSkupiny]
    }, {
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[0]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[1]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[2]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[3]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[4]],
        visible: false
    }, {
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: volebniUcast.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[5]],
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
        color: barvySkupiny[indexSkupiny]
    }, {
        id: 'demo2',
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[0]],
        visible: false
    }, {
        id: 'demo3',
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[1]],
        visible: false
    }, {
        id: 'demo4',
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[2]],
        visible: false
    }, {
        id: 'demo5',
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[3]],
        visible: false
    }, {
        id: 'demo6',
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[4]],
        visible: false
    }, {
        id: 'demo7',
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: pohlavi.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[5]],
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
        color: barvySkupiny[indexSkupiny]
    }, {
        id: 'demo2',
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[0]],
        visible: false
    }, {
        id: 'demo3',
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[1]],
        visible: false
    }, {
        id: 'demo4',
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[2]],
        visible: false
    }, {
        id: 'demo5',
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[3]],
        visible: false
    }, {
        id: 'demo6',
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[4]],
        visible: false
    }, {
        id: 'demo7',
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: vek.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[5]],
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
        color: barvySkupiny[indexSkupiny]
    }, {
        id: 'demo2',
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[0]],
        visible: false
    }, {
        id: 'demo3',
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[1]],
        visible: false
    }, {
        id: 'demo4',
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[2]],
        visible: false
    }, {
        id: 'demo5',
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[3]],
        visible: false
    }, {
        id: 'demo6',
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[4]],
        visible: false
    }, {
        id: 'demo7',
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: vzdelani.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[5]],
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
        color: barvySkupiny[indexSkupiny]
    }, {
        id: 'demo2',
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[0]],
        visible: false
    }, {
        id: 'demo3',
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[1]],
        visible: false
    }, {
        id: 'demo4',
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[2]],
        visible: false
    }, {
        id: 'demo5',
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[3]],
        visible: false
    }, {
        id: 'demo6',
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[4]],
        visible: false
    }, {
        id: 'demo7',
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: prijem.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[5]],
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
        color: barvySkupiny[indexSkupiny]
    }, {
        id: 'demo2',
        name: segmenty[indexOstatnichSkupin[0]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[0] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[0]],
        visible: false
    }, {
        id: 'demo3',
        name: segmenty[indexOstatnichSkupin[1]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[1] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[1]],
        visible: false
    }, {
        id: 'demo4',
        name: segmenty[indexOstatnichSkupin[2]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[2] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[2]],
        visible: false
    }, {
        id: 'demo5',
        name: segmenty[indexOstatnichSkupin[3]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[3] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[3]],
        visible: false
    }, {
        id: 'demo6',
        name: segmenty[indexOstatnichSkupin[4]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[4] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[4]],
        visible: false
    }, {
        id: 'demo7',
        name: segmenty[indexOstatnichSkupin[5]][0],
        data: pozice.map(function(d) {
            return d[indexOstatnichSkupin[5] + 1];
        }),
        color: barvySkupiny[indexOstatnichSkupin[5]],
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

Highcharts.chart('scatter-spokojenost', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Spokojenost s politickým vývojem × pravolevá identifikace'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        title: {
            text: '<— nespokojenější × spokojenější —>'
        },
        min: -0.8,
        max: 0.8
    },
    yAxis: {
        title: {
            text: '<— pravicovější × levicovější —>'
        },
        min: -0.6,
        max: 0.6
    },
    tooltip: {
        formatter: function() {
            return '<b>' + this.series.name + '</b><br/>Důvěra ve vládu, spokojenost s politickou situací: ' + this.x + '<br/>Sebeidentifikace na ose pravice × levice: ' + this.y;
        }
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        scatter: {
            marker: {
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(0,0,0)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            }
        }
    },
    series: [{
        name: 'Levicový (ne)volič',
        color: barvySkupiny[0],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[-0.4, 0.5]]

    }, {
        name: 'Materialista',
        color: barvySkupiny[1],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[0.4, -0.2]]
    }, {
        name: 'Městský liberál',
        color: barvySkupiny[2],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[0.3, -0.3]]
    }, {
        name: 'Mladý těkavý',
        color: barvySkupiny[3],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[0, 0.1]]
    }, {
        name: 'Obranář',
        color: barvySkupiny[4],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[-0.8, 0.1]]
    }, {
        name: 'Politicky pasivní',
        color: barvySkupiny[5],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[0.2, 0]]
    }, {
        name: 'Skutečný křesťan',
        color: barvySkupiny[6],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[0.3, 0.1]]
    }]
});

Highcharts.chart('scatter-zakony', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Autoritativnost × odmítání uprchlíků'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        title: {
            text: '<— proti tvrdším zákonům × pro tvrdší zákony —>'
        },
        max: 4.1
    },
    yAxis: {
        title: {
            text: '<—  pro uprchlíky × proti uprchlíkům —>'
        }
    },
    tooltip: {
        formatter: function() {
            return '<b>' + this.series.name + '</b><br/>Úpadek společnosti můžou zastavit tvrdší zákony: ' + this.x + '<br/>Odmítání uprchlíků: ' + this.y;
        }
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(0,0,0)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            }
        }
    },
    series: [{
        name: 'Levicový (ne)volič',
        color: barvySkupiny[0],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[3.6, 0.3]]
    }, {
        name: 'Materialista',
        color: barvySkupiny[1],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[3.6, 0.1]]
    }, {
        name: 'Městský liberál',
        color: barvySkupiny[2],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[2.8, -0.8]]
    }, {
        name: 'Mladý těkavý',
        color: barvySkupiny[3],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[3.0, -0.1]]
    }, {
        name: 'Obranář',
        color: barvySkupiny[4],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[4.0, 0.7]]
    }, {
        name: 'Politicky pasivní',
        color: barvySkupiny[5],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[3.5, -0.3]]
    }, {
        name: 'Skutečný křesťan',
        color: barvySkupiny[6],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[3.6, -0.2]]
    }]
});

Highcharts.chart('scatter-buh', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Víra v Boha × členství v EU'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        title: {
            text: '<— méně věřící × více věřící —>'
        },
        min: 0.9,
        max: 2.1
    },
    yAxis: {
        title: {
            text: '<— méně příležitostí × více příležitostí —>'
        }
    },
    tooltip: {
        formatter: function() {
            return '<b>' + this.series.name + '</b><br/>Považuji sám sebe za věřícího člověka: ' + this.x + '<br/>Členství v EU mi přináší nové příležitosti: ' + this.y;
        }
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        scatter: {
            marker: {
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(0,0,0)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            }
        }
    },
    series: [{
        name: 'Levicový (ne)volič',
        color: barvySkupiny[0],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[1.2, 2.3]]

    }, {
        name: 'Materialista',
        color: barvySkupiny[1],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[1.0, 3.0]]
    }, {
        name: 'Městský liberál',
        color: barvySkupiny[2],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[1.3, 3.3]]
    }, {
        name: 'Mladý těkavý',
        color: barvySkupiny[3],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[1.2, 2.7]]
    }, {
        name: 'Obranář',
        color: barvySkupiny[4],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[1.3, 1.8]]
    }, {
        name: 'Politicky pasivní',
        color: barvySkupiny[5],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[1.1, 2.8]]
    }, {
        name: 'Skutečný křesťan',
        color: barvySkupiny[6],
        marker: {
            symbol: 'circle',
            radius: 20
        },
        data: [[2.0, 2.8]]
    }]
});

Highcharts.chart('stranicke-kompozice', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Složení elektorátu stran'
    },
    xAxis: {
        categories: stranickePreferenceNames
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'podíl voličů'
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.y}' + ' %' + '<br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        column: {
            stacking: 'stacked'
        }
    },
    series: [{
        name: segmenty[0][0],
        data: stranickePreference.map(function(d) {
            return d[1];
        }),
        color: barvySkupiny[0]
    }, {
        name: segmenty[1][0],
        data: stranickePreference.map(function(d) {
            return d[2];
        }),
        color: barvySkupiny[1]
    }, {
        name: segmenty[2][0],
        data: stranickePreference.map(function(d) {
            return d[3];
        }),
        color: barvySkupiny[2]
    }, {
        name: segmenty[3][0],
        data: stranickePreference.map(function(d) {
            return d[4];
        }),
        color: barvySkupiny[3]
    }, {
        name: segmenty[4][0],
        data: stranickePreference.map(function(d) {
            return d[5];
        }),
        color: barvySkupiny[4]
    }, {
        name: segmenty[5][0],
        data: stranickePreference.map(function(d) {
            return d[6];
        }),
        color: barvySkupiny[5]
    }, {
        name: segmenty[6][0],
        data: stranickePreference.map(function(d) {
            return d[7];
        }),
        color: barvySkupiny[6]
    }]
});

  return true;

}



// inicializace kvízu

$(function() {
  novaOtazka();
  ozivCudliky();
  prepocitejIndexSkupiny();
  zmenVelikosti();
  prekresliGrafy();
});