# AIcademy

**Short description:**
AIcademy is an app designed to make learning easy and accesible to everyone around the world.

---

## Detailed idea
AIcademy is an app that uses AI to generate lessons of any subject and any level. It also has a chatbot that can answer any question a user might have. It also have customized quizes to test the user's knowledge, and it also has a progress tracker to keep track of the user's progress. As it is an open source app, the AI is implemented using OpenAI's API to make LM Studio api, an app to run local AI models compatible, you can also use free Google AI Studio api if your computer isn't good enought to run a local AI model.

## Set up

### 1. Prerequisites
- **Node.js** (+v14) & npm
- **Android Studio** + Android Virtual Device (ADV) for Android testing
- **Xcode** (macOS only, for iOS testing)

### 2. Clone & Install
```bash
git clone https://github.com/Adexux96/AIcademy.git
cd AIcademy
npm i
```

### 3. Run the app
```bash
npx expo start
```

### 4. Launch on emulator/device
- **Android**
  1. Put this command in your terminal:
     ```bash
     expo run:android
     ```
  2. Or press the key a while the terminal is open and the project is running.
- **iOS**
  1. Put this command in your terminal:
     ```bash
     expo run:ios
     ```
- **Web**
  1. Put this command in your terminal:
     ```bash
     expo run:web
     ```
  2. Or press the key w while the terminal is open and the project is running.

### 5. Troubleshooting
- Ensure your Android emulator is running before launching it from expo in the terminal.
- If you hit network issues, try restarting Metro bundler with `expo start -c` to clear cache.