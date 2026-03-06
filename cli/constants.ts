export const GITHUB_APP_SLUG = process.env.GITHUB_APP_SLUG || "ask-bonk";
export const GITHUB_APP_URL = `https://github.com/apps/${GITHUB_APP_SLUG}`;
export const GITHUB_USER_NAME = process.env.GITHUB_USER_NAME || "ask-bonk";
export const OIDC_BASE_URL = process.env.OIDC_BASE_URL || "https://ask-bonk.silverlock.workers.dev/auth";
export const BONK_REPO = process.env.BONK_REPO || "ask-bonk/ask-bonk";
export const DEFAULT_MODEL = process.env.DEFAULT_MODEL || "opencode/claude-opus-4-5";
export const BOT_MENTION = process.env.BOT_MENTION || "@ask-bonk";
export const BOT_COMMAND = process.env.BOT_COMMAND || "/bonk";
