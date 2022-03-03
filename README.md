# Application Title: Jotit Task Tracker

Do you want to have a countdown of all the year, month, week, day and plan it as well? Countdown Planner will help with that! This application allows the user to 1) create an account and 2) sign in to 3) Plan the year, month, wee, and day and have a countdown of them too.

## Important Links

- [Deployed Client](...)
- [Deployed API](...)
- [Frontend Repository](...)

### Technologies Used

- JavaScript
- jQuery
- HTML/CSS
- Bootstrap
- MongoDB
- Mongoose
- Express
- React

### Planning Strategy

1. Plan the structure and ERd of the project.
2. finalize the backend
3. Head on to the front end

### Unsolved Problems / Future Updates

1. As a user I want to be able to view the Year's, Month's, Week's, Hourly Countdown.
2. Getting a react calendar component to work: https://openbase.com/js/react-big-calendar

### API Routes

| Endpoint           | Component        | `AuthenticatedRoute`? |
| ------------------ | ---------------- | --------------------- |
| `/sign-up`         | `SignUp`         | No                    |
| `/sign-in`         | `SignIn`         | No                    |
| `/change-password` | `ChangePassword` | Yes                   |
| `/sign-out`        | `SignOut`        | Yes                   |
| `/`                | `TaskHome`       | Yes                   |
| `/tasks`           | `TasksShow`      | Yes                   |
| `/tasks/:id`       | `TaskShow`       | Yes                   |
| `/tasks-create`    | `TaskCreate`     | Yes                   |
| `/tasks/:id/edit`  | `TaskUpdate`     | Yes                   |
| `/tasks/:id`       | `TaskDelete`     | Yes                   |

### Entity Relationship Diagram

![ERD]([./public/images/Jotit_ERD.png](https://ibb.co/h7kpxMM))
