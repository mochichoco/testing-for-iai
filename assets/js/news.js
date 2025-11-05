// news.js — news.json を読み込み、最新3件を #news-list に差し込む（カテゴリ対応版）
(async function(){
  try {
    const res = await fetch('assets/js/news.json', { cache: "no-store" });
    if (!res.ok) throw new Error('news.json load failed');
    const data = await res.json();
    const list = document.getElementById('news-list');
    if (!list) return;

    // 最大表示件数（必要に応じて変更）
    const items = data.slice(0, 30);

    list.innerHTML = items.map(item => {
      const safeTitle = String(item.title).replace(/</g, '&lt;');
      const safeCategory = String(item.category || "お知らせ").replace(/</g, '&lt;');
      const safeDate = String(item.date).replace(/</g, '&lt;');
      const link = item.link ? item.link : '#';

      return `
        <li class="news-item" data-category="${safeCategory}">
          <span class="news-meta">
            <span class="news-category">${safeCategory}</span>
            <span class="news-date">${safeDate}</span>
          </span>
          <a href="${link}" class="news-title">${safeTitle}</a>
        </li>
      `;
    }).join('');

  } catch (e) {
    console.error(e);
  }
})();
