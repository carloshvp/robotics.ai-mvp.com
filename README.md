# Robotics Intelligence

Source for [robotics.ai-mvp.com](https://robotics.ai-mvp.com), a public
strategy database about robotics, embodied AI, and physical intelligence.

The homepage is a searchable intelligence index. Each field note has its own
clean URL under `notes/<id>-<slug>/`.

## Run locally

The site has no build step or runtime dependencies.

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Add a field note

1. Add the durable source note to `notes/`.
2. Add the standalone website at `notes/<id>-<slug>/index.html`.
3. Add one intelligence card to the library in `index.html`, including
   `data-note-topics` and `data-note-search` values for filtering.
4. Update the library count, coverage figures, and previous/next note links.
5. Keep source links and clearly distinguish source claims from personal
   synthesis.

Interactive note pages can load their own data script after `main.js`, as the
humanoid market map and home-lab comparison do today.

## Deploy

Serve the repository root as a static site. `CNAME` contains the intended
custom domain for hosts that support it.
