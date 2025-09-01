## 🔹 Pages & Features

### 1. Home Page (`/`)

- Show a **welcome message**.

---

### 2. Posts Page (`/posts`)

- Fetch and display a list of posts using **[JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)**.
- Each post **title** should be **clickable**.

---

### 3. Single Post Page (`/posts/:id`)

- Display the **full details** of the clicked post.
- Use **Route Params** (`:id`).
- Add a **nested route**:
  - `/posts/:id/comments` → Fetch and display comments for that post from:
    ```
    https://jsonplaceholder.typicode.com/posts/:id/comments
    ```

---

### 4. About Page (`/about`)

- A simple **static page** about the blog.

---

### 5. Navigation

- Use **`Link`** and **`NavLink`** for menu navigation.

---

### 6. Redirect

- If the user goes to **`/all-posts`**, redirect them to **`/posts`**.

---

### 7. New Post Page (`/new-post`)

- Create a **form** to add a new post.
- Use **`Prompt`** to warn the user before navigating away if the form is not submitted.
  - API endpoint for new post:
    ```
    POST https://jsonplaceholder.typicode.com/posts
    ```

---

### 8. Pathless Route (404)

- If the user visits an unknown route (e.g., `/abc`), show a **custom 404 - Page Not Found** component.
