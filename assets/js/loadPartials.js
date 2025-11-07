(async function(){
  try {
    const headerRes = await fetch('assets/partials/header.html', {cache: 'no-store'});
    const footerRes = await fetch('assets/partials/footer.html', {cache: 'no-store'});
    const headerHtml = await headerRes.text();
    const footerHtml = await footerRes.text();

    document.getElementById('header').innerHTML = headerHtml;
    document.getElementById('footer').innerHTML = footerHtml;

    // header読み込み後にmenu.js起動
    const script = document.createElement('script');
    script.src = 'assets/js/menu.js';
    document.body.appendChild(script);
  } catch (e) {
    console.error('パーツの読み込みに失敗しました', e);
  }
})();
