// Number Race — single-file Worker for Cloudflare (Durable Objects backend)

// ---------- question bank ----------
const QUESTION_BANKS = {
  primary: [
    { text: "7 + 8 = ?", choices: ["13", "14", "15", "16"], correctIndex: 2 },
    { text: "12 - 5 = ?", choices: ["6", "7", "8", "9"], correctIndex: 1 },
    { text: "6 x 4 = ?", choices: ["18", "20", "24", "26"], correctIndex: 2 },
    { text: "45 / 9 = ?", choices: ["4", "5", "6", "9"], correctIndex: 1 },
    { text: "How many sides does a triangle have?", choices: ["2", "3", "4", "5"], correctIndex: 1 },
    { text: "What is half of 50?", choices: ["20", "25", "30", "15"], correctIndex: 1 },
    { text: "9 + 9 = ?", choices: ["16", "17", "18", "19"], correctIndex: 2 },
    { text: "100 - 37 = ?", choices: ["63", "67", "73", "53"], correctIndex: 0 },
    { text: "3 x 7 = ?", choices: ["21", "24", "18", "27"], correctIndex: 0 },
    { text: "What is 1/4 of 20?", choices: ["4", "5", "6", "10"], correctIndex: 1 },
    { text: "8 + 6 = ?", choices: ["12", "13", "14", "15"], correctIndex: 2 },
    { text: "How many minutes in an hour?", choices: ["50", "60", "70", "100"], correctIndex: 1 },
  ],
  secondary: [
    { text: "Solve: 3x = 21, x = ?", choices: ["6", "7", "8", "9"], correctIndex: 1 },
    { text: "What is 15% of 200?", choices: ["20", "25", "30", "35"], correctIndex: 2 },
    { text: "(-3) x (-4) = ?", choices: ["-12", "7", "12", "-7"], correctIndex: 2 },
    { text: "Simplify: 2(x +
