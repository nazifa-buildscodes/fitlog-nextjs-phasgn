# FitLog — Workout Library

FitLog is a dark-themed and responsive workout library and planning application built with Next.js.

Users can explore workouts, view detailed workout information, add exercises to today's plan, save workouts for later, and manage their workout plan.

## 🔗 Links

- **Live Demo:** [fitlog-asgnmnt-next.js](YOUR_LIVE_LINK)
- **GitHub Repository:** [fitlog-asgnmnt-next.js](YOUR_GITHUB_REPO_LINK)

---

## ✨ Features

- Responsive design for mobile, tablet, and desktop
- Workout library with API data
- Dynamic workout details page
- Add workouts to today's plan
- Save workouts for later
- Maximum 5 workouts in today's plan
- Mark workouts as completed
- Remove workouts from the plan or saved list
- Sort workouts by duration, calories, and rating
- Live workout statistics
- Toast notifications for user actions
- LocalStorage data persistence
- Loading state
- Custom 404 page

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

## 📚 Concepts Used

This project uses several important React and Next.js concepts.

| Concept | Usage |
|---|---|
| Components | Navbar, Hero, WorkoutCard, PlanCard, Footer, etc. |
| Props | Passing workout data and functions between components |
| State | Managing workouts, plans, saved items, tabs, and sorting |
| `useState` | Managing interactive component state |
| `useEffect` | Loading and saving data with LocalStorage |
| Event Handling | Button clicks, navigation, add/remove/done actions |
| Conditional Rendering | Loading, empty states, active tabs, completed workouts |
| Array Methods | `map()`, `filter()`, `reduce()`, `some()`, `sort()` |
| JSON Data Handling | Working with workout API data |
| Data Fetching | Fetching workout data from the REST API |
| Routing | Home, My Plan, and workout pages |
| Dynamic Routing | `/workout/[id]` for individual workout details |
| Context API | Sharing plan and saved workout state |
| Server Components | Home page and workout detail page |
| Client Components | Interactive navbar, plan, and workout actions |
| LocalStorage | Persisting plan and saved workout data |

---

## 🔌 API

FitLog uses the following REST API.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog