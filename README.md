# Challenge de Testing Automatizado: Playwright

[cite_start]Este repositorio es mi entrega para el "Challenge de Testing Automatizado" [cite: 1, 2][cite_start], enfocado en testing E2E (End-to-End) y buenas prácticas de Git[cite: 7].

---

## [cite_start]1. 🎯 Descripción del Proyecto [cite: 66]

[cite_start]El objetivo de este proyecto es construir una suite de tests automatizados (mínimo 8-10) [cite: 39] [cite_start]para un sitio web de práctica, implementando patrones de diseño como el Page Object Model (POM) [cite: 40] [cite_start]y manteniendo una racha de commits diarios en GitHub[cite: 22].

* **Sitio Web (SUT):** `http://quotes.toscrape.com/`
* [cite_start]**Período del Challenge:** 9 de noviembre de 2025 al 8 de diciembre de 2025[cite: 19].

## [cite_start]2. 🛠️ Framework Utilizado [cite: 67]

[cite_start]Se ha seleccionado **Playwright** (Multi-navegador) [cite: 37] para este desafío.

**¿Por qué Playwright?**
* Soporte nativo para múltiples navegadores (Chromium, Firefox, WebKit) con una sola API.
* Capacidades de "auto-espera" (auto-wait) que reducen la fragilidad de los tests.
* Ejecución paralela de tests por defecto.
* Excelente reportería y herramientas de debugging (como `show-report` y Trace Viewer).

## [cite_start]3. ⚙️ Prerrequisitos e Instalación [cite: 72]

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/playwright-automation-practice.git](https://github.com/tu-usuario/playwright-automation-practice.git)
    cd playwright-automation-practice
    ```
    *(Reemplaza `tu-usuario` por tu nombre de usuario de GitHub)*

2.  **Instalar dependencias de Node.js:**
    ```bash
    npm install
    ```

3.  **Instalar los navegadores de Playwright:**
    ```bash
    npx playwright install
    ```

## [cite_start]4. 🚀 Instrucciones para Ejecutar Tests [cite: 74]

Este proyecto está configurado para ejecutar los tests de varias maneras:

* **Correr todos los tests (en modo headless):**
    ```bash
    npx playwright test
    ```

* **Correr un archivo de test específico:**
    ```bash
    npx playwright test tests/login.spec.ts
    ```

* **Ver el último reporte HTML:**
    ```bash
    npx playwright show-report
    ```
