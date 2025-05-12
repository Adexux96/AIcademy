<div align="center">
  <img src="./assets/icon.png" alt="AIcademy Logo" width="150" />
  <h1>AIcademy</h1>
  <p><strong>Making learning easy and accessible to everyone around the world</strong></p>
</div>

## 📚 Overview

- 🤖 **AI-Generated lessons** - Custom content for any subject and difficulty level
- 💬 **Intelligent chatbot** - Answers questions and provides additional explanations
- 📝 **Personalized quizzes** - Test your knowledge with adaptive assessments
- 📊 **Progress tracking** - Monitor your learning journey with detailed stats

## 🧠 Technology

AIcademy supports OpenAI-like apis such as:
- **LM Studio** for local model running.
- **Google AI Studio API** for free cloud-based api.

## ⏱️ Hacktime Stats

<div align="center">
  <img src="https://hackatime-badge.hackclub.com/U08R44TBLKZ/AIcademy" alt="Hacktime Badge" />
  <br />
  <img src="https://github-readme-stats.hackclub.dev/api/wakatime?username=1844&api_domain=hackatime.hackclub.com&theme=shadow_red&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8" alt="Hackatime Stats" />
</div>

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or newer) & npm
- **Android Studio** with Android Virtual Device (AVD) for Android testing
- **Xcode** (macOS only) for iOS testing

### Installation
```bash
git clone https://github.com/Adexux96/AIcademy.git
cd AIcademy
npm i
```

### Running the App
```bash
npx expo start
```

### Platform-Specific Launch

#### Android
```bash
expo run:android
# Or press 'a' key with Metro running
```

#### iOS
```bash
expo run:ios
# Only available on macOS
```

#### Web
```bash
expo run:web
# Or press 'w' key with Metro running
```

## ⚠️ Troubleshooting

- Ensure your Android emulator is running before launching the app
- For network issues, try restarting Metro bundler with cache clearing:
  ```bash
  expo start -c
  ```