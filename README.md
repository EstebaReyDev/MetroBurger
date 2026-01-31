# 🍔 METRO BURGER - Anatomía del Exceso

**Metro Burger** es una landing page de alto impacto diseñada con una estética **neobrutalista**. No es solo una web informativa, es una máquina de conversión optimizada para pedidos directos vía WhatsApp y una experiencia de usuario violenta pero sofisticada.

![Metro Burger Preview](https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop)

---

## ⚡ Características Principales

-   🚀 **Conversión Directa**: Integración fluida con WhatsApp para pedidos inmediatos.
-   🤖 **Chef AI Assistant**: Sistema de recomendación inteligente basado en el humor del usuario, potenciado por **Google Gemini AI**.
-   🎨 **Diseño Neobrutalista**: Estética urbana con sombras duras, tipografía masiva (Archivo Black) y colores de alta visibilidad (Neon Lime).
-   📱 **Mobile First**: CTA flotante para dispositivos móviles y diseño 100% responsivo.
-   📍 **Localización**: Acceso directo a Google Maps para retiro en local.
-   🛡️ **Sin Intermediarios**: Enfoque en venta directa para evitar comisiones de apps de terceros.

---

## 🛠️ Stack Tecnológico

-   **Frontend**: [React 19](https://react.dev/)
-   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
-   **Inteligencia Artificial**: [@google/genai](https://ai.google.dev/) (Gemini 3 Flash)
-   **Iconografía**: [Lucide React](https://lucide.dev/)
-   **Bundler**: [Vite](https://vitejs.dev/)

---

## 🚀 Instalación y Desarrollo Local

Sigue estos pasos para tener el laboratorio de sabor corriendo en tu máquina:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/metro-burger.git
   cd metro-burger
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto y añade tu API Key de Google Gemini:
   ```env
   API_KEY=tu_clave_de_gemini_aqui
   ```
   *Puedes obtener una clave gratuita en [Google AI Studio](https://aistudio.google.com/).*

4. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

---

## 🌐 Despliegue (Vercel / Netlify)

Este proyecto está listo para ser desplegado en plataformas de hosting estático:

### En Vercel:
1. Conecta tu repositorio de GitHub a Vercel.
2. En la sección **Environment Variables**, añade:
   -   Key: `API_KEY`
   -   Value: `(Tu clave de Gemini)`
3. Haz clic en **Deploy**.

### En GitHub Pages:
*Nota: Para que la IA funcione en GitHub Pages, deberás inyectar la API_KEY mediante un proceso de Build o definirla en el entorno de construcción.*

---

## 📂 Estructura del Proyecto

```text
├── components/          # Componentes modulares (Botones, Asistente, etc.)
├── services/            # Lógica de integración con la API de Gemini
├── constants.tsx        # Datos del menú y reviews (fácil de editar)
├── types.ts             # Definiciones de TypeScript
├── App.tsx              # Componente principal y estructura de la Landing
├── index.html           # Punto de entrada HTML y carga de fuentes
└── package.json         # Dependencias y scripts
```

---

## ✍️ Créditos

Diseñado y desarrollado por **METRO BURGER TECH**. 
Inspirado en el caos urbano y el refinamiento gastronómico.

---

> **AVISO**: Esta es una landing page de demostración técnica. El exceso de sabor es responsabilidad del consumidor. 💀🍔
