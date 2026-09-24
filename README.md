# FitLog — Workout Library

FitLog is a responsive workout library and planning application built with **Next.js** and **React**.

The application allows users to browse workouts, view detailed workout information, create a daily workout plan, save workouts for later, and manage their selected workouts from the **My Plan** page.

---

## 🔗 Live Demo & GitHub

- **Live Demo:** https://fitlog-nextjs-phasgn.vercel.app/
- **GitHub Repository:** https://github.com/nazifa-buildscodes/fitlog-nextjs-phasgn

---


## 📌 About the Project

FitLog is a workout management application created as part of **Programming Hero Batch 14 — Assignment 6**.

The project follows a dark-themed workout interface with a lime accent color. Workout information is loaded from a REST API, while the user's selected plan and saved workouts are managed on the client side using React Context API and LocalStorage.

### Main Sections

1. **Workout Library**
2. **Workout Details**
3. **My Plan**

The home page displays the available workouts. Selecting a workout opens its dynamic details page. From there, users can add the workout to today's plan or save it for later.

The **My Plan** page allows users to manage planned and saved workouts, sort workouts, view statistics, mark workouts as completed, and remove workouts.

---

## ✨ Features

- Responsive design for desktop, tablet, and mobile
- Workout library powered by REST API data
- Dynamic workout details page
- Workout images and muscle group information
- Workout description and instructions
- Equipment information
- Difficulty information
- Sets and reps information
- Duration, calories, and rating information
- Add workout to today's plan
- Maximum **5 workouts** in today's plan
- Prevent duplicate workouts
- Save workouts for later
- Mark planned workouts as completed
- Remove workouts from today's plan
- Remove saved workouts
- Sort workouts by duration
- Sort workouts by calories
- Sort workouts by rating
- Live exercise, minutes, and calories statistics
- Toast notifications for user actions
- LocalStorage persistence
- Loading state
- Empty state
- Custom 404 page
- Responsive mobile navigation

---

## 🛠️ Technologies Used

### Frontend

- React
- Next.js
- Next.js App Router
- JavaScript (ES6+)
- JSX
- HTML
- CSS
- Tailwind CSS

### React / Next.js Features

- React Components
- Props
- useState
- useEffect
- Context API
- Server Components
- Client Components
- Dynamic Routing
- Conditional Rendering
- Event Handling
- Array Methods

### Other Technologies

- REST API
- LocalStorage
- Lucide React
- React Hot Toast
- Git
- GitHub
- Vercel

---

## 🔌 API

FitLog uses the following REST API to load workout data.

### Get All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Get Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

### API Utility

The API functions are organized inside:

```text
lib/api.js
```

The file contains:

- `getWorkouts()` — fetches all workouts
- `getWorkout(id)` — fetches a single workout

---

## 📍 Application Routes

The project uses the **Next.js App Router**.

| Route | Description |
|---|---|
| `/` | Workout Library |
| `/my-plan` | Today's Plan and Saved Workouts |
| `/workout/[id]` | Dynamic Workout Details |

### Examples

```text
/workout/1
/workout/2
/workout/3
```

The `[id]` route changes according to the selected workout.

---

## 🧩 Main Components

### Navbar

**File:** `components/Navbar.js`

The Navbar contains:

- FitLog logo
- Workout navigation
- My Plan navigation
- Plan count
- Saved count
- Mobile hamburger menu

Plan and saved counters are connected to the FitLog Context.

---

### Hero

**File:** `components/Hero.js`

The Hero section contains:

- Workout Library heading
- Short description
- Browse Workouts button
- Hero image

---

### WorkoutCard

**File:** `components/WorkoutCard.js`

Displays individual workouts in the workout library.

It shows:

- Workout image
- Muscle groups
- Workout name
- Equipment
- Duration
- Calories
- Rating

The card also provides workout actions and links to the workout details page.

---

### WorkoutDetails

**File:** `components/WorkoutDetails.js`

Displays the complete information of a selected workout.

It handles:

- Workout information
- Workout image
- Description
- Instructions
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Add to today's plan
- Save for later

---

### PlanCard

