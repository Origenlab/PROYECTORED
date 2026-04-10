# Deploy a Cloudflare Pages — Proyecto Red

## Primera vez (setup)

### 1. Instalar Wrangler (una sola vez)
```bash
npm install -g wrangler
```

### 2. Autenticarse con tu cuenta Cloudflare
```bash
wrangler login
```
Se abre el navegador → autoriza la conexión → listo.

### 3. Crear el proyecto en Cloudflare Pages (una sola vez)
```bash
wrangler pages project create proyectored
```
Cuando pregunte "Production branch name" → escribe: `main`

---

## Deploy manual (cada vez que quieras publicar)

```bash
# 1. Construir el sitio
npm run build

# 2. Subir a Cloudflare Pages
npx wrangler pages deploy dist
```

El CLI te muestra la URL de preview y la URL de producción al terminar.

---

## Deploy con GitHub Actions (deploy automático)

Si el proyecto está en GitHub, agrega este archivo como `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name=proyectored
```

### Variables necesarias en GitHub Secrets:
- `CLOUDFLARE_API_TOKEN` — crea en dash.cloudflare.com → Profile → API Tokens → "Edit Cloudflare Workers"
- `CLOUDFLARE_ACCOUNT_ID` — aparece en dash.cloudflare.com → lado derecho bajo tu nombre

---

## Dominio personalizado (proyectored.com.mx)

1. En dash.cloudflare.com → Pages → proyectored → Custom domains
2. Agregar: `proyectored.com.mx` y `www.proyectored.com.mx`
3. Cloudflare genera automáticamente el certificado SSL gratuito
4. Si el dominio ya está en Cloudflare DNS, los registros se actualizan solos

---

## URLs importantes

- **Preview (última versión)**: `https://proyectored.pages.dev`
- **Producción**: `https://proyectored.com.mx` (después de configurar dominio)
- **Dashboard**: https://dash.cloudflare.com → Workers & Pages → proyectored
