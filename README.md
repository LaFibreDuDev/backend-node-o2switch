# Déploiement

```sh
npm run build
# npx babel src --out-dir dist
cp package.json dist/
cp package-lock.json dist/
sed -i 's/"type": "module"/"type": "commonjs"/' dist/package.json
cd dist
npm ci --omit=dev
```
