export const supportedLanguages = [
  ["en", "English"],
  ["es", "Español"],
  ["pt", "Português"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["ja", "日本語"],
  ["hi", "हिन्दी"],
  ["zh-Hans", "简体中文"],
];

export const translations = {
  en: {
    common: {
      tagline: "No accounts. No ads. No tracking. No bullshit.",
      languageLabel: "Language",
      themeSelectorLabel: "Theme selector",
      systemThemeAria: "Use system theme",
      systemThemeTitle: "System theme",
      lightThemeAria: "Use light theme",
      lightThemeTitle: "Light theme",
      darkThemeAria: "Use dark theme",
      darkThemeTitle: "Dark theme",
      copy: "Copy",
      copied: "Copied",
      failed: "Failed",
      privacyBackLink: "← Return to app page",
      privacyLinkTitle: "Privacy Policy",
      privacyLinkBody:
        "Read the standalone privacy policy, including local storage, device permissions, and optional support-purchase handling.",
      privacyLink: "Open privacy policy →",
    },
    home: {
      metaTitle: "NoBS Apps | Pure Utility Manifesto",
      promiseTitle: "The NoBS Promise",
      promiseBody1:
        "Modern apps are bloated. Basic tools have been turned into data-harvesting products packed with tracking cookies, notification spam, and forced cloud accounts.",
      promiseBody2:
        "<strong>We build native utilities that work offline, keep data on your device, and stay out of your way.</strong>",
      currentUtilitiesTitle: "Current Apps",
      fastingDescription:
        "An intermittent fasting tracker for mobile platforms. It keeps fasting history on your device, works without cloud services, and uses plain progress tracking without ads or analytics.",
      flappyDescription:
        "A lightweight offline arcade game for mobile platforms. It keeps run history on your device, works without cloud services, and uses simple distance tracking without ads, accounts, or analytics.",
      timersDescription:
        "A simple clock utility for mobile platforms. It keeps alarms, stopwatch, countdowns, and pomodoro cycles local to your device without ads, accounts, analytics, or cloud sync.",
      viewDocumentation: "View documentation →",
      supportTitle: "Support Independent Development",
      supportBody:
        "We do not display tracking ads or lock utility features behind paywalls. If you value our anti-bloat software manifesto, consider supporting the mission directly:",
      paypalTitle: "PayPal / Card",
      paypalInstruction: "Support the ongoing development of utility apps via PayPal or standard credit card checkout:",
      paypalAction: "Support via PayPal / Card →",
      binanceInstruction:
        "The most frictionless option for mobile app users. Scan using your Binance app or send directly to our permanent Pay ID:",
      copyBinancePay: "Copy Binance Pay ID",
      binanceAlt: "Binance Pay QR code",
      nativeCryptoTitle: "Native Crypto Networks",
      nativeCryptoInstruction:
        "For supporters sending from external software or hardware wallets. Please match the asset network exactly to prevent fund loss.",
      tronTag: "TRX or USDT (Tron Network TRC20)",
      tronInstruction: "Use this same Tron address for native TRX or Tether USDT sent on the TRC20 network only.",
      copyTron: "Copy Tron address",
      showTronQr: "Show Tron QR code",
      tronAlt: "Tron Network TRX and USDT TRC20 QR code",
      bnbTag: "BNB (BNB Smart Chain BEP20)",
      copyBnb: "Copy BNB Smart Chain address",
      showBnbQr: "Show BNB QR code",
      bnbAlt: "BNB Smart Chain QR code",
      btcTag: "BTC (Bitcoin Network)",
      copyBitcoin: "Copy Bitcoin address",
      showBtcQr: "Show BTC QR code",
      bitcoinAlt: "Bitcoin QR code",
      solTag: "SOL (Solana Network)",
      copySolana: "Copy Solana address",
      showSolQr: "Show SOL QR code",
      solanaAlt: "Solana QR code",
      ltcTag: "LTC (Litecoin Network)",
      copyLitecoin: "Copy Litecoin address",
      showLtcQr: "Show LTC QR code",
      litecoinAlt: "Litecoin QR code",
      footer: "© NoBS Apps. Native utility without distraction.",
    },
    fasting: {
      metaTitle: "NoBS Fasting | Local-First Metabolic Tracker",
      backLink: "← Return to NoBS Apps",
      supportTitle: "Support Independent Development",
      supportBody:
        "NoBS Fasting is built without ads, telemetry, forced accounts, or paid feature gates. If you want to support the work, use the donation options on the NoBS Apps support section.",
      supportLink: "Open NoBS Apps support options →",
      phasesTitle: "Metabolic Tracking Phases",
      phasesIntro: "The local progress ring tracks fasting milestones dynamically based on elapsed time:",
      phase04Time: "04 Hours",
      phase04Title: "Early Fasting",
      phase04Body: "Your digestion wraps up, blood sugar stabilizes, and your insulin levels begin to drop.",
      phase12Time: "12 Hours",
      phase12Title: "Fat Burning",
      phase12Body:
        "Your body runs out of stored sugar reserves and flips the metabolic switch to burn stored fat for energy.",
      phase18Time: "18 Hours",
      phase18Title: "Ketosis",
      phase18Body:
        "Your liver can increase ketone production as stored energy shifts. Effects vary, so the app presents this as an educational milestone rather than medical guidance.",
      phase24Time: "24 Hours",
      phase24Title: "Cellular Cleanup",
      phase24Body:
        "Autophagy-related cleanup may become more active around longer fasts. NoBS Fasting keeps the wording cautious and focused on general fasting education.",
      phase24PlusTime: "24+ Hours (Extended Mode)",
      phase24PlusTitle: "Peak Autophagy",
      phase24PlusBody:
        "After 24 hours, the timer moves into extended mode so longer milestones stay visible without implying guaranteed biological outcomes.",
      phase30Time: "30 Hours",
      phase30Title: "Growth Hormone",
      phase30Body:
        "Growth hormone patterns can change during longer fasts. The app tracks the milestone only as a timing marker, not as a promise of a specific result.",
      phase36Time: "36 Hours",
      phase36Title: "Deep Cleanse",
      phase36Body:
        "This deeper fasting marker keeps extended sessions readable while avoiding claims that a fixed duration produces a fixed cellular outcome.",
      phase48Time: "48 Hours",
      phase48Title: "Immune Reset",
      phase48Body:
        "This is the final tracked milestone in NoBS Fasting. Your body may begin deeper immune-cell recycling, and the app does not track benefits past 48 hours.",
      gamificationTitle: "Gamification & Streaks",
      gamificationIntro:
        "Gamification is optional. When enabled, NoBS Fasting uses local-only stars, streaks, and streak freezes to make consistency visible without accounts, leaderboards, social sharing, or engagement tracking.",
      starsTitle: "Stars",
      starsBody:
        "Stars are earned cumulatively as a fast reaches milestone durations. A fast can earn up to 8 stars: 1 star each at 4h, 12h, 18h, 24h, 30h, and 36h, plus 2 stars at 48h.",
      streaksTitle: "Streaks",
      streaksBody:
        "A day counts toward your streak when it is covered by a completed fast of at least 12 hours, an active fast that has already reached 12 hours, or a streak freeze. Multi-day fasts credit every local date they cover.",
      freezesTitle: "Streak Freezes",
      freezesBody:
        "A streak freeze costs 20 stars and can protect one uncredited local day. It cannot be used while a fast is active or on a day already credited by a qualifying fast or another freeze.",
      bonusesTitle: "Milestone Bonuses",
      bonusesBody:
        "Reaching a 7-day streak grants a 3-star bonus. Reaching a 30-day streak grants a 10-star bonus. Bonuses are awarded once per unbroken streak milestone, then reset only after the streak drops below that threshold.",
      localBehaviorTitle: "Local App Behavior",
      localBehaviorIntro:
        "The core fasting workflow works on-device without accounts, analytics, cloud sync, or a required network connection.",
      historyTitle: "History",
      historyBody:
        "Completed credited fasts are saved locally newest first. Longer or cross-day sessions show start and end date/time, and duplicate-credit fasts are discarded instead of adding extra history or stars.",
      settingsTitle: "Settings",
      settingsBody:
        "Language, theme, milestone marks, gamification, and notifications are device settings. They apply immediately and stay useful even when notifications or gamification are disabled.",
      notificationsTitle: "Notifications",
      notificationsBody:
        "Optional local notifications can alert at 4h, 12h, 18h, 24h, 30h, 36h, and 48h while a fast is active. Daily start reminders use a local rolling average of recent start times.",
      feedbackTitle: "Feedback & Feature Requests",
      feedbackBody:
        "Bug reports, feature proposals, and platform feedback for NoBS Fasting belong in the public feedback queue:",
      feedbackLink: "Open NoBS Fasting feedback on GitHub →",
      privacyTitle: "NoBS Fasting Privacy Policy",
      privacyUpdated: "Last Updated: June 10, 2026",
      privacyIntro:
        "This Privacy Policy governs the data privacy practices of the <strong>NoBS Fasting</strong> mobile application developed and published by <strong>NoBS Apps</strong> for supported mobile platforms.",
      privacyDataTitle: "1. Data Collection & Transmission Statement",
      privacyDataBody1:
        "<strong>NoBS Fasting operates under a strict Zero-Telemetry, local-first architecture.</strong> The application does not collect, capture, monitor, intercept, or transmit any personal, sensitive, or device-identifiable information to external cloud servers, databases, or third parties.",
      privacyDataBody2:
        "We do not use third-party analytics SDKs, advertising SDKs, crash reporting tracking modules, account systems, cloud sync, or identity management tools. No network request is needed for the active timer, history, settings, reminders, gamification, or phase explanations.",
      privacyStorageTitle: "2. Local Storage Sandbox",
      privacyStorageBody:
        "Active fast state, completed sessions, streak freezes, star balance, streak bonus markers, language, theme, notification settings, milestone display settings, gamification settings, and processed support-purchase tokens are stored exclusively inside the app's private local storage area on your device, using the standard persistence technology for the platform. Your data remains under your personal custody and control at all times.",
      privacyPermissionsTitle: "3. Device Permissions Usage",
      privacyPermissionsBody:
        "<strong>Local System Alarms / Notifications:</strong> Where supported and enabled by the user, the app uses local system notification APIs solely to post fasting milestone alerts at 4h, 12h, 18h, 24h, 30h, 36h, and 48h while a fast is active, plus daily start reminders based on your recent local start times. Turning notifications off cancels scheduled milestone alerts and smart reminders. No tracking analytics are embedded within these notifications.",
      privacyPurchasesTitle: "4. Optional Store Support Purchases",
      privacyPurchasesBody:
        "Some platform builds may offer optional native store purchases as symbolic support. These purchases do not unlock features or content. When a completed purchase is reported by the platform store, the app may record the processed purchase token locally to prevent duplicate thank-you star grants.",
      privacyChildrenTitle: "5. Children's Privacy",
      privacyChildrenBody:
        "Because NoBS Fasting does not collect, capture, or transmit any digital information from any user device whatsoever, it is designed to avoid collecting children's personal information.",
      privacyContactTitle: "6. Policy Contact & Support Hub",
      privacyContactBody:
        'For technical inquiries, feature proposals, privacy questions, or platform feedback, use the public feedback section above or open the GitHub queue directly: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml</a>',
      footer: "NoBS Fasting Hub • Local-First Development Architecture",
    },
    flappy: {
      metaTitle: "NoBS Flappy | Local-First Offline Arcade",
      backLink: "← Return to NoBS Apps",
      supportTitle: "Support Independent Development",
      supportBody:
        "NoBS Flappy is built without ads, telemetry, forced accounts, paid feature gates, or cloud leaderboards. If you want to support the work, use the donation options on the NoBS Apps support section.",
      supportLink: "Open NoBS Apps support options →",
      gameplayTitle: "Offline Arcade Play",
      gameplayIntro: "NoBS Flappy keeps the game loop simple, readable, and local:",
      controlTime: "Tap / Click",
      controlTitle: "Flap Up",
      controlBody:
        "Tap anywhere on the play surface to flap upward. The world scrolls automatically, so the goal is to keep the bird clear of hazards.",
      distanceTime: "Distance",
      distanceTitle: "Distance, Not Accounts",
      distanceBody:
        'The game does not use points, social scores, or online rankings. During play, a quiet bottom-right HUD shows "Distance travelled:" and completed runs report distance in kilometers or miles based on your setting.',
      offlineTime: "Offline",
      offlineTitle: "Local Runs",
      offlineBody:
        "Run history and the best distance stay on your device. The core game works without network access, login, or server services.",
      hudTime: "HUD",
      hudTitle: "Fast Controls",
      hudBody:
        "Start jumps straight into the playable surface. During a run, a small two-way Light/Dark toggle stays below the floor line so theme changes do not count as flap input.",
      hazardsTitle: "Hazards & Game Over",
      hazardsIntro: "Runs end only when the bird collides with a local gameplay hazard:",
      buildingsTitle: "City Buildings",
      buildingsBody:
        "The endless city uses readable building silhouettes, stepped and pyramid rooflines, large window grids, doors, and occasional antennas. Building bodies, antennas, and the floor are solid hazards.",
      planesTitle: "Airplanes",
      planesBody:
        "Airplanes unlock after 0.5 km, cross the high sky lane from right to left, and use three speed tiers. Plane collisions end the run with dedicated copy.",
      purpleAngryBirdTitle: "Purple Angry Bird",
      purpleAngryBirdBody:
        "The purple Angry Bird unlocks at 1 km. It is a mirrored origami bird with a bounded flap path and a mild player-height bias, so it feels aware without becoming a direct homing enemy.",
      redAngryBirdTitle: "Red Angry Bird",
      redAngryBirdBody:
        "The red Angry Bird unlocks at 2 km. It is faster and more aggressive than the purple one, but it must still leave a playable bypass route.",
      thunderTitle: "Thunder Fall",
      thunderBody:
        "Repeatedly flying too high can trigger a thunder fall state. Input stops mattering, the bird falls upside down, and the overlay waits until impact before ending the run.",
      difficultyTitle: "Difficulty Unlocks",
      difficultyBody:
        "Antennas may appear after 0.25 km, planes after 0.5 km, purple Angry Birds after 1 km, and red Angry Birds after 2 km. World speed ramps at 1.5 km, 2.5 km, and 4 km.",
      gameOverCopyTitle: "Game-Over Copy",
      gameOverCopyBody:
        'The run explains what happened: floor, building, antenna, plane, Angry Bird, and thunder each have dedicated messages. Angry Bird collisions say, "You\'ve been hit by an Angry Bird!"',
      historyTitle: "Local History",
      historyIntro: "History is plain by design, with no badges, stars, online profiles, or engagement loops.",
      runsTitle: "Run Cards",
      runsBody:
        "Completed runs are stored locally with the newest run first. Each card shows the local date/time and distance reached.",
      bestTitle: "Best Distance",
      bestBody:
        "When history exists, the best distance appears above the list as a simple local summary. Empty history stays empty.",
      feedbackTitle: "Feedback & Feature Requests",
      feedbackBody:
        "Bug reports, feature proposals, and platform feedback for NoBS Flappy belong in the public feedback queue:",
      feedbackLink: "Open NoBS Flappy feedback on GitHub →",
      privacyTitle: "NoBS Flappy Privacy Policy",
      privacyUpdated: "Last Updated: June 10, 2026",
      privacyIntro:
        "This Privacy Policy governs the data privacy practices of the <strong>NoBS Flappy</strong> mobile application developed and published by <strong>NoBS Apps</strong> for supported mobile platforms.",
      privacyDataTitle: "1. Data Collection & Transmission Statement",
      privacyDataBody1:
        "<strong>NoBS Flappy operates under a strict Zero-Telemetry, local-first architecture.</strong> The application does not collect, capture, monitor, intercept, or transmit any personal, sensitive, gameplay, or device-identifiable information to external cloud servers, databases, or third parties.",
      privacyDataBody2:
        "We do not use any third-party analytics SDKs, crash reporting tracking modules, advertising SDKs, online leaderboard services, or identity management tools. No network requests are initialized by this application during standard gameplay.",
      privacyStorageTitle: "2. Local Storage Sandbox",
      privacyStorageBody:
        "Run history, best distance, language, theme, distance-unit setting, and processed support-purchase tokens are stored exclusively inside the app's private local storage area on your device, using the standard persistence technology for the platform. Your data remains under your personal custody and control at all times.",
      privacyPermissionsTitle: "3. Device Permissions Usage",
      privacyPermissionsBody:
        "<strong>No special gameplay permissions:</strong> The app does not need location, contacts, camera, microphone, advertising identifiers, background services, push notifications, or cloud services for standard gameplay.",
      privacyPurchasesTitle: "4. Optional Store Support Purchases",
      privacyPurchasesBody:
        "Some platform builds may offer optional native store purchases as symbolic support. These purchases do not unlock features or content and do not grant stars, points, badges, or other rewards. When a completed purchase is reported by the platform store, the app may record the processed purchase token locally to prevent duplicate processing.",
      privacyChildrenTitle: "5. Children's Privacy",
      privacyChildrenBody:
        "Because NoBS Flappy does not collect, capture, or transmit any digital information from any user device whatsoever, it is designed to avoid collecting children's personal information.",
      privacyContactTitle: "6. Policy Contact & Support Hub",
      privacyContactBody:
        'For technical inquiries, feature proposals, privacy questions, or platform feedback, use the public feedback section above or open the GitHub queue directly: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml</a>',
      footer: "NoBS Flappy Hub • Local-First Offline Arcade",
    },
    timers: {
      metaTitle: "NoBS Timers | Local-First Clock Utilities",
      backLink: "← Return to NoBS Apps",
      supportTitle: "Support Independent Development",
      supportBody:
        "NoBS Timers is built without ads, telemetry, forced accounts, paid feature gates, or cloud sync. If you want to support the work, use the donation options on the NoBS Apps support section.",
      supportLink: "Open NoBS Apps support options →",
      toolsTitle: "Simple Clock Tools",
      toolsIntro:
        "NoBS Timers keeps everyday timing tools plain, local, and quick to reach from a portrait-only mobile layout.",
      alarmTime: "Time of Day",
      alarmTitle: "Alarm",
      alarmBody:
        "Pick a time, choose whether it repeats every day, and save it. The app remembers the last saved alarm time and defaults first use to six hours in the future.",
      stopwatchTime: "00:00:00",
      stopwatchTitle: "Stopwatch",
      stopwatchBody:
        "The stopwatch has one button: Start, Stop, then Resume. There are no laps, split times, exports, or extra controls.",
      countdownTime: "HH:MM:SS",
      countdownTitle: "Countdown",
      countdownBody:
        "Enter hours, minutes, and seconds, then start. The last used duration is remembered, the running action becomes Cancel, and the standard app sound plays at zero.",
      pomodoroTime: "25 + 5",
      pomodoroTitle: "Pomodoro",
      pomodoroBody:
        "Pomodoro uses fixed 25-minute work periods and 5-minute rests. Each transition plays the standard sound and the next period starts automatically until you cancel.",
      localBehaviorTitle: "Local App Behavior",
      localBehaviorIntro:
        "The core timing workflow works on-device without accounts, analytics, cloud sync, or a required network connection.",
      navigationTitle: "Bottom Controls",
      navigationBody:
        "The first bottom row uses larger buttons for Alarm, Stopwatch, Countdown, and Pomodoro. A smaller second row keeps Settings and Support available without crowding the timer tools.",
      settingsTitle: "Settings",
      settingsBody:
        "Settings stay consistent with other NoBS apps: language and theme options apply immediately and remain local to the device.",
      notificationsTitle: "Local Alerts",
      notificationsBody:
        "Alarms, countdowns, and pomodoro transitions use local system alerts where the platform allows them. Permission is requested only when a timing feature needs it.",
      soundTitle: "One Sound",
      soundBody:
        "NoBS Timers uses one standardized alert sound across alarm, countdown, work completion, and rest completion. There is no sound picker.",
      feedbackTitle: "Feedback & Feature Requests",
      feedbackBody:
        "Bug reports, feature proposals, and platform feedback for NoBS Timers belong in the public NoBS Apps feedback queue:",
      feedbackLink: "Open NoBS Timers feedback on GitHub →",
      privacyTitle: "NoBS Timers Privacy Policy",
      privacyUpdated: "Last Updated: June 11, 2026",
      privacyIntro:
        "This Privacy Policy governs the data privacy practices of the <strong>NoBS Timers</strong> mobile application developed and published by <strong>NoBS Apps</strong> for supported mobile platforms.",
      privacyDataTitle: "1. Data Collection & Transmission Statement",
      privacyDataBody1:
        "<strong>NoBS Timers operates under a strict Zero-Telemetry, local-first architecture.</strong> The application does not collect, capture, monitor, intercept, or transmit any personal, sensitive, timing, or device-identifiable information to external cloud servers, databases, or third parties.",
      privacyDataBody2:
        "We do not use third-party analytics SDKs, advertising SDKs, crash reporting tracking modules, account systems, cloud sync, or identity management tools. No network request is needed for alarm, stopwatch, countdown, pomodoro, settings, support page display, or local alert scheduling.",
      privacyStorageTitle: "2. Local Storage Sandbox",
      privacyStorageBody:
        "Saved alarm time, everyday alarm preference, last countdown duration, active timer state where needed, language, theme, and processed support-purchase tokens are stored exclusively inside the app's private local storage area on your device, using the standard persistence technology for the platform. Your data remains under your personal custody and control at all times.",
      privacyPermissionsTitle: "3. Device Permissions Usage",
      privacyPermissionsBody:
        "<strong>Local system alarms / notifications:</strong> Where supported and enabled by the user, the app uses local system alarm or notification APIs solely to alert for saved alarms, countdown completion, and pomodoro work/rest transitions. No tracking analytics are embedded within these alerts.",
      privacyPurchasesTitle: "4. Optional Store Support Purchases",
      privacyPurchasesBody:
        "Some platform builds may offer optional native store purchases as symbolic support. These purchases do not unlock features or content and do not grant stars, points, badges, or other rewards. When a completed purchase is reported by the platform store, the app may record the processed purchase token locally to prevent duplicate processing.",
      privacyChildrenTitle: "5. Children's Privacy",
      privacyChildrenBody:
        "Because NoBS Timers does not collect, capture, or transmit any digital information from any user device whatsoever, it is designed to avoid collecting children's personal information.",
      privacyContactTitle: "6. Policy Contact & Support Hub",
      privacyContactBody:
        'For technical inquiries, feature proposals, privacy questions, or platform feedback, use the public feedback section above or open the GitHub queue directly: <a href="https://github.com/daigof/nobs-apps/issues/new" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new</a>',
      footer: "NoBS Timers Hub • Local-First Clock Utilities",
    },
  },
  es: {
    common: {
      tagline: "Sin cuentas. Sin anuncios. Sin rastreo. No bullshit.",
      languageLabel: "Idioma",
      themeSelectorLabel: "Selector de tema",
      systemThemeAria: "Usar tema del sistema",
      systemThemeTitle: "Tema del sistema",
      lightThemeAria: "Usar tema claro",
      lightThemeTitle: "Tema claro",
      darkThemeAria: "Usar tema oscuro",
      darkThemeTitle: "Tema oscuro",
      copy: "Copiar",
      copied: "Copiado",
      failed: "Error",
      privacyBackLink: "← Volver a la página de la app",
      privacyLinkTitle: "Política de privacidad",
      privacyLinkBody:
        "Lee la política de privacidad independiente, incluida la información sobre almacenamiento local, permisos del dispositivo y compras de apoyo opcionales.",
      privacyLink: "Abrir política de privacidad →",
    },
    home: {
      metaTitle: "NoBS Apps | Manifiesto de utilidad pura",
      promiseTitle: "La promesa de NoBS Apps",
      promiseBody1:
        "Las apps modernas están infladas. Herramientas básicas se convirtieron en productos de extracción de datos con cookies de rastreo, spam de notificaciones y cuentas en la nube obligatorias.",
      promiseBody2:
        "<strong>Creamos utilidades nativas que funcionan sin conexión, conservan tus datos en tu dispositivo y no se interponen.</strong>",
      currentUtilitiesTitle: "Apps",
      fastingDescription:
        "Un rastreador de ayuno intermitente para plataformas móviles. Mantiene el historial de ayunos en tu dispositivo, funciona sin servicios en la nube y usa seguimiento de progreso simple, sin anuncios ni analíticas.",
      flappyDescription:
        "Un juego arcade liviano sin conexión para plataformas móviles. Mantiene el historial de partidas en tu dispositivo, funciona sin servicios en la nube y usa seguimiento simple de distancia, sin anuncios, cuentas ni analíticas.",
      viewDocumentation: "Ver documentación →",
      supportTitle: "Apoya el desarrollo independiente",
      supportBody:
        "No mostramos anuncios con rastreo ni bloqueamos funciones útiles detrás de muros de pago. Si valoras nuestro manifiesto contra el software inflado, considera apoyar la misión directamente:",
      paypalTitle: "PayPal / Tarjeta",
      paypalInstruction:
        "Apoya el desarrollo continuo de apps útiles con PayPal o con pago estándar con tarjeta de crédito:",
      paypalAction: "Donar con PayPal / Tarjeta →",
      binanceInstruction:
        "La opción con menos fricción para usuarios móviles. Escanea con tu app de Binance o envía directamente a nuestro Pay ID permanente:",
      copyBinancePay: "Copiar Pay ID de Binance",
      binanceAlt: "Código QR de Binance Pay",
      nativeCryptoTitle: "Redes cripto",
      nativeCryptoInstruction:
        "Para colaboradores que envían desde software externo o hardware wallets. Haz coincidir exactamente la red crypto para evitar pérdida de fondos.",
      tronTag: "TRX o USDT (red Tron TRC20)",
      tronInstruction: "Usa esta misma dirección de Tron solo para TRX nativo o Tether USDT enviado por la red TRC20.",
      copyTron: "Copiar dirección de Tron",
      showTronQr: "Mostrar código QR de Tron",
      tronAlt: "Código QR de TRX y USDT TRC20 en la red Tron",
      bnbTag: "BNB (BNB Smart Chain BEP20)",
      copyBnb: "Copiar dirección de BNB Smart Chain",
      showBnbQr: "Mostrar código QR de BNB",
      bnbAlt: "Código QR de BNB Smart Chain",
      btcTag: "BTC (red Bitcoin)",
      copyBitcoin: "Copiar dirección de Bitcoin",
      showBtcQr: "Mostrar código QR de BTC",
      bitcoinAlt: "Código QR de Bitcoin",
      solTag: "SOL (red Solana)",
      copySolana: "Copiar dirección de Solana",
      showSolQr: "Mostrar código QR de SOL",
      solanaAlt: "Código QR de Solana",
      ltcTag: "LTC (red Litecoin)",
      copyLitecoin: "Copiar dirección de Litecoin",
      showLtcQr: "Mostrar código QR de LTC",
      litecoinAlt: "Código QR de Litecoin",
      footer: "© NoBS Apps. Utilidad nativa sin distracciones.",
      timersDescription:
        "Una utilidad de reloj simple para plataformas móviles. Mantiene alarmas, cronómetro, cuentas regresivas y ciclos pomodoro en tu dispositivo, sin anuncios, cuentas, analíticas ni sincronización en la nube.",
    },
    fasting: {
      metaTitle: "NoBS Fasting | Rastreador metabólico local-first",
      backLink: "← Volver a NoBS Apps",
      supportTitle: "Apoya el desarrollo independiente",
      supportBody:
        "NoBS Fasting se crea sin anuncios, telemetría, cuentas obligatorias ni bloqueos de funciones pagas. Si quieres apoyar el trabajo, usa las opciones de donación en la sección de soporte de NoBS Apps.",
      supportLink: "Abrir opciones de soporte de NoBS Apps →",
      phasesTitle: "Fases de seguimiento metabólico",
      phasesIntro: "El anillo de progreso local sigue los hitos del ayuno dinámicamente según el tiempo transcurrido:",
      phase04Time: "04 horas",
      phase04Title: "Ayuno temprano",
      phase04Body:
        "Tu digestión termina, el azúcar en sangre se estabiliza y tus niveles de insulina empiezan a bajar.",
      phase12Time: "12 horas",
      phase12Title: "Quema de grasa",
      phase12Body:
        "Tu cuerpo agota sus reservas de azúcar almacenada y cambia el metabolismo para quemar grasa almacenada como energía.",
      phase18Time: "18 horas",
      phase18Title: "Cetosis",
      phase18Body:
        "Tu hígado puede aumentar la producción de cetonas cuando cambia el uso de energía almacenada. Los efectos varían, así que la app presenta este punto como un hito educativo, no como orientación médica.",
      phase24Time: "24 horas",
      phase24Title: "Limpieza celular",
      phase24Body:
        "La limpieza relacionada con la autofagia puede volverse más activa en ayunos largos. NoBS Fasting mantiene un tono prudente y centrado en educación general sobre ayuno.",
      phase24PlusTime: "24+ horas (modo extendido)",
      phase24PlusTitle: "Autofagia máxima",
      phase24PlusBody:
        "Después de 24 horas, el temporizador pasa al modo extendido para que los hitos largos sigan visibles sin sugerir resultados biológicos garantizados.",
      phase30Time: "30 horas",
      phase30Title: "Hormona de crecimiento",
      phase30Body:
        "Los patrones de hormona de crecimiento pueden cambiar durante ayunos más largos. La app registra el hito solo como marcador de tiempo, no como promesa de un resultado específico.",
      phase36Time: "36 horas",
      phase36Title: "Limpieza profunda",
      phase36Body:
        "Este marcador de ayuno profundo mantiene legibles las sesiones extendidas sin afirmar que una duración fija produce un resultado celular fijo.",
      phase48Time: "48 horas",
      phase48Title: "Reinicio inmune",
      phase48Body:
        "Este es el último hito que NoBS Fasting registra. Tu cuerpo podría entrar en reciclaje más profundo de células inmunitarias, y la app no registra beneficios después de 48 horas.",
      gamificationTitle: "Gamificación y rachas",
      gamificationIntro:
        "La gamificación es opcional. Cuando está activada, NoBS Fasting usa estrellas, rachas y congelamientos de racha locales para hacer visible la constancia sin cuentas, rankings, compartir en redes ni rastreo de interacción.",
      starsTitle: "Estrellas",
      starsBody:
        "Las estrellas se obtienen acumulativamente cuando un ayuno alcanza duraciones hito. Un ayuno puede obtener hasta 8 estrellas: 1 estrella a las 4h, 12h, 18h, 24h, 30h y 36h, más 2 estrellas a las 48h.",
      streaksTitle: "Rachas",
      streaksBody:
        "Un día cuenta para tu racha cuando está cubierto por un ayuno completado de al menos 12 horas, un ayuno activo que ya llegó a 12 horas o un congelamiento de racha. Los ayunos de varios días acreditan cada fecha local que cubren.",
      freezesTitle: "Congelamientos de racha",
      freezesBody:
        "Un congelamiento de racha cuesta 20 estrellas y puede proteger un día local no acreditado. No puede usarse mientras hay un ayuno activo ni en un día ya acreditado por un ayuno válido u otro congelamiento.",
      bonusesTitle: "Bonos por hitos",
      bonusesBody:
        "Al llegar a una racha de 7 días recibes un bono de 3 estrellas. Al llegar a 30 días recibes un bono de 10 estrellas. Los bonos se otorgan una vez por cada hito de racha intacta y se reinician solo cuando la racha cae por debajo de ese umbral.",
      localBehaviorTitle: "Comportamiento local de la app",
      localBehaviorIntro:
        "El flujo principal de ayuno funciona en el dispositivo sin cuentas, analíticas, sincronización en la nube ni conexión de red obligatoria.",
      historyTitle: "Historial",
      historyBody:
        "Los ayunos completados y acreditados se guardan localmente con el más reciente primero. Las sesiones largas o que cruzan días muestran inicio y fin, y los ayunos con crédito duplicado se descartan sin sumar historial ni estrellas.",
      settingsTitle: "Ajustes",
      settingsBody:
        "Idioma, tema, marcas de hitos, gamificación y notificaciones son ajustes del dispositivo. Se aplican de inmediato y la app sigue siendo útil aunque desactives notificaciones o gamificación.",
      notificationsTitle: "Notificaciones",
      notificationsBody:
        "Las notificaciones locales opcionales pueden avisar a las 4h, 12h, 18h, 24h, 30h, 36h y 48h mientras hay un ayuno activo. Los recordatorios diarios usan un promedio móvil local de horas de inicio recientes.",
      feedbackTitle: "Comentarios y solicitudes de funciones",
      feedbackBody:
        "Los reportes de errores, propuestas de funciones y comentarios de plataforma para NoBS Fasting van en la cola pública de feedback:",
      feedbackLink: "Abrir feedback de NoBS Fasting en GitHub →",
      privacyTitle: "Política de privacidad de NoBS Fasting",
      privacyUpdated: "Última actualización: 10 de junio de 2026",
      privacyIntro:
        "Esta Política de Privacidad regula las prácticas de privacidad de datos de la aplicación móvil <strong>NoBS Fasting</strong>, desarrollada y publicada por <strong>NoBS Apps</strong> para plataformas móviles compatibles.",
      privacyDataTitle: "1. Declaración de recolección y transmisión de datos",
      privacyDataBody1:
        "<strong>NoBS Fasting opera con una arquitectura estricta de telemetría cero y local-first.</strong> La aplicación no recopila, captura, monitorea, intercepta ni transmite información personal, sensible o identificable del dispositivo a servidores en la nube, bases de datos externas ni terceros.",
      privacyDataBody2:
        "No usamos SDKs de analíticas de terceros, SDKs publicitarios, módulos de rastreo de fallos, sistemas de cuentas, sincronización en la nube ni herramientas de gestión de identidad. Ninguna solicitud de red es necesaria para el temporizador activo, historial, ajustes, recordatorios, gamificación o explicaciones de fases.",
      privacyStorageTitle: "2. Sandbox de almacenamiento local",
      privacyStorageBody:
        "El estado del ayuno activo, sesiones completadas, congelamientos de racha, saldo de estrellas, marcadores de bonos de racha, idioma, tema, ajustes de notificaciones, ajustes de marcas de hitos, ajustes de gamificación y tokens de compras de soporte procesadas se almacenan exclusivamente dentro del área privada de almacenamiento local de la app en tu dispositivo, usando la tecnología de persistencia estándar de la plataforma. Tus datos permanecen bajo tu custodia y control personal en todo momento.",
      privacyPermissionsTitle: "3. Uso de permisos del dispositivo",
      privacyPermissionsBody:
        "<strong>Alarmas / notificaciones locales del sistema:</strong> Cuando la plataforma lo permite y el usuario lo activa, la app usa APIs locales de notificación del sistema únicamente para publicar alertas de hitos a las 4h, 12h, 18h, 24h, 30h, 36h y 48h mientras hay un ayuno activo, además de recordatorios diarios basados en tus horas de inicio locales recientes. Desactivar notificaciones cancela las alertas de hitos y recordatorios inteligentes programados. Estas notificaciones no incluyen analíticas de rastreo.",
      privacyPurchasesTitle: "4. Compras opcionales de soporte en tienda",
      privacyPurchasesBody:
        "Algunas versiones de plataforma pueden ofrecer compras nativas opcionales como soporte simbólico. Estas compras no desbloquean funciones ni contenido. Cuando la tienda de la plataforma informa una compra completada, la app puede registrar localmente el token de compra procesado para evitar otorgar dos veces las estrellas locales de agradecimiento.",
      privacyChildrenTitle: "5. Privacidad de menores",
      privacyChildrenBody:
        "Como NoBS Fasting no recopila, captura ni transmite información digital de ningún dispositivo de usuario, está diseñada para evitar la recolección de información personal de menores.",
      privacyContactTitle: "6. Contacto de política y centro de soporte",
      privacyContactBody:
        'Para consultas técnicas, propuestas de funciones, preguntas de privacidad o comentarios de plataforma, usa la sección pública de feedback anterior o abre directamente la cola de GitHub: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml</a>',
      footer: "Centro NoBS Fasting • Arquitectura de desarrollo local-first",
    },
    flappy: {
      metaTitle: "NoBS Flappy | Arcade offline local-first",
      backLink: "← Volver a NoBS Apps",
      supportTitle: "Apoya el desarrollo independiente",
      supportBody:
        "NoBS Flappy se crea sin anuncios, telemetría, cuentas obligatorias, bloqueos de funciones pagas ni rankings en la nube. Si quieres apoyar el trabajo, usa las opciones de donación en la sección de soporte de NoBS Apps.",
      supportLink: "Abrir opciones de soporte de NoBS Apps →",
      gameplayTitle: "Juego arcade offline",
      gameplayIntro: "NoBS Flappy mantiene el bucle de juego simple, legible y local:",
      controlTime: "Tocar / clic",
      controlTitle: "Aletear hacia arriba",
      controlBody:
        "Toca cualquier parte de la superficie de juego para subir. El mundo avanza automáticamente, así que el objetivo es mantener al pájaro lejos de los obstáculos.",
      distanceTime: "Distancia",
      distanceTitle: "Distancia, no cuentas",
      distanceBody:
        'El juego no usa puntos, marcadores sociales ni rankings online. Durante la partida, un indicador discreto abajo a la derecha muestra "Distancia recorrida:" y las partidas completadas reportan distancia en kilómetros o millas según tu ajuste.',
      offlineTime: "Offline",
      offlineTitle: "Partidas locales",
      offlineBody:
        "El historial de partidas y la mejor distancia quedan en tu dispositivo. El juego principal funciona sin acceso a red, inicio de sesión ni servicios de servidor.",
      hudTime: "HUD",
      hudTitle: "Controles rápidos",
      hudBody:
        "Start entra directamente en la superficie jugable. Durante una partida, un pequeño selector Claro/Oscuro permanece debajo de la línea del piso para que cambiar el tema no cuente como aleteo.",
      hazardsTitle: "Obstáculos y fin de partida",
      hazardsIntro: "Las partidas terminan solo cuando el pájaro choca con un obstáculo local del juego:",
      buildingsTitle: "Edificios de ciudad",
      buildingsBody:
        "La ciudad infinita usa siluetas legibles, techos escalonados y piramidales, grillas de ventanas grandes, puertas y antenas ocasionales. Los cuerpos de edificios, antenas y el piso son obstáculos sólidos.",
      planesTitle: "Aviones",
      planesBody:
        "Los aviones se desbloquean después de 0.5 km, cruzan la zona alta del cielo de derecha a izquierda y usan tres niveles de velocidad. Chocar con un avión termina la partida con un mensaje específico.",
      purpleAngryBirdTitle: "Angry Bird violeta",
      purpleAngryBirdBody:
        "El Angry Bird violeta se desbloquea en 1 km. Es un pájaro de origami espejado con una ruta de aleteo limitada y un sesgo suave hacia la altura del jugador, así que parece atento sin ser un enemigo perseguidor directo.",
      redAngryBirdTitle: "Angry Bird rojo",
      redAngryBirdBody:
        "El Angry Bird rojo se desbloquea en 2 km. Es más rápido y agresivo que el violeta, pero todavía debe dejar una ruta jugable para esquivarlo.",
      thunderTitle: "Caída por trueno",
      thunderBody:
        "Volar demasiado alto varias veces puede activar una caída por trueno. La entrada deja de importar, el pájaro cae invertido y el mensaje final espera hasta el impacto.",
      difficultyTitle: "Desbloqueo de dificultad",
      difficultyBody:
        "Las antenas pueden aparecer después de 0.25 km, los aviones después de 0.5 km, los Angry Birds violetas después de 1 km y los rojos después de 2 km. La velocidad del mundo aumenta en 1.5 km, 2.5 km y 4 km.",
      gameOverCopyTitle: "Mensajes de fin",
      gameOverCopyBody:
        'La partida explica qué pasó: piso, edificio, antena, avión, Angry Bird y trueno tienen mensajes dedicados. Los choques con Angry Bird dicen: "You\'ve been hit by an Angry Bird!"',
      historyTitle: "Historial local",
      historyIntro:
        "El historial es simple por diseño, sin insignias, estrellas, perfiles online ni bucles de interacción.",
      runsTitle: "Tarjetas de partida",
      runsBody:
        "Las partidas completadas se guardan localmente con la más nueva primero. Cada tarjeta muestra fecha/hora local y distancia alcanzada.",
      bestTitle: "Mejor distancia",
      bestBody:
        "Cuando hay historial, la mejor distancia aparece arriba de la lista como un resumen local simple. Si no hay historial, queda vacío.",
      feedbackTitle: "Comentarios y solicitudes de funciones",
      feedbackBody:
        "Los reportes de errores, propuestas de funciones y comentarios de plataforma para NoBS Flappy van en la cola pública de feedback:",
      feedbackLink: "Abrir feedback de NoBS Flappy en GitHub →",
      privacyTitle: "Política de privacidad de NoBS Flappy",
      privacyUpdated: "Última actualización: 10 de junio de 2026",
      privacyIntro:
        "Esta Política de Privacidad regula las prácticas de privacidad de datos de la aplicación móvil <strong>NoBS Flappy</strong>, desarrollada y publicada por <strong>NoBS Apps</strong> para plataformas móviles compatibles.",
      privacyDataTitle: "1. Declaración de recolección y transmisión de datos",
      privacyDataBody1:
        "<strong>NoBS Flappy opera con una arquitectura estricta de telemetría cero y local-first.</strong> La aplicación no recopila, captura, monitorea, intercepta ni transmite información personal, sensible, de juego o identificable del dispositivo a servidores en la nube, bases de datos externas ni terceros.",
      privacyDataBody2:
        "No usamos SDKs de analíticas de terceros, módulos de rastreo de fallos, SDKs publicitarios, rankings online ni herramientas de gestión de identidad. La aplicación no inicia solicitudes de red durante el juego estándar.",
      privacyStorageTitle: "2. Sandbox de almacenamiento local",
      privacyStorageBody:
        "El historial de partidas, la mejor distancia, idioma, tema, ajuste de unidad de distancia y tokens de compras de soporte procesadas se almacenan exclusivamente dentro del área privada de almacenamiento local de la app en tu dispositivo, usando la tecnología de persistencia estándar de la plataforma. Tus datos permanecen bajo tu custodia y control personal en todo momento.",
      privacyPermissionsTitle: "3. Uso de permisos del dispositivo",
      privacyPermissionsBody:
        "<strong>Sin permisos especiales de juego:</strong> La app no necesita ubicación, contactos, cámara, micrófono, identificadores publicitarios, servicios en segundo plano, notificaciones push ni servicios en la nube para el juego estándar.",
      privacyPurchasesTitle: "4. Compras opcionales de soporte en tienda",
      privacyPurchasesBody:
        "Algunas versiones de plataforma pueden ofrecer compras nativas opcionales como soporte simbólico. Estas compras no desbloquean funciones ni contenido y no otorgan estrellas, puntos, insignias ni otras recompensas. Cuando la tienda de la plataforma informa una compra completada, la app puede registrar localmente el token de compra procesado para evitar procesamiento duplicado.",
      privacyChildrenTitle: "5. Privacidad de menores",
      privacyChildrenBody:
        "Como NoBS Flappy no recopila, captura ni transmite información digital de ningún dispositivo de usuario, está diseñada para evitar la recolección de información personal de menores.",
      privacyContactTitle: "6. Contacto de política y centro de soporte",
      privacyContactBody:
        'Para consultas técnicas, propuestas de funciones, preguntas de privacidad o comentarios de plataforma, usa la sección pública de feedback anterior o abre directamente la cola de GitHub: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml</a>',
      footer: "Centro NoBS Flappy • Arcade offline local-first",
    },
    timers: {
      metaTitle: "NoBS Timers | Utilidades de reloj local-first",
      backLink: "← Volver a NoBS Apps",
      supportTitle: "Apoya el desarrollo independiente",
      supportBody:
        "NoBS Timers está creado sin anuncios, telemetría, cuentas obligatorias, funciones bloqueadas por pago ni sincronización en la nube. Si quieres apoyar el trabajo, usa las opciones de donación en la sección de soporte de NoBS Apps.",
      supportLink: "Abrir opciones de soporte de NoBS Apps →",
      toolsTitle: "Herramientas simples de reloj",
      toolsIntro:
        "NoBS Timers mantiene las herramientas de tiempo cotidianas simples, locales y rápidas de alcanzar desde un diseño móvil solo vertical.",
      alarmTime: "Hora del día",
      alarmTitle: "Alarma",
      alarmBody:
        "Elige una hora, decide si se repite todos los días y guárdala. La app recuerda la última hora de alarma guardada y en el primer uso propone seis horas en el futuro.",
      stopwatchTime: "00:00:00",
      stopwatchTitle: "Cronómetro",
      stopwatchBody:
        "El cronómetro tiene un botón: Iniciar, Detener y luego Reanudar. No hay vueltas, parciales, exportaciones ni controles extra.",
      countdownTime: "HH:MM:SS",
      countdownTitle: "Cuenta regresiva",
      countdownBody:
        "Ingresa horas, minutos y segundos, y comienza. La última duración usada se recuerda, la acción en ejecución pasa a Cancelar y el sonido estándar de la app suena al llegar a cero.",
      pomodoroTime: "25 + 5",
      pomodoroTitle: "Pomodoro",
      pomodoroBody:
        "Pomodoro usa periodos fijos de 25 minutos de trabajo y 5 minutos de descanso. Cada transición reproduce el sonido estándar y el siguiente periodo comienza automáticamente hasta que canceles.",
      localBehaviorTitle: "Comportamiento local de la app",
      localBehaviorIntro:
        "El flujo central de temporización funciona en el dispositivo sin cuentas, analíticas, sincronización en la nube ni conexión de red obligatoria.",
      navigationTitle: "Controles inferiores",
      navigationBody:
        "La primera fila inferior usa botones más grandes para Alarma, Cronómetro, Cuenta regresiva y Pomodoro. Una segunda fila más pequeña mantiene Configuración y Soporte disponibles sin saturar las herramientas.",
      settingsTitle: "Configuración",
      settingsBody:
        "La configuración se mantiene consistente con otras apps NoBS: idioma y tema se aplican de inmediato y permanecen locales en el dispositivo.",
      notificationsTitle: "Alertas locales",
      notificationsBody:
        "Alarmas, cuentas regresivas y transiciones de pomodoro usan alertas locales del sistema cuando la plataforma lo permite. El permiso se solicita solo cuando una función de tiempo lo necesita.",
      soundTitle: "Un solo sonido",
      soundBody:
        "NoBS Timers usa un sonido de alerta estándar para alarma, cuenta regresiva, fin de trabajo y fin de descanso. No hay selector de sonido.",
      feedbackTitle: "Comentarios y solicitudes de funciones",
      feedbackBody:
        "Los errores, propuestas y comentarios de plataforma para NoBS Timers pertenecen a la cola pública de NoBS Apps:",
      feedbackLink: "Abrir feedback de NoBS Timers en GitHub →",
      privacyTitle: "Política de privacidad de NoBS Timers",
      privacyUpdated: "Última actualización: 11 de junio de 2026",
      privacyIntro:
        "Esta Política de privacidad rige las prácticas de privacidad de datos de la aplicación móvil <strong>NoBS Timers</strong>, desarrollada y publicada por <strong>NoBS Apps</strong> para plataformas móviles compatibles.",
      privacyDataTitle: "1. Declaración de recolección y transmisión de datos",
      privacyDataBody1:
        "<strong>NoBS Timers opera bajo una arquitectura estricta de cero telemetría y local-first.</strong> La aplicación no recopila, captura, monitorea, intercepta ni transmite información personal, sensible, de temporización o identificable del dispositivo a servidores externos, bases de datos o terceros.",
      privacyDataBody2:
        "No usamos SDKs de analíticas de terceros, SDKs publicitarios, módulos de seguimiento de reportes de fallos, sistemas de cuentas, sincronización en la nube ni herramientas de identidad. No se necesita ninguna solicitud de red para alarma, cronómetro, cuenta regresiva, pomodoro, configuración, soporte o programación de alertas locales.",
      privacyStorageTitle: "2. Almacenamiento local aislado",
      privacyStorageBody:
        "La hora de alarma guardada, la preferencia de alarma diaria, la última duración de cuenta regresiva, el estado activo del temporizador cuando haga falta, idioma, tema y tokens de compras de soporte procesados se almacenan exclusivamente en el área privada local de la app en tu dispositivo, usando la tecnología estándar de persistencia de la plataforma. Tus datos permanecen siempre bajo tu custodia y control personal.",
      privacyPermissionsTitle: "3. Uso de permisos del dispositivo",
      privacyPermissionsBody:
        "<strong>Alarmas / notificaciones locales del sistema:</strong> Cuando la plataforma lo permite y el usuario lo habilita, la app usa APIs locales del sistema solo para activar alarmas, finalizaciones de cuenta regresiva y transiciones de pomodoro. Desactivar o cancelar un temporizador cancela las alertas programadas correspondientes. No hay analíticas de seguimiento integradas en estas alertas.",
      privacyPurchasesTitle: "4. Compras opcionales de soporte en la tienda",
      privacyPurchasesBody:
        "Algunas versiones de plataforma pueden ofrecer compras nativas opcionales como apoyo simbólico. Estas compras no desbloquean funciones ni contenido. Cuando la tienda informa una compra completada, la app puede registrar localmente el token procesado para evitar procesamientos duplicados.",
      privacyChildrenTitle: "5. Privacidad de menores",
      privacyChildrenBody:
        "Como NoBS Timers no recopila, captura ni transmite información digital de ningún dispositivo de usuario, está diseñada para evitar recopilar información personal de menores.",
      privacyContactTitle: "6. Contacto de política y centro de soporte",
      privacyContactBody:
        'Para consultas técnicas, propuestas de funciones, preguntas de privacidad o comentarios de plataforma, usa la sección pública de feedback anterior o abre directamente la cola de GitHub: <a href="https://github.com/daigof/nobs-apps/issues/new" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new</a>',
      footer: "NoBS Timers Hub • Utilidades de reloj local-first",
    },
  },
  pt: {
    common: {
      tagline: "Sem contas. Sem anúncios. Sem rastreamento. No bullshit.",
      languageLabel: "Idioma",
      themeSelectorLabel: "Seletor de tema",
      systemThemeAria: "Usar tema do sistema",
      systemThemeTitle: "Tema do sistema",
      lightThemeAria: "Usar tema claro",
      lightThemeTitle: "Tema claro",
      darkThemeAria: "Usar tema escuro",
      darkThemeTitle: "Tema escuro",
      copy: "Copiar",
      copied: "Copiado",
      failed: "Falhou",
      privacyBackLink: "← Voltar à página do app",
      privacyLinkTitle: "Política de privacidade",
      privacyLinkBody:
        "Leia a política de privacidade independente, incluindo armazenamento local, permissões do dispositivo e tratamento de compras opcionais de apoio.",
      privacyLink: "Abrir política de privacidade →",
    },
    home: {
      metaTitle: "NoBS Apps | Manifesto de utilidade pura",
      promiseTitle: "A promessa NoBS",
      promiseBody1:
        "Apps modernos estão inchados. Ferramentas básicas viraram produtos de coleta de dados cheios de cookies de rastreamento, spam de notificações e contas obrigatórias na nuvem.",
      promiseBody2:
        "<strong>Criamos utilitários nativos que funcionam offline, mantêm os dados no seu dispositivo e saem do seu caminho.</strong>",
      currentUtilitiesTitle: "Apps atuais",
      fastingDescription:
        "Um rastreador de jejum intermitente para plataformas móveis. Ele mantém o histórico de jejuns no seu dispositivo, funciona sem serviços de nuvem e usa acompanhamento simples de progresso, sem anúncios nem analíticas.",
      flappyDescription:
        "Um jogo arcade offline leve para plataformas móveis. Ele mantém o histórico de partidas no seu dispositivo, funciona sem serviços de nuvem e usa acompanhamento simples de distância, sem anúncios, contas ou analíticas.",
      viewDocumentation: "Ver documentação →",
      supportTitle: "Apoie o desenvolvimento independente",
      supportBody:
        "Não exibimos anúncios com rastreamento nem bloqueamos recursos úteis atrás de paywalls. Se você valoriza nosso manifesto contra software inchado, considere apoiar a missão diretamente:",
      paypalTitle: "PayPal / Cartão",
      paypalInstruction:
        "Apoie o desenvolvimento contínuo de apps utilitários via PayPal ou checkout padrão com cartão de crédito:",
      paypalAction: "Apoiar via PayPal / Cartão →",
      binanceInstruction:
        "A opção com menos atrito para usuários de apps móveis. Escaneie com o app Binance ou envie diretamente para nosso Pay ID permanente:",
      copyBinancePay: "Copiar Pay ID da Binance",
      binanceAlt: "Código QR do Binance Pay",
      nativeCryptoTitle: "Redes cripto nativas",
      nativeCryptoInstruction:
        "Para apoiadores que enviam de softwares externos ou carteiras de hardware. Confira exatamente a rede do ativo para evitar perda de fundos.",
      tronTag: "TRX ou USDT (rede Tron TRC20)",
      tronInstruction: "Use este mesmo endereço Tron apenas para TRX nativo ou Tether USDT enviado pela rede TRC20.",
      copyTron: "Copiar endereço Tron",
      showTronQr: "Mostrar código QR Tron",
      tronAlt: "Código QR de TRX e USDT TRC20 na rede Tron",
      bnbTag: "BNB (BNB Smart Chain BEP20)",
      copyBnb: "Copiar endereço BNB Smart Chain",
      showBnbQr: "Mostrar código QR BNB",
      bnbAlt: "Código QR da BNB Smart Chain",
      btcTag: "BTC (rede Bitcoin)",
      copyBitcoin: "Copiar endereço Bitcoin",
      showBtcQr: "Mostrar código QR BTC",
      bitcoinAlt: "Código QR do Bitcoin",
      solTag: "SOL (rede Solana)",
      copySolana: "Copiar endereço Solana",
      showSolQr: "Mostrar código QR SOL",
      solanaAlt: "Código QR da Solana",
      ltcTag: "LTC (rede Litecoin)",
      copyLitecoin: "Copiar endereço Litecoin",
      showLtcQr: "Mostrar código QR LTC",
      litecoinAlt: "Código QR do Litecoin",
      footer: "© NoBS Apps. Utilidade nativa sem distração.",
      timersDescription:
        "Um utilitário simples de relógio para plataformas móveis. Ele mantém alarmes, cronômetro, contagens regressivas e ciclos pomodoro no seu dispositivo, sem anúncios, contas, análises ou sincronização em nuvem.",
    },
    fasting: {
      metaTitle: "NoBS Fasting | Rastreador metabólico local-first",
      backLink: "← Voltar para NoBS Apps",
      supportTitle: "Apoie o desenvolvimento independente",
      supportBody:
        "NoBS Fasting é criado sem anúncios, telemetria, contas obrigatórias ou bloqueios pagos de recursos. Se quiser apoiar o trabalho, use as opções de doação na seção de suporte do NoBS Apps.",
      supportLink: "Abrir opções de suporte do NoBS Apps →",
      phasesTitle: "Fases de acompanhamento metabólico",
      phasesIntro: "O anel de progresso local acompanha os marcos do jejum dinamicamente com base no tempo decorrido:",
      phase04Time: "04 horas",
      phase04Title: "Jejum inicial",
      phase04Body: "Sua digestão termina, o açúcar no sangue se estabiliza e seus níveis de insulina começam a cair.",
      phase12Time: "12 horas",
      phase12Title: "Queima de gordura",
      phase12Body:
        "Seu corpo esgota as reservas de açúcar armazenado e muda o metabolismo para queimar gordura armazenada como energia.",
      phase18Time: "18 horas",
      phase18Title: "Cetose",
      phase18Body:
        "Seu fígado pode aumentar a produção de cetonas conforme o uso de energia armazenada muda. Os efeitos variam, então o app apresenta isso como um marco educativo, não como orientação médica.",
      phase24Time: "24 horas",
      phase24Title: "Limpeza celular",
      phase24Body:
        "A limpeza relacionada à autofagia pode ficar mais ativa em jejuns longos. O NoBS Fasting mantém a linguagem cautelosa e focada em educação geral sobre jejum.",
      phase24PlusTime: "24+ horas (modo estendido)",
      phase24PlusTitle: "Autofagia de pico",
      phase24PlusBody:
        "Depois de 24 horas, o timer entra em modo estendido para manter marcos mais longos visíveis sem sugerir resultados biológicos garantidos.",
      phase30Time: "30 horas",
      phase30Title: "Hormônio do crescimento",
      phase30Body:
        "Padrões de hormônio do crescimento podem mudar durante jejuns mais longos. O app acompanha o marco apenas como marcador de tempo, não como promessa de um resultado específico.",
      phase36Time: "36 horas",
      phase36Title: "Limpeza profunda",
      phase36Body:
        "Este marcador de jejum mais profundo mantém sessões estendidas legíveis sem afirmar que uma duração fixa produz um resultado celular fixo.",
      phase48Time: "48 horas",
      phase48Title: "Reinício imune",
      phase48Body:
        "Este é o último marco acompanhado pelo NoBS Fasting. Seu corpo pode entrar em reciclagem mais profunda de células imunes, e o app não acompanha benefícios depois de 48 horas.",
      gamificationTitle: "Gamificação e sequências",
      gamificationIntro:
        "A gamificação é opcional. Quando ativada, NoBS Fasting usa estrelas, sequências e congelamentos de sequência somente locais para tornar a consistência visível sem contas, rankings, compartilhamento social ou rastreamento de engajamento.",
      starsTitle: "Estrelas",
      starsBody:
        "As estrelas são ganhas cumulativamente quando um jejum alcança durações marco. Um jejum pode ganhar até 8 estrelas: 1 estrela em 4h, 12h, 18h, 24h, 30h e 36h, mais 2 estrelas em 48h.",
      streaksTitle: "Sequências",
      streaksBody:
        "Um dia conta para sua sequência quando é coberto por um jejum concluído de pelo menos 12 horas, um jejum ativo que já alcançou 12 horas ou um congelamento de sequência. Jejuns de vários dias creditam cada data local coberta.",
      freezesTitle: "Congelamentos de sequência",
      freezesBody:
        "Um congelamento de sequência custa 20 estrelas e pode proteger um dia local sem crédito. Ele não pode ser usado enquanto um jejum está ativo ou em um dia já creditado por um jejum qualificado ou outro congelamento.",
      bonusesTitle: "Bônus de marco",
      bonusesBody:
        "Alcançar uma sequência de 7 dias concede um bônus de 3 estrelas. Alcançar 30 dias concede um bônus de 10 estrelas. Os bônus são concedidos uma vez por marco de sequência ininterrupta e só reiniciam depois que a sequência cai abaixo desse limite.",
      localBehaviorTitle: "Comportamento local do app",
      localBehaviorIntro:
        "O fluxo principal de jejum funciona no dispositivo sem contas, analíticas, sincronização em nuvem ou conexão de rede obrigatória.",
      historyTitle: "Histórico",
      historyBody:
        "Jejuns concluídos e creditados são salvos localmente com o mais recente primeiro. Sessões longas ou que cruzam dias mostram início e fim, e jejuns com crédito duplicado são descartados sem adicionar histórico ou estrelas.",
      settingsTitle: "Configurações",
      settingsBody:
        "Idioma, tema, marcas de marco, gamificação e notificações são configurações do dispositivo. Elas se aplicam imediatamente e o app continua útil mesmo com notificações ou gamificação desativadas.",
      notificationsTitle: "Notificações",
      notificationsBody:
        "Notificações locais opcionais podem alertar em 4h, 12h, 18h, 24h, 30h, 36h e 48h enquanto um jejum está ativo. Lembretes diários usam uma média móvel local dos horários recentes de início.",
      feedbackTitle: "Feedback e pedidos de recursos",
      feedbackBody:
        "Relatos de bugs, propostas de recursos e feedback de plataforma para NoBS Fasting pertencem à fila pública de feedback:",
      feedbackLink: "Abrir feedback do NoBS Fasting no GitHub →",
      privacyTitle: "Política de privacidade do NoBS Fasting",
      privacyUpdated: "Última atualização: 10 de junho de 2026",
      privacyIntro:
        "Esta Política de Privacidade rege as práticas de privacidade de dados do aplicativo móvel <strong>NoBS Fasting</strong>, desenvolvido e publicado pela <strong>NoBS Apps</strong> para plataformas móveis compatíveis.",
      privacyDataTitle: "1. Declaração de coleta e transmissão de dados",
      privacyDataBody1:
        "<strong>NoBS Fasting opera com uma arquitetura estrita de telemetria zero e local-first.</strong> O aplicativo não coleta, captura, monitora, intercepta nem transmite informações pessoais, sensíveis ou identificáveis do dispositivo para servidores externos em nuvem, bancos de dados ou terceiros.",
      privacyDataBody2:
        "Não usamos SDKs de analíticas de terceiros, SDKs de publicidade, módulos de rastreamento de falhas, sistemas de conta, sincronização em nuvem ou ferramentas de gerenciamento de identidade. Nenhuma solicitação de rede é necessária para o timer ativo, histórico, configurações, lembretes, gamificação ou explicações de fases.",
      privacyStorageTitle: "2. Sandbox de armazenamento local",
      privacyStorageBody:
        "Estado do jejum ativo, sessões concluídas, congelamentos de sequência, saldo de estrelas, marcadores de bônus de sequência, idioma, tema, configurações de notificação, configurações de exibição de marcos, configurações de gamificação e tokens de compras de suporte processadas são armazenados exclusivamente dentro da área privada de armazenamento local do app no seu dispositivo, usando a tecnologia de persistência padrão da plataforma. Seus dados permanecem sob sua custódia e controle pessoal o tempo todo.",
      privacyPermissionsTitle: "3. Uso de permissões do dispositivo",
      privacyPermissionsBody:
        "<strong>Alarmes / notificações locais do sistema:</strong> Quando suportado e ativado pelo usuário, o app usa APIs locais de notificação do sistema apenas para publicar alertas de marcos em 4h, 12h, 18h, 24h, 30h, 36h e 48h enquanto um jejum está ativo, além de lembretes diários baseados nos seus horários locais recentes de início. Desativar notificações cancela alertas de marcos e lembretes inteligentes agendados. Nenhuma analítica de rastreamento é incorporada nessas notificações.",
      privacyPurchasesTitle: "4. Compras opcionais de suporte na loja",
      privacyPurchasesBody:
        "Algumas versões de plataforma podem oferecer compras nativas opcionais como suporte simbólico. Essas compras não desbloqueiam recursos nem conteúdo. Quando uma compra concluída é informada pela loja da plataforma, o app pode registrar localmente o token de compra processado para evitar concessões duplicadas de estrelas locais de agradecimento.",
      privacyChildrenTitle: "5. Privacidade infantil",
      privacyChildrenBody:
        "Como o NoBS Fasting não coleta, captura nem transmite qualquer informação digital de qualquer dispositivo de usuário, ele foi projetado para evitar a coleta de informações pessoais de crianças.",
      privacyContactTitle: "6. Contato da política e central de suporte",
      privacyContactBody:
        'Para dúvidas técnicas, propostas de recursos, perguntas de privacidade ou feedback de plataforma, use a seção pública de feedback acima ou abra diretamente a fila do GitHub: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml</a>',
      footer: "Hub NoBS Fasting • Arquitetura de desenvolvimento local-first",
    },
    flappy: {
      metaTitle: "NoBS Flappy | Arcade offline local-first",
      backLink: "← Voltar para NoBS Apps",
      supportTitle: "Apoie o desenvolvimento independente",
      supportBody:
        "NoBS Flappy é criado sem anúncios, telemetria, contas obrigatórias, bloqueios pagos de recursos ou rankings na nuvem. Se quiser apoiar o trabalho, use as opções de doação na seção de suporte do NoBS Apps.",
      supportLink: "Abrir opções de suporte do NoBS Apps →",
      gameplayTitle: "Jogo arcade offline",
      gameplayIntro: "NoBS Flappy mantém o loop de jogo simples, legível e local:",
      controlTime: "Toque / clique",
      controlTitle: "Bater asas",
      controlBody:
        "Toque em qualquer lugar da superfície de jogo para subir. O mundo rola automaticamente, então o objetivo é manter o pássaro longe dos perigos.",
      distanceTime: "Distância",
      distanceTitle: "Distância, não contas",
      distanceBody:
        'O jogo não usa pontos, placares sociais ou rankings online. Durante a partida, um HUD discreto no canto inferior direito mostra "Distância percorrida:" e partidas concluídas mostram a distância em quilômetros ou milhas conforme sua configuração.',
      offlineTime: "Offline",
      offlineTitle: "Partidas locais",
      offlineBody:
        "O histórico de partidas e a melhor distância ficam no seu dispositivo. O jogo principal funciona sem acesso à rede, login ou serviços de servidor.",
      hudTime: "HUD",
      hudTitle: "Controles rápidos",
      hudBody:
        "Start entra direto na superfície jogável. Durante uma partida, um pequeno seletor Claro/Escuro fica abaixo da linha do chão para que mudar o tema não conte como bater asas.",
      hazardsTitle: "Perigos e fim de partida",
      hazardsIntro: "As partidas terminam somente quando o pássaro colide com um perigo local do jogo:",
      buildingsTitle: "Prédios da cidade",
      buildingsBody:
        "A cidade infinita usa silhuetas legíveis, telhados em degraus e piramidais, grades de janelas grandes, portas e antenas ocasionais. Corpos de prédios, antenas e o chão são perigos sólidos.",
      planesTitle: "Aviões",
      planesBody:
        "Aviões desbloqueiam depois de 0.5 km, cruzam a faixa alta do céu da direita para a esquerda e usam três níveis de velocidade. Colisões com aviões encerram a partida com texto específico.",
      purpleAngryBirdTitle: "Angry Bird roxo",
      purpleAngryBirdBody:
        "O Angry Bird roxo desbloqueia em 1 km. Ele é um pássaro de origami espelhado com caminho de voo limitado e leve viés para a altura do jogador, parecendo atento sem virar perseguidor direto.",
      redAngryBirdTitle: "Angry Bird vermelho",
      redAngryBirdBody:
        "O Angry Bird vermelho desbloqueia em 2 km. Ele é mais rápido e agressivo que o roxo, mas ainda deve deixar uma rota jogável para desvio.",
      thunderTitle: "Queda por trovão",
      thunderBody:
        "Voar alto demais repetidamente pode ativar uma queda por trovão. A entrada deixa de importar, o pássaro cai de cabeça para baixo e o overlay espera o impacto antes de encerrar a partida.",
      difficultyTitle: "Desbloqueios de dificuldade",
      difficultyBody:
        "Antenas podem aparecer depois de 0.25 km, aviões depois de 0.5 km, Angry Birds roxos depois de 1 km e Angry Birds vermelhos depois de 2 km. A velocidade do mundo aumenta em 1.5 km, 2.5 km e 4 km.",
      gameOverCopyTitle: "Texto de fim de partida",
      gameOverCopyBody:
        'A partida explica o que aconteceu: chão, prédio, antena, avião, Angry Bird e trovão têm mensagens próprias. Colisões com Angry Bird dizem: "You\'ve been hit by an Angry Bird!"',
      historyTitle: "Histórico local",
      historyIntro: "O histórico é simples por design, sem medalhas, estrelas, perfis online ou loops de engajamento.",
      runsTitle: "Cartões de partida",
      runsBody:
        "Partidas concluídas são armazenadas localmente com a mais recente primeiro. Cada cartão mostra data/hora local e distância alcançada.",
      bestTitle: "Melhor distância",
      bestBody:
        "Quando existe histórico, a melhor distância aparece acima da lista como um resumo local simples. Histórico vazio continua vazio.",
      feedbackTitle: "Feedback e pedidos de recursos",
      feedbackBody:
        "Relatos de bugs, propostas de recursos e feedback de plataforma para NoBS Flappy pertencem à fila pública de feedback:",
      feedbackLink: "Abrir feedback do NoBS Flappy no GitHub →",
      privacyTitle: "Política de privacidade do NoBS Flappy",
      privacyUpdated: "Última atualização: 10 de junho de 2026",
      privacyIntro:
        "Esta Política de Privacidade rege as práticas de privacidade de dados do aplicativo móvel <strong>NoBS Flappy</strong>, desenvolvido e publicado pela <strong>NoBS Apps</strong> para plataformas móveis compatíveis.",
      privacyDataTitle: "1. Declaração de coleta e transmissão de dados",
      privacyDataBody1:
        "<strong>NoBS Flappy opera com uma arquitetura estrita de telemetria zero e local-first.</strong> O aplicativo não coleta, captura, monitora, intercepta nem transmite informações pessoais, sensíveis, de jogo ou identificáveis do dispositivo para servidores externos em nuvem, bancos de dados ou terceiros.",
      privacyDataBody2:
        "Não usamos SDKs de analíticas de terceiros, módulos de rastreamento de falhas, SDKs de publicidade, rankings online ou ferramentas de gerenciamento de identidade. Nenhuma solicitação de rede é iniciada por este aplicativo durante o jogo padrão.",
      privacyStorageTitle: "2. Sandbox de armazenamento local",
      privacyStorageBody:
        "Histórico de partidas, melhor distância, idioma, tema, configuração de unidade de distância e tokens de compras de suporte processadas são armazenados exclusivamente dentro da área privada de armazenamento local do app no seu dispositivo, usando a tecnologia de persistência padrão da plataforma. Seus dados permanecem sob sua custódia e controle pessoal o tempo todo.",
      privacyPermissionsTitle: "3. Uso de permissões do dispositivo",
      privacyPermissionsBody:
        "<strong>Sem permissões especiais de jogo:</strong> O app não precisa de localização, contatos, câmera, microfone, identificadores de publicidade, serviços em segundo plano, notificações push ou serviços em nuvem para o jogo padrão.",
      privacyPurchasesTitle: "4. Compras opcionais de suporte na loja",
      privacyPurchasesBody:
        "Algumas versões de plataforma podem oferecer compras nativas opcionais como suporte simbólico. Essas compras não desbloqueiam recursos nem conteúdo e não concedem estrelas, pontos, medalhas ou outras recompensas. Quando uma compra concluída é informada pela loja da plataforma, o app pode registrar localmente o token de compra processado para evitar processamento duplicado.",
      privacyChildrenTitle: "5. Privacidade infantil",
      privacyChildrenBody:
        "Como o NoBS Flappy não coleta, captura nem transmite qualquer informação digital de qualquer dispositivo de usuário, ele foi projetado para evitar a coleta de informações pessoais de crianças.",
      privacyContactTitle: "6. Contato da política e central de suporte",
      privacyContactBody:
        'Para dúvidas técnicas, propostas de recursos, perguntas de privacidade ou feedback de plataforma, use a seção pública de feedback acima ou abra diretamente a fila do GitHub: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml</a>',
      footer: "Hub NoBS Flappy • Arcade offline local-first",
    },
    timers: {
      metaTitle: "NoBS Timers | Utilitários de relógio local-first",
      backLink: "← Voltar para NoBS Apps",
      supportTitle: "Apoie o desenvolvimento independente",
      supportBody:
        "NoBS Timers é feito sem anúncios, telemetria, contas obrigatórias, bloqueios pagos de recursos ou sincronização em nuvem. Se quiser apoiar o trabalho, use as opções de doação na seção de suporte do NoBS Apps.",
      supportLink: "Abrir opções de suporte do NoBS Apps →",
      toolsTitle: "Ferramentas simples de relógio",
      toolsIntro:
        "NoBS Timers mantém ferramentas comuns de tempo simples, locais e fáceis de acessar em um layout móvel apenas em retrato.",
      alarmTime: "Hora do dia",
      alarmTitle: "Alarme",
      alarmBody:
        "Escolha um horário, decida se ele se repete todos os dias e salve. O app lembra o último horário de alarme salvo e, no primeiro uso, sugere seis horas no futuro.",
      stopwatchTime: "00:00:00",
      stopwatchTitle: "Cronômetro",
      stopwatchBody:
        "O cronômetro tem um botão: Iniciar, Parar e depois Retomar. Não há voltas, parciais, exportações ou controles extras.",
      countdownTime: "HH:MM:SS",
      countdownTitle: "Contagem regressiva",
      countdownBody:
        "Digite horas, minutos e segundos, e inicie. A última duração usada é lembrada, a ação em execução vira Cancelar e o som padrão do app toca ao chegar a zero.",
      pomodoroTime: "25 + 5",
      pomodoroTitle: "Pomodoro",
      pomodoroBody:
        "Pomodoro usa períodos fixos de 25 minutos de trabalho e 5 minutos de descanso. Cada transição toca o som padrão e o próximo período começa automaticamente até você cancelar.",
      localBehaviorTitle: "Comportamento local do app",
      localBehaviorIntro:
        "O fluxo principal de tempo funciona no dispositivo sem contas, análises, sincronização em nuvem ou conexão de rede obrigatória.",
      navigationTitle: "Controles inferiores",
      navigationBody:
        "A primeira linha inferior usa botões maiores para Alarme, Cronômetro, Contagem regressiva e Pomodoro. Uma segunda linha menor mantém Configurações e Suporte disponíveis sem lotar as ferramentas.",
      settingsTitle: "Configurações",
      settingsBody:
        "As configurações seguem o padrão dos outros apps NoBS: idioma e tema são aplicados imediatamente e permanecem locais no dispositivo.",
      notificationsTitle: "Alertas locais",
      notificationsBody:
        "Alarmes, contagens regressivas e transições de pomodoro usam alertas locais do sistema quando a plataforma permite. A permissão é solicitada apenas quando uma função de tempo precisa dela.",
      soundTitle: "Um único som",
      soundBody:
        "NoBS Timers usa um som de alerta padronizado para alarme, contagem regressiva, fim do trabalho e fim do descanso. Não há seletor de som.",
      feedbackTitle: "Feedback e solicitações de recursos",
      feedbackBody:
        "Relatos de bugs, propostas de recursos e feedback de plataforma para NoBS Timers pertencem à fila pública do NoBS Apps:",
      feedbackLink: "Abrir feedback do NoBS Timers no GitHub →",
      privacyTitle: "Política de privacidade do NoBS Timers",
      privacyUpdated: "Última atualização: 11 de junho de 2026",
      privacyIntro:
        "Esta Política de Privacidade rege as práticas de privacidade de dados do aplicativo móvel <strong>NoBS Timers</strong>, desenvolvido e publicado pela <strong>NoBS Apps</strong> para plataformas móveis compatíveis.",
      privacyDataTitle: "1. Declaração de coleta e transmissão de dados",
      privacyDataBody1:
        "<strong>NoBS Timers opera com uma arquitetura estrita de telemetria zero e local-first.</strong> O aplicativo não coleta, captura, monitora, intercepta ou transmite informações pessoais, sensíveis, de temporização ou identificáveis do dispositivo para servidores externos, bancos de dados ou terceiros.",
      privacyDataBody2:
        "Não usamos SDKs de análise de terceiros, SDKs de publicidade, módulos de rastreamento de falhas, sistemas de contas, sincronização em nuvem ou ferramentas de identidade. Nenhuma solicitação de rede é necessária para alarme, cronômetro, contagem regressiva, pomodoro, configurações, suporte ou agendamento de alertas locais.",
      privacyStorageTitle: "2. Armazenamento local isolado",
      privacyStorageBody:
        "O horário salvo do alarme, a preferência de alarme diário, a última duração da contagem regressiva, o estado ativo do temporizador quando necessário, idioma, tema e tokens processados de compras de suporte são armazenados exclusivamente na área privada local do app no seu dispositivo, usando a tecnologia padrão de persistência da plataforma. Seus dados permanecem sempre sob sua guarda e controle pessoal.",
      privacyPermissionsTitle: "3. Uso de permissões do dispositivo",
      privacyPermissionsBody:
        "<strong>Alarmes / notificações locais do sistema:</strong> Quando a plataforma permite e o usuário habilita, o app usa APIs locais do sistema apenas para disparar alarmes, conclusões de contagem regressiva e transições de pomodoro. Desativar ou cancelar um temporizador cancela os alertas programados correspondentes. Nenhuma análise de rastreamento é incorporada nesses alertas.",
      privacyPurchasesTitle: "4. Compras opcionais de suporte na loja",
      privacyPurchasesBody:
        "Algumas versões de plataforma podem oferecer compras nativas opcionais como apoio simbólico. Essas compras não desbloqueiam recursos nem conteúdo. Quando a loja informa uma compra concluída, o app pode registrar localmente o token processado para evitar processamento duplicado.",
      privacyChildrenTitle: "5. Privacidade de crianças",
      privacyChildrenBody:
        "Como NoBS Timers não coleta, captura ou transmite nenhuma informação digital de qualquer dispositivo de usuário, ele é projetado para evitar a coleta de informações pessoais de crianças.",
      privacyContactTitle: "6. Contato da política e central de suporte",
      privacyContactBody:
        'Para dúvidas técnicas, propostas de recursos, perguntas de privacidade ou feedback de plataforma, use a seção pública de feedback acima ou abra diretamente a fila do GitHub: <a href="https://github.com/daigof/nobs-apps/issues/new" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new</a>',
      footer: "NoBS Timers Hub • Utilitários de relógio local-first",
    },
  },
  fr: {
    common: {
      tagline: "Pas de comptes. Pas de pubs. Pas de suivi. No bullshit.",
      languageLabel: "Langue",
      themeSelectorLabel: "Sélecteur de thème",
      systemThemeAria: "Utiliser le thème du système",
      systemThemeTitle: "Thème du système",
      lightThemeAria: "Utiliser le thème clair",
      lightThemeTitle: "Thème clair",
      darkThemeAria: "Utiliser le thème sombre",
      darkThemeTitle: "Thème sombre",
      copy: "Copier",
      copied: "Copié",
      failed: "Échec",
      privacyBackLink: "← Retour à la page de l’app",
      privacyLinkTitle: "Politique de confidentialité",
      privacyLinkBody:
        "Lisez la politique de confidentialité autonome, notamment le stockage local, les autorisations de l’appareil et le traitement des achats de soutien optionnels.",
      privacyLink: "Ouvrir la politique de confidentialité →",
    },
    home: {
      metaTitle: "NoBS Apps | Manifeste de l'utilité pure",
      promiseTitle: "La promesse NoBS",
      promiseBody1:
        "Les apps modernes sont gonflées. Des outils basiques sont devenus des produits de collecte de données remplis de cookies de suivi, de spam de notifications et de comptes cloud imposés.",
      promiseBody2:
        "<strong>Nous créons des utilitaires natifs qui fonctionnent hors ligne, gardent vos données sur votre appareil et restent à leur place.</strong>",
      currentUtilitiesTitle: "Apps actuels",
      fastingDescription:
        "Un suivi de jeûne intermittent pour plateformes mobiles. Il garde l'historique des jeûnes sur votre appareil, fonctionne sans services cloud et utilise un suivi de progression simple, sans pubs ni analyses.",
      flappyDescription:
        "Un jeu d'arcade hors ligne léger pour plateformes mobiles. Il garde l'historique des parties sur votre appareil, fonctionne sans services cloud et utilise un suivi simple de la distance, sans pubs, comptes ni analyses.",
      viewDocumentation: "Voir la documentation →",
      supportTitle: "Soutenir le développement indépendant",
      supportBody:
        "Nous n'affichons pas de pubs de suivi et nous ne bloquons pas les fonctions utiles derrière des paywalls. Si vous appréciez notre manifeste anti-bloat, vous pouvez soutenir directement la mission :",
      paypalTitle: "PayPal / Carte",
      paypalInstruction:
        "Soutenez le développement continu des apps utilitaires via PayPal ou un paiement classique par carte bancaire :",
      paypalAction: "Soutenir via PayPal / Carte →",
      binanceInstruction:
        "L'option la plus fluide pour les utilisateurs mobiles. Scannez avec votre app Binance ou envoyez directement vers notre Pay ID permanent :",
      copyBinancePay: "Copier le Pay ID Binance",
      binanceAlt: "Code QR Binance Pay",
      nativeCryptoTitle: "Réseaux crypto natifs",
      nativeCryptoInstruction:
        "Pour les soutiens qui envoient depuis un logiciel externe ou un portefeuille matériel. Faites correspondre exactement le réseau de l'actif afin d'éviter toute perte de fonds.",
      tronTag: "TRX ou USDT (réseau Tron TRC20)",
      tronInstruction:
        "Utilisez cette même adresse Tron uniquement pour du TRX natif ou du Tether USDT envoyé sur le réseau TRC20.",
      copyTron: "Copier l'adresse Tron",
      showTronQr: "Afficher le QR Tron",
      tronAlt: "Code QR TRX et USDT TRC20 sur le réseau Tron",
      bnbTag: "BNB (BNB Smart Chain BEP20)",
      copyBnb: "Copier l'adresse BNB Smart Chain",
      showBnbQr: "Afficher le QR BNB",
      bnbAlt: "Code QR BNB Smart Chain",
      btcTag: "BTC (réseau Bitcoin)",
      copyBitcoin: "Copier l'adresse Bitcoin",
      showBtcQr: "Afficher le QR BTC",
      bitcoinAlt: "Code QR Bitcoin",
      solTag: "SOL (réseau Solana)",
      copySolana: "Copier l'adresse Solana",
      showSolQr: "Afficher le QR SOL",
      solanaAlt: "Code QR Solana",
      ltcTag: "LTC (réseau Litecoin)",
      copyLitecoin: "Copier l'adresse Litecoin",
      showLtcQr: "Afficher le QR LTC",
      litecoinAlt: "Code QR Litecoin",
      footer: "© NoBS Apps. Utilité native sans distraction.",
      timersDescription:
        "Un utilitaire d’horloge simple pour plateformes mobiles. Il garde alarmes, chronomètre, comptes à rebours et cycles pomodoro sur votre appareil, sans publicités, comptes, analyses ni synchronisation cloud.",
    },
    fasting: {
      metaTitle: "NoBS Fasting | Suivi métabolique local-first",
      backLink: "← Retour à NoBS Apps",
      supportTitle: "Soutenir le développement indépendant",
      supportBody:
        "NoBS Fasting est conçu sans pubs, télémétrie, comptes imposés ni fonctions verrouillées derrière un paiement. Pour soutenir le travail, utilisez les options de don dans la section support de NoBS Apps.",
      supportLink: "Ouvrir les options de support NoBS Apps →",
      phasesTitle: "Phases de suivi métabolique",
      phasesIntro: "L'anneau de progression local suit dynamiquement les jalons de jeûne selon le temps écoulé :",
      phase04Time: "04 heures",
      phase04Title: "Début du jeûne",
      phase04Body:
        "Votre digestion se termine, votre glycémie se stabilise et votre taux d'insuline commence à baisser.",
      phase12Time: "12 heures",
      phase12Title: "Combustion des graisses",
      phase12Body:
        "Votre corps épuise ses réserves de sucre stocké et bascule vers l'utilisation des graisses stockées comme énergie.",
      phase18Time: "18 heures",
      phase18Title: "Cétose",
      phase18Body:
        "Votre foie peut augmenter la production de cétones quand l'utilisation de l'énergie stockée change. Les effets varient, donc l'app présente cela comme un jalon éducatif, pas comme un avis médical.",
      phase24Time: "24 heures",
      phase24Title: "Nettoyage cellulaire",
      phase24Body:
        "Le nettoyage lié à l'autophagie peut devenir plus actif pendant les jeûnes longs. NoBS Fasting garde un ton prudent et centré sur l'éducation générale au jeûne.",
      phase24PlusTime: "24+ heures (mode prolongé)",
      phase24PlusTitle: "Autophagie maximale",
      phase24PlusBody:
        "Après 24 heures, le minuteur passe en mode étendu afin de garder les jalons plus longs visibles sans suggérer de résultats biologiques garantis.",
      phase30Time: "30 heures",
      phase30Title: "Hormone de croissance",
      phase30Body:
        "Les profils d'hormone de croissance peuvent changer pendant les jeûnes plus longs. L'app suit ce jalon seulement comme repère temporel, pas comme promesse d'un résultat précis.",
      phase36Time: "36 heures",
      phase36Title: "Nettoyage profond",
      phase36Body:
        "Ce repère de jeûne plus profond rend les sessions étendues lisibles sans affirmer qu'une durée fixe produit un résultat cellulaire fixe.",
      phase48Time: "48 heures",
      phase48Title: "Réinitialisation immunitaire",
      phase48Body:
        "C'est le dernier jalon suivi par NoBS Fasting. Votre corps peut entrer dans un recyclage plus profond des cellules immunitaires, et l'app ne suit pas les bénéfices au-delà de 48 heures.",
      gamificationTitle: "Gamification et séries",
      gamificationIntro:
        "La gamification est optionnelle. Lorsqu'elle est activée, NoBS Fasting utilise des étoiles, des séries et des gels de série uniquement locaux pour rendre la régularité visible sans comptes, classements, partage social ni suivi d'engagement.",
      starsTitle: "Étoiles",
      starsBody:
        "Les étoiles sont gagnées cumulativement lorsqu'un jeûne atteint des durées jalons. Un jeûne peut gagner jusqu'à 8 étoiles : 1 étoile à 4h, 12h, 18h, 24h, 30h et 36h, plus 2 étoiles à 48h.",
      streaksTitle: "Séries",
      streaksBody:
        "Un jour compte dans votre série lorsqu'il est couvert par un jeûne terminé d'au moins 12 heures, un jeûne actif ayant déjà atteint 12 heures ou un gel de série. Les jeûnes de plusieurs jours créditent chaque date locale qu'ils couvrent.",
      freezesTitle: "Gels de série",
      freezesBody:
        "Un gel de série coûte 20 étoiles et peut protéger un jour local non crédité. Il ne peut pas être utilisé pendant un jeûne actif ni sur un jour déjà crédité par un jeûne qualifié ou un autre gel.",
      bonusesTitle: "Bonus de jalons",
      bonusesBody:
        "Atteindre une série de 7 jours accorde un bonus de 3 étoiles. Atteindre 30 jours accorde un bonus de 10 étoiles. Les bonus sont accordés une seule fois par jalon de série ininterrompue, puis réinitialisés uniquement lorsque la série repasse sous ce seuil.",
      localBehaviorTitle: "Comportement local de l'app",
      localBehaviorIntro:
        "Le flux principal de jeûne fonctionne sur l'appareil sans comptes, analyses, synchronisation cloud ni connexion réseau obligatoire.",
      historyTitle: "Historique",
      historyBody:
        "Les jeûnes terminés et crédités sont enregistrés localement du plus récent au plus ancien. Les sessions longues ou qui traversent plusieurs jours affichent le début et la fin, et les jeûnes à crédit dupliqué sont ignorés sans ajouter d'historique ni d'étoiles.",
      settingsTitle: "Réglages",
      settingsBody:
        "La langue, le thème, les repères de jalons, la gamification et les notifications sont des réglages de l'appareil. Ils s'appliquent immédiatement et l'app reste utile même quand les notifications ou la gamification sont désactivées.",
      notificationsTitle: "Notifications",
      notificationsBody:
        "Les notifications locales optionnelles peuvent alerter à 4h, 12h, 18h, 24h, 30h, 36h et 48h pendant qu'un jeûne est actif. Les rappels quotidiens utilisent une moyenne mobile locale des heures de début récentes.",
      feedbackTitle: "Retours et demandes de fonctions",
      feedbackBody:
        "Les rapports de bugs, propositions de fonctions et retours de plateforme pour NoBS Fasting vont dans la file publique de feedback :",
      feedbackLink: "Ouvrir le feedback NoBS Fasting sur GitHub →",
      privacyTitle: "Politique de confidentialité de NoBS Fasting",
      privacyUpdated: "Dernière mise à jour : 10 juin 2026",
      privacyIntro:
        "Cette politique de confidentialité régit les pratiques de confidentialité des données de l'application mobile <strong>NoBS Fasting</strong>, développée et publiée par <strong>NoBS Apps</strong> pour les plateformes mobiles prises en charge.",
      privacyDataTitle: "1. Déclaration de collecte et de transmission des données",
      privacyDataBody1:
        "<strong>NoBS Fasting fonctionne avec une architecture stricte zéro télémétrie et local-first.</strong> L'application ne collecte, capture, surveille, intercepte ni transmet aucune information personnelle, sensible ou identifiable de l'appareil vers des serveurs cloud externes, des bases de données ou des tiers.",
      privacyDataBody2:
        "Nous n'utilisons aucun SDK d'analyse tiers, SDK publicitaire, module de suivi de crash reporting, système de compte, synchronisation cloud ni outil de gestion d'identité. Aucune requête réseau n'est nécessaire pour le minuteur actif, l'historique, les réglages, les rappels, la gamification ou les explications de phases.",
      privacyStorageTitle: "2. Sandbox de stockage local",
      privacyStorageBody:
        "L'état du jeûne actif, les sessions terminées, les gels de série, le solde d'étoiles, les marqueurs de bonus de série, la langue, le thème, les réglages de notifications, les réglages d'affichage des jalons, les réglages de gamification et les jetons d'achats de soutien traités sont stockés exclusivement dans la zone privée de stockage local de l'app sur votre appareil, avec la technologie de persistance standard de la plateforme. Vos données restent sous votre garde et votre contrôle personnel à tout moment.",
      privacyPermissionsTitle: "3. Utilisation des autorisations de l'appareil",
      privacyPermissionsBody:
        "<strong>Alarmes / notifications locales du système :</strong> Lorsque c'est pris en charge et activé par l'utilisateur, l'app utilise les API locales de notification système uniquement pour publier des alertes de jalons à 4h, 12h, 18h, 24h, 30h, 36h et 48h pendant qu'un jeûne est actif, ainsi que des rappels quotidiens basés sur vos heures de début locales récentes. Désactiver les notifications annule les alertes de jalons et les rappels intelligents programmés. Aucune analyse de suivi n'est intégrée à ces notifications.",
      privacyPurchasesTitle: "4. Achats de soutien optionnels en boutique",
      privacyPurchasesBody:
        "Certaines versions de plateforme peuvent proposer des achats natifs optionnels comme soutien symbolique. Ces achats ne débloquent aucune fonctionnalité ni contenu. Quand un achat terminé est signalé par la boutique de la plateforme, l'app peut enregistrer localement le jeton d'achat traité afin d'éviter d'accorder deux fois les étoiles locales de remerciement.",
      privacyChildrenTitle: "5. Confidentialité des enfants",
      privacyChildrenBody:
        "Comme NoBS Fasting ne collecte, capture ni transmet aucune information numérique depuis aucun appareil utilisateur, l'application est conçue pour éviter de collecter des informations personnelles d'enfants.",
      privacyContactTitle: "6. Contact de politique et hub support",
      privacyContactBody:
        'Pour les questions techniques, propositions de fonctions, questions de confidentialité ou retours de plateforme, utilisez la section publique de feedback ci-dessus ou ouvrez directement la file GitHub : <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml</a>',
      footer: "Hub NoBS Fasting • Architecture de développement local-first",
    },
    flappy: {
      metaTitle: "NoBS Flappy | Arcade hors ligne local-first",
      backLink: "← Retour à NoBS Apps",
      supportTitle: "Soutenir le développement indépendant",
      supportBody:
        "NoBS Flappy est conçu sans pubs, télémétrie, comptes imposés, fonctions verrouillées derrière un paiement ni classements cloud. Pour soutenir le travail, utilisez les options de don dans la section support de NoBS Apps.",
      supportLink: "Ouvrir les options de support NoBS Apps →",
      gameplayTitle: "Jeu d'arcade hors ligne",
      gameplayIntro: "NoBS Flappy garde une boucle de jeu simple, lisible et locale :",
      controlTime: "Tap / clic",
      controlTitle: "Battre des ailes",
      controlBody:
        "Touchez n'importe où sur la surface de jeu pour monter. Le monde défile automatiquement, donc l'objectif est de garder l'oiseau loin des dangers.",
      distanceTime: "Distance",
      distanceTitle: "Distance, pas comptes",
      distanceBody:
        "Le jeu n'utilise pas de points, scores sociaux ni classements en ligne. Pendant la partie, un HUD discret en bas à droite affiche « Distance parcourue : » et les parties terminées indiquent la distance en kilomètres ou en miles selon votre réglage.",
      offlineTime: "Hors ligne",
      offlineTitle: "Parties locales",
      offlineBody:
        "L'historique des parties et la meilleure distance restent sur votre appareil. Le jeu principal fonctionne sans accès réseau, connexion ni services serveur.",
      hudTime: "HUD",
      hudTitle: "Contrôles rapides",
      hudBody:
        "Start ouvre directement la surface jouable. Pendant une partie, un petit bouton Clair/Sombre reste sous la ligne du sol afin que changer de thème ne compte pas comme un battement d'ailes.",
      hazardsTitle: "Dangers et fin de partie",
      hazardsIntro:
        "Les parties se terminent uniquement lorsque l'oiseau entre en collision avec un danger local du jeu :",
      buildingsTitle: "Immeubles de ville",
      buildingsBody:
        "La ville sans fin utilise des silhouettes lisibles, des toits en escalier et pyramidaux, de grandes grilles de fenêtres, des portes et des antennes occasionnelles. Les corps d'immeubles, antennes et le sol sont des dangers solides.",
      planesTitle: "Avions",
      planesBody:
        "Les avions se débloquent après 0.5 km, traversent la voie haute du ciel de droite à gauche et utilisent trois niveaux de vitesse. Une collision avec un avion termine la partie avec un texte dédié.",
      purpleAngryBirdTitle: "Angry Bird violet",
      purpleAngryBirdBody:
        "L'Angry Bird violet se débloque à 1 km. C'est un oiseau origami en miroir avec une trajectoire de battement bornée et un léger biais vers la hauteur du joueur, attentif sans devenir un ennemi à poursuite directe.",
      redAngryBirdTitle: "Angry Bird rouge",
      redAngryBirdBody:
        "L'Angry Bird rouge se débloque à 2 km. Il est plus rapide et plus agressif que le violet, mais il doit toujours laisser une route d'évitement jouable.",
      thunderTitle: "Chute par tonnerre",
      thunderBody:
        "Voler trop haut de façon répétée peut déclencher une chute par tonnerre. Les entrées ne comptent plus, l'oiseau tombe à l'envers et le panneau attend l'impact avant de terminer la partie.",
      difficultyTitle: "Déblocages de difficulté",
      difficultyBody:
        "Les antennes peuvent apparaître après 0.25 km, les avions après 0.5 km, les Angry Birds violets après 1 km et les Angry Birds rouges après 2 km. La vitesse du monde augmente à 1.5 km, 2.5 km et 4 km.",
      gameOverCopyTitle: "Texte de fin",
      gameOverCopyBody:
        "La partie explique ce qui s'est passé : sol, immeuble, antenne, avion, Angry Bird et tonnerre ont chacun un message dédié. Les collisions avec Angry Bird indiquent : « You've been hit by an Angry Bird! »",
      historyTitle: "Historique local",
      historyIntro:
        "L'historique reste volontairement simple, sans badges, étoiles, profils en ligne ni boucles d'engagement.",
      runsTitle: "Cartes de partie",
      runsBody:
        "Les parties terminées sont stockées localement, avec la plus récente en premier. Chaque carte montre la date/heure locale et la distance atteinte.",
      bestTitle: "Meilleure distance",
      bestBody:
        "Lorsqu'un historique existe, la meilleure distance apparaît au-dessus de la liste sous forme de résumé local simple. Un historique vide reste vide.",
      feedbackTitle: "Retours et demandes de fonctions",
      feedbackBody:
        "Les rapports de bugs, propositions de fonctions et retours de plateforme pour NoBS Flappy vont dans la file publique de feedback :",
      feedbackLink: "Ouvrir le feedback NoBS Flappy sur GitHub →",
      privacyTitle: "Politique de confidentialité de NoBS Flappy",
      privacyUpdated: "Dernière mise à jour : 10 juin 2026",
      privacyIntro:
        "Cette politique de confidentialité régit les pratiques de confidentialité des données de l'application mobile <strong>NoBS Flappy</strong>, développée et publiée par <strong>NoBS Apps</strong> pour les plateformes mobiles prises en charge.",
      privacyDataTitle: "1. Déclaration de collecte et de transmission des données",
      privacyDataBody1:
        "<strong>NoBS Flappy fonctionne avec une architecture stricte zéro télémétrie et local-first.</strong> L'application ne collecte, capture, surveille, intercepte ni transmet aucune information personnelle, sensible, de jeu ou identifiable de l'appareil vers des serveurs cloud externes, des bases de données ou des tiers.",
      privacyDataBody2:
        "Nous n'utilisons aucun SDK d'analyse tiers, module de suivi de crash reporting, SDK publicitaire, service de classement en ligne ni outil de gestion d'identité. Aucune requête réseau n'est initialisée par cette application pendant le jeu standard.",
      privacyStorageTitle: "2. Sandbox de stockage local",
      privacyStorageBody:
        "L'historique des parties, la meilleure distance, la langue, le thème, le réglage d'unité de distance et les jetons d'achats de soutien traités sont stockés exclusivement dans la zone privée de stockage local de l'app sur votre appareil, avec la technologie de persistance standard de la plateforme. Vos données restent sous votre garde et votre contrôle personnel à tout moment.",
      privacyPermissionsTitle: "3. Utilisation des autorisations de l'appareil",
      privacyPermissionsBody:
        "<strong>Aucune autorisation spéciale de jeu :</strong> L'app n'a pas besoin de localisation, contacts, caméra, micro, identifiants publicitaires, services d'arrière-plan, notifications push ni services cloud pour le jeu standard.",
      privacyPurchasesTitle: "4. Achats de soutien optionnels en boutique",
      privacyPurchasesBody:
        "Certaines versions de plateforme peuvent proposer des achats natifs optionnels comme soutien symbolique. Ces achats ne débloquent aucune fonctionnalité ni contenu et n'accordent pas d'étoiles, points, badges ou autres récompenses. Quand un achat terminé est signalé par la boutique de la plateforme, l'app peut enregistrer localement le jeton d'achat traité afin d'éviter un traitement dupliqué.",
      privacyChildrenTitle: "5. Confidentialité des enfants",
      privacyChildrenBody:
        "Comme NoBS Flappy ne collecte, capture ni transmet aucune information numérique depuis aucun appareil utilisateur, l'application est conçue pour éviter de collecter des informations personnelles d'enfants.",
      privacyContactTitle: "6. Contact de politique et hub support",
      privacyContactBody:
        'Pour les questions techniques, propositions de fonctions, questions de confidentialité ou retours de plateforme, utilisez la section publique de feedback ci-dessus ou ouvrez directement la file GitHub : <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml</a>',
      footer: "Hub NoBS Flappy • Arcade hors ligne local-first",
    },
    timers: {
      metaTitle: "NoBS Timers | Utilitaires d’horloge local-first",
      backLink: "← Retour à NoBS Apps",
      supportTitle: "Soutenir le développement indépendant",
      supportBody:
        "NoBS Timers est conçu sans publicités, télémétrie, comptes forcés, fonctionnalités payantes obligatoires ni synchronisation cloud. Pour soutenir le travail, utilisez les options de don dans la section support de NoBS Apps.",
      supportLink: "Ouvrir les options de support NoBS Apps →",
      toolsTitle: "Outils d’horloge simples",
      toolsIntro:
        "NoBS Timers garde les outils de temps du quotidien simples, locaux et rapides à atteindre dans une mise en page mobile en mode portrait uniquement.",
      alarmTime: "Heure du jour",
      alarmTitle: "Alarme",
      alarmBody:
        "Choisissez une heure, décidez si elle se répète tous les jours, puis enregistrez. L’app mémorise la dernière heure d’alarme enregistrée et propose six heures dans le futur au premier usage.",
      stopwatchTime: "00:00:00",
      stopwatchTitle: "Chronomètre",
      stopwatchBody:
        "Le chronomètre a un seul bouton : Démarrer, Arrêter, puis Reprendre. Pas de tours, temps intermédiaires, exports ou contrôles supplémentaires.",
      countdownTime: "HH:MM:SS",
      countdownTitle: "Compte à rebours",
      countdownBody:
        "Saisissez heures, minutes et secondes, puis démarrez. La dernière durée utilisée est mémorisée, l’action active devient Annuler et le son standard de l’app retentit à zéro.",
      pomodoroTime: "25 + 5",
      pomodoroTitle: "Pomodoro",
      pomodoroBody:
        "Pomodoro utilise des périodes fixes de 25 minutes de travail et 5 minutes de repos. Chaque transition joue le son standard et la période suivante démarre automatiquement jusqu’à annulation.",
      localBehaviorTitle: "Comportement local de l’app",
      localBehaviorIntro:
        "Le flux principal de minuterie fonctionne sur l’appareil sans comptes, analyses, synchronisation cloud ni connexion réseau obligatoire.",
      navigationTitle: "Contrôles inférieurs",
      navigationBody:
        "La première rangée inférieure utilise de gros boutons pour Alarme, Chronomètre, Compte à rebours et Pomodoro. Une seconde rangée plus petite garde Réglages et Support disponibles sans surcharger les outils.",
      settingsTitle: "Réglages",
      settingsBody:
        "Les réglages restent cohérents avec les autres apps NoBS : langue et thème s’appliquent immédiatement et restent locaux à l’appareil.",
      notificationsTitle: "Alertes locales",
      notificationsBody:
        "Alarmes, comptes à rebours et transitions pomodoro utilisent les alertes système locales quand la plateforme le permet. L’autorisation est demandée seulement lorsqu’une fonction de temps en a besoin.",
      soundTitle: "Un seul son",
      soundBody:
        "NoBS Timers utilise un son d’alerte standardisé pour l’alarme, le compte à rebours, la fin du travail et la fin du repos. Il n’y a pas de sélecteur de son.",
      feedbackTitle: "Retours et demandes de fonctionnalités",
      feedbackBody:
        "Les rapports de bugs, propositions et retours de plateforme pour NoBS Timers vont dans la file publique NoBS Apps :",
      feedbackLink: "Ouvrir les retours NoBS Timers sur GitHub →",
      privacyTitle: "Politique de confidentialité de NoBS Timers",
      privacyUpdated: "Dernière mise à jour : 11 juin 2026",
      privacyIntro:
        "Cette Politique de confidentialité régit les pratiques de confidentialité des données de l’application mobile <strong>NoBS Timers</strong>, développée et publiée par <strong>NoBS Apps</strong> pour les plateformes mobiles prises en charge.",
      privacyDataTitle: "1. Déclaration de collecte et transmission des données",
      privacyDataBody1:
        "<strong>NoBS Timers fonctionne avec une architecture stricte zéro télémétrie et local-first.</strong> L’application ne collecte, capture, surveille, intercepte ni transmet aucune information personnelle, sensible, de minuterie ou identifiable de l’appareil vers des serveurs externes, bases de données ou tiers.",
      privacyDataBody2:
        "Nous n’utilisons pas de SDK d’analyse tiers, SDK publicitaire, module de suivi de crash, système de compte, synchronisation cloud ou outil d’identité. Aucune requête réseau n’est nécessaire pour l’alarme, le chronomètre, le compte à rebours, pomodoro, les réglages, le support ou la planification d’alertes locales.",
      privacyStorageTitle: "2. Stockage local isolé",
      privacyStorageBody:
        "L’heure d’alarme enregistrée, la préférence d’alarme quotidienne, la dernière durée du compte à rebours, l’état actif du minuteur si nécessaire, la langue, le thème et les jetons d’achats de support traités sont stockés exclusivement dans l’espace local privé de l’app sur votre appareil, via la technologie de persistance standard de la plateforme. Vos données restent toujours sous votre garde et votre contrôle.",
      privacyPermissionsTitle: "3. Utilisation des autorisations de l’appareil",
      privacyPermissionsBody:
        "<strong>Alarmes / notifications système locales :</strong> Lorsque la plateforme le permet et que l’utilisateur l’active, l’app utilise les API système locales uniquement pour déclencher alarmes, fins de comptes à rebours et transitions pomodoro. Désactiver ou annuler un minuteur annule les alertes planifiées correspondantes. Aucune analyse de suivi n’est intégrée à ces alertes.",
      privacyPurchasesTitle: "4. Achats de support optionnels en boutique",
      privacyPurchasesBody:
        "Certaines versions peuvent proposer des achats natifs optionnels comme soutien symbolique. Ces achats ne débloquent ni fonctionnalités ni contenu. Lorsqu’un achat terminé est signalé par la boutique, l’app peut enregistrer localement le jeton traité pour éviter un double traitement.",
      privacyChildrenTitle: "5. Confidentialité des enfants",
      privacyChildrenBody:
        "Comme NoBS Timers ne collecte, capture ni transmet aucune information numérique depuis un appareil utilisateur, l’app est conçue pour éviter de collecter les informations personnelles des enfants.",
      privacyContactTitle: "6. Contact politique et centre de support",
      privacyContactBody:
        'Pour les questions techniques, propositions, questions de confidentialité ou retours de plateforme, utilisez la section publique ci-dessus ou ouvrez directement la file GitHub : <a href="https://github.com/daigof/nobs-apps/issues/new" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new</a>',
      footer: "NoBS Timers Hub • Utilitaires d’horloge local-first",
    },
  },
  de: {
    common: {
      tagline: "Keine Konten. Keine Werbung. Kein Tracking. No bullshit.",
      languageLabel: "Sprache",
      themeSelectorLabel: "Theme-Auswahl",
      systemThemeAria: "System-Theme verwenden",
      systemThemeTitle: "System-Theme",
      lightThemeAria: "Helles Theme verwenden",
      lightThemeTitle: "Helles Theme",
      darkThemeAria: "Dunkles Theme verwenden",
      darkThemeTitle: "Dunkles Theme",
      copy: "Kopieren",
      copied: "Kopiert",
      failed: "Fehler",
      privacyBackLink: "← Zur App-Seite zurückkehren",
      privacyLinkTitle: "Datenschutzrichtlinie",
      privacyLinkBody:
        "Lies die eigenständige Datenschutzrichtlinie mit Informationen zu lokaler Speicherung, Geräteberechtigungen und optionalen Support-Käufen.",
      privacyLink: "Datenschutzrichtlinie öffnen →",
    },
    home: {
      metaTitle: "NoBS Apps | Manifest für reine Nützlichkeit",
      promiseTitle: "Das NoBS-Versprechen",
      promiseBody1:
        "Moderne Apps sind aufgebläht. Einfache Werkzeuge wurden zu Datensammelprodukten mit Tracking-Cookies, Benachrichtigungs-Spam und erzwungenen Cloud-Konten.",
      promiseBody2:
        "<strong>Wir bauen native Werkzeuge, die offline funktionieren, Daten auf deinem Gerät behalten und dir nicht im Weg stehen.</strong>",
      currentUtilitiesTitle: "Aktuelle Apps",
      fastingDescription:
        "Ein Intervallfasten-Tracker für mobile Plattformen. Er speichert den Fastenverlauf auf deinem Gerät, funktioniert ohne Cloud-Dienste und nutzt einfache Fortschrittsverfolgung ohne Werbung oder Analytik.",
      flappyDescription:
        "Ein leichtes Offline-Arcade-Spiel für mobile Plattformen. Es speichert den Spielverlauf auf deinem Gerät, funktioniert ohne Cloud-Dienste und nutzt einfache Distanzverfolgung ohne Werbung, Konten oder Analytik.",
      viewDocumentation: "Dokumentation ansehen →",
      supportTitle: "Unabhängige Entwicklung unterstützen",
      supportBody:
        "Wir zeigen keine Tracking-Werbung und sperren nützliche Funktionen nicht hinter Paywalls. Wenn du unser Anti-Bloat-Manifest schätzt, kannst du die Mission direkt unterstützen:",
      paypalTitle: "PayPal / Karte",
      paypalInstruction:
        "Unterstütze die laufende Entwicklung von Utility-Apps per PayPal oder normaler Kreditkartenzahlung:",
      paypalAction: "Per PayPal / Karte unterstützen →",
      binanceInstruction:
        "Die reibungsloseste Option für Nutzer mobiler Apps. Mit deiner Binance-App scannen oder direkt an unsere permanente Pay ID senden:",
      copyBinancePay: "Binance Pay ID kopieren",
      binanceAlt: "Binance Pay QR-Code",
      nativeCryptoTitle: "Native Krypto-Netzwerke",
      nativeCryptoInstruction:
        "Für Unterstützer, die aus externer Software oder Hardware-Wallets senden. Bitte gleiche das Asset-Netzwerk exakt ab, um Geldverlust zu vermeiden.",
      tronTag: "TRX oder USDT (Tron-Netzwerk TRC20)",
      tronInstruction:
        "Verwende dieselbe Tron-Adresse nur für natives TRX oder Tether USDT, das über das TRC20-Netzwerk gesendet wird.",
      copyTron: "Tron-Adresse kopieren",
      showTronQr: "Tron-QR-Code anzeigen",
      tronAlt: "QR-Code für TRX und USDT TRC20 im Tron-Netzwerk",
      bnbTag: "BNB (BNB Smart Chain BEP20)",
      copyBnb: "BNB Smart Chain-Adresse kopieren",
      showBnbQr: "BNB-QR-Code anzeigen",
      bnbAlt: "BNB Smart Chain QR-Code",
      btcTag: "BTC (Bitcoin-Netzwerk)",
      copyBitcoin: "Bitcoin-Adresse kopieren",
      showBtcQr: "BTC-QR-Code anzeigen",
      bitcoinAlt: "Bitcoin QR-Code",
      solTag: "SOL (Solana-Netzwerk)",
      copySolana: "Solana-Adresse kopieren",
      showSolQr: "SOL-QR-Code anzeigen",
      solanaAlt: "Solana QR-Code",
      ltcTag: "LTC (Litecoin-Netzwerk)",
      copyLitecoin: "Litecoin-Adresse kopieren",
      showLtcQr: "LTC-QR-Code anzeigen",
      litecoinAlt: "Litecoin QR-Code",
      footer: "© NoBS Apps. Native Nützlichkeit ohne Ablenkung.",
      timersDescription:
        "Ein einfaches Uhr-Werkzeug für mobile Plattformen. Es hält Wecker, Stoppuhr, Countdowns und Pomodoro-Zyklen lokal auf deinem Gerät, ohne Werbung, Konten, Analysen oder Cloud-Sync.",
    },
    fasting: {
      metaTitle: "NoBS Fasting | Local-First Stoffwechsel-Tracker",
      backLink: "← Zurück zu NoBS Apps",
      supportTitle: "Unabhängige Entwicklung unterstützen",
      supportBody:
        "NoBS Fasting wird ohne Werbung, Telemetrie, erzwungene Konten oder bezahlte Funktionssperren gebaut. Wenn du die Arbeit unterstützen möchtest, nutze die Spendenoptionen im Support-Bereich von NoBS Apps.",
      supportLink: "Support-Optionen von NoBS Apps öffnen →",
      phasesTitle: "Phasen der Stoffwechselverfolgung",
      phasesIntro: "Der lokale Fortschrittsring verfolgt Fasten-Meilensteine dynamisch anhand der verstrichenen Zeit:",
      phase04Time: "04 Stunden",
      phase04Title: "Frühes Fasten",
      phase04Body:
        "Deine Verdauung klingt ab, der Blutzucker stabilisiert sich und dein Insulinspiegel beginnt zu sinken.",
      phase12Time: "12 Stunden",
      phase12Title: "Fettverbrennung",
      phase12Body:
        "Dein Körper verbraucht gespeicherte Zuckerreserven und schaltet den Stoffwechsel um, um gespeichertes Fett als Energie zu nutzen.",
      phase18Time: "18 Stunden",
      phase18Title: "Ketose",
      phase18Body:
        "Deine Leber kann die Ketonproduktion erhöhen, wenn sich die Nutzung gespeicherter Energie verändert. Die Effekte variieren, deshalb zeigt die App dies als Bildungsmeilenstein und nicht als medizinische Anleitung.",
      phase24Time: "24 Stunden",
      phase24Title: "Zelluläre Reinigung",
      phase24Body:
        "Autophagiebezogene Reinigung kann bei längeren Fasten aktiver werden. NoBS Fasting hält die Sprache vorsichtig und auf allgemeine Fastenbildung ausgerichtet.",
      phase24PlusTime: "24+ Stunden (erweiterter Modus)",
      phase24PlusTitle: "Höchste Autophagie",
      phase24PlusBody:
        "Nach 24 Stunden wechselt der Timer in den erweiterten Modus, damit längere Meilensteine sichtbar bleiben, ohne garantierte biologische Ergebnisse anzudeuten.",
      phase30Time: "30 Stunden",
      phase30Title: "Wachstumshormon",
      phase30Body:
        "Wachstumshormonmuster können sich bei längeren Fasten verändern. Die App verfolgt den Meilenstein nur als Zeitmarker, nicht als Versprechen eines bestimmten Ergebnisses.",
      phase36Time: "36 Stunden",
      phase36Title: "Tiefenreinigung",
      phase36Body:
        "Dieser tiefere Fastenmarker hält erweiterte Sitzungen lesbar, ohne zu behaupten, dass eine feste Dauer ein festes zelluläres Ergebnis erzeugt.",
      phase48Time: "48 Stunden",
      phase48Title: "Immunsystem-Reset",
      phase48Body:
        "Dies ist der letzte Meilenstein, den NoBS Fasting verfolgt. Dein Körper kann in tieferes Recycling von Immunzellen eintreten, und die App verfolgt keine Vorteile nach 48 Stunden.",
      gamificationTitle: "Gamification und Serien",
      gamificationIntro:
        "Gamification ist optional. Wenn aktiviert, nutzt NoBS Fasting lokale Sterne, Serien und Serien-Freeze-Funktionen, um Konsistenz sichtbar zu machen, ohne Konten, Bestenlisten, Social Sharing oder Engagement-Tracking.",
      starsTitle: "Sterne",
      starsBody:
        "Sterne werden kumulativ verdient, wenn ein Fasten Meilenstein-Dauern erreicht. Ein Fasten kann bis zu 8 Sterne verdienen: je 1 Stern bei 4h, 12h, 18h, 24h, 30h und 36h, plus 2 Sterne bei 48h.",
      streaksTitle: "Serien",
      streaksBody:
        "Ein Tag zählt für deine Serie, wenn er durch ein abgeschlossenes Fasten von mindestens 12 Stunden, ein aktives Fasten mit bereits 12 Stunden oder einen Serien-Freeze abgedeckt ist. Mehrtägige Fasten schreiben jedes lokale Datum gut, das sie abdecken.",
      freezesTitle: "Serien-Freeze",
      freezesBody:
        "Ein Serien-Freeze kostet 20 Sterne und kann einen nicht gutgeschriebenen lokalen Tag schützen. Er kann nicht genutzt werden, während ein Fasten aktiv ist oder an einem Tag, der bereits durch ein qualifizierendes Fasten oder einen anderen Freeze gutgeschrieben wurde.",
      bonusesTitle: "Meilenstein-Boni",
      bonusesBody:
        "Eine 7-Tage-Serie gewährt einen Bonus von 3 Sternen. Eine 30-Tage-Serie gewährt einen Bonus von 10 Sternen. Boni werden einmal pro ununterbrochenem Serien-Meilenstein vergeben und erst zurückgesetzt, wenn die Serie unter diesen Schwellenwert fällt.",
      localBehaviorTitle: "Lokales App-Verhalten",
      localBehaviorIntro:
        "Der Kernablauf des Fastens funktioniert auf dem Gerät ohne Konten, Analytik, Cloud-Sync oder erforderliche Netzwerkverbindung.",
      historyTitle: "Verlauf",
      historyBody:
        "Abgeschlossene gutgeschriebene Fasten werden lokal mit dem neuesten zuerst gespeichert. Längere oder tagesübergreifende Sitzungen zeigen Start- und Endzeit, und doppelt gutgeschriebene Fasten werden verworfen, ohne zusätzlichen Verlauf oder Sterne hinzuzufügen.",
      settingsTitle: "Einstellungen",
      settingsBody:
        "Sprache, Theme, Meilensteinmarken, Gamification und Benachrichtigungen sind Geräteeinstellungen. Sie gelten sofort, und die App bleibt auch ohne Benachrichtigungen oder Gamification nützlich.",
      notificationsTitle: "Benachrichtigungen",
      notificationsBody:
        "Optionale lokale Benachrichtigungen können bei 4h, 12h, 18h, 24h, 30h, 36h und 48h alarmieren, während ein Fasten aktiv ist. Tägliche Starterinnerungen nutzen einen lokalen gleitenden Durchschnitt der letzten Startzeiten.",
      feedbackTitle: "Feedback und Funktionswünsche",
      feedbackBody:
        "Fehlerberichte, Funktionsvorschläge und Plattform-Feedback für NoBS Fasting gehören in die öffentliche Feedback-Warteschlange:",
      feedbackLink: "NoBS Fasting Feedback auf GitHub öffnen →",
      privacyTitle: "NoBS Fasting Datenschutzrichtlinie",
      privacyUpdated: "Zuletzt aktualisiert: 10. Juni 2026",
      privacyIntro:
        "Diese Datenschutzrichtlinie regelt die Datenschutzpraktiken der mobilen Anwendung <strong>NoBS Fasting</strong>, entwickelt und veröffentlicht von <strong>NoBS Apps</strong> für unterstützte mobile Plattformen.",
      privacyDataTitle: "1. Erklärung zur Datenerfassung und -übertragung",
      privacyDataBody1:
        "<strong>NoBS Fasting arbeitet mit einer strikten Zero-Telemetry- und Local-First-Architektur.</strong> Die Anwendung sammelt, erfasst, überwacht, fängt oder überträgt keine persönlichen, sensiblen oder geräteidentifizierbaren Informationen an externe Cloud-Server, Datenbanken oder Dritte.",
      privacyDataBody2:
        "Wir verwenden keine Analyse-SDKs von Drittanbietern, Werbe-SDKs, Crash-Reporting-Tracking-Module, Kontosysteme, Cloud-Sync oder Identitätsverwaltungstools. Für aktiven Timer, Verlauf, Einstellungen, Erinnerungen, Gamification oder Phasenerklärungen ist keine Netzwerkanfrage erforderlich.",
      privacyStorageTitle: "2. Lokale Speicher-Sandbox",
      privacyStorageBody:
        "Aktiver Fastenzustand, abgeschlossene Sitzungen, Serien-Freezes, Sternestand, Serienbonus-Marker, Sprache, Theme, Benachrichtigungseinstellungen, Meilensteinanzeige-Einstellungen, Gamification-Einstellungen und verarbeitete Support-Kauftokens werden ausschließlich im privaten lokalen Speicherbereich der App auf deinem Gerät gespeichert, mit der Standard-Persistenztechnologie der Plattform. Deine Daten bleiben jederzeit unter deiner persönlichen Verwahrung und Kontrolle.",
      privacyPermissionsTitle: "3. Nutzung von Geräteberechtigungen",
      privacyPermissionsBody:
        "<strong>Lokale Systemalarme / Benachrichtigungen:</strong> Wo unterstützt und vom Nutzer aktiviert, verwendet die App lokale Systembenachrichtigungs-APIs ausschließlich, um Meilenstein-Alarme bei 4h, 12h, 18h, 24h, 30h, 36h und 48h zu posten, während ein Fasten aktiv ist, plus tägliche Starterinnerungen basierend auf deinen letzten lokalen Startzeiten. Das Ausschalten von Benachrichtigungen bricht geplante Meilenstein-Alarme und smarte Erinnerungen ab. In diese Benachrichtigungen ist keine Tracking-Analytik eingebettet.",
      privacyPurchasesTitle: "4. Optionale Store-Supportkäufe",
      privacyPurchasesBody:
        "Einige Plattformversionen können optionale native Store-Käufe als symbolische Unterstützung anbieten. Diese Käufe schalten keine Funktionen oder Inhalte frei. Wenn ein abgeschlossener Kauf vom Plattform-Store gemeldet wird, kann die App das verarbeitete Kauftoken lokal speichern, um doppelte lokale Dankeschön-Sterne zu verhindern.",
      privacyChildrenTitle: "5. Datenschutz von Kindern",
      privacyChildrenBody:
        "Da NoBS Fasting keinerlei digitale Informationen von irgendeinem Nutzergerät sammelt, erfasst oder überträgt, ist die App so gestaltet, dass sie keine persönlichen Informationen von Kindern sammelt.",
      privacyContactTitle: "6. Kontakt zur Richtlinie und Support-Hub",
      privacyContactBody:
        'Für technische Anfragen, Funktionsvorschläge, Datenschutzfragen oder Plattform-Feedback nutze den öffentlichen Feedback-Bereich oben oder öffne direkt die GitHub-Warteschlange: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml</a>',
      footer: "NoBS Fasting Hub • Local-First Entwicklungsarchitektur",
    },
    flappy: {
      metaTitle: "NoBS Flappy | Local-First Offline-Arcade",
      backLink: "← Zurück zu NoBS Apps",
      supportTitle: "Unabhängige Entwicklung unterstützen",
      supportBody:
        "NoBS Flappy wird ohne Werbung, Telemetrie, erzwungene Konten, bezahlte Funktionssperren oder Cloud-Bestenlisten gebaut. Wenn du die Arbeit unterstützen möchtest, nutze die Spendenoptionen im Support-Bereich von NoBS Apps.",
      supportLink: "Support-Optionen von NoBS Apps öffnen →",
      gameplayTitle: "Offline-Arcade-Spiel",
      gameplayIntro: "NoBS Flappy hält die Spielschleife einfach, lesbar und lokal:",
      controlTime: "Tippen / Klicken",
      controlTitle: "Nach oben flattern",
      controlBody:
        "Tippe irgendwo auf die Spielfläche, um nach oben zu flattern. Die Welt scrollt automatisch, also ist das Ziel, den Vogel von Gefahren fernzuhalten.",
      distanceTime: "Distanz",
      distanceTitle: "Distanz, keine Konten",
      distanceBody:
        'Das Spiel nutzt keine Punkte, sozialen Scores oder Online-Bestenlisten. Während des Spiels zeigt ein ruhiges HUD unten rechts "Zurueckgelegte Distanz:" und abgeschlossene Läufe melden die Distanz je nach Einstellung in Kilometern oder Meilen.',
      offlineTime: "Offline",
      offlineTitle: "Lokale Läufe",
      offlineBody:
        "Spielverlauf und beste Distanz bleiben auf deinem Gerät. Das Kernspiel funktioniert ohne Netzwerkzugang, Login oder Serverdienste.",
      hudTime: "HUD",
      hudTitle: "Schnelle Steuerung",
      hudBody:
        "Start führt direkt zur spielbaren Fläche. Während eines Laufs bleibt ein kleiner Hell/Dunkel-Schalter unter der Bodenlinie, damit Theme-Wechsel nicht als Flap-Eingabe zählen.",
      hazardsTitle: "Gefahren und Game Over",
      hazardsIntro: "Läufe enden nur, wenn der Vogel mit einer lokalen Spielgefahr kollidiert:",
      buildingsTitle: "Stadtgebäude",
      buildingsBody:
        "Die endlose Stadt nutzt lesbare Gebäudesilhouetten, Stufen- und Pyramidendächer, große Fensterraster, Türen und gelegentliche Antennen. Gebäudekörper, Antennen und Boden sind feste Gefahren.",
      planesTitle: "Flugzeuge",
      planesBody:
        "Flugzeuge werden nach 0.5 km freigeschaltet, kreuzen die hohe Himmelsbahn von rechts nach links und nutzen drei Geschwindigkeitsstufen. Flugzeugkollisionen beenden den Lauf mit eigener Meldung.",
      purpleAngryBirdTitle: "Lila Angry Bird",
      purpleAngryBirdBody:
        "Der lila Angry Bird wird bei 1 km freigeschaltet. Er ist ein gespiegelter Origami-Vogel mit begrenztem Flap-Pfad und leichter Orientierung an der Spielerhöhe, aufmerksam ohne direkte Verfolgung.",
      redAngryBirdTitle: "Roter Angry Bird",
      redAngryBirdBody:
        "Der rote Angry Bird wird bei 2 km freigeschaltet. Er ist schneller und aggressiver als der lila Vogel, muss aber weiterhin eine spielbare Ausweichroute lassen.",
      thunderTitle: "Gewittersturz",
      thunderBody:
        "Wiederholt zu hoch zu fliegen kann einen Gewittersturz auslösen. Eingaben zählen nicht mehr, der Vogel fällt kopfüber, und das Overlay wartet bis zum Aufprall, bevor der Lauf endet.",
      difficultyTitle: "Schwierigkeitsfreischaltungen",
      difficultyBody:
        "Antennen können nach 0.25 km erscheinen, Flugzeuge nach 0.5 km, lila Angry Birds nach 1 km und rote Angry Birds nach 2 km. Die Weltgeschwindigkeit steigt bei 1.5 km, 2.5 km und 4 km.",
      gameOverCopyTitle: "Game-Over-Texte",
      gameOverCopyBody:
        'Der Lauf erklärt, was passiert ist: Boden, Gebäude, Antenne, Flugzeug, Angry Bird und Donner haben eigene Meldungen. Angry-Bird-Kollisionen sagen: "You\'ve been hit by an Angry Bird!"',
      historyTitle: "Lokaler Verlauf",
      historyIntro:
        "Der Verlauf bleibt bewusst schlicht, ohne Abzeichen, Sterne, Online-Profile oder Engagement-Schleifen.",
      runsTitle: "Laufkarten",
      runsBody:
        "Abgeschlossene Läufe werden lokal gespeichert, neueste zuerst. Jede Karte zeigt lokale Datum/Uhrzeit und erreichte Distanz.",
      bestTitle: "Beste Distanz",
      bestBody:
        "Wenn Verlauf existiert, erscheint die beste Distanz als einfache lokale Zusammenfassung über der Liste. Leerer Verlauf bleibt leer.",
      feedbackTitle: "Feedback und Funktionswünsche",
      feedbackBody:
        "Fehlerberichte, Funktionsvorschläge und Plattform-Feedback für NoBS Flappy gehören in die öffentliche Feedback-Warteschlange:",
      feedbackLink: "NoBS Flappy Feedback auf GitHub öffnen →",
      privacyTitle: "NoBS Flappy Datenschutzrichtlinie",
      privacyUpdated: "Zuletzt aktualisiert: 10. Juni 2026",
      privacyIntro:
        "Diese Datenschutzrichtlinie regelt die Datenschutzpraktiken der mobilen Anwendung <strong>NoBS Flappy</strong>, entwickelt und veröffentlicht von <strong>NoBS Apps</strong> für unterstützte mobile Plattformen.",
      privacyDataTitle: "1. Erklärung zur Datenerfassung und -übertragung",
      privacyDataBody1:
        "<strong>NoBS Flappy arbeitet mit einer strikten Zero-Telemetry- und Local-First-Architektur.</strong> Die Anwendung sammelt, erfasst, überwacht, fängt oder überträgt keine persönlichen, sensiblen, spielbezogenen oder geräteidentifizierbaren Informationen an externe Cloud-Server, Datenbanken oder Dritte.",
      privacyDataBody2:
        "Wir verwenden keine Analyse-SDKs von Drittanbietern, Crash-Reporting-Tracking-Module, Werbe-SDKs, Online-Bestenlisten oder Identitätsverwaltungstools. Während des Standardspiels werden von dieser Anwendung keine Netzwerkanfragen initialisiert.",
      privacyStorageTitle: "2. Lokale Speicher-Sandbox",
      privacyStorageBody:
        "Spielverlauf, beste Distanz, Sprache, Theme, Distanzeinheit-Einstellung und verarbeitete Support-Kauftokens werden ausschließlich im privaten lokalen Speicherbereich der App auf deinem Gerät gespeichert, mit der Standard-Persistenztechnologie der Plattform. Deine Daten bleiben jederzeit unter deiner persönlichen Verwahrung und Kontrolle.",
      privacyPermissionsTitle: "3. Nutzung von Geräteberechtigungen",
      privacyPermissionsBody:
        "<strong>Keine besonderen Spielberechtigungen:</strong> Die App benötigt für das Standardspiel keinen Standort, keine Kontakte, Kamera, Mikrofon, Werbe-IDs, Hintergrunddienste, Push-Benachrichtigungen oder Cloud-Dienste.",
      privacyPurchasesTitle: "4. Optionale Store-Supportkäufe",
      privacyPurchasesBody:
        "Einige Plattformversionen können optionale native Store-Käufe als symbolische Unterstützung anbieten. Diese Käufe schalten keine Funktionen oder Inhalte frei und gewähren keine Sterne, Punkte, Abzeichen oder andere Belohnungen. Wenn ein abgeschlossener Kauf vom Plattform-Store gemeldet wird, kann die App das verarbeitete Kauftoken lokal speichern, um doppelte Verarbeitung zu verhindern.",
      privacyChildrenTitle: "5. Datenschutz von Kindern",
      privacyChildrenBody:
        "Da NoBS Flappy keinerlei digitale Informationen von irgendeinem Nutzergerät sammelt, erfasst oder überträgt, ist die App so gestaltet, dass sie keine persönlichen Informationen von Kindern sammelt.",
      privacyContactTitle: "6. Kontakt zur Richtlinie und Support-Hub",
      privacyContactBody:
        'Für technische Anfragen, Funktionsvorschläge, Datenschutzfragen oder Plattform-Feedback nutze den öffentlichen Feedback-Bereich oben oder öffne direkt die GitHub-Warteschlange: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml</a>',
      footer: "NoBS Flappy Hub • Local-First Offline-Arcade",
    },
    timers: {
      metaTitle: "NoBS Timers | Local-First Uhr-Werkzeuge",
      backLink: "← Zurück zu NoBS Apps",
      supportTitle: "Unabhängige Entwicklung unterstützen",
      supportBody:
        "NoBS Timers wird ohne Werbung, Telemetrie, erzwungene Konten, bezahlte Feature-Sperren oder Cloud-Sync gebaut. Wenn du die Arbeit unterstützen möchtest, nutze die Spendenoptionen im Support-Bereich von NoBS Apps.",
      supportLink: "NoBS Apps Support-Optionen öffnen →",
      toolsTitle: "Einfache Uhr-Werkzeuge",
      toolsIntro:
        "NoBS Timers hält alltägliche Zeitwerkzeuge schlicht, lokal und in einem mobilen Hochformat-Layout schnell erreichbar.",
      alarmTime: "Uhrzeit",
      alarmTitle: "Wecker",
      alarmBody:
        "Wähle eine Uhrzeit, entscheide, ob sie täglich wiederholt wird, und speichere sie. Die App merkt sich die zuletzt gespeicherte Weckzeit und schlägt beim ersten Start sechs Stunden in der Zukunft vor.",
      stopwatchTime: "00:00:00",
      stopwatchTitle: "Stoppuhr",
      stopwatchBody:
        "Die Stoppuhr hat einen Button: Start, Stopp, dann Fortsetzen. Es gibt keine Runden, Zwischenzeiten, Exporte oder Zusatzsteuerungen.",
      countdownTime: "HH:MM:SS",
      countdownTitle: "Countdown",
      countdownBody:
        "Gib Stunden, Minuten und Sekunden ein und starte. Die zuletzt verwendete Dauer wird gemerkt, die laufende Aktion wird zu Abbrechen, und bei null spielt der Standardsound der App.",
      pomodoroTime: "25 + 5",
      pomodoroTitle: "Pomodoro",
      pomodoroBody:
        "Pomodoro nutzt feste 25-minütige Arbeitsphasen und 5-minütige Pausen. Jeder Wechsel spielt den Standardsound, und die nächste Phase startet automatisch, bis du abbrichst.",
      localBehaviorTitle: "Lokales App-Verhalten",
      localBehaviorIntro:
        "Der zentrale Zeitablauf funktioniert auf dem Gerät ohne Konten, Analysen, Cloud-Sync oder erforderliche Netzwerkverbindung.",
      navigationTitle: "Untere Steuerung",
      navigationBody:
        "Die erste untere Reihe nutzt größere Buttons für Wecker, Stoppuhr, Countdown und Pomodoro. Eine kleinere zweite Reihe hält Einstellungen und Support erreichbar, ohne die Timer-Werkzeuge zu überladen.",
      settingsTitle: "Einstellungen",
      settingsBody:
        "Die Einstellungen bleiben konsistent mit anderen NoBS Apps: Sprache und Design werden sofort angewendet und bleiben lokal auf dem Gerät.",
      notificationsTitle: "Lokale Hinweise",
      notificationsBody:
        "Wecker, Countdowns und Pomodoro-Wechsel nutzen lokale Systemhinweise, wo die Plattform es erlaubt. Die Berechtigung wird nur angefragt, wenn eine Zeitfunktion sie braucht.",
      soundTitle: "Ein Sound",
      soundBody:
        "NoBS Timers verwendet einen standardisierten Hinweiston für Wecker, Countdown, Arbeitsende und Pausenende. Es gibt keinen Sound-Auswahldialog.",
      feedbackTitle: "Feedback und Feature-Wünsche",
      feedbackBody:
        "Bugberichte, Feature-Vorschläge und Plattform-Feedback für NoBS Timers gehören in die öffentliche NoBS Apps Queue:",
      feedbackLink: "NoBS Timers Feedback auf GitHub öffnen →",
      privacyTitle: "NoBS Timers Datenschutzrichtlinie",
      privacyUpdated: "Zuletzt aktualisiert: 11. Juni 2026",
      privacyIntro:
        "Diese Datenschutzrichtlinie beschreibt die Datenschutzpraktiken der mobilen Anwendung <strong>NoBS Timers</strong>, entwickelt und veröffentlicht von <strong>NoBS Apps</strong> für unterstützte mobile Plattformen.",
      privacyDataTitle: "1. Erklärung zu Datenerhebung und Übertragung",
      privacyDataBody1:
        "<strong>NoBS Timers arbeitet mit einer strikten Zero-Telemetry, Local-First Architektur.</strong> Die Anwendung sammelt, erfasst, überwacht, interceptet oder überträgt keine persönlichen, sensiblen, zeitbezogenen oder geräteidentifizierbaren Informationen an externe Cloud-Server, Datenbanken oder Dritte.",
      privacyDataBody2:
        "Wir verwenden keine Analyse-SDKs von Drittanbietern, Werbe-SDKs, Crash-Tracking-Module, Kontosysteme, Cloud-Sync oder Identitätswerkzeuge. Für Wecker, Stoppuhr, Countdown, Pomodoro, Einstellungen, Support-Anzeige oder lokale Hinweisplanung ist keine Netzwerkanfrage erforderlich.",
      privacyStorageTitle: "2. Lokaler Speicherbereich",
      privacyStorageBody:
        "Gespeicherte Weckzeit, tägliche Wecker-Präferenz, letzte Countdown-Dauer, bei Bedarf aktiver Timer-Zustand, Sprache, Theme und verarbeitete Support-Kauf-Token werden ausschließlich im privaten lokalen Speicherbereich der App auf deinem Gerät gespeichert, mit der Standard-Persistenztechnologie der Plattform. Deine Daten bleiben jederzeit unter deiner persönlichen Obhut und Kontrolle.",
      privacyPermissionsTitle: "3. Nutzung von Geräteberechtigungen",
      privacyPermissionsBody:
        "<strong>Lokale Systemalarme / Benachrichtigungen:</strong> Wo unterstützt und vom Nutzer aktiviert, nutzt die App lokale System-APIs ausschließlich zum Auslösen von Weckern, Countdown-Enden und Pomodoro-Wechseln. Das Deaktivieren oder Abbrechen eines Timers entfernt die entsprechenden geplanten Hinweise. In diesen Hinweisen ist keine Tracking-Analyse eingebettet.",
      privacyPurchasesTitle: "4. Optionale Store-Support-Käufe",
      privacyPurchasesBody:
        "Einige Plattformversionen können optionale native Store-Käufe als symbolische Unterstützung anbieten. Diese Käufe schalten keine Funktionen oder Inhalte frei. Wenn der Store einen abgeschlossenen Kauf meldet, kann die App das verarbeitete Kauf-Token lokal speichern, um doppelte Verarbeitung zu verhindern.",
      privacyChildrenTitle: "5. Datenschutz von Kindern",
      privacyChildrenBody:
        "Da NoBS Timers keinerlei digitale Informationen von Nutzergeräten sammelt, erfasst oder überträgt, ist es so gestaltet, dass keine personenbezogenen Informationen von Kindern gesammelt werden.",
      privacyContactTitle: "6. Kontakt und Support-Hub",
      privacyContactBody:
        'Für technische Fragen, Feature-Vorschläge, Datenschutzfragen oder Plattform-Feedback nutze den öffentlichen Feedback-Bereich oben oder öffne direkt die GitHub-Queue: <a href="https://github.com/daigof/nobs-apps/issues/new" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new</a>',
      footer: "NoBS Timers Hub • Local-First Uhr-Werkzeuge",
    },
  },
  ja: {
    common: {
      tagline: "アカウントなし。広告なし。追跡なし。No bullshit.",
      languageLabel: "言語",
      themeSelectorLabel: "テーマ選択",
      systemThemeAria: "システムテーマを使用",
      systemThemeTitle: "システムテーマ",
      lightThemeAria: "ライトテーマを使用",
      lightThemeTitle: "ライトテーマ",
      darkThemeAria: "ダークテーマを使用",
      darkThemeTitle: "ダークテーマ",
      copy: "コピー",
      copied: "コピー済み",
      failed: "失敗",
      privacyBackLink: "← アプリページに戻る",
      privacyLinkTitle: "プライバシーポリシー",
      privacyLinkBody:
        "ローカル保存、デバイス権限、任意のサポート購入の扱いを含む、独立したプライバシーポリシーを確認できます。",
      privacyLink: "プライバシーポリシーを開く →",
    },
    home: {
      metaTitle: "NoBS Apps | 純粋な実用性のマニフェスト",
      promiseTitle: "NoBS の約束",
      promiseBody1:
        "現代のアプリは肥大化しています。基本的なツールは、追跡 Cookie、通知スパム、強制クラウドアカウントを詰め込んだデータ収集製品に変わりました。",
      promiseBody2:
        "<strong>私たちは、オフラインで動作し、データを端末内に保ち、邪魔をしないネイティブユーティリティを作ります。</strong>",
      currentUtilitiesTitle: "現在のユーティリティ",
      fastingDescription:
        "モバイルプラットフォーム向けの断続的断食トラッカーです。断食履歴を端末内に保存し、クラウドサービスなしで動作し、広告や分析なしのシンプルな進捗追跡を使います。",
      flappyDescription:
        "モバイルプラットフォーム向けの軽量オフラインアーケードゲームです。プレイ履歴を端末内に保存し、クラウドサービスなしで動作し、広告、アカウント、分析なしのシンプルな距離追跡を使います。",
      viewDocumentation: "ドキュメントを見る →",
      supportTitle: "独立開発を支援",
      supportBody:
        "追跡広告を表示したり、ユーティリティ機能を有料の壁の後ろに置いたりしません。反肥大化ソフトウェアのマニフェストに価値を感じるなら、ミッションを直接支援できます。",
      paypalTitle: "PayPal / カード",
      paypalInstruction: "PayPal または通常のクレジットカード決済で、ユーティリティアプリの継続開発を支援できます。",
      paypalAction: "PayPal / カードで支援 →",
      binanceInstruction:
        "モバイルアプリユーザーにとって最も手間の少ない方法です。Binance アプリでスキャンするか、恒久的な Pay ID に直接送信してください。",
      copyBinancePay: "Binance Pay ID をコピー",
      binanceAlt: "Binance Pay QR コード",
      nativeCryptoTitle: "ネイティブ暗号資産ネットワーク",
      nativeCryptoInstruction:
        "外部ソフトウェアやハードウェアウォレットから送信する支援者向けです。資金損失を防ぐため、資産ネットワークを正確に一致させてください。",
      tronTag: "TRX または USDT（Tron ネットワーク TRC20）",
      tronInstruction:
        "この Tron アドレスは、TRC20 ネットワークで送信するネイティブ TRX または Tether USDT のみに使用してください。",
      copyTron: "Tron アドレスをコピー",
      showTronQr: "Tron QR コードを表示",
      tronAlt: "Tron ネットワーク TRX および USDT TRC20 QR コード",
      bnbTag: "BNB（BNB Smart Chain BEP20）",
      copyBnb: "BNB Smart Chain アドレスをコピー",
      showBnbQr: "BNB QR コードを表示",
      bnbAlt: "BNB Smart Chain QR コード",
      btcTag: "BTC（Bitcoin ネットワーク）",
      copyBitcoin: "Bitcoin アドレスをコピー",
      showBtcQr: "BTC QR コードを表示",
      bitcoinAlt: "Bitcoin QR コード",
      solTag: "SOL（Solana ネットワーク）",
      copySolana: "Solana アドレスをコピー",
      showSolQr: "SOL QR コードを表示",
      solanaAlt: "Solana QR コード",
      ltcTag: "LTC（Litecoin ネットワーク）",
      copyLitecoin: "Litecoin アドレスをコピー",
      showLtcQr: "LTC QR コードを表示",
      litecoinAlt: "Litecoin QR コード",
      footer: "© NoBS Apps。邪魔のないネイティブユーティリティ。",
      timersDescription:
        "モバイル向けのシンプルな時計ユーティリティ。アラーム、ストップウォッチ、カウントダウン、ポモドーロを端末内に保持し、広告、アカウント、分析、クラウド同期はありません。",
    },
    fasting: {
      metaTitle: "NoBS Fasting | ローカルファースト代謝トラッカー",
      backLink: "← NoBS Apps に戻る",
      supportTitle: "独立開発を支援",
      supportBody:
        "NoBS Fasting は、広告、テレメトリ、強制アカウント、有料機能ゲートなしで作られています。開発を支援したい場合は、NoBS Apps のサポートセクションにある寄付オプションを利用してください。",
      supportLink: "NoBS Apps のサポートオプションを開く →",
      phasesTitle: "代謝追跡フェーズ",
      phasesIntro: "ローカルの進捗リングは、経過時間に基づいて断食のマイルストーンを動的に追跡します。",
      phase04Time: "04 時間",
      phase04Title: "断食初期",
      phase04Body: "消化が落ち着き、血糖値が安定し、インスリン値が下がり始めます。",
      phase12Time: "12 時間",
      phase12Title: "脂肪燃焼",
      phase12Body: "体は蓄えた糖の予備を使い切り、エネルギー源として蓄積脂肪を燃やす代謝スイッチに切り替わります。",
      phase18Time: "18 時間",
      phase18Title: "ケトーシス",
      phase18Body:
        "蓄えたエネルギーの使われ方が変わるにつれて、肝臓のケトン体産生が増えることがあります。効果には個人差があるため、アプリはこれを医療助言ではなく教育的なマイルストーンとして表示します。",
      phase24Time: "24 時間",
      phase24Title: "細胞クリーンアップ",
      phase24Body:
        "長めの断食では、オートファジーに関連するクリーンアップがより活発になる可能性があります。NoBS Fasting は慎重な表現を保ち、一般的な断食教育に焦点を当てます。",
      phase24PlusTime: "24+ 時間（延長モード）",
      phase24PlusTitle: "ピークオートファジー",
      phase24PlusBody:
        "24 時間を過ぎると、タイマーは延長モードに入り、より長いマイルストーンを見えるようにします。これは生物学的結果を保証するものではありません。",
      phase30Time: "30 時間",
      phase30Title: "成長ホルモン",
      phase30Body:
        "長めの断食中は成長ホルモンのパターンが変化することがあります。アプリはこのマイルストーンを時間の目印としてのみ追跡し、特定の結果を約束しません。",
      phase36Time: "36 時間",
      phase36Title: "深いクレンジング",
      phase36Body:
        "この深い断食マーカーは、延長セッションを読みやすくするためのもので、一定時間が一定の細胞結果を生むとは主張しません。",
      phase48Time: "48 時間",
      phase48Title: "免疫リセット",
      phase48Body:
        "これは NoBS Fasting が追跡する最後のマイルストーンです。体はより深い免疫細胞の再利用に入る可能性があり、アプリは 48 時間以降の効果を追跡しません。",
      gamificationTitle: "ゲーミフィケーションと連続記録",
      gamificationIntro:
        "ゲーミフィケーションは任意です。有効にすると、NoBS Fasting はローカルのみのスター、連続記録、連続記録フリーズを使って、アカウント、ランキング、ソーシャル共有、エンゲージメント追跡なしに継続性を見える化します。",
      starsTitle: "スター",
      starsBody:
        "スターは、断食がマイルストーン時間に到達するたびに累積で獲得されます。1 回の断食で最大 8 個のスターを獲得できます。4h、12h、18h、24h、30h、36h で各 1 個、48h で 2 個です。",
      streaksTitle: "連続記録",
      streaksBody:
        "12 時間以上の完了済み断食、すでに 12 時間に到達したアクティブな断食、または連続記録フリーズでカバーされた日は、連続記録にカウントされます。複数日にわたる断食は、カバーする各ローカル日付を加算します。",
      freezesTitle: "連続記録フリーズ",
      freezesBody:
        "連続記録フリーズは 20 スターを消費し、未加算のローカル日 1 日を保護できます。断食がアクティブな間、または対象断食や別のフリーズですでに加算された日には使用できません。",
      bonusesTitle: "マイルストーンボーナス",
      bonusesBody:
        "7 日連続記録に到達すると 3 スターのボーナス、30 日連続記録に到達すると 10 スターのボーナスが付与されます。ボーナスは途切れない連続記録の各マイルストーンにつき 1 回だけ付与され、そのしきい値を下回った後にのみリセットされます。",
      localBehaviorTitle: "ローカルでのアプリ動作",
      localBehaviorIntro:
        "主要な断食フローは、アカウント、分析、クラウド同期、必須のネットワーク接続なしで端末上で動作します。",
      historyTitle: "履歴",
      historyBody:
        "完了して加算された断食は、新しい順にローカル保存されます。長時間または日をまたぐセッションは開始と終了の日時を表示し、重複加算の断食は履歴やスターを追加せずに破棄されます。",
      settingsTitle: "設定",
      settingsBody:
        "言語、テーマ、マイルストーン表示、ゲーミフィケーション、通知は端末内の設定です。すぐに反映され、通知やゲーミフィケーションを無効にしてもアプリは使えます。",
      notificationsTitle: "通知",
      notificationsBody:
        "任意のローカル通知は、断食中に 4h、12h、18h、24h、30h、36h、48h で知らせることができます。毎日の開始リマインダーは、最近の開始時刻のローカル移動平均を使います。",
      feedbackTitle: "フィードバックと機能リクエスト",
      feedbackBody:
        "NoBS Fasting のバグ報告、機能提案、プラットフォームフィードバックは、公開フィードバックキューに送ってください。",
      feedbackLink: "GitHub で NoBS Fasting のフィードバックを開く →",
      privacyTitle: "NoBS Fasting プライバシーポリシー",
      privacyUpdated: "最終更新日: 2026年6月10日",
      privacyIntro:
        "このプライバシーポリシーは、対応モバイルプラットフォーム向けに <strong>NoBS Apps</strong> が開発および公開する <strong>NoBS Fasting</strong> モバイルアプリケーションのデータプライバシー慣行を規定します。",
      privacyDataTitle: "1. データ収集および送信に関する声明",
      privacyDataBody1:
        "<strong>NoBS Fasting は、厳格なゼロテレメトリ、ローカルファーストのアーキテクチャで動作します。</strong> このアプリケーションは、個人情報、機微情報、または端末を識別できる情報を、外部クラウドサーバー、データベース、第三者へ収集、取得、監視、傍受、送信しません。",
      privacyDataBody2:
        "第三者の分析 SDK、広告 SDK、クラッシュレポート追跡モジュール、アカウントシステム、クラウド同期、ID 管理ツールは使用しません。アクティブタイマー、履歴、設定、リマインダー、ゲーミフィケーション、フェーズ説明にネットワークリクエストは必要ありません。",
      privacyStorageTitle: "2. ローカルストレージのサンドボックス",
      privacyStorageBody:
        "アクティブな断食状態、完了セッション、連続記録フリーズ、スター残高、連続記録ボーナスマーカー、言語、テーマ、通知設定、マイルストーン表示設定、ゲーミフィケーション設定、処理済みサポート購入トークンは、プラットフォーム標準の永続化技術を使用して、端末上のアプリ専用ローカルストレージ領域内にのみ保存されます。データは常にあなた自身の管理と制御下にあります。",
      privacyPermissionsTitle: "3. 端末権限の使用",
      privacyPermissionsBody:
        "<strong>ローカルシステムアラーム / 通知:</strong> 対応しておりユーザーが有効にした場合、アプリはローカルのシステム通知 API のみを使用して、断食中に 4h、12h、18h、24h、30h、36h、48h のマイルストーン通知と、最近のローカル開始時刻に基づく毎日の開始リマインダーを表示します。通知をオフにすると、予定されたマイルストーン通知とスマートリマインダーはキャンセルされます。これらの通知には追跡分析は組み込まれていません。",
      privacyPurchasesTitle: "4. 任意のストア支援購入",
      privacyPurchasesBody:
        "一部のプラットフォーム版では、象徴的な支援として任意のネイティブストア購入を提供する場合があります。これらの購入で機能やコンテンツは解除されません。完了した購入がプラットフォームストアから報告された場合、アプリはローカルのお礼スターを重複付与しないよう、処理済み購入トークンを端末内に記録することがあります。",
      privacyChildrenTitle: "5. 子どものプライバシー",
      privacyChildrenBody:
        "NoBS Fasting はいかなるユーザー端末からもデジタル情報を収集、取得、送信しないため、子どもの個人情報を収集しないよう設計されています。",
      privacyContactTitle: "6. ポリシー連絡先とサポートハブ",
      privacyContactBody:
        '技術的な問い合わせ、機能提案、プライバシーに関する質問、プラットフォームフィードバックについては、上記の公開フィードバックセクションを使うか、GitHub キューを直接開いてください: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml</a>',
      footer: "NoBS Fasting Hub • ローカルファースト開発アーキテクチャ",
    },
    flappy: {
      metaTitle: "NoBS Flappy | ローカルファーストのオフラインアーケード",
      backLink: "← NoBS Apps に戻る",
      supportTitle: "独立開発を支援",
      supportBody:
        "NoBS Flappy は、広告、テレメトリ、強制アカウント、有料機能ゲート、クラウドランキングなしで作られています。開発を支援したい場合は、NoBS Apps のサポートセクションにある寄付オプションを利用してください。",
      supportLink: "NoBS Apps のサポートオプションを開く →",
      gameplayTitle: "オフラインアーケードプレイ",
      gameplayIntro: "NoBS Flappy は、ゲームループをシンプルで読みやすくローカルに保ちます。",
      controlTime: "タップ / クリック",
      controlTitle: "上へ羽ばたく",
      controlBody:
        "プレイ画面のどこかをタップして上へ羽ばたきます。世界は自動でスクロールするため、鳥を障害物から避け続けることが目標です。",
      distanceTime: "距離",
      distanceTitle: "アカウントではなく距離",
      distanceBody:
        "このゲームはポイント、ソーシャルスコア、オンラインランキングを使いません。プレイ中は右下の控えめな HUD に「移動距離:」が表示され、完了したプレイは設定に応じてキロメートルまたはマイルで距離を表示します。",
      offlineTime: "オフライン",
      offlineTitle: "ローカルプレイ",
      offlineBody:
        "プレイ履歴と最高距離は端末内に残ります。主要なゲームはネットワーク接続、ログイン、サーバーサービスなしで動作します。",
      hudTime: "HUD",
      hudTitle: "すばやい操作",
      hudBody:
        "Start はすぐにプレイ画面へ移ります。プレイ中は小さな Light/Dark 切り替えが床ラインの下に留まり、テーマ変更が羽ばたき入力として扱われません。",
      hazardsTitle: "障害物とゲームオーバー",
      hazardsIntro: "プレイは、鳥がローカルのゲーム障害物に衝突した場合にのみ終了します。",
      buildingsTitle: "街の建物",
      buildingsBody:
        "無限に続く街は、読みやすい建物シルエット、階段状とピラミッド状の屋根、大きな窓グリッド、ドア、ときどきアンテナを使います。建物本体、アンテナ、床は衝突する障害物です。",
      planesTitle: "飛行機",
      planesBody:
        "飛行機は 0.5 km 後に解放され、空の高いレーンを右から左へ横切り、3 段階の速度を使います。飛行機との衝突では専用メッセージでプレイが終了します。",
      purpleAngryBirdTitle: "紫の Angry Bird",
      purpleAngryBirdBody:
        "紫の Angry Bird は 1 km で解放されます。反転した折り紙鳥で、制限された羽ばたき軌道と軽いプレイヤー高度バイアスを持ち、直接追尾せずにこちらを意識しているように動きます。",
      redAngryBirdTitle: "赤い Angry Bird",
      redAngryBirdBody:
        "赤い Angry Bird は 2 km で解放されます。紫より速く攻撃的ですが、正しく対処すれば通れる回避ルートを残す必要があります。",
      thunderTitle: "雷落下",
      thunderBody:
        "高く飛びすぎる状態を繰り返すと、雷落下状態が発生します。入力は効かなくなり、鳥は上下逆さに落下し、衝突するまで終了オーバーレイは待機します。",
      difficultyTitle: "難易度の解放",
      difficultyBody:
        "アンテナは 0.25 km 後、飛行機は 0.5 km 後、紫の Angry Bird は 1 km 後、赤い Angry Bird は 2 km 後に出現し得ます。世界の速度は 1.5 km、2.5 km、4 km で上がります。",
      gameOverCopyTitle: "ゲームオーバー文言",
      gameOverCopyBody:
        "プレイは何が起きたかを説明します。床、建物、アンテナ、飛行機、Angry Bird、雷にはそれぞれ専用メッセージがあります。Angry Bird との衝突は「You've been hit by an Angry Bird!」と表示します。",
      historyTitle: "ローカル履歴",
      historyIntro:
        "履歴は意図的にシンプルで、バッジ、スター、オンラインプロフィール、エンゲージメントループはありません。",
      runsTitle: "プレイカード",
      runsBody:
        "完了したプレイは新しいものから順にローカル保存されます。各カードにはローカル日時と到達距離が表示されます。",
      bestTitle: "最高距離",
      bestBody:
        "履歴がある場合、最高距離はリスト上部にシンプルなローカル要約として表示されます。履歴がなければ空のままです。",
      feedbackTitle: "フィードバックと機能リクエスト",
      feedbackBody:
        "NoBS Flappy のバグ報告、機能提案、プラットフォームフィードバックは、公開フィードバックキューに送ってください。",
      feedbackLink: "GitHub で NoBS Flappy のフィードバックを開く →",
      privacyTitle: "NoBS Flappy プライバシーポリシー",
      privacyUpdated: "最終更新日: 2026年6月10日",
      privacyIntro:
        "このプライバシーポリシーは、対応モバイルプラットフォーム向けに <strong>NoBS Apps</strong> が開発および公開する <strong>NoBS Flappy</strong> モバイルアプリケーションのデータプライバシー慣行を規定します。",
      privacyDataTitle: "1. データ収集および送信に関する声明",
      privacyDataBody1:
        "<strong>NoBS Flappy は、厳格なゼロテレメトリ、ローカルファーストのアーキテクチャで動作します。</strong> このアプリケーションは、個人情報、機微情報、ゲームプレイ情報、または端末を識別できる情報を、外部クラウドサーバー、データベース、第三者へ収集、取得、監視、傍受、送信しません。",
      privacyDataBody2:
        "第三者の分析 SDK、クラッシュレポート追跡モジュール、広告 SDK、オンラインランキングサービス、ID 管理ツールは使用しません。標準プレイ中、このアプリケーションはネットワークリクエストを開始しません。",
      privacyStorageTitle: "2. ローカルストレージのサンドボックス",
      privacyStorageBody:
        "プレイ履歴、最高距離、言語、テーマ、距離単位設定、処理済みサポート購入トークンは、プラットフォーム標準の永続化技術を使用して、端末上のアプリ専用ローカルストレージ領域内にのみ保存されます。データは常にあなた自身の管理と制御下にあります。",
      privacyPermissionsTitle: "3. 端末権限の使用",
      privacyPermissionsBody:
        "<strong>特別なゲームプレイ権限なし:</strong> 標準プレイに位置情報、連絡先、カメラ、マイク、広告 ID、バックグラウンドサービス、プッシュ通知、クラウドサービスは必要ありません。",
      privacyPurchasesTitle: "4. 任意のストア支援購入",
      privacyPurchasesBody:
        "一部のプラットフォーム版では、象徴的な支援として任意のネイティブストア購入を提供する場合があります。これらの購入で機能やコンテンツは解除されず、スター、ポイント、バッジ、その他の報酬も付与されません。完了した購入がプラットフォームストアから報告された場合、アプリは重複処理を防ぐために処理済み購入トークンを端末内に記録することがあります。",
      privacyChildrenTitle: "5. 子どものプライバシー",
      privacyChildrenBody:
        "NoBS Flappy はいかなるユーザー端末からもデジタル情報を収集、取得、送信しないため、子どもの個人情報を収集しないよう設計されています。",
      privacyContactTitle: "6. ポリシー連絡先とサポートハブ",
      privacyContactBody:
        '技術的な問い合わせ、機能提案、プライバシーに関する質問、プラットフォームフィードバックについては、上記の公開フィードバックセクションを使うか、GitHub キューを直接開いてください: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml</a>',
      footer: "NoBS Flappy Hub • ローカルファーストのオフラインアーケード",
    },
    timers: {
      metaTitle: "NoBS Timers | ローカルファースト時計ユーティリティ",
      backLink: "← NoBS Apps に戻る",
      supportTitle: "独立開発を支援",
      supportBody:
        "NoBS Timers は広告、テレメトリ、強制アカウント、有料機能ゲート、クラウド同期なしで作られています。開発を支援したい場合は、NoBS Apps のサポート欄にある寄付オプションをご利用ください。",
      supportLink: "NoBS Apps のサポートオプションを開く →",
      toolsTitle: "シンプルな時計ツール",
      toolsIntro:
        "NoBS Timers は日常の時間ツールをシンプル、ローカル、素早く使える形で、縦向き専用のモバイルレイアウトにまとめます。",
      alarmTime: "時刻",
      alarmTitle: "アラーム",
      alarmBody:
        "時刻を選び、毎日繰り返すかを決めて保存します。アプリは最後に保存したアラーム時刻を覚え、初回は現在から6時間後を既定値にします。",
      stopwatchTime: "00:00:00",
      stopwatchTitle: "ストップウォッチ",
      stopwatchBody:
        "ストップウォッチのボタンは1つだけです。開始、停止、その後は再開。ラップ、スプリット、エクスポート、余計な操作はありません。",
      countdownTime: "HH:MM:SS",
      countdownTitle: "カウントダウン",
      countdownBody:
        "時間、分、秒を入力して開始します。最後に使った時間は記憶され、実行中の操作はキャンセルになり、ゼロになると標準サウンドが鳴ります。",
      pomodoroTime: "25 + 5",
      pomodoroTitle: "ポモドーロ",
      pomodoroBody:
        "ポモドーロは25分の作業と5分の休憩を固定で使います。各切り替えで標準サウンドが鳴り、キャンセルするまで次の期間が自動で始まります。",
      localBehaviorTitle: "ローカルアプリ動作",
      localBehaviorIntro:
        "中心となる時間管理の流れは、アカウント、分析、クラウド同期、必須ネットワーク接続なしで端末上で動作します。",
      navigationTitle: "下部コントロール",
      navigationBody:
        "最初の下段にはアラーム、ストップウォッチ、カウントダウン、ポモドーロの大きめのボタンを配置します。小さな2段目で設定とサポートにアクセスできます。",
      settingsTitle: "設定",
      settingsBody: "設定は他の NoBS アプリと同じです。言語とテーマはすぐに適用され、端末内に保持されます。",
      notificationsTitle: "ローカル通知",
      notificationsBody:
        "アラーム、カウントダウン、ポモドーロの切り替えは、プラットフォームが許可する場合にローカルシステム通知を使います。権限は時間機能が必要とするときだけ要求されます。",
      soundTitle: "1つのサウンド",
      soundBody:
        "NoBS Timers はアラーム、カウントダウン、作業終了、休憩終了に同じ標準通知音を使います。サウンド選択はありません。",
      feedbackTitle: "フィードバックと機能リクエスト",
      feedbackBody:
        "NoBS Timers のバグ報告、機能提案、プラットフォームへのフィードバックは、公開 NoBS Apps キューに送ってください:",
      feedbackLink: "GitHub で NoBS Timers のフィードバックを開く →",
      privacyTitle: "NoBS Timers プライバシーポリシー",
      privacyUpdated: "最終更新日: 2026年6月11日",
      privacyIntro:
        "このプライバシーポリシーは、対応モバイルプラットフォーム向けに <strong>NoBS Apps</strong> が開発・公開する <strong>NoBS Timers</strong> モバイルアプリのデータプライバシー慣行に適用されます。",
      privacyDataTitle: "1. データ収集と送信に関する声明",
      privacyDataBody1:
        "<strong>NoBS Timers は厳格なゼロテレメトリ、ローカルファーストのアーキテクチャで動作します。</strong> アプリは個人情報、機密情報、時間管理情報、端末識別情報を外部クラウドサーバー、データベース、第三者へ収集、取得、監視、傍受、送信しません。",
      privacyDataBody2:
        "第三者分析SDK、広告SDK、クラッシュレポート追跡モジュール、アカウントシステム、クラウド同期、ID管理ツールは使用しません。アラーム、ストップウォッチ、カウントダウン、ポモドーロ、設定、サポート表示、ローカル通知のスケジュールにネットワークリクエストは不要です。",
      privacyStorageTitle: "2. ローカル保存領域",
      privacyStorageBody:
        "保存されたアラーム時刻、毎日アラームの設定、最後に使ったカウントダウン時間、必要な場合の実行中タイマー状態、言語、テーマ、処理済みサポート購入トークンは、プラットフォーム標準の永続化技術を使い、端末上のアプリ専用ローカル保存領域にのみ保存されます。データは常にあなた自身の管理下にあります。",
      privacyPermissionsTitle: "3. 端末権限の使用",
      privacyPermissionsBody:
        "<strong>ローカルシステムアラーム / 通知:</strong> 対応しておりユーザーが有効にした場合、アプリはローカルシステムAPIをアラーム、カウントダウン完了、ポモドーロ切り替えの通知だけに使用します。タイマーを無効化またはキャンセルすると、対応する予定通知もキャンセルされます。これらの通知に追跡分析は含まれません。",
      privacyPurchasesTitle: "4. 任意のストア支援購入",
      privacyPurchasesBody:
        "一部のプラットフォーム版では、象徴的な支援として任意のネイティブストア購入を提供する場合があります。これらは機能やコンテンツを解除しません。完了した購入がストアから報告されると、重複処理を防ぐため、処理済み購入トークンをローカルに記録する場合があります。",
      privacyChildrenTitle: "5. 子どものプライバシー",
      privacyChildrenBody:
        "NoBS Timers はユーザー端末からデジタル情報を収集、取得、送信しないため、子どもの個人情報を収集しないよう設計されています。",
      privacyContactTitle: "6. ポリシー連絡先とサポートハブ",
      privacyContactBody:
        '技術的な問い合わせ、機能提案、プライバシーに関する質問、プラットフォームフィードバックは、上の公開フィードバック欄を使うか、GitHub キューを直接開いてください: <a href="https://github.com/daigof/nobs-apps/issues/new" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new</a>',
      footer: "NoBS Timers Hub • ローカルファースト時計ユーティリティ",
    },
  },
  hi: {
    common: {
      tagline: "कोई खाते नहीं। कोई विज्ञापन नहीं। कोई ट्रैकिंग नहीं। No bullshit.",
      languageLabel: "भाषा",
      themeSelectorLabel: "थीम चयनकर्ता",
      systemThemeAria: "सिस्टम थीम इस्तेमाल करें",
      systemThemeTitle: "सिस्टम थीम",
      lightThemeAria: "लाइट थीम इस्तेमाल करें",
      lightThemeTitle: "लाइट थीम",
      darkThemeAria: "डार्क थीम इस्तेमाल करें",
      darkThemeTitle: "डार्क थीम",
      copy: "कॉपी",
      copied: "कॉपी हुआ",
      failed: "विफल",
      privacyBackLink: "← ऐप पेज पर लौटें",
      privacyLinkTitle: "Privacy Policy",
      privacyLinkBody: "स्थानीय स्टोरेज, डिवाइस अनुमतियों और वैकल्पिक समर्थन खरीदारी के प्रबंधन सहित अलग privacy policy पढ़ें.",
      privacyLink: "Privacy policy खोलें →",
    },
    home: {
      metaTitle: "NoBS Apps | शुद्ध उपयोगिता घोषणापत्र",
      promiseTitle: "NoBS वादा",
      promiseBody1:
        "आधुनिक ऐप्स भारी और फूले हुए हो गए हैं। बुनियादी टूल ट्रैकिंग कुकीज़, नोटिफिकेशन स्पैम और मजबूर क्लाउड खातों से भरे डेटा-संग्रह उत्पाद बन गए हैं।",
      promiseBody2:
        "<strong>हम ऐसे नेटिव यूटिलिटी टूल बनाते हैं जो ऑफलाइन काम करते हैं, डेटा आपके डिवाइस पर रखते हैं और आपके रास्ते में नहीं आते।</strong>",
      currentUtilitiesTitle: "मौजूदा यूटिलिटी",
      fastingDescription:
        "मोबाइल प्लेटफॉर्म के लिए इंटरमिटेंट फास्टिंग ट्रैकर। यह फास्टिंग इतिहास आपके डिवाइस पर रखता है, क्लाउड सेवाओं के बिना काम करता है और विज्ञापनों या एनालिटिक्स के बिना सीधा प्रगति ट्रैकिंग देता है।",
      flappyDescription:
        "मोबाइल प्लेटफॉर्म के लिए हल्का offline arcade game। यह run history आपके device पर रखता है, cloud services के बिना काम करता है और ads, accounts या analytics के बिना simple distance tracking देता है।",
      viewDocumentation: "डॉक्यूमेंटेशन देखें →",
      supportTitle: "स्वतंत्र विकास का समर्थन करें",
      supportBody:
        "हम ट्रैकिंग विज्ञापन नहीं दिखाते और उपयोगी सुविधाओं को paywall के पीछे बंद नहीं करते। अगर आप हमारे anti-bloat software manifesto को महत्व देते हैं, तो मिशन को सीधे समर्थन दें:",
      paypalTitle: "PayPal / कार्ड",
      paypalInstruction: "PayPal या सामान्य क्रेडिट कार्ड checkout के जरिए utility apps के ongoing development को समर्थन दें:",
      paypalAction: "PayPal / कार्ड से समर्थन दें →",
      binanceInstruction:
        "मोबाइल ऐप उपयोगकर्ताओं के लिए सबसे कम झंझट वाला विकल्प। अपने Binance App से scan करें या हमारे स्थायी Pay ID पर सीधे भेजें:",
      copyBinancePay: "Binance Pay ID कॉपी करें",
      binanceAlt: "Binance Pay QR Code",
      nativeCryptoTitle: "नेटिव क्रिप्टो नेटवर्क",
      nativeCryptoInstruction:
        "बाहरी software या hardware wallets से भेजने वाले समर्थकों के लिए। धन हानि से बचने के लिए asset network को बिल्कुल match करें।",
      tronTag: "TRX या USDT (Tron Network TRC20)",
      tronInstruction: "इस Tron address का उपयोग केवल native TRX या TRC20 network पर भेजे गए Tether USDT के लिए करें।",
      copyTron: "Tron address कॉपी करें",
      showTronQr: "Tron QR Code दिखाएं",
      tronAlt: "Tron Network TRX और USDT TRC20 QR Code",
      bnbTag: "BNB (BNB Smart Chain BEP20)",
      copyBnb: "BNB Smart Chain address कॉपी करें",
      showBnbQr: "BNB QR Code दिखाएं",
      bnbAlt: "BNB Smart Chain QR Code",
      btcTag: "BTC (Bitcoin Network)",
      copyBitcoin: "Bitcoin address कॉपी करें",
      showBtcQr: "BTC QR Code दिखाएं",
      bitcoinAlt: "Bitcoin QR Code",
      solTag: "SOL (Solana Network)",
      copySolana: "Solana address कॉपी करें",
      showSolQr: "SOL QR Code दिखाएं",
      solanaAlt: "Solana QR Code",
      ltcTag: "LTC (Litecoin Network)",
      copyLitecoin: "Litecoin address कॉपी करें",
      showLtcQr: "LTC QR Code दिखाएं",
      litecoinAlt: "Litecoin QR Code",
      footer: "© NoBS Apps. बिना distraction की native utility.",
      timersDescription:
        "Mobile platforms के लिए simple clock utility। यह alarms, stopwatch, countdowns और pomodoro cycles आपके device पर रखता है, ads, accounts, analytics या cloud sync के बिना।",
    },
    fasting: {
      metaTitle: "NoBS Fasting | Local-First Metabolic Tracker",
      backLink: "← NoBS Apps पर वापस जाएं",
      supportTitle: "स्वतंत्र विकास का समर्थन करें",
      supportBody:
        "NoBS Fasting विज्ञापनों, telemetry, forced accounts या paid feature gates के बिना बनाया गया है। अगर आप काम को support करना चाहते हैं, तो NoBS Apps support section में donation options इस्तेमाल करें।",
      supportLink: "NoBS Apps support options खोलें →",
      phasesTitle: "Metabolic Tracking Phases",
      phasesIntro: "Local progress ring elapsed time के आधार पर fasting milestones को dynamically track करता है:",
      phase04Time: "04 घंटे",
      phase04Title: "शुरुआती fasting",
      phase04Body: "आपकी digestion पूरी होती है, blood sugar stable होता है और insulin levels कम होने लगते हैं।",
      phase12Time: "12 घंटे",
      phase12Title: "Fat Burning",
      phase12Body:
        "आपका शरीर stored sugar reserves खत्म करता है और energy के लिए stored fat burn करने के metabolic switch पर जाता है।",
      phase18Time: "18 घंटे",
      phase18Title: "Ketosis",
      phase18Body:
        "Stored energy use बदलने पर आपका liver ketone production बढ़ा सकता है। Effects vary करते हैं, इसलिए app इसे medical guidance नहीं बल्कि educational milestone के रूप में दिखाता है।",
      phase24Time: "24 घंटे",
      phase24Title: "Cellular Cleanup",
      phase24Body:
        "Longer fasts में autophagy-related cleanup ज्यादा active हो सकती है। NoBS Fasting wording को cautious और general fasting education पर focused रखता है।",
      phase24PlusTime: "24+ घंटे (Extended Mode)",
      phase24PlusTitle: "Peak Autophagy",
      phase24PlusBody:
        "24 घंटे के बाद timer extended mode में जाता है ताकि longer milestones visible रहें, बिना guaranteed biological outcomes imply किए।",
      phase30Time: "30 घंटे",
      phase30Title: "Growth Hormone",
      phase30Body:
        "Longer fasts के दौरान growth hormone patterns बदल सकते हैं। App इस milestone को सिर्फ timing marker की तरह track करता है, किसी specific result का promise नहीं।",
      phase36Time: "36 घंटे",
      phase36Title: "Deep Cleanse",
      phase36Body:
        "यह deeper fasting marker extended sessions को readable रखता है, बिना यह claim किए कि fixed duration fixed cellular outcome देता है।",
      phase48Time: "48 घंटे",
      phase48Title: "Immune Reset",
      phase48Body:
        "यह NoBS Fasting में tracked final milestone है। शरीर deeper immune-cell recycling में जा सकता है, और app 48 घंटे के बाद benefits track नहीं करता।",
      gamificationTitle: "Gamification और streaks",
      gamificationIntro:
        "Gamification optional है। Enabled होने पर NoBS Fasting local-only stars, streaks और streak freezes का उपयोग करता है ताकि accounts, leaderboards, social sharing या engagement tracking के बिना consistency visible हो।",
      starsTitle: "Stars",
      starsBody:
        "Fast milestone durations तक पहुंचने पर stars cumulatively मिलते हैं। एक fast में अधिकतम 8 stars मिल सकते हैं: 4h, 12h, 18h, 24h, 30h और 36h पर 1 star each, और 48h पर 2 stars.",
      streaksTitle: "Streaks",
      streaksBody:
        "कोई दिन आपकी streak में तब count होता है जब वह कम से कम 12 घंटे के completed fast, 12 घंटे तक पहुंच चुके active fast, या streak freeze से covered हो। Multi-day fasts उन सभी local dates को credit करते हैं जिन्हें वे cover करते हैं।",
      freezesTitle: "Streak Freezes",
      freezesBody:
        "एक streak freeze की कीमत 20 stars है और यह एक uncredited local day को protect कर सकता है। इसे active fast के दौरान या ऐसे दिन पर use नहीं किया जा सकता जिसे qualifying fast या दूसरे freeze से already credit मिला हो।",
      bonusesTitle: "Milestone Bonuses",
      bonusesBody:
        "7-day streak पर 3-star bonus मिलता है। 30-day streak पर 10-star bonus मिलता है। Bonuses हर unbroken streak milestone पर एक बार दिए जाते हैं, फिर streak threshold से नीचे जाने के बाद ही reset होते हैं।",
      localBehaviorTitle: "Local app behavior",
      localBehaviorIntro:
        "Core fasting workflow device पर accounts, analytics, cloud sync या required network connection के बिना काम करता है।",
      historyTitle: "History",
      historyBody:
        "Completed credited fasts local रूप से newest first saved होते हैं। Longer या cross-day sessions start और end date/time दिखाते हैं, और duplicate-credit fasts extra history या stars जोड़े बिना discard होते हैं।",
      settingsTitle: "Settings",
      settingsBody:
        "Language, theme, milestone marks, gamification और notifications device settings हैं। ये तुरंत apply होते हैं और notifications या gamification disabled होने पर भी app useful रहती है।",
      notificationsTitle: "Notifications",
      notificationsBody:
        "Optional local notifications active fast के दौरान 4h, 12h, 18h, 24h, 30h, 36h और 48h पर alert कर सकते हैं। Daily start reminders recent start times के local rolling average का उपयोग करते हैं।",
      feedbackTitle: "Feedback और feature requests",
      feedbackBody: "NoBS Fasting के bug reports, feature proposals और platform feedback public feedback queue में जाते हैं:",
      feedbackLink: "GitHub पर NoBS Fasting feedback खोलें →",
      privacyTitle: "NoBS Fasting Privacy Policy",
      privacyUpdated: "Last Updated: June 10, 2026",
      privacyIntro:
        "यह Privacy Policy supported mobile platforms के लिए <strong>NoBS Apps</strong> द्वारा developed और published <strong>NoBS Fasting</strong> mobile application की data privacy practices को govern करती है।",
      privacyDataTitle: "1. Data Collection और Transmission Statement",
      privacyDataBody1:
        "<strong>NoBS Fasting strict Zero-Telemetry, local-first architecture पर operate करता है।</strong> Application किसी भी personal, sensitive या device-identifiable information को external cloud servers, databases या third parties तक collect, capture, monitor, intercept या transmit नहीं करता।",
      privacyDataBody2:
        "हम third-party analytics SDKs, advertising SDKs, crash reporting tracking modules, account systems, cloud sync या identity management tools का उपयोग नहीं करते। Active timer, history, settings, reminders, gamification या phase explanations के लिए कोई network request जरूरी नहीं है।",
      privacyStorageTitle: "2. Local Storage Sandbox",
      privacyStorageBody:
        "Active fast state, completed sessions, streak freezes, star balance, streak bonus markers, language, theme, notification settings, milestone display settings, gamification settings और processed support-purchase tokens आपके device पर app के private local storage area में ही stored रहते हैं, platform की standard persistence technology का उपयोग करके। आपका data हर समय आपकी personal custody और control में रहता है।",
      privacyPermissionsTitle: "3. Device Permissions Usage",
      privacyPermissionsBody:
        "<strong>Local System Alarms / Notifications:</strong> जहां supported और user द्वारा enabled हो, app local system notification APIs का उपयोग सिर्फ active fast के दौरान 4h, 12h, 18h, 24h, 30h, 36h और 48h milestone alerts, और आपके recent local start times पर based daily start reminders के लिए करता है। Notifications off करने पर scheduled milestone alerts और smart reminders cancel हो जाते हैं। इन notifications में कोई tracking analytics embedded नहीं है।",
      privacyPurchasesTitle: "4. Optional Store Support Purchases",
      privacyPurchasesBody:
        "कुछ platform builds symbolic support के रूप में optional native store purchases offer कर सकते हैं। ये purchases features या content unlock नहीं करते। जब platform store completed purchase report करता है, app duplicate thank-you star grants रोकने के लिए processed purchase token locally record कर सकता है।",
      privacyChildrenTitle: "5. Children's Privacy",
      privacyChildrenBody:
        "क्योंकि NoBS Fasting किसी भी user device से कोई digital information collect, capture या transmit नहीं करता, इसे children's personal information collect करने से बचने के लिए design किया गया है।",
      privacyContactTitle: "6. Policy Contact और Support Hub",
      privacyContactBody:
        'Technical inquiries, feature proposals, privacy questions या platform feedback के लिए ऊपर के public feedback section का उपयोग करें या GitHub queue directly खोलें: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml</a>',
      footer: "NoBS Fasting Hub • Local-First Development Architecture",
    },
    flappy: {
      metaTitle: "NoBS Flappy | Local-First Offline Arcade",
      backLink: "← NoBS Apps पर वापस जाएं",
      supportTitle: "स्वतंत्र विकास का समर्थन करें",
      supportBody:
        "NoBS Flappy ads, telemetry, forced accounts, paid feature gates या cloud leaderboards के बिना बनाया गया है। अगर आप काम को support करना चाहते हैं, तो NoBS Apps support section में donation options इस्तेमाल करें।",
      supportLink: "NoBS Apps support options खोलें →",
      gameplayTitle: "Offline Arcade Play",
      gameplayIntro: "NoBS Flappy game loop को simple, readable और local रखता है:",
      controlTime: "Tap / Click",
      controlTitle: "ऊपर flap करें",
      controlBody:
        "ऊपर flap करने के लिए play surface पर कहीं भी tap करें। World अपने आप scroll करता है, इसलिए goal bird को hazards से clear रखना है।",
      distanceTime: "Distance",
      distanceTitle: "Distance, accounts नहीं",
      distanceBody:
        'Game points, social scores या online rankings का उपयोग नहीं करता। Play के दौरान bottom-right में quiet HUD "Distance travelled:" दिखाता है और completed runs आपकी setting के आधार पर kilometers या miles में distance report करते हैं।',
      offlineTime: "Offline",
      offlineTitle: "Local runs",
      offlineBody:
        "Run history और best distance आपके device पर रहते हैं। Core game network access, login या server services के बिना काम करता है।",
      hudTime: "HUD",
      hudTitle: "Fast controls",
      hudBody:
        "Start सीधे playable surface में जाता है। Run के दौरान छोटा Light/Dark toggle floor line के नीचे रहता है ताकि theme change flap input न बने।",
      hazardsTitle: "Hazards और game over",
      hazardsIntro: "Runs केवल तब end होते हैं जब bird किसी local gameplay hazard से collide करता है:",
      buildingsTitle: "City buildings",
      buildingsBody:
        "Endless city readable building silhouettes, stepped और pyramid rooflines, बड़े window grids, doors और occasional antennas का उपयोग करती है। Building bodies, antennas और floor solid hazards हैं।",
      planesTitle: "Airplanes",
      planesBody:
        "Airplanes 0.5 km के बाद unlock होते हैं, high sky lane में right से left cross करते हैं और three speed tiers use करते हैं। Plane collisions dedicated copy के साथ run end करते हैं।",
      purpleAngryBirdTitle: "Purple Angry Bird",
      purpleAngryBirdBody:
        "Purple Angry Bird 1 km पर unlock होता है। यह mirrored origami bird है, bounded flap path और mild player-height bias के साथ, इसलिए aware लगता है लेकिन direct homing enemy नहीं बनता।",
      redAngryBirdTitle: "Red Angry Bird",
      redAngryBirdBody:
        "Red Angry Bird 2 km पर unlock होता है। यह purple one से faster और ज्यादा aggressive है, लेकिन फिर भी playable bypass route छोड़ना चाहिए।",
      thunderTitle: "Thunder fall",
      thunderBody:
        "बार-बार बहुत high fly करने से thunder fall state trigger हो सकती है। Input matter नहीं करता, bird upside down गिरता है और overlay run end करने से पहले impact का wait करता है।",
      difficultyTitle: "Difficulty unlocks",
      difficultyBody:
        "Antennas 0.25 km के बाद, planes 0.5 km के बाद, purple Angry Birds 1 km के बाद और red Angry Birds 2 km के बाद appear कर सकते हैं। World speed 1.5 km, 2.5 km और 4 km पर ramp होती है।",
      gameOverCopyTitle: "Game-over copy",
      gameOverCopyBody:
        'Run बताता है कि क्या हुआ: floor, building, antenna, plane, Angry Bird और thunder के dedicated messages हैं। Angry Bird collisions कहते हैं: "You\'ve been hit by an Angry Bird!"',
      historyTitle: "Local history",
      historyIntro: "History design से plain है, badges, stars, online profiles या engagement loops के बिना।",
      runsTitle: "Run cards",
      runsBody:
        "Completed runs locally stored होते हैं, newest run first। हर card local date/time और reached distance दिखाता है।",
      bestTitle: "Best distance",
      bestBody:
        "History होने पर best distance list के ऊपर simple local summary के रूप में दिखाई देता है। Empty history empty रहती है।",
      feedbackTitle: "Feedback और feature requests",
      feedbackBody: "NoBS Flappy के bug reports, feature proposals और platform feedback public feedback queue में जाते हैं:",
      feedbackLink: "GitHub पर NoBS Flappy feedback खोलें →",
      privacyTitle: "NoBS Flappy Privacy Policy",
      privacyUpdated: "Last Updated: June 10, 2026",
      privacyIntro:
        "यह Privacy Policy supported mobile platforms के लिए <strong>NoBS Apps</strong> द्वारा developed और published <strong>NoBS Flappy</strong> mobile application की data privacy practices को govern करती है।",
      privacyDataTitle: "1. Data Collection और Transmission Statement",
      privacyDataBody1:
        "<strong>NoBS Flappy strict Zero-Telemetry, local-first architecture पर operate करता है।</strong> Application किसी भी personal, sensitive, gameplay या device-identifiable information को external cloud servers, databases या third parties तक collect, capture, monitor, intercept या transmit नहीं करता।",
      privacyDataBody2:
        "हम third-party analytics SDKs, crash reporting tracking modules, advertising SDKs, online leaderboard services या identity management tools का उपयोग नहीं करते। Standard gameplay के दौरान यह application कोई network requests initialize नहीं करता।",
      privacyStorageTitle: "2. Local Storage Sandbox",
      privacyStorageBody:
        "Run history, best distance, language, theme, distance-unit setting और processed support-purchase tokens आपके device पर app के private local storage area में ही stored रहते हैं, platform की standard persistence technology का उपयोग करके। आपका data हर समय आपकी personal custody और control में रहता है।",
      privacyPermissionsTitle: "3. Device Permissions Usage",
      privacyPermissionsBody:
        "<strong>कोई special gameplay permissions नहीं:</strong> Standard gameplay के लिए app को location, contacts, camera, microphone, advertising identifiers, background services, push notifications या cloud services की जरूरत नहीं है।",
      privacyPurchasesTitle: "4. Optional Store Support Purchases",
      privacyPurchasesBody:
        "कुछ platform builds symbolic support के रूप में optional native store purchases offer कर सकते हैं। ये purchases features या content unlock नहीं करते और stars, points, badges या कोई reward grant नहीं करते। जब platform store completed purchase report करता है, app duplicate processing रोकने के लिए processed purchase token locally record कर सकता है।",
      privacyChildrenTitle: "5. Children's Privacy",
      privacyChildrenBody:
        "क्योंकि NoBS Flappy किसी भी user device से कोई digital information collect, capture या transmit नहीं करता, इसे children's personal information collect करने से बचने के लिए design किया गया है।",
      privacyContactTitle: "6. Policy Contact और Support Hub",
      privacyContactBody:
        'Technical inquiries, feature proposals, privacy questions या platform feedback के लिए ऊपर के public feedback section का उपयोग करें या GitHub queue directly खोलें: <a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml</a>',
      footer: "NoBS Flappy Hub • Local-First Offline Arcade",
    },
    timers: {
      metaTitle: "NoBS Timers | Local-First Clock Utilities",
      backLink: "← NoBS Apps पर वापस जाएं",
      supportTitle: "स्वतंत्र विकास का समर्थन करें",
      supportBody:
        "NoBS Timers ads, telemetry, forced accounts, paid feature gates या cloud sync के बिना बनाया गया है। अगर आप काम को support करना चाहते हैं, तो NoBS Apps support section में donation options इस्तेमाल करें।",
      supportLink: "NoBS Apps support options खोलें →",
      toolsTitle: "Simple clock tools",
      toolsIntro:
        "NoBS Timers everyday timing tools को plain, local और portrait-only mobile layout से जल्दी access करने लायक रखता है।",
      alarmTime: "दिन का समय",
      alarmTitle: "Alarm",
      alarmBody:
        "Time चुनें, decide करें कि यह हर दिन repeat होगा या नहीं, और save करें। App last saved alarm time याद रखता है और first use पर छह घंटे future default करता है।",
      stopwatchTime: "00:00:00",
      stopwatchTitle: "Stopwatch",
      stopwatchBody:
        "Stopwatch में एक button है: Start, Stop, फिर Resume। Laps, split times, exports या extra controls नहीं हैं।",
      countdownTime: "HH:MM:SS",
      countdownTitle: "Countdown",
      countdownBody:
        "Hours, minutes और seconds enter करें, फिर start करें। Last used duration याद रहती है, running action Cancel बन जाता है, और zero पर standard app sound चलता है।",
      pomodoroTime: "25 + 5",
      pomodoroTitle: "Pomodoro",
      pomodoroBody:
        "Pomodoro fixed 25-minute work periods और 5-minute rests use करता है। हर transition पर standard sound चलता है और अगला period automatically start होता है जब तक आप cancel न करें।",
      localBehaviorTitle: "Local app behavior",
      localBehaviorIntro:
        "Core timing workflow device पर accounts, analytics, cloud sync या required network connection के बिना काम करता है।",
      navigationTitle: "Bottom controls",
      navigationBody:
        "पहली bottom row Alarm, Stopwatch, Countdown और Pomodoro के लिए बड़े buttons use करती है। छोटी second row Settings और Support को available रखती है, timing tools को crowd किए बिना।",
      settingsTitle: "Settings",
      settingsBody: "Settings दूसरी NoBS apps जैसी रहती हैं: language और theme तुरंत apply होते हैं और device पर local रहते हैं।",
      notificationsTitle: "Local alerts",
      notificationsBody:
        "Alarms, countdowns और pomodoro transitions platform allow करने पर local system alerts use करते हैं। Permission केवल तब मांगी जाती है जब timing feature को इसकी जरूरत हो।",
      soundTitle: "One sound",
      soundBody:
        "NoBS Timers alarm, countdown, work completion और rest completion के लिए एक standardized alert sound use करता है। Sound picker नहीं है।",
      feedbackTitle: "Feedback और feature requests",
      feedbackBody:
        "NoBS Timers के bug reports, feature proposals और platform feedback public NoBS Apps feedback queue में जाते हैं:",
      feedbackLink: "GitHub पर NoBS Timers feedback खोलें →",
      privacyTitle: "NoBS Timers Privacy Policy",
      privacyUpdated: "Last Updated: June 11, 2026",
      privacyIntro:
        "यह Privacy Policy supported mobile platforms के लिए <strong>NoBS Apps</strong> द्वारा developed और published <strong>NoBS Timers</strong> mobile application की data privacy practices को govern करती है।",
      privacyDataTitle: "1. Data Collection और Transmission Statement",
      privacyDataBody1:
        "<strong>NoBS Timers strict Zero-Telemetry, local-first architecture पर operate करता है।</strong> Application किसी भी personal, sensitive, timing या device-identifiable information को external cloud servers, databases या third parties तक collect, capture, monitor, intercept या transmit नहीं करता।",
      privacyDataBody2:
        "हम third-party analytics SDKs, advertising SDKs, crash reporting tracking modules, account systems, cloud sync या identity management tools का उपयोग नहीं करते। Alarm, stopwatch, countdown, pomodoro, settings, support page display या local alert scheduling के लिए कोई network request जरूरी नहीं है।",
      privacyStorageTitle: "2. Local Storage Sandbox",
      privacyStorageBody:
        "Saved alarm time, everyday alarm preference, last countdown duration, active timer state जहां needed हो, language, theme और processed support-purchase tokens आपके device पर app के private local storage area में ही stored रहते हैं, platform की standard persistence technology का उपयोग करके। आपका data हर समय आपकी personal custody और control में रहता है।",
      privacyPermissionsTitle: "3. Device Permissions Usage",
      privacyPermissionsBody:
        "<strong>Local system alarms / notifications:</strong> जहां supported और user द्वारा enabled हो, app local system APIs का उपयोग सिर्फ alarms, countdown completions और pomodoro transitions के लिए करता है। Timer off या cancel करने पर related scheduled alerts cancel होते हैं। इन alerts में कोई tracking analytics embedded नहीं है।",
      privacyPurchasesTitle: "4. Optional Store Support Purchases",
      privacyPurchasesBody:
        "कुछ platform builds symbolic support के रूप में optional native store purchases offer कर सकते हैं। ये purchases features या content unlock नहीं करते। जब platform store completed purchase report करता है, app duplicate processing रोकने के लिए processed purchase token locally record कर सकता है।",
      privacyChildrenTitle: "5. Children's Privacy",
      privacyChildrenBody:
        "क्योंकि NoBS Timers किसी भी user device से कोई digital information collect, capture या transmit नहीं करता, इसे children's personal information collect करने से बचने के लिए design किया गया है।",
      privacyContactTitle: "6. Policy Contact और Support Hub",
      privacyContactBody:
        'Technical inquiries, feature proposals, privacy questions या platform feedback के लिए ऊपर के public feedback section का उपयोग करें या GitHub queue directly खोलें: <a href="https://github.com/daigof/nobs-apps/issues/new" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new</a>',
      footer: "NoBS Timers Hub • Local-First Clock Utilities",
    },
  },
  "zh-Hans": {
    common: {
      tagline: "无账号。无广告。无追踪。No bullshit.",
      languageLabel: "语言",
      themeSelectorLabel: "主题选择器",
      systemThemeAria: "使用系统主题",
      systemThemeTitle: "系统主题",
      lightThemeAria: "使用浅色主题",
      lightThemeTitle: "浅色主题",
      darkThemeAria: "使用深色主题",
      darkThemeTitle: "深色主题",
      copy: "复制",
      copied: "已复制",
      failed: "失败",
      privacyBackLink: "← 返回应用页面",
      privacyLinkTitle: "隐私政策",
      privacyLinkBody: "阅读独立隐私政策，了解本地存储、设备权限以及可选支持购买的处理方式。",
      privacyLink: "打开隐私政策 →",
    },
    home: {
      metaTitle: "NoBS Apps | 纯实用宣言",
      promiseTitle: "NoBS 承诺",
      promiseBody1: "现代应用越来越臃肿。基础工具被变成了数据收割产品，塞满跟踪 Cookie、通知骚扰和强制云账号。",
      promiseBody2: "<strong>我们构建原生实用工具：离线可用，数据留在你的设备上，并且不打扰你。</strong>",
      currentUtilitiesTitle: "当前工具",
      fastingDescription:
        "面向移动平台的间歇性断食追踪器。它把断食历史保存在你的设备上，无需云服务，并提供简单的进度追踪，没有广告或分析。",
      flappyDescription:
        "面向移动平台的轻量离线街机游戏。它把游玩历史保存在你的设备上，无需云服务，并提供简单的距离追踪，没有广告、账号或分析。",
      viewDocumentation: "查看文档 →",
      supportTitle: "支持独立开发",
      supportBody:
        "我们不展示跟踪广告，也不把实用功能锁在付费墙后面。如果你认同我们的反臃肿软件宣言，可以直接支持这项使命：",
      paypalTitle: "PayPal / 银行卡",
      paypalInstruction: "通过 PayPal 或标准信用卡结账支持实用应用的持续开发：",
      paypalAction: "通过 PayPal / 银行卡支持 →",
      binanceInstruction: "这是移动应用用户最顺手的方式。使用 Binance App 扫描，或直接发送到我们的永久 Pay ID：",
      copyBinancePay: "复制 Binance Pay ID",
      binanceAlt: "Binance Pay 二维码",
      nativeCryptoTitle: "原生加密网络",
      nativeCryptoInstruction: "适用于从外部软件或硬件钱包发送的支持者。请严格匹配资产网络，以避免资金损失。",
      tronTag: "TRX 或 USDT（Tron 网络 TRC20）",
      tronInstruction: "这个 Tron 地址仅用于通过 TRC20 网络发送的原生 TRX 或 Tether USDT。",
      copyTron: "复制 Tron 地址",
      showTronQr: "显示 Tron 二维码",
      tronAlt: "Tron 网络 TRX 和 USDT TRC20 二维码",
      bnbTag: "BNB（BNB Smart Chain BEP20）",
      copyBnb: "复制 BNB Smart Chain 地址",
      showBnbQr: "显示 BNB 二维码",
      bnbAlt: "BNB Smart Chain 二维码",
      btcTag: "BTC（Bitcoin 网络）",
      copyBitcoin: "复制 Bitcoin 地址",
      showBtcQr: "显示 BTC 二维码",
      bitcoinAlt: "Bitcoin 二维码",
      solTag: "SOL（Solana 网络）",
      copySolana: "复制 Solana 地址",
      showSolQr: "显示 SOL 二维码",
      solanaAlt: "Solana 二维码",
      ltcTag: "LTC（Litecoin 网络）",
      copyLitecoin: "复制 Litecoin 地址",
      showLtcQr: "显示 LTC 二维码",
      litecoinAlt: "Litecoin 二维码",
      footer: "© NoBS Apps。没有干扰的原生实用工具。",
      timersDescription:
        "面向移动平台的简单时钟工具。它把闹钟、秒表、倒计时和番茄钟循环保存在你的设备上，没有广告、账号、分析或云同步。",
    },
    fasting: {
      metaTitle: "NoBS Fasting | 本地优先代谢追踪器",
      backLink: "← 返回 NoBS Apps",
      supportTitle: "支持独立开发",
      supportBody:
        "NoBS Fasting 没有广告、遥测、强制账号或付费功能门槛。如果你想支持这项工作，请使用 NoBS Apps 支持部分的捐赠选项。",
      supportLink: "打开 NoBS Apps 支持选项 →",
      phasesTitle: "代谢追踪阶段",
      phasesIntro: "本地进度环会根据已过去的时间动态追踪断食里程碑：",
      phase04Time: "04 小时",
      phase04Title: "早期断食",
      phase04Body: "你的消化过程接近完成，血糖趋于稳定，胰岛素水平开始下降。",
      phase12Time: "12 小时",
      phase12Title: "脂肪燃烧",
      phase12Body: "身体耗尽储存的糖分储备，并切换到燃烧储存脂肪作为能量的代谢模式。",
      phase18Time: "18 小时",
      phase18Title: "酮症",
      phase18Body:
        "随着储存能量的使用方式变化，肝脏可能增加酮体生成。效果因人而异，因此应用将其作为教育性里程碑展示，而不是医疗建议。",
      phase24Time: "24 小时",
      phase24Title: "细胞清理",
      phase24Body: "较长时间断食期间，与自噬相关的清理过程可能更活跃。NoBS Fasting 保持谨慎措辞，并聚焦一般断食教育。",
      phase24PlusTime: "24+ 小时（扩展模式）",
      phase24PlusTitle: "自噬高峰",
      phase24PlusBody: "24 小时后，计时器进入扩展模式，让更长时长的里程碑保持可见，但不暗示任何保证的生物学结果。",
      phase30Time: "30 小时",
      phase30Title: "生长激素",
      phase30Body: "较长时间断食期间，生长激素模式可能发生变化。应用只把该里程碑作为时间标记追踪，而不是承诺特定结果。",
      phase36Time: "36 小时",
      phase36Title: "深度清理",
      phase36Body: "这个更深层断食标记用于让扩展会话更易读，而不是声称固定时长会产生固定的细胞结果。",
      phase48Time: "48 小时",
      phase48Title: "免疫重置",
      phase48Body:
        "这是 NoBS Fasting 追踪的最后一个里程碑。身体可能进入更深入的免疫细胞回收阶段，应用不会追踪 48 小时之后的益处。",
      gamificationTitle: "游戏化与连续记录",
      gamificationIntro:
        "游戏化是可选的。启用后，NoBS Fasting 使用仅保存在本地的星星、连续记录和连续记录冻结，让坚持变得可见，同时不需要账号、排行榜、社交分享或互动追踪。",
      starsTitle: "星星",
      starsBody:
        "当一次断食达到里程碑时长时，会累计获得星星。一次断食最多可获得 8 颗星：4h、12h、18h、24h、30h 和 36h 各 1 颗，48h 额外 2 颗。",
      streaksTitle: "连续记录",
      streaksBody:
        "当某一天被至少 12 小时的已完成断食、已经达到 12 小时的进行中断食，或连续记录冻结覆盖时，它会计入你的连续记录。跨多日断食会为覆盖的每个本地日期计入记录。",
      freezesTitle: "连续记录冻结",
      freezesBody:
        "一次连续记录冻结消耗 20 颗星，可保护一个未计入的本地日期。它不能在断食进行中使用，也不能用于已经被合格断食或另一次冻结计入的日期。",
      bonusesTitle: "里程碑奖励",
      bonusesBody:
        "达到 7 天连续记录会获得 3 颗星奖励。达到 30 天连续记录会获得 10 颗星奖励。奖励会在每个未中断连续记录里程碑发放一次，只有当连续记录跌破该阈值后才会重置。",
      localBehaviorTitle: "本地应用行为",
      localBehaviorIntro: "核心断食流程在设备上运行，不需要账号、分析、云同步或必需的网络连接。",
      historyTitle: "历史",
      historyBody:
        "已完成且已计入的断食会按最新优先保存在本地。较长或跨日期的会话会显示开始和结束日期时间，重复计入的断食会被丢弃，不会添加额外历史或星星。",
      settingsTitle: "设置",
      settingsBody:
        "语言、主题、里程碑标记、游戏化和通知都是设备设置。它们会立即生效，即使关闭通知或游戏化，应用仍然可用。",
      notificationsTitle: "通知",
      notificationsBody:
        "可选本地通知可在断食进行中于 4h、12h、18h、24h、30h、36h 和 48h 提醒。每日开始提醒使用最近开始时间的本地滚动平均值。",
      feedbackTitle: "反馈与功能请求",
      feedbackBody: "NoBS Fasting 的错误报告、功能提案和平台反馈请提交到公开反馈队列：",
      feedbackLink: "在 GitHub 打开 NoBS Fasting 反馈 →",
      privacyTitle: "NoBS Fasting 隐私政策",
      privacyUpdated: "最后更新：2026 年 6 月 10 日",
      privacyIntro:
        "本隐私政策适用于由 <strong>NoBS Apps</strong> 为受支持移动平台开发和发布的 <strong>NoBS Fasting</strong> 移动应用的数据隐私实践。",
      privacyDataTitle: "1. 数据收集与传输声明",
      privacyDataBody1:
        "<strong>NoBS Fasting 采用严格的零遥测、本地优先架构。</strong> 本应用不会收集、捕获、监控、拦截或传输任何个人、敏感或可识别设备的信息到外部云服务器、数据库或第三方。",
      privacyDataBody2:
        "我们不使用任何第三方分析 SDK、广告 SDK、崩溃报告跟踪模块、账号系统、云同步或身份管理工具。活动计时器、历史、设置、提醒、游戏化或阶段说明都不需要网络请求。",
      privacyStorageTitle: "2. 本地存储沙盒",
      privacyStorageBody:
        "活动断食状态、已完成会话、连续记录冻结、星星余额、连续记录奖励标记、语言、主题、通知设置、里程碑显示设置、游戏化设置和已处理的支持购买令牌，都仅存储在你设备上应用的私有本地存储区域内，并使用该平台的标准持久化技术。你的数据始终由你个人保管和控制。",
      privacyPermissionsTitle: "3. 设备权限使用",
      privacyPermissionsBody:
        "<strong>本地系统闹钟 / 通知：</strong> 在平台支持且用户启用的情况下，应用仅使用本地系统通知 API，在断食进行中发送 4h、12h、18h、24h、30h、36h 和 48h 里程碑提醒，并根据你最近的本地开始时间发送每日开始提醒。关闭通知会取消已安排的里程碑提醒和智能提醒。这些通知中不嵌入任何跟踪分析。",
      privacyPurchasesTitle: "4. 可选商店支持购买",
      privacyPurchasesBody:
        "某些平台版本可能提供可选的原生商店购买，作为象征性支持。这些购买不会解锁功能或内容。当平台商店报告已完成购买时，应用可能会在本地记录已处理的购买令牌，以避免重复发放本地感谢星星。",
      privacyChildrenTitle: "5. 儿童隐私",
      privacyChildrenBody:
        "由于 NoBS Fasting 不会从任何用户设备收集、捕获或传输任何数字信息，因此它被设计为避免收集儿童个人信息。",
      privacyContactTitle: "6. 政策联系与支持中心",
      privacyContactBody:
        '如有技术咨询、功能提案、隐私问题或平台反馈，请使用上方公开反馈部分，或直接打开 GitHub 队列：<a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_fasting_feedback.yml</a>',
      footer: "NoBS Fasting Hub • 本地优先开发架构",
    },
    flappy: {
      metaTitle: "NoBS Flappy | 本地优先离线街机",
      backLink: "← 返回 NoBS Apps",
      supportTitle: "支持独立开发",
      supportBody:
        "NoBS Flappy 没有广告、遥测、强制账号、付费功能门槛或云排行榜。如果你想支持这项工作，请使用 NoBS Apps 支持部分的捐赠选项。",
      supportLink: "打开 NoBS Apps 支持选项 →",
      gameplayTitle: "离线街机玩法",
      gameplayIntro: "NoBS Flappy 保持游戏循环简单、清晰并且本地运行：",
      controlTime: "点击 / 轻触",
      controlTitle: "向上拍动",
      controlBody: "轻触游玩区域任意位置即可向上拍动。世界会自动滚动，所以目标是让小鸟避开障碍。",
      distanceTime: "距离",
      distanceTitle: "距离，不是账号",
      distanceBody:
        "游戏不使用积分、社交分数或在线排行榜。游玩时，右下角的低调 HUD 会显示“已飞距离：”，完成的游玩会根据你的设置以公里或英里显示距离。",
      offlineTime: "离线",
      offlineTitle: "本地游玩",
      offlineBody: "游玩历史和最佳距离保留在你的设备上。核心游戏无需网络访问、登录或服务器服务即可运行。",
      hudTime: "HUD",
      hudTitle: "快速控制",
      hudBody:
        "Start 会直接进入可玩界面。游玩时，一个小型浅色/深色切换控件停留在地面线下方，因此切换主题不会被当作拍动输入。",
      hazardsTitle: "障碍与游戏结束",
      hazardsIntro: "只有当小鸟撞到本地游戏障碍时，游玩才会结束：",
      buildingsTitle: "城市建筑",
      buildingsBody:
        "无尽城市使用清晰可读的建筑轮廓、阶梯式和金字塔式屋顶、大窗格、门和偶尔出现的天线。建筑主体、天线和地面都是实体障碍。",
      planesTitle: "飞机",
      planesBody: "飞机在 0.5 km 后解锁，从右向左穿过高空航道，并使用三档速度。撞到飞机会用专门文案结束本局。",
      purpleAngryBirdTitle: "紫色 Angry Bird",
      purpleAngryBirdBody:
        "紫色 Angry Bird 在 1 km 解锁。它是镜像的折纸小鸟，带有受限拍动路径和轻微的玩家高度偏向，看起来会注意玩家但不是直接追踪敌人。",
      redAngryBirdTitle: "红色 Angry Bird",
      redAngryBirdBody: "红色 Angry Bird 在 2 km 解锁。它比紫色更快、更激进，但仍必须留下可操作的绕行路线。",
      thunderTitle: "雷击坠落",
      thunderBody: "反复飞得太高可能触发雷击坠落状态。输入不再起作用，小鸟会倒着坠落，结束界面会等到撞击后才出现。",
      difficultyTitle: "难度解锁",
      difficultyBody:
        "天线可在 0.25 km 后出现，飞机在 0.5 km 后，紫色 Angry Birds 在 1 km 后，红色 Angry Birds 在 2 km 后。世界速度会在 1.5 km、2.5 km 和 4 km 提升。",
      gameOverCopyTitle: "游戏结束文案",
      gameOverCopyBody:
        "本局会说明发生了什么：地面、建筑、天线、飞机、Angry Bird 和雷击都有专门消息。撞到 Angry Bird 时会显示：“You've been hit by an Angry Bird!”",
      historyTitle: "本地历史",
      historyIntro: "历史记录刻意保持简单，没有徽章、星星、在线资料或互动循环。",
      runsTitle: "游玩卡片",
      runsBody: "完成的游玩会保存在本地，最新记录排在最前。每张卡片显示本地日期/时间和达到的距离。",
      bestTitle: "最佳距离",
      bestBody: "当存在历史记录时，最佳距离会作为简单的本地摘要显示在列表上方。没有历史时保持为空。",
      feedbackTitle: "反馈与功能请求",
      feedbackBody: "NoBS Flappy 的错误报告、功能提案和平台反馈请提交到公开反馈队列：",
      feedbackLink: "在 GitHub 打开 NoBS Flappy 反馈 →",
      privacyTitle: "NoBS Flappy 隐私政策",
      privacyUpdated: "最后更新：2026 年 6 月 10 日",
      privacyIntro:
        "本隐私政策适用于由 <strong>NoBS Apps</strong> 为受支持移动平台开发和发布的 <strong>NoBS Flappy</strong> 移动应用的数据隐私实践。",
      privacyDataTitle: "1. 数据收集与传输声明",
      privacyDataBody1:
        "<strong>NoBS Flappy 采用严格的零遥测、本地优先架构。</strong> 本应用不会收集、捕获、监控、拦截或传输任何个人、敏感、游戏过程或可识别设备的信息到外部云服务器、数据库或第三方。",
      privacyDataBody2:
        "我们不使用任何第三方分析 SDK、崩溃报告跟踪模块、广告 SDK、在线排行榜服务或身份管理工具。在标准游玩过程中，本应用不会发起网络请求。",
      privacyStorageTitle: "2. 本地存储沙盒",
      privacyStorageBody:
        "游玩历史、最佳距离、语言、主题、距离单位设置和已处理的支持购买令牌，都仅存储在你设备上应用的私有本地存储区域内，并使用该平台的标准持久化技术。你的数据始终由你个人保管和控制。",
      privacyPermissionsTitle: "3. 设备权限使用",
      privacyPermissionsBody:
        "<strong>无需特殊游戏权限：</strong> 标准游玩不需要位置、联系人、摄像头、麦克风、广告标识符、后台服务、推送通知或云服务。",
      privacyPurchasesTitle: "4. 可选商店支持购买",
      privacyPurchasesBody:
        "某些平台版本可能提供可选的原生商店购买，作为象征性支持。这些购买不会解锁功能或内容，也不会授予星星、积分、徽章或其他奖励。当平台商店报告已完成购买时，应用可能会在本地记录已处理的购买令牌，以避免重复处理。",
      privacyChildrenTitle: "5. 儿童隐私",
      privacyChildrenBody:
        "由于 NoBS Flappy 不会从任何用户设备收集、捕获或传输任何数字信息，因此它被设计为避免收集儿童个人信息。",
      privacyContactTitle: "6. 政策联系与支持中心",
      privacyContactBody:
        '如有技术咨询、功能提案、隐私问题或平台反馈，请使用上方公开反馈部分，或直接打开 GitHub 队列：<a href="https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new?template=nobs_flappy_feedback.yml</a>',
      footer: "NoBS Flappy Hub • 本地优先离线街机",
    },
    timers: {
      metaTitle: "NoBS Timers | 本地优先时钟工具",
      backLink: "← 返回 NoBS Apps",
      supportTitle: "支持独立开发",
      supportBody:
        "NoBS Timers 不包含广告、遥测、强制账号、付费功能门槛或云同步。如果你想支持这项工作，请使用 NoBS Apps 支持部分的捐赠选项。",
      supportLink: "打开 NoBS Apps 支持选项 →",
      toolsTitle: "简单时钟工具",
      toolsIntro: "NoBS Timers 让日常计时工具保持简单、本地、易于触达，并适配仅竖屏的移动布局。",
      alarmTime: "一天中的时间",
      alarmTitle: "闹钟",
      alarmBody: "选择时间，决定是否每天重复，然后保存。应用会记住上一次保存的闹钟时间，首次使用时默认设为六小时后。",
      stopwatchTime: "00:00:00",
      stopwatchTitle: "秒表",
      stopwatchBody: "秒表只有一个按钮：开始、停止，然后继续。没有圈数、分段时间、导出或额外控制。",
      countdownTime: "HH:MM:SS",
      countdownTitle: "倒计时",
      countdownBody:
        "输入小时、分钟和秒，然后开始。应用会记住上次使用的时长，运行中的操作会变成取消，归零时播放标准应用声音。",
      pomodoroTime: "25 + 5",
      pomodoroTitle: "番茄钟",
      pomodoroBody:
        "番茄钟使用固定的 25 分钟工作和 5 分钟休息。每次切换都会播放标准声音，并自动开始下一段，直到你取消。",
      localBehaviorTitle: "本地应用行为",
      localBehaviorIntro: "核心计时流程在设备上运行，不需要账号、分析、云同步或强制网络连接。",
      navigationTitle: "底部控制",
      navigationBody:
        "第一行底部按钮较大，用于闹钟、秒表、倒计时和番茄钟。较小的第二行保留设置和支持入口，不会挤占计时工具。",
      settingsTitle: "设置",
      settingsBody: "设置与其他 NoBS 应用保持一致：语言和主题会立即生效，并保留在本设备上。",
      notificationsTitle: "本地提醒",
      notificationsBody: "闹钟、倒计时和番茄钟切换在平台允许时使用本地系统提醒。只有当计时功能需要时才请求权限。",
      soundTitle: "一个声音",
      soundBody: "NoBS Timers 对闹钟、倒计时、工作结束和休息结束使用同一个标准提示音。没有声音选择器。",
      feedbackTitle: "反馈与功能请求",
      feedbackBody: "NoBS Timers 的错误报告、功能提案和平台反馈请提交到公开的 NoBS Apps 反馈队列：",
      feedbackLink: "在 GitHub 打开 NoBS Timers 反馈 →",
      privacyTitle: "NoBS Timers 隐私政策",
      privacyUpdated: "最后更新：2026 年 6 月 11 日",
      privacyIntro:
        "本隐私政策适用于由 <strong>NoBS Apps</strong> 为受支持移动平台开发和发布的 <strong>NoBS Timers</strong> 移动应用的数据隐私实践。",
      privacyDataTitle: "1. 数据收集与传输声明",
      privacyDataBody1:
        "<strong>NoBS Timers 采用严格的零遥测、本地优先架构。</strong> 本应用不会收集、捕获、监控、拦截或传输任何个人、敏感、计时相关或可识别设备的信息到外部云服务器、数据库或第三方。",
      privacyDataBody2:
        "我们不使用第三方分析 SDK、广告 SDK、崩溃报告跟踪模块、账号系统、云同步或身份管理工具。闹钟、秒表、倒计时、番茄钟、设置、支持页面显示或本地提醒计划都不需要网络请求。",
      privacyStorageTitle: "2. 本地存储沙盒",
      privacyStorageBody:
        "保存的闹钟时间、每日闹钟偏好、上次倒计时时长、必要时的活动计时器状态、语言、主题和已处理的支持购买令牌，都仅存储在你设备上应用的私有本地存储区域内，并使用该平台的标准持久化技术。你的数据始终由你个人保管和控制。",
      privacyPermissionsTitle: "3. 设备权限使用",
      privacyPermissionsBody:
        "<strong>本地系统闹钟 / 通知：</strong> 在平台支持且用户启用时，应用只使用本地系统 API 来触发闹钟、倒计时完成和番茄钟切换。关闭或取消计时器会取消相应的计划提醒。这些提醒中不包含任何跟踪分析。",
      privacyPurchasesTitle: "4. 可选商店支持购买",
      privacyPurchasesBody:
        "某些平台版本可能提供可选的原生商店购买，作为象征性支持。这些购买不会解锁功能或内容。当平台商店报告已完成购买时，应用可能会在本地记录已处理的购买令牌，以避免重复处理。",
      privacyChildrenTitle: "5. 儿童隐私",
      privacyChildrenBody:
        "由于 NoBS Timers 不会从任何用户设备收集、捕获或传输任何数字信息，因此它被设计为避免收集儿童个人信息。",
      privacyContactTitle: "6. 政策联系与支持中心",
      privacyContactBody:
        '如有技术咨询、功能提案、隐私问题或平台反馈，请使用上方公开反馈部分，或直接打开 GitHub 队列：<a href="https://github.com/daigof/nobs-apps/issues/new" target="_blank" rel="noopener noreferrer" class="section-link">https://github.com/daigof/nobs-apps/issues/new</a>',
      footer: "NoBS Timers Hub • 本地优先时钟工具",
    },
  },
};
