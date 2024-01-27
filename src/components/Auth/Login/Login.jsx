import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";
const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const handleLogin = () => {
    const testUser = { username, password };
    dispatch();
  };

  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <input
        className={styles.inputField}
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {visible ? (
        <input
          className={styles.inputField}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      ) : (
        <input
          className={styles.inputField}
          placeholder="Password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
      <label className={styles.checkboxLabel}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={visible}
          onChange={(e) => setVisible(e.target.checked)}
        />
        Show Password
      </label>
      <button className={styles.submitButton} type="submit">
        Login
      </button>
      <div className={styles.additionalLinks}>
        <a href="/forgot-password" className={styles.link}>
          Forgot Password
        </a>

        <a href="/registration" className={styles.link}>
          Registration
        </a>
      </div>
    </form>
  );
};
export default Login;
