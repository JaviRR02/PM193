# 📱 Proyecto React Native con Expo – Publicación vía QR

Este repositorio contiene el proyecto `my-app` desarrollado con **React Native** y **Expo**, enfocado en la navegación entre pantallas. Debido a que uso un iPhone y trabajo en Windows (sin cuenta de desarrollador de Apple), utilicé **Expo Go** para compartir la app mediante un código QR.

---

## 🔧 Tecnologías utilizadas

- React Native
- Expo CLI
- EAS CLI
- Expo Go (iOS)
- GitHub

---

## 📦 Identificadores configurados

- **iOS bundle identifier**: `com.m1x4v1.myapp`
- **Android application ID**: `com.m1x4v1.myapp`

---

## 🛠️ Proceso de publicación

1. Instalación de herramientas:
   ```bash
   npm install -g expo-cli eas-cli
   eas login

Inicialización del proyecto:

bash
eas init
Generación de build de Android (necesario para habilitar actualizaciones):

bash
eas build --platform android
Publicación de la app:

bash
eas update --branch preview --message "Publicación final para iPhone"