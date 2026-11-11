# Verify SikkimMonastaries
Sikkim's Sacred Peaks - journey to 15 monasteries (static).
## Launch
Any static file server from the repo root.
## Doctor
`python3 .cursor/skills/verify-sikkim-monastaries/verify.py`
## Drive
Serves the static site and renders it in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-sikkim-monastaries/evidence.json`
## Cleanup
Static server terminated after the render.
## Known boundaries
Render smoke only; scene quality and e2e suites not exercised here.
