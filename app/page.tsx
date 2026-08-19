import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <div className="page flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="page-header">
          <Image
            className="page-logo"
            src="/logo.png"
            alt="DESIGN CAMPUS logo"
            width={176}
            height={36}
            priority
          />
          <nav className="page-nav">
            <a href="#tokuchou">本講座の特徴</a>
            <a href="#kouza">講座一覧</a>
            <a href="#faq">よくあるご質問</a>
            <Link href="/mousikomi" className="page-nav-cta">お申し込みはこちら</Link>
          </nav>
        </div>
        <div className="page-title">
          <div className="page-title-sentence">
            <div className="page-title-sentence-1">
              <p>はじめの一歩！</p>
            </div>
            <div className="page-title-sentence-2">
              <p>1Dayクリエイティブセミナー</p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="page-lead">
            デザイナーやディレクターに興味がある皆さんの
            <br />
            <span className="page-highlight">「こんな勉強がしたかった！」</span>
            にお答えします！
          </h1>
        <div className="page-nayami-wrapper">
          <div className="page-nayami">
              <img src="/nayami.jpg" alt="学習の悩み" width={370} height={360} />
              <ul className="page-checklist">
                <li>デザインやディレクションの勉強をしてみたいけど何から始めていいかわからない...</li>
                <li>ページを作成したけど成功率をあげるにはどうすればいいだろう…</li>
                <li>SEOとか聞くけど集客するための対策って具体的にはどういうことなんだろう...?</li>
                <li>デザインを外注依頼してみたけど、失敗しないコツってなんだろう...?</li>
                <li>デザイナーとディレクターの仕事をちょっとだけ体験してみたい!</li>
              </ul>
          </div>
          <div className="page-band">
            <p>1Dayセミナーでそんなお悩みを解決!</p>
          </div>
        </div>

          <div className="page-tokuchou">
            <h2 className="page-tokuchou-title">本講座の特徴</h2>
            <div className="page-tokuchou-list">
              <div className="page-tokuchou-item">
                <img src="/tokuchou1.jpg" alt="気軽" width={370} height={360} />
                <p>気になる講座を気軽に学べる</p>
                <p>デザイナー・ディレクターとして身につけておきたいスキルを「試しに少し触ってみたい！」という方々が気軽に参加できる２時間講座になっています！</p>
              </div>
              <div className="page-tokuchou-item">
                <img src="/tokuchou2.jpg" alt="講師陣" width={370} height={360} />
                <p>実践経験豊富な講師陣</p>
                <p>それぞれのセミナー毎に実戦経験が豊富な講師陣が直接教えてくれます！また、実践的な使い方も併せて教えてもらえるので有意義な時間を過ごすことができます！</p>
              </div>
              <div className="page-tokuchou-item">
                <img src="/tokuchou3.jpg" alt="交流" width={370} height={360} />
                <p>参加者同士で交流もできる</p>
                <p>それぞれのセミナーテーマに興味のある参加者が集まるため、思いが同じ方々との交流をすることができます！コワーキングスペースで実施するので互いに雑談がてら悩み相談などをして頂ける環境です！</p>
              </div>
            </div>
          </div>
          <div className="page-mousikomi">
            <div className="page-mousikomi-sentence">
              <p>特に事前準備などはございません！<br />どなたでもお気軽にご参加ください！</p>
              <Link href="/mousikomi" className="page-mousikomi-btn">✉️セミナーのお申込みはこちら</Link>
            </div>
          </div>

    <div className="page-ichiran">
      <div className="page-ichiran-1">
        <p>こんなことが学べる!</p>
      </div>
      <div className="page-ichiran-2">
        <p>講座一覧</p>
      </div>
    </div>

    <div className="page-meishi">
      <div className="page-meishi-media">
        <img src="/meishi.jpg" alt="meishi" width={370} height={360} />
      </div>
      <div className="page-meishi-text">
        <p className="page-course-title">2時間でかんたんに 名刺デザインを作成してみよう！</p>
        <p className="page-course-body">たった2時間で名刺が作れる!?今まで名刺を作成するためには「専門的な知識やスキル」「時間」がかかることは当然のことでした。Adobe Expressを使うことで「専門的な知識やスキル不必要」「短時間」でサクサク作ることができます!</p>
        <ul className="page-course-meta">
          <li>
            <span className="page-course-meta-label">日時</span>
            2023/12/10(日)14:00~15:30
          </li>
          <li>
            <span className="page-course-meta-label">講師</span>
            清野 将
          </li>
          <li>
            <span className="page-course-meta-label">費用</span>
            3000円
          </li>
        </ul>
      </div>
    </div>
    <div className="page-SEO">
      <div className="page-SEO-media">
        <img src="/SEO.jpg" alt="SEO" width={370} height={360} />
      </div>
      <div className="page-SEO-text">
        <p className="page-course-title">
          集客のためのWeb活用術
          <br />
          〜SEOとユーザビリティのお話〜
        </p>
        <p className="page-course-body">「ホームページを作ったけど、いまいち役に立っているのかわからない…」そんなあなたにホームページの活用術と、顧客とのコミュニケーションにつながる方法をお伝えしていきます。</p>
        <ul className="page-course-meta">
          <li>
            <span className="page-course-meta-label">日時</span>
            2023/12/17(日)14:00~15:30
          </li>
          <li>
            <span className="page-course-meta-label">講師</span>
            小泉 誠
          </li>
          <li>
            <span className="page-course-meta-label">費用</span>
            3000円
          </li>
        </ul>
      </div>
    </div>
    <div className="page-place">
      <h2 className="page-place-title">開催場所</h2>
      <div className="page-place-content">
        <div className="page-place-text">
          <p className="page-place-name">DESIGN CAMPUS コワーキングスペース</p>
          <p className="page-place-body">
            〒192-0083
            <br />
            東京都八王子市三崎町4-11 トーネンビル5F
          </p>
          <p className="page-place-body">JR八王子駅北口を出て徒歩4分</p>
        </div>
        <div className="page-place-media">
          <img src="/map.png" alt="開催場所の地図" width={370} height={360} />
        </div>
      </div>
    </div>
    <div className="page-question">
      <div className="page-question-title">
        <h3>よくあるご質問</h3>
      </div>
      <div className="page-question-1">
        <p className="page-qa-q">Q</p>
        <p>参加するにはどうすればいいですか？</p> 
      </div>
      <div className="page-question-answer1">
        <p className="page-qa-a">A</p>
        <p>参加希望の方は、オンラインフォームからお申込みください。</p>
      </div>
      <div className="page-question-2">
        <p className="page-qa-q">Q</p>
        <p>セミナーに参加する際の服装はありますか？</p> 
      </div>
      <div className="page-question-answer2">
        <p className="page-qa-a">A</p>
        <p>カジュアルな服装で構いません。
        ただし、セミナー会場が冷房で冷えることがあるため、軽く羽織るものを持参することをおすすめします。</p>
      </div>
      <div className="page-question-3">
        <p className="page-qa-q">Q</p>
        <p>予約をキャンセルしたい場合、どのような手続きが必要ですか？</p> 
      </div>
      <div className="page-question-answer3">
        <p className="page-qa-a">A</p>
        <p>キャンセルの場合、開催前日までにメールでinfo@exsample.comまでご連絡ください。
        当日のキャンセルについてはキャンセル料が発生しますのでご注意ください。</p>
      </div>

    </div>
    <div className="page-mousikomi">
      <div className="page-mousikomi-sentence">
        <p>特に事前準備などはございません！<br />どなたでもお気軽にご参加ください！</p>
        <Link href="/mousikomi" className="page-mousikomi-btn">✉️セミナーのお申込みはこちら</Link>
      </div>
    </div>
    <div className="page-last">
      <p>Copyright 2023 DESIN CAMPUS</p>
    </div>
      <a href="#" className="BackToTop">
        TOP
      </a>
    </div>
    </main>
    </div>
  );
}
