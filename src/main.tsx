/**
 * MIT License with Additional Restrictions
 * 
 * Copyright (c) 2024 Marcos Allan Santos Menezes
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * 1. The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * 2. The Software may not be used, modified, or distributed without the prior
 * written permission of the copyright holder.
 * 
 * 3. The Software is provided "as is", without warranty of any kind, express or
 * implied, including but not limited to the warranties of merchantability,
 * fitness for a particular purpose and noninfringement. In no event shall the
 * authors or copyright holders be liable for any claim, damages or other
 * liability, whether in an action of contract, tort or otherwise, arising from,
 * out of or in connection with the Software or the use or other dealings in the
 * Software.
 * 
 * By using the Software, you agree to these terms and conditions.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './screens/Home/index.tsx';
import Signs from './screens/Signs/index.tsx';
import SignIn from './screens/SignIn/index.tsx';
import SignUp from './screens/SignUp/indx.tsx';
import ForgoutPassword from './screens/ForgoutPassword/index.tsx';
import ConfirmCode from './screens/ConfirmCode/index.tsx';
import SwitchPassword from './screens/SwitchPassword/index.tsx';
import ErrorPage from './screens/ErrorPage/index.tsx';
import MyPerfil from './screens/MyPerfil/index.tsx';
import Materias from './screens/Materias/index.tsx';
import Notifications from './screens/Notifications/index.tsx';
import Chat from './screens/Chat/index.tsx';
import Achievements from './screens/Achievements/index.tsx';
import ScreenPage from './components/ScreenPage/index.tsx';
import Exercises from './screens/Exercises/index.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "signs",
    element: <Signs />,
    errorElement: <ErrorPage />
  },
  {
    path: "sign-in",
    element: <SignIn />,
    errorElement: <ErrorPage />
  },
  {
    path: "sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
  {
    path: "forgout-password",
    element: <ForgoutPassword />,
    errorElement: <ErrorPage />
  },
  {
    path: "confirm-code",
    element: <ConfirmCode />,
    errorElement: <ErrorPage />
  },
  {
    path: "switch-password",
    element: <SwitchPassword />,
    errorElement: <ErrorPage />
  },
  {
    path: "my-perfil",
    element: <MyPerfil />,
    errorElement: <ErrorPage />
  },
  {
    path: "materias",
    element: <Materias />,
    errorElement: <ErrorPage />
  },
  {
    path: "notifications",
    element: <Notifications />,
    errorElement: <ErrorPage />
  },
  {
    path: "chat",
    element: <Chat />,
    errorElement: <ErrorPage />
  },
  {
    path: "achievements",
    element: <Achievements />,
    errorElement: <ErrorPage />
  },
  {
    path: "exercises",
    element: <Exercises />,
    errorElement: <ErrorPage />
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ScreenPage>
        <RouterProvider router={router} />
      </ScreenPage>
  </React.StrictMode>,
)
