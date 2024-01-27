import { useState } from "react";
import styles from "./Register.module.css";
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleRegister = () => {};
  return (
    <form className={styles.registerForm} onSubmit={handleRegister}>
      <input
        className={styles.inputField}
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className={styles.inputField}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className={styles.inputField}
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className={styles.submitButton} type="submit">
        Register
      </button>
    </form>
  );
};
export default Register;
