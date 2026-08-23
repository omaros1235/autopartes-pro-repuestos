@'
# AutoPartes Pro

## Sistema de Gestión para Taller de Repuestos Automotrices

### Módulo: Gestión de Repuestos

Este proyecto corresponde al desarrollo del módulo de Gestión de Repuestos del sistema AutoPartes Pro. El módulo permitirá registrar, consultar, actualizar y eliminar información de los repuestos disponibles, incluyendo código, nombre, descripción, precio, cantidad y proveedor.

## Stack Tecnológico

- JavaScript
- Node.js
- Express

El stack tecnológico fue seleccionado en el Avance 1 mediante una matriz de decisión, obteniendo JavaScript + Node.js + Express el mayor puntaje ponderado.

## Integrantes

- Morales López, Kleber Omar
- Rosero Herrera, Erick Sebastián
- Matamoros Franco, Nelsy Glendy

## Flujo de trabajo con Git

Se utilizará un flujo basado en GitHub Flow:

- `main`: rama principal y estable del proyecto.
- `feature/*`: ramas utilizadas para desarrollar nuevas funcionalidades o realizar cambios.

Cada funcionalidad se desarrollará en una rama independiente. Una vez terminado el cambio, se realizará un commit, se subirá la rama al repositorio y se creará un Pull Request para revisar y fusionar los cambios en `main`.

### Ejemplos de ramas

- `feature/registrar-repuesto`
- `feature/consultar-repuestos`
- `feature/actualizar-repuesto`
- `feature/eliminar-repuesto`
## Estructura inicial

```text
autopartes-pro-repuestos/
|-- README.md
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- src/
`-- .github/
    `-- workflows/
        `-- ci.yml