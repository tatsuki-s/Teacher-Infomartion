<script setup> </script>
<template>

<body>


  <!-- メインコンテンツ -->
  <main class="main-container">
    
    <!-- ページタイトルエリア -->
    <section class="page-header">
      <p class="breadcrumb">教員研究所</p>
      <div class="title-wrapper">
        <h1 class="page-title">各所からのコメント</h1>
        <span class="badge-count">06</span>
      </div>
      <p class="page-lead">
        当サイトの教員紹介について、<br>
        読者のみなさんから届いた言葉をご紹介します。
      </p>
    </section>

    <!-- 2カラムコンテンツエリア -->
    <div class="content-grid">
      
      <!-- 左サイドバー -->
      <aside class="sidebar">
        <div class="sidebar-block">
          <article class="related-article">
            <h3 class="article-title">
              <a href="#">※これらのコメントはすべて<br>  実在しない人物のものです<br></a>
            </h3>
          </article>
        </div>

        <div class="sidebar-block">
          <h2 class="sidebar-heading">ひとこと、編集者から</h2>
          <p class="editorial-note">
           この部分が余って何を書くか迷ったので、編集者からのひとことを入れておきます。<br>
           <br><br><br><br><br><br><br><br><br>うんち★
          </p>
        </div>
      </aside>

      <!-- 右メイン：コメント一覧 -->
      <section class="comments-section">
        <div class="comments-header">
          <h2 class="comments-title">この記事に寄せられた声</h2>
          <span class="comments-total">6 COMMENTS</span>
        </div>

        <div class="comments-list">
          
          <!-- コメントカード 1 -->
          <article class="comment-card">
            <img src="https://placehold.co/80x80/d8d5cc/555555?text=haru" alt="haru" class="user-avatar">
            <div class="comment-body">
              <div class="comment-meta">
                <div class="user-info">
                  <span class="user-name"></span>
                  <span class="user-handle">@haru_days</span>
                </div>
                <time class="comment-date">2025.05.24</time>
              </div>
              <p class="comment-text">
                何もしない時間にも、ちゃんと意味があるんですね。<br>
                休日まで予定で埋めていた自分に、少し立ち止まるきっかけをくれました。<br>
                今週末はコーヒーを淹れて、ただ窓の外を眺めてみようと思います。
              </p>
              <button type="button" class="like-button" aria-label="いいね">
                <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>24</span>
              </button>
            </div>
          </article>

          <!-- コメントカード 2 -->
          <article class="comment-card">
            <img src="https://placehold.co/80x80/e2dcd0/555555?text=shiori" alt="山本 しおり" class="user-avatar">
            <div class="comment-body">
              <div class="comment-meta">
                <div class="user-info">
                  <span class="user-name">山本 しおり</span>
                  <span class="user-handle">@shiori_y</span>
                </div>
                <time class="comment-date">2025.05.23</time>
              </div>
              <p class="comment-text">
                「余白をつくる」という考え方が好きです。<br>
                何かを足すのではなく、引いてみる。暮らしだけでなく、仕事にも<br>
                通じる気がしました。何度も読み返したくなる記事でした。
              </p>
              <button type="button" class="like-button" aria-label="いいね">
                <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>18</span>
              </button>
            </div>
          </article>

          <!-- コメントカード 3 -->
          <article class="comment-card">
            <img src="https://placehold.co/80x80/cdd6cd/555555?text=mori" alt="mori" class="user-avatar">
            <div class="comment-body">
              <div class="comment-meta">
                <div class="user-info">
                  <span class="user-name">mori</span>
                  <span class="user-handle">@mori_to_asa</span>
                </div>
                <time class="comment-date">2025.05.22</time>
              </div>
              <p class="comment-text">
                朝の10分を、自分のために。<br>
                記事を読んでから、起きてすぐスマホを見るのをやめてみました。<br>
                それだけなのに、一日のはじまりが少し穏やかになりました。
              </p>
              <button type="button" class="like-button" aria-label="いいね">
                <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>32</span>
              </button>
            </div>
          </article>

          <!-- コメントカード 4 -->
          <article class="comment-card">
            <img src="https://placehold.co/80x80/e5d8c5/555555?text=tanaka" alt="たなか" class="user-avatar">
            <div class="comment-body">
              <div class="comment-meta">
                <div class="user-info">
                  <span class="user-name">たなか</span>
                  <span class="user-handle">@tanaka_</span>
                </div>
                <time class="comment-date">2025.05.21</time>
              </div>
              <p class="comment-text">
                頑張らない日があってもいい。<br>
                そんなふうに言ってもらえた気がして、肩の力が抜けました。<br>
                やさしい言葉をありがとうございます。
              </p>
              <button type="button" class="like-button" aria-label="いいね">
                <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>12</span>
              </button>
            </div>
          </article>

          <!-- コメントカード 5 -->
          <article class="comment-card">
            <img src="https://placehold.co/80x80/d5dcd0/555555?text=natsumi" alt="natsumi" class="user-avatar">
            <div class="comment-body">
              <div class="comment-meta">
                <div class="user-info">
                  <span class="user-name">natsumi</span>
                  <span class="user-handle">@natsu_walk</span>
                </div>
                <time class="comment-date">2025.05.20</time>
              </div>
              <p class="comment-text">
                散歩の途中に、いつもと違う道へ。<br>
                目的を決めずに歩いたら、近所に小さな花屋さんを見つけました。<br>
                余白があると、見える景色も変わるんですね。
              </p>
              <button type="button" class="like-button" aria-label="いいね">
                <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>21</span>
              </button>
            </div>
          </article>

          <!-- コメントカード 6 -->
          <article class="comment-card">
            <img src="https://placehold.co/80x80/cfd5c9/555555?text=yu" alt="小林 ゆう" class="user-avatar">
            <div class="comment-body">
              <div class="comment-meta">
                <div class="user-info">
                  <span class="user-name">小林 ゆう</span>
                  <span class="user-handle">@yu_kobayashi</span>
                </div>
                <time class="comment-date">2025.05.19</time>
              </div>
              <p class="comment-text">
                忙しい友人にも、そっと届けたい記事。<br>
                「休むこと」と「立ち止まること」は違うのかもしれない。<br>
                読み終わったあとも、そんなことをゆっくり考えています。
              </p>
              <button type="button" class="like-button" aria-label="いいね">
                <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>9</span>
              </button>
            </div>
          </article>

        </div>

        <!-- リスト末尾のメッセージ -->
        <div class="comments-footer">
          <p>ここまで、6つの声をお届けしました。</p>
        </div>

      </section>
    </div>
  </main>

  <!-- フッター -->
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-brand">余白 &nbsp;/&nbsp; 暮らしに、ひと呼吸。</p>
      <p class="copyright">&copy; 2025 YOHAKU JOURNAL</p>
    </div>
  </footer>

