# SocialApp 🚀

A modern social media application built with React, featuring a clean and responsive design with real-time interactions.

## 🔗 Live Demo

- Production: [SocialApp on GitHub Pages](https://abdelfattahelnaggar.github.io/linkee/)

## ✨ Features

- 🔐 **Authentication System** - User login and registration with form validation
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🏠 **Feed Page** - View and interact with posts
- 👤 **Profile Management** - User profile pages
- 📝 **Post Details** - Detailed view of individual posts
- 🎨 **Modern UI** - Built with HeroUI and Tailwind CSS
- ⚡ **Fast Performance** - Powered by Vite
- 🍞 **Toast Notifications** - Beautiful user feedback with react-toastify
- ✅ **Form Validation** - Real-time validation with Zod and react-hook-form
- 🎭 **Glass Morphism** - Modern design with backdrop blur effects

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **UI Components:** HeroUI
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **HTTP Client:** Axios
- **Icons:** FontAwesome
- **Form Management:** React Hook Form
- **Validation:** Zod
- **Notifications:** React Toastify
- **Environment:** Vite Environment Variables

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine:
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdelfattahelnaggar/SocialApp.git
   cd SocialApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .local.env file in the root directory
   echo "VITE_BASE_URL=https://linked-posts.routemisr.com" > .local.env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.jsx      # Navigation component
├── Layouts/            # Layout components
│   ├── AuthLayout.jsx  # Layout for authentication pages
│   └── MainLayout.jsx  # Main application layout
├── pages/              # Page components
│   ├── FeedPage.jsx    # Main feed page
│   ├── LoginPage.jsx   # User login page
│   ├── RegisterPage.jsx # User registration page with validation
│   ├── ProfilePage.jsx # User profile page
│   ├── PostDetailsPage.jsx # Individual post details
│   └── NotFoundPage.jsx # 404 error page
├── Services/           # API services
│   └── authServices.js # Authentication API calls
├── Schemas/            # Validation schemas
│   └── registerSchema.js # Zod validation schema
├── assets/             # Static assets
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔗 Routing

The application uses React Router with the following routes:

- `/` - Feed page (main application)
- `/login` - User login
- `/register` - User registration
- `/profile` - User profile
- `/post-details` - Post details view

## 🎨 UI Components & Design

This project uses **HeroUI** for consistent and modern UI components along with **Tailwind CSS** for styling. The design features:

- **Glass Morphism Effects** - Semi-transparent backgrounds with backdrop blur
- **Gradient Backgrounds** - Beautiful blue-to-indigo gradients
- **Form Validation** - Real-time validation with error states
- **Toast Notifications** - Interactive feedback with react-toastify
- **Responsive Design** - Mobile-first approach with smooth animations
- **Modern Typography** - Gradient text effects and clean fonts

## 📱 Responsive Design

The application is built with mobile-first approach and works seamlessly across:
- 📱 Mobile devices
- 📟 Tablets
- 💻 Desktop computers

## 🔧 Configuration

The project is configured with:
- **Vite** for fast development and building
- **ESLint** for code quality and consistency
- **Tailwind CSS** for utility-first styling
- **Environment Variables** for API configuration
- **Zod** for runtime type validation
- **React Hook Form** for efficient form handling

## 🔌 API Integration

The application integrates with a backend API:
- **Base URL**: `https://linked-posts.routemisr.com`
- **Authentication**: User registration via `/users/signup` and sign-in via `/users/signin`
- **Posts**: Create, update, delete, and fetch posts
- **Comments**: Create, update, and delete comments
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Visual feedback during API calls

## 🆕 Recent Updates

- **Auth state sync (no reload after login):**
  - Login now updates both `AuthContext` and `UserDataContext` immediately (`setIsLoggedIn`, `setToken`).
  - `UserDataContext` fetches the logged user whenever the token changes and clears state on 401.
  - Token changes from other tabs are synced via the `storage` event.

- **Toast notifications:**
  - There must be exactly one `ToastContainer` in `src/main.jsx`.
  - All pages/components should only import and use `toast` (no extra containers).

- **Accessibility improvements:**
  - Use `textValue` only on HeroUI `DropdownItem` when contents are non-plain text.
  - Do not pass `textValue` to DOM elements like `p`, `button`, or `ModalHeader`.

- **Update Post modal UX:**
  - Textarea pre-fills with original content on open.
  - Modal is scrollable, constrained to viewport height, and tall images are capped.
  - Image removal is currently not supported by the backend; users can replace the image instead. The UI warns users accordingly.

- **Reusable modals and dropdown:**
  - `DeleteModalComponent` and `UpdateModalComponent` are generic and reused across posts and details pages.
  - `DropDownComponent` wires edit/delete actions. Ensure you pass `handleUpdatePost` for edit and `onOpen` for delete.

- **Comments handling:**
  - Temporary client-side guard for deletion: users can delete their own comments on their own posts. Attempts outside this rule show a clear error.
  - Inline editing uses the existing input field with character counter and Enter-to-save support.

## ⚙️ Environment Variables

Create a `.env` (or `.local.env`) file in the project root with:

```bash
VITE_BASE_URL=https://linked-posts.routemisr.com
```

Restart the dev server after changing environment variables.

## 🐞 Troubleshooting

- **Toasts not showing:**
  - Ensure there is only one `ToastContainer` (in `src/main.jsx`).
  - Components should import `{ toast }` from `react-toastify` and call `toast.success/error/...` directly.

- **Ellipsis button missing after login:**
  - Ensure login sets both `setToken(res.token)` and `setIsLoggedIn(true)`.
  - Ensure logout clears auth state: remove token from `localStorage` and call `setToken(null)`.

## ⚠️ Known Limitations

- The backend currently does not support removing a post image via the update endpoint. The UI provides a warning and encourages replacing the image instead.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [HeroUI](https://heroui.com/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Vite](https://vitejs.dev/) - Build tool and development server
- [React Hook Form](https://react-hook-form.com/) - Form management
- [Zod](https://zod.dev/) - Schema validation
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Toast notifications
- [Axios](https://axios-http.com/) - HTTP client

---

**Made with ❤️ by [Abdelfattah Elnaggar]**