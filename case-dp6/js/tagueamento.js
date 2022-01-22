// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// PEDIDO: 
// 1. Visualização de página para todas as páginas
// 2. Avaliação de eventos de botão para todas as páginas (entre em contato e download pdf) e analise.html (Lorem, Ipsum, Dolor), sobre.html ()
  //Categoria: "menu" Ação: "entre_em_contato" Rótulo: "link_externo"
  //Categoria: "menu" Ação: "download_pdf" Rótulo: "download_pdf"
  //Categoria: "analise" Ação: "ver_mais" Rótulo: "Lorem"
  //Categoria: "analise" Ação: "ver_mais" Rótulo: "Ipsum"
  //Categoria: "analise" Ação: "ver_mais" Rótulo: "Dolor"
// 3. Avaliação de eventos de preenchimento para sobre.html (nome, email, telefone, aceito)
  //Categoria: "contato" Ação: "nome" Rótulo: "preencheu"
  //Categoria: "contato" Ação: "email" Rótulo: "preencheu"
  //Categoria: "contato" Ação: "telefone" Rótulo: "preencheu"
  //Categoria: "contato" Ação: "aceito" Rótulo: "preencheu"
// 4. Avaliação de eventos de aparição popup para sobre.html (contato)
  //Categoria: "contato" Ação: "enviado" Rótulo: "enviado"

// REFERENCIAS:
//  Analytics.js: https://developers.google.com/analytics/devguides/collection/analyticsjs
//  Visualização de página: https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
//  Avaliação de eventos: https://developers.google.com/analytics/devguides/collection/analyticsjs/events
//  Event tracker: https://developers.google.com/analytics/devguides/collection/analyticsjs/accessing-trackers

// 1. Visualização de página para todas as páginas
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview'); // Envia visualização de página
// Test tracker on console log with trackers name and client ID for the current user
//ga(function(tracker) {
//  console.log(tracker.get('name'));
//  console.log(tracker.get('clientId'));
//});

// 2. Avaliação de eventos de botão para todas as páginas
$('.menu-lista-item a').on('click', function() {
  if ($(this).attr('href')=='http://www.dp6.com.br/contato/'){
    ga('create', 'UA-12345-6', 'auto');
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo')
    // Test if in
    //console.log($(this).attr('href'));
  }
  else if ($(this).attr('href')=='http://autos.dp6.com.br/autos_revista_vfinal.pdf'){
    ga('create', 'UA-12345-6', 'auto');
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
    // Test if in
    //console.log($(this).attr('href'));
  }
})
$('.cards-montadoras').on('click', function() {
  ga('create', 'UA-12345-6', 'auto');
  ga('send', 'event', 'analise', 'ver_mais', $('img').attr('alt'))
  // Test if in
  //console.log($('img').attr('alt'))
})

// 3. Avaliação de eventos de preenchimento para sobre.html
$('.contato').on('input','#nome', function() {
  if($('#nome').length > 0 && $('#nome').val() != ''){
    ga('create', 'UA-12345-6', 'auto');
    ga('send', 'event', 'contato', 'nome', 'preencheu');
    // Test if in
    //console.log($('.contato #nome').val())
  }
})
$('.contato').on('input','#email', function() {
  if($('#email').length > 0 && $('#email').val() != ''){
    ga('create', 'UA-12345-6', 'auto');
    ga('send', 'event', 'contato', 'email', 'preencheu');
    // Test if in
    //console.log($('.contato #email').val())
  }
})
$('.contato').on('input','#telefone', function() {
  if($('#telefone').length > 0 && $('#telefone').val() != ''){
    ga('create', 'UA-12345-6', 'auto');
    ga('send', 'event', 'contato', 'telefone', 'preencheu');
    // Test if in
    //console.log($('.contato #telefone').val())
  }
})
$('.contato').on('input','#aceito', function() {
  if($('#aceito').is(":checked")){
    ga('create', 'UA-12345-6', 'auto');
    ga('send', 'event', 'contato', 'aceito', 'preencheu');
    // Test if in
    //console.log($('.contato #aceito').val())
  }
})

// 4. Avaliação de eventos de aparição popup para sobre.html
$('.contato').on('submit', function() {
  ga('create', 'UA-12345-6', 'auto');
  ga('send', 'event', 'contato', 'enviado', 'enviado')
  // Test if in
  //console.log($(this).text());
})