**File:** `components/PlanCard.js`

Displays workouts inside the My Plan page.

It includes:

- Workout image
- Workout name
- Equipment
- Duration
- Calories
- Rating
- View Details button
- Mark as Done button
- Remove button

---

### MyPlanClient

**File:** `components/MyPlanClient.js`

Controls the main My Plan functionality.

It handles:

- Today's Plan tab
- Saved tab
- Sorting
- Exercise count
- Total minutes
- Total calories
- Empty state
- Remove action
- Mark as Done action

---

### FitLogContext

**File:** `context/FitLogContext.js`

The Context API is used to manage shared workout state across the application.

It handles:

- Today's plan
- Saved workouts
- Adding workouts
- Saving workouts
- Removing workouts
- Marking workouts as done
- LocalStorage persistence

The context is accessed through:

```text
useFitLog()
```

---

### EmptyState

**File:** `components/EmptyState.js`

Displays an empty-state message when there are no workouts in the selected section.

It also provides a way to return to the workout library.

---

### LoadingSpinner

**File:** `components/LoadingSpinner.js`

Displays the loading state and loading animation.

---

### Footer

**File:** `components/Footer.js`

Contains the FitLog footer and assignment information.

---

### Providers

**File:** `components/Providers.js`

Provides:

- FitLog Context
- React Hot Toast

to the application.

---

## 🧠 React & Next.js Concepts Used

The project was built using several React and Next.js concepts.

### Components

Reusable components are used throughout the application, including:

- Navbar
- Hero
- WorkoutCard
- WorkoutDetails
- PlanCard
- MyPlanClient
- EmptyState
- LoadingSpinner
- Footer
- Providers

### Props

Props are used to pass workout data and action functions between components.

Examples include:

```text
WorkoutCard
PlanCard
EmptyState
```

### State Management

`useState` is used for:

- Plan state
- Saved workout state
- Hydration state
- Mobile navigation
- Active tabs
- Sorting options

### useEffect

`useEffect` is used to load and save workout information using LocalStorage.

### Context API

The FitLog Context provides shared workout state to different parts of the application.

### Event Handling

Event handlers are used for:

- Mobile menu toggle
- Add to Plan
- Save for Later
- Remove workout
- Mark as Done
- Sorting
- Tab switching

### Conditional Rendering

Conditional rendering is used for:

- Loading states
- Empty states
- API errors
- Different workout action states
- Mobile navigation

### Array Methods

The project uses JavaScript array methods such as:

- `map()`
- `filter()`
- `some()`
- `sort()`
- `reduce()`

These methods are used to display, filter, sort, update, and calculate workout information.

### JSON Data Handling

API responses are handled using:

```text
response.json()
```

LocalStorage data is handled using:

```text
JSON.parse()
JSON.stringify()
```

### Dynamic Routing

Next.js dynamic routing is used for individual workout pages:

```text
app/workout/[id]/page.js
```

### Server Components

Server components are used for pages that fetch and display workout data.

### Client Components

Client components are used where interactive state and browser APIs are required.

---

## 💾 LocalStorage

LocalStorage is handled inside:

```text
context/FitLogContext.js
```

The application stores:

```text
fitlog-plan
fitlog-saved
```

The saved information is loaded when the application starts and updated whenever the plan or saved workout list changes.

This allows selected workouts to remain available after refreshing the browser.

---

## 📊 My Plan Statistics

The My Plan page displays three statistics:

### Exercises

The number of workouts currently in today's plan.

### Minutes

The total duration of all planned workouts.

### Calories

The total calories of all planned workouts.

These values are calculated using JavaScript's `reduce()` method.

---

## 🔢 Plan Limit

Today's plan can contain a maximum of:

```text
5 workouts
```

If the plan already contains five workouts, another workout cannot be added.

A toast notification informs the user that the plan is full.

Duplicate workouts are also prevented.

---

## 🔔 Toast Notifications

React Hot Toast is used to provide feedback after user actions.

Examples include:

- Added to today's plan
- Saved for later
- Already in today's plan
- Already saved
- Today's plan is full
- Removed from today's plan
- Removed from saved
- Workout marked as done

