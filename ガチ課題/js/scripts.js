// 画面が読み込まれたら実行する
document.addEventListener('DOMContentLoaded', () => {
  // 1. 画面から消えるきっかけになる要素（例: ヘッダーや最初に見えるリンクなど）
  const triggerElement = document.getElementById('back-link-trigger');
  
  // 2. 左側に固定表示させたいボタン要素
  const fixedLeftButton = document.getElementById('fixed-left-link');

  // 要素が両方とも存在するときだけ処理を実行する（エラー防止）
  if (triggerElement && fixedLeftButton) {
    
    // 監視の仕組み（IntersectionObserver）を設定
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // トリガー要素が画面から消えたら（isIntersecting が false）
        if (!entry.isIntersecting) {
          fixedLeftButton.classList.add('is-show'); // 左側ボタンを表示
        } else {
          fixedLeftButton.classList.remove('is-show'); // 見えている時は非表示
        }
      });
    }, {
      threshold: 0 // 少しでも画面に映っていれば「見えている」と判定
    });

    // 監視をスタート
    observer.observe(triggerElement);
  }
});