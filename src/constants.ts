import { RequestError } from "@octokit/request-error";

// Retry configuration for transient failures (network issues, rate limits).
// 3 attempts total with exponential backoff starting at 5 seconds.
// Client errors (4xx) are not retried - they won't succeed.
export const RETRY_CONFIG = {
  times: 3,
  delayMs: 5000,
  backoff: "exponential" as const,
  shouldRetry: (err: unknown) =>
    !(err instanceof RequestError && err.status >= 400 && err.status < 500),
} as const;

// Installation ID cache TTL (30 minutes)
export const APP_INSTALLATION_CACHE_TTL_SECS = 1800;

// Durable Object polling interval for workflow status (5 minutes)
export const WORKFLOW_POLL_INTERVAL_SECS = 300;

// Maximum time to track a workflow run before the polling safety net declares
// a timeout (6 hours — the GitHub Actions workflow-level maximum). Since job
// tracking is cheap, we default to the platform ceiling so the tracking window
// never expires before the workflow itself does.
//
// Override with the BONK_MAX_TRACK_SECS env var (value in seconds).
// You're unlikely to need to reduce this; set it higher only if you run
// workflows with custom timeouts exceeding 6 hours (self-hosted runners).
export const DEFAULT_MAX_WORKFLOW_TRACKING_MS = 6 * 60 * 60 * 1000;

// GitHub PR title max length
export const PR_TITLE_MAX_LENGTH = 256;

// Workflow run polling delays: [immediate, 10s, 20s, 30s]
// GitHub Actions takes time to queue runs after the triggering event.
export const WORKFLOW_RUN_POLL_DELAYS_MS = [0, 10_000, 20_000, 30_000] as const;

// Project-wide defaults
const env = typeof process !== "undefined" ? process.env : ({} as Record<string, string>);

export const GITHUB_APP_SLUG = env.GITHUB_APP_SLUG || "ask-bonk";
export const GITHUB_APP_URL = `https://github.com/apps/${GITHUB_APP_SLUG}`;
export const GITHUB_USER_NAME = env.GITHUB_USER_NAME || "ask-bonk";
export const OIDC_BASE_URL = env.OIDC_BASE_URL || "https://ask-bonk.silverlock.workers.dev/auth";
export const BONK_REPO = env.BONK_REPO || "ask-bonk/ask-bonk";
export const DEFAULT_MODEL = env.DEFAULT_MODEL || "opencode/claude-opus-4-5";
export const BOT_MENTION = env.BOT_MENTION || "@ask-bonk";
export const BOT_COMMAND = env.BOT_COMMAND || "/bonk";
export const GITHUB_REPO_URL = `https://github.com/${BONK_REPO.includes("/") ? BONK_REPO : `ask-bonk/${BONK_REPO}`}`;
