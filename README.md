# ContactManager - Local Contact Management Application

A local contact management application for creating, editing, filtering, and sorting contacts with local persistence, built using **Angular** and **TypeScript**. Contacts are saved in the browser's `localStorage`, ensuring data remains available even after refreshing the page.

---

## Features

✅ Create new contacts
✅ Edit existing contacts
✅ Delete contacts (logical deletion with `isDelete`)
✅ Mark contacts as favorites
✅ Filter contacts (by name, favorites, deleted)
✅ Sort contacts (by name, date)
✅ Local storage persistence
✅ Dashboard with statistics (number of contacts, favorites, last added contact)

---

## Technologies Used

- **Framework**: Angular 17
- **Language**: TypeScript
- **State Management**: Angular Signals
- **Data Persistence**: `localStorage`
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Routing**: Angular Router
- **Build Tool**: Angular CLI

---

## Project Setup

1. **Create the project with Angular CLI**:

```
ng new contact-manager
cd contact-manager
```

2. **Install dependencies**:

```
npm install
npm install --save-dev prettier
npm install eslint --save-dev
```

---

## Project Structure

```
src/
├── app/
│   ├── categories/
│   │   └── components/
│   │       ├── smart/
│   │       │   ├── add-categories-page/
│   │       │   │   ├── add-categories-page.css
│   │       │   │   ├── add-categories-page.html
│   │       │   │   ├── add-categories-page.spec.ts
│   │       │   │   └── add-categories-page.ts
│   │       │   ├── categories-page/
│   │       │   │   ├── categories-page.css
│   │       │   │   ├── categories-page.html
│   │       │   │   ├── categories-page.spec.ts
│   │       │   │   └── categories-page.ts
│   │       └── ui/
│   │           └── categorie-component/
│   │               ├── categorie-component.css
│   │               ├── categorie-component.html
│   │               ├── categorie-component.spec.ts
│   │               └── categorie-component.ts
│   │
│   ├── contacts/
│   ├── employees/
│   ├── favorites/
│   ├── home/
│   ├── shared/
│   ├── app.config.ts
│   ├── app.css
│   ├── app.html
│   ├── app.routes.ts
│   ├── app.spec.ts
│   ├── app.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
└── ...
```

---

## Running the Project

To start the application in development mode:

```
ng serve
```

The app will be available at http://localhost:4200.

---

## Author

**Clément MARTIN-FASQUEL**

---

## Acknowledgments

This project was inspired by and developed with the help of:

• Dev Propulsor - Angular Tutorials

---

## License
This project is licensed under the MIT License.

---
