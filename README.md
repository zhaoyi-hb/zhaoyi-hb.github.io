# Yi Zhao (赵祎) — Academic Homepage

A clean, single-page academic homepage ready to deploy on **GitHub Pages**.
Content is generated from `论文总结.xlsx` (publications, patents, awards).

## Files
| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | Styling (light default + dark toggle, line-art theme) |
| `data.js` | **Edit here** — all publications |
| `graph.js` | Interactive research-graph figure in the hero |
| `main.js` | Rendering, filters, theme, decode/scramble, scroll reveal, rail |

## Before you publish — edit these placeholders
- **`index.html`**: the links block (Email, GitHub, Scholar, DBLP, ORCID) and the
  role line / bio text.
- **`data.js`**: add paper links if desired (e.g. wrap a title in `<a href="...">...</a>`).

## Deploy to GitHub Pages
1. Create a repo named `<your-username>.github.io` (or any repo).
2. Push these files to the `main` branch:
   ```bash
   git init && git add . && git commit -m "Add academic homepage"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → Deploy from branch → `main` / root**.
4. Visit `https://<your-username>.github.io/` (or `.../<repo>/`).

## Local preview
```bash
python3 -m http.server 8000
# open http://localhost:8000
```
