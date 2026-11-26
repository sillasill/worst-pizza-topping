import { mkdirSync, writeFileSync } from "node:fs";

// The joke works by selling the bill itself as the topping: soggy, inedible,
// and the one part of a bad pizza you can never send back.
const line = "Our newest pizza topping is the receipt — it goes soggy, tastes like regret, and you still have to pay for it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
