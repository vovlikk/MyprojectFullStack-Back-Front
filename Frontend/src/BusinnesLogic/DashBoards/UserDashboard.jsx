import React, { useState, useEffect } from "react";
import HeaderUser from "../../UserLogic/User/UserPages/HeaderUser";
import UserInfo from "../../UserLogic/User/UserPages/UserInfo"
import UserDashboardHome from "./DashBoardsCompontents/UserDashBoardHome";
import { useApi } from "../../Connect/ApiContext";
function UserDashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { apiUrl } = useApi();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);

    if (!token) {
      setError("Токен отсутствует. Пожалуйста, авторизуйтесь.");
      return;
    }

    fetch(`${apiUrl}/api/values/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then(async (res) => {
        const text = await res.text();
        console.log("Ответ от сервера:", text);

        if (!res.ok) {
          throw new Error(`Ошибка сервера: ${res.status} ${res.statusText}`);
        }

        return JSON.parse(text);
      })
      .then((data) => {
        console.log("Профиль:", data);
        setUser(data);
      })
      .catch((err) => {
        console.error("Ошибка загрузки:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div style={{ color: "red" }}>Ошибка: {error}</div>;
  }

  if (!user) {
    return <div>Загрузка.....</div>;
  }

  return (
    <>
     
      <HeaderUser user={user} />
      <UserDashboardHome user={user} />
    </>
  );
}

export default UserDashboard;
