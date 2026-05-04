# Gemini API Proxy en Vercel

Proyecto simple para usar Google Gemini API a través de un proxy en Vercel Serverless Functions, resolviendo problemas de CORS.

## 🚀 Características

- ✅ Proxy en Vercel Serverless Functions
- ✅ Resuelve problemas de CORS
- ✅ La API key del usuario nunca se almacena en el servidor
- ✅ Compatible con keys de Google AI Studio (AIza...)
- ✅ Sin costo extra (solo los límites de Vercel)

## 📁 Estructura del proyecto

```
├── api/
│   └── gemini.js          # Proxy serverless function
├── index.html             # Frontend de prueba
├── package.json           # Dependencias
├── vercel.json           # Configuración de Vercel
└── README.md             # Este archivo
```

## 🔧 Instalación y despliegue

1. **Instalar Vercel CLI** (si no lo tienes):
   ```bash
   npm i -g vercel
   ```

2. **Desplegar en Vercel**:
   ```bash
   vercel --prod
   ```

3. **O conectar tu repositorio a Vercel** para despliegue automático.

## 💻 Uso

1. Abre la URL de tu sitio desplegado
2. Pega tu API key de Google AI Studio (empieza con "AIza...")
3. Escribe un mensaje y haz clic en "Enviar mensaje"

## 🔑 Obtener API Key de Google AI Studio

1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crea una nueva API key
3. Copia la key (empieza con "AIza...")
4. Úsala en la aplicación

## 🛠️ Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor local
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📝 API Endpoint

**POST** `/api/gemini`

```json
{
  "prompt": "Tu mensaje aquí",
  "apiKey": "AIza..."
}
```

**Respuesta:**
```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Respuesta de Gemini..."
          }
        ]
      }
    }
  ]
}
```

## 🔒 Seguridad

- La API key se maneja solo en el frontend
- El proxy no almacena ninguna key
- CORS configurado para permitir solicitudes desde cualquier origen
- Validación de inputs y manejo de errores

## 🚨 Limitaciones

- Depende de los límites de Vercel Serverless Functions
- La API key debe ser válida y tener créditos disponibles
- Gemini 2.0 Flash puede tener limitaciones de uso

## 📄 Licencia

MIT License
