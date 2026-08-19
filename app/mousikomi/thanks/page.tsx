import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function ThanksPage() {
  return (
    <div className="ThanksPage">
      <header className="ThanksLayout-header">
        <Link href="/">
          <Image
            className="ThanksLayout-logo"
            src="/logo.png"
            alt="DESIGN CAMPUS logo"
            width={176}
            height={36}
          />
        </Link>
        <nav className="ThanksLayout-nav">
          <a href="/#tokuchou">本講座の特徴</a>
          <a href="/#kouza">講座一覧</a>
          <a href="/#faq">よくあるご質問</a>
          <Link href="/mousikomi" className="ThanksLayout-navCta">
            お申し込みはこちら
          </Link>
        </nav>
      </header>

      <main className="ThanksPage-main">
        <h1 className="ThanksPage-title">お申込みありがとうございました。</h1>
        <Link href="/" className="ThanksPage-link">
          TOPへ戻る
        </Link>
      </main>
      <div className="page-last">
        <p>Copyright 2023 DESIN CAMPUS</p>
      </div>
    </div>
  );
}