---

## 🎨 Design

The project follows the provided FitLog reference design.

### Main Design Style

- Dark background
- Dark cards
- Lime accent color
- Rounded cards
- Simple navigation
- Workout-focused layout
- Responsive interface

### Main Accent Color

```text
#c8ff00
```

The project also contains a `Ui` folder with the reference and implemented design screenshots.

```text
Ui/
├── before.png
└── after.png
```

- `before.png` — Reference/Figma design
- `after.png` — Implemented design

---

## 📱 Responsive Design

The application is designed to work across:

### Desktop

- Three-column workout grid
- Full navigation
- Two-column workout details
- Horizontal plan cards

### Tablet

- Responsive workout grid
- Adjusted spacing
- Responsive navigation
- Responsive cards

### Mobile

- Hamburger navigation
- Single-column workout cards
- Responsive workout details
- Vertical plan cards
- Full-width controls
- Responsive sorting section

---

## 📁 Project Structure

```text
fit-log/
│
├── app/
│   ├── my-plan/
│   │   └── page.js
│   │
│   ├── workout/
│   │   └── [id]/
│   │       └── page.js
│   │
│   ├── page.js
│   ├── layout.js
│   ├── loading.js
│   └── not-found.js
│
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── WorkoutCard.js
│   ├── WorkoutDetails.js
│   ├── PlanCard.js
│   ├── MyPlanClient.js
│   ├── EmptyState.js
│   ├── LoadingSpinner.js
│   ├── Footer.js
│   └── Providers.js
│
├── context/
│   └── FitLogContext.js
│
├── lib/
│   └── api.js
│
├── public/
│   └── assets/
│
├── Ui/
│   ├── before.png
│   └── after.png
│
├── README.md
├── package.json
├── package-lock.json
└── ...
```

---

## 📂 Folder & File Purpose

### `app/`

Contains the main Next.js routes and pages.

### `components/`

Contains reusable UI components.

### `context/`

Contains the FitLog Context and shared workout state.

### `lib/`

Contains API-related functions.

### `public/`

Contains public assets such as images.

### `Ui/`

Contains the reference and implemented design screenshots.

---

## 🔄 How the Application Works

The basic application flow is:

```text
Workout Library
       ↓
Select a Workout
       ↓
Workout Details
       ↓
Add to Plan / Save for Later
       ↓
My Plan
       ↓
Mark as Done / Remove
```

### Example Flow

1. User opens the home page.
2. Workout data is fetched from the REST API.
3. Workout cards are displayed.
4. User selects a workout.
5. The dynamic workout details page opens.
6. User adds the workout to today's plan.
7. Context API updates the plan.
8. Navbar counters update automatically.
9. The workout appears on My Plan.
10. User can mark it as done or remove it.

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/nazifa-buildscodes/fitlog-nextjs-phasgn.git
```

### 2. Go to the project folder

```bash
cd fitlog-nextjs-phasgn
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

---

## 📦 Production Build

To create a production build:

```bash
npm run build
```

To run the production version:

```bash
npm start
```

---

### Main Concepts Practiced

- React Components
- Props
- State Management
- useState
- useEffect
- Event Handling
- Conditional Rendering
- Array Methods
- JSON Data Handling
- REST API Data Fetching
- Context API
- Dynamic Routing
- Server Components
- Client Components
- LocalStorage
- Responsive Design

---

## 📚 What I Practiced

While building FitLog, I practiced how to:

- Create reusable React components
- Pass data using props
- Manage local and global state
- Use React hooks
- Work with REST API data
- Handle JSON responses
- Create dynamic routes in Next.js
- Share state using Context API
- Store data in LocalStorage
- Handle user interactions
- Use JavaScript array methods
- Create responsive layouts
- Handle loading and empty states
- Deploy a Next.js application

---

## 👩‍💻 Author

**Nazifa Nowsin**

- GitHub: https://github.com/nazifa-buildscodes
- LinkedIn: https://www.linkedin.com/in/nazifa-nowsin-7b7459243/

---

## 📄 License

This project was created for educational and assignment purposes as part of Programming Hero Batch 14.
