"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./page.css";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

export default function MousikomiPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/mousikomi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "送信に失敗しました");
      }

      window.location.href = "/mousikomi/thanks";
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "送信に失敗しました"
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="MousikomiPage">
      <header className="MousikPage-header">
        <Link href="/">
          <Image
            className="MousikPage-logo"
            src="/logo.png"
            alt="DESIGN CAMPUS logo"
            width={176}
            height={36}
          />
        </Link>
        <nav className="MousikPage-nav">
          <a href="/#tokuchou">本講座の特徴</a>
          <a href="/#kouza">講座一覧</a>
          <a href="/#faq">よくあるご質問</a>
          <Link href="/mousikomi" className="MousikPage-navCta">
            お申し込みはこちら
          </Link>
        </nav>
      </header>

      <main className="MousikomiPage-main">
        <h1 className="MousikomiPage-title">1day講座申込みフォーム</h1>

        <form className="MousikomiPage-form" onSubmit={handleSubmit}>
          <div className="MousikomiPage-field">
            <label htmlFor="name">
              名前 <span className="MousikomiPage-required">必須</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="お名前を入力してください。"
            />
          </div>

          <div className="MousikomiPage-field">
            <label htmlFor="email">
              メールアドレス <span className="MousikomiPage-required">必須</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="メールアドレスを入力してください。"
            />
          </div>

          <div className="MousikomiPage-field">
            <label htmlFor="phone">電話番号</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="電話番号を入力してください。"
            />
          </div>

          <div className="MousikomiPage-field">
            <p className="MousikomiPage-radioTitle">
              参加希望 <span className="MousikomiPage-required">必須</span>
            </p>
            <div className="MousikomiPage-radioGroup">
              <label className="MousikomiPage-radioOption" htmlFor="course-meishi">
                <input
                  id="course-meishi"
                  type="radio"
                  name="course"
                  value="meishi"
                  checked={formData.course === "meishi"}
                  onChange={handleChange}
                  required
                />
                <span className="MousikomiPage-radioText">
                  <span className="MousikomiPage-radioDate">
                    12/10(日)
                  </span>
                  2時間でかんたんに 名刺デザインを作成してみよう！
                </span>
              </label>
              <label className="MousikomiPage-radioOption" htmlFor="course-seo">
                <input
                  id="course-seo"
                  type="radio"
                  name="course"
                  value="seo"
                  checked={formData.course === "seo"}
                  onChange={handleChange}
                  required
                />
                <span className="MousikomiPage-radioText">
                  <span className="MousikomiPage-radioDate">
                    12/17(日)
                  </span>
                  集客のためのWeb活用術 〜SEOとユーザビリティのお話〜
                </span>
              </label>
            </div>
          </div>
          {errorMessage ? (
            <p className="MousikomiPage-error">{errorMessage}</p>
          ) : null}

          <label className="MousikomiPage-privacy" htmlFor="privacy-agree">
            <input
              id="privacy-agree"
              type="checkbox"
              name="privacyAgree"
              checked={agreedToPrivacy}
              onChange={(event) => setAgreedToPrivacy(event.target.checked)}
              required
            />
            <span>プライバシーポリシーに同意する</span>
          </label>

          <button
            type="submit"
            className="MousikomiPage-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "送信中..." : "送信"}
          </button>
        </form>
      </main>
      <div className="page-last">
        <p>Copyright 2023 DESIN CAMPUS</p>
      </div>
    </div>
  );
}
