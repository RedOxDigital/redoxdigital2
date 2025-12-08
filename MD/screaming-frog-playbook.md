## Screaming Frog / Bing Fix Playbook

Reusable checklist for single-page apps on Vercel (or similar) to clear common crawl warnings: missing security headers, non-indexable canonicals, and pages without internal outlinks.

### Core fixes to keep in place
- Security headers via `vercel.json` (or framework equivalent):
  - `Content-Security-Policy: default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self'`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
- Apply headers to all routes; on Vercel use both `/:path*` and `/(.*)` header matches and **do not** mix `routes` with `rewrites` (use `rewrites` only to avoid “mixed routing properties”).
- Canonicals: self-referencing, HTTPS, final 200, prefer a single host (e.g., `https://www.example.com/...`). If you have dynamic routing, ensure templates set canonical per-path or use a head updater.
- Internal outlinks: include a crawlable nav or footer in raw HTML (noscript-friendly) that links to your key pages. JS-only links can be missed in text crawls.
- Optional meta fallbacks: add `meta http-equiv` equivalents for the four headers in the base HTML to satisfy crawlers that inspect markup instead of response headers.

### When running Screaming Frog
1) Use list mode with your key URLs (or your sitemap). Include all primary landing pages.
2) If checking JS-rendered links, enable JavaScript rendering; but ensure raw HTML also has crawlable links.
3) Check “Canonicalised” and “Non-indexable canonical”: canonical URLs must return 200 and be indexable.
4) Check “Missing security headers”: should be clear sitewide after deploy.
5) Check “Pages without internal outlinks”: nav/footer links in raw HTML should clear this.

### If headers are reported missing
- Confirm `vercel.json` (or host config) still has the header rules applied to all routes.
- Redeploy production and clear CDN cache if needed.
- Verify with: `curl -I https://www.example.com/` (look for CSP, Referrer-Policy, X-Frame-Options, X-Content-Type-Options).

### If “pages without internal outlinks” returns
- Ensure raw HTML (or a `noscript` block) contains plain `<a href>` links to key internal pages.
- Add any newly created pages to that nav/footer and redeploy.

### If “canonicalised” or “non-indexable canonical” returns
- Ensure canonical href is the final 200 URL (HTTPS, correct host, no redirect).
- For template-based sites, set canonical per route. For static entry HTML, ensure any head-updater sets canonical/og/twitter URL to the current path.

### Quick verification commands
- Headers: `curl -I https://www.example.com/`
- Specific page: `curl -I https://www.example.com/path`
- HTML contains nav links: `curl -s https://www.example.com/ | grep -i "<a href"`

### Deploy checklist
- Commit/push changes.
- Trigger production deploy on your host (Vercel: deploy latest main).
- Re-check headers with curl (age should be low on first fetch).
- Re-run Screaming Frog to confirm warnings are cleared.


