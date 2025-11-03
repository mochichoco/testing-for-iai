// news.js — (軽量) news.json を読み込み、最新3件を #news-list に差し込む
(async function(){
  try {
    const res = await fetch('assets/js/news.json', {cache: "no-store"});
    if(!res.ok) throw new Error('news.json load failed');
    const data = await res.json();
    const list = document.getElementById('news-list');
    if(!list) return;
    // 最新3件（配列は新しい順を想定）
    const items = data.slice(0,3);
    list.innerHTML = items.map(item => {
      const safeTitle = String(item.title).replace(/</g,'&lt;');
      const link = item.link ? item.link : '#';
      return `<li><span class="date">${item.date}</span><a href="${link}">${safeTitle}</a></li>`;
    }).join('');
  } catch(e) {
    console.error(e);
  }
})();
