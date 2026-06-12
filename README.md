# Robotics Field Notes

Source for [robotics.ai-mvp.com](https://robotics.ai-mvp.com), a public
learning notebook about robotics, embodied AI, and physical intelligence.

## Run locally

The site has no build step or runtime dependencies.

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Add a learning

1. Add the durable source note to `notes/`.
2. Add its index row and article markup to `index.html`.
3. Keep source links and clearly distinguish source claims from personal
   synthesis.

## Deploy

Serve the repository root as a static site. `CNAME` contains the intended
custom domain for hosts that support it.