</body>
</template>
<style scoped>
/* =========================================
   変数・基本設定
========================================= */
:root {
  --bg-color: #f8f7f3;
  --card-bg: #ffffff;
  --text-main: #2d312d;
  --text-sub: #6e736e;
  --text-muted: #989c98;
  --accent-green: #58725a;
  --badge-bg: #e1e6de;
  --border-color: #e6e4dd;
  
  --font-serif: 'Shippori Mincho', 'Yu Mincho', 'Hiragino Mincho ProN', serif;
  --font-sans: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: var(--font-sans);
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

a:hover {
  opacity: 0.7;
}

ul {
  list-style: none;
}

/* =========================================
   ヘッダー
========================================= */
.site-header {
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-color);
}

.header-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-logo {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.logo-main {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.08em;
}

.logo-sub {
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--text-sub);
}

.site-nav ul {
  display: flex;
  gap: 36px;
}

.site-nav a {
  font-size: 13px;
  color: var(--text-sub);
  letter-spacing: 0.05em;
}

.site-nav a.is-active {
  color: var(--accent-green);
  font-weight: 500;
}

.header-tagline {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.08em;
}

/* =========================================
   メインコンテナ & ページタイトル
========================================= */
.main-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 72px 32px 100px;
}

.page-header {
  margin-bottom: 64px;
}

.breadcrumb {
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--accent-green);
  margin-bottom: 16px;
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
}

.page-title {
  font-family: var(--font-serif);
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0.08em;
  line-height: 1.3;
}

.badge-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--badge-bg);
  color: var(--accent-green);
  font-size: 12px;
  font-weight: 500;
  padding: 3px 11px;
  border-radius: 999px;
  letter-spacing: 0.05em;
}

.page-lead {
  font-size: 14px;
  color: var(--text-sub);
  line-height: 2;
  letter-spacing: 0.04em;
}

/* =========================================
   2カラムレイアウト
========================================= */
.content-grid {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 64px;
  align-items: start;
}

/* =========================================
   左サイドバー
========================================= */
.sidebar {
  position: sticky;
  top: 40px;
}

.sidebar-block {
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
  margin-bottom: 44px;
}

.sidebar-heading {
  font-size: 11px;
  font-weight: 500;
  color: var(--accent-green);
  letter-spacing: 0.08em;
  margin-bottom: 20px;
}

.article-category {
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.article-title {
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 500;
  line-height: 1.65;
  margin-bottom: 14px;
  letter-spacing: 0.04em;
}

.article-excerpt {
  font-size: 12px;
  color: var(--text-sub);
  line-height: 1.85;
  margin-bottom: 16px;
}

.article-meta {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

.editorial-note {
  font-size: 12px;
  color: var(--text-sub);
  line-height: 1.9;
}

/* =========================================
   右メイン：コメント一覧
========================================= */
.comments-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
}

.comments-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-main);
  letter-spacing: 0.06em;
}

.comments-total {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.1em;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* コメントカード */
.comment-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 28px 32px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.user-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.comment-body {
  flex: 1;
}

.comment-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
}

.user-info {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.user-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-main);
}

.user-handle {
  font-size: 12px;
  color: var(--text-muted);
}

.comment-date {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

.comment-text {
  font-size: 14px;
  color: var(--text-main);
  line-height: 1.95;
  margin-bottom: 18px;
}

.like-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-sans);
  font-size: 12px;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
}

.like-button:hover {
  color: var(--accent-green);
}

.heart-icon {
  width: 15px;
  height: 15px;
}

/* リスト末尾 */
.comments-footer {
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.comments-footer p {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.06em;
}

/* =========================================
   フッター
========================================= */
.site-footer {
  border-top: 1px solid var(--border-color);
  background-color: var(--bg-color);
}

.footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand {
  font-size: 12px;
  color: var(--text-sub);
  letter-spacing: 0.06em;
}

.copyright {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.08em;
}

/* =========================================
   レスポンシブ対応（タブレット・スマホ）
========================================= */
@media (max-width: 820px) {
  .header-tagline {
    display: none;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .sidebar {
    position: static;
  }
}

@media (max-width: 560px) {
  .header-inner {
    flex-direction: column;
    gap: 16px;
    padding: 20px 20px;
  }

  .main-container {
    padding: 48px 20px 72px;
  }

  .page-title {
    font-size: 28px;
  }

  .comment-card {
    padding: 22px 20px;
    gap: 14px;
  }

  .user-avatar {
    width: 38px;
    height: 38px;
  }

  .comment-meta {
    flex-direction: column;
    gap: 2px;
  }

  .footer-inner {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
