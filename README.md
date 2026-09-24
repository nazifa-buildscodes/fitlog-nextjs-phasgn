# FitLog — Workout Library

FitLog is a dark-themed, responsive workout library and planning application built with Next.js.

Users can explore workouts, view detailed workout information, add exercises to today's plan, save workouts for later, and manage their workout plan.

## 🔗 Live Demo & GitHub

- **Live Demo:** https://fitlog-nextjs-phasgn.vercel.app/
- **GitHub Repository:** nazifa-buildscodes/fitlog-nextjs-phasgn

---

## ✨ Features

- Responsive design for mobile, tablet, and desktop
- Workout library with data fetched from REST API
- Dynamic workout details page
- Add workouts to today's plan
- Save workouts for later
- Maximum 5 workouts in today's plan
- Mark workouts as completed
- Remove workouts from plan or saved list
- Sort workouts by duration, calories, and rating
- Live workout statistics
- Toast notifications for user actions
- LocalStorage support for data persistence
- Loading state while data is being loaded
- Custom 404 page
- Responsive navigation menu

---

## 🛠️ Technologies Used

### Languages
- JavaScript (ES6+)
- JSX
- HTML
- CSS

### Frameworks & Libraries
- React
- Next.js (App Router)
- Tailwind CSS
- Lucide React
- React Hot Toast

### Other Technologies
- REST API
- Context API
- LocalStorage
- Git & GitHub
- Vercel

---

## 📚 React & Next.js Concepts Used

This project was built using several important React and Next.js concepts.

| Concept | Where It Is Used |
|---|---|
| Components | Navbar, Hero, WorkoutCard, PlanCard, Footer, etc. |
| Props | Passing workout data and functions between components |
| State | Managing plan, saved workouts, tabs, and sorting |
| `useState` | Managing interactive component state |
| `useEffect` | Loading and saving data with LocalStorage |
| Event Handling | Button clicks, menu toggle, add/remove/done actions |
| Conditional Rendering | Loading, empty states, active tabs, completed workouts |
| Array Methods | `map()`, `filter()`, `reduce()`, `some()`, `sort()` |
| JSON Data Handling | Handling workout data received from the API |
| Data Fetching | Fetching workout data from the REST API |
| Routing | Home, My Plan, and workout pages |
| Dynamic Routing | `/workout/[id]` for individual workout details |
| Context API | Sharing plan and saved workout state across components |
| Server Components | Home page and workout detail page |
| Client Components | Navbar, My Plan, workout actions, and interactive UI |
| LocalStorage | Persisting plan and saved workout data |

---

## 🔌 API

FitLog uses the following REST API.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog