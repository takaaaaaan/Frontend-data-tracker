# Frontend Data Tracker API

フロントエンドから送信されたデータを処理し、ログを記録するためのNext.jsプロジェクトです。このリポジトリはAPIエンドポイントのテストおよびデバッグのために設計されています。

- [English](./README.md)
- [한국어 (Korean)](./README_ko.md)

## 目次

- [概要](#概要)
- [機能](#機能)
- [はじめに](#はじめに)
- [インストール](#インストール)
- [使用方法](#使用方法)
- [APIエンドポイント](#apiエンドポイント)
- [コントリビューション](#コントリビューション)
- [ライセンス](#ライセンス)

## 概要

このプロジェクトは、Next.jsを使用してフロントエンドから送信されたデータを処理するAPIエンドポイントを提供し、サーバー側でのログ記録を行うことを目的としています。API通信のテストや様々なリクエストタイプの処理に適しています。

## 機能

- POSTおよびGETリクエストをテストするためのシンプルなAPIを提供。
- フロントエンドから送信されたメッセージをデバッグ用にログ。
- 簡単にデプロイ可能でスケーラビリティの高いNext.jsを使用。
- 構造化された通信のためのJSONデータ処理をサポート。

## はじめに

以下の手順に従って、ローカル環境で開発とテストを行う準備をします。

### 必要条件

- Node.js (v18)
- npm

### インストール

1. リポジトリをクローンします:

   ```bash
   git clone https://github.com/takaaaaaan/Frontend-data-tracker.git
   cd frontend-data-tracker
   ```

2. 依存関係をインストールします:

   ```bash
   npm install
   ```

### サーバーの起動

開発サーバーを起動するには:

```bash
npm run dev
```

サーバーは `http://localhost:3000` で動作します。

## 使用方法

### テストメッセージの送信

フロントエンドからテストメッセージを送信するには、以下のJavaScript関数を使用します:

```javascript
const test_message = async (message) => {
  try {
    const response = await fetch('/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('APIエラー:', errorData.error);
    } else {
      console.log('メッセージが正常に送信されました。');
    }
  } catch (error) {
    console.error('メッセージの送信中にエラーが発生しました:', error);
  }
};
```

### APIエンドポイント

- **POST `/api/log`**  
  リクエストボディに含まれたメッセージをログに記録します。

  - リクエストボディ例:

    ```json
    {
      "message": "こんにちは、これはテストメッセージです。"
    }
    ```

  - レスポンス例 (テスト用に500エラーをシミュレート):

    ```json
    {
      "error": "テスト用にシミュレートされた内部サーバーエラー。"
    }
    ```

## コントリビューション

コントリビューションは歓迎します！以下の手順に従ってください:

1. リポジトリをフォークします。
2. 新しいブランチを作成します (`git checkout -b feature/your-feature`)。
3. 変更を加えます。
4. ブランチにプッシュします (`git push origin feature/your-feature`)。
5. プルリクエストを作成します。

## ライセンス

このプロジェクトはMITライセンスのもとで提供されています。詳細は[LICENSE](./LICENSE)ファイルを参照してください。