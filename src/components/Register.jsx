import styles from "../styles/Register.module.css";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


export const Register = () => {
  return (
    <div className={styles.main_form}>
      <form className={styles.form}>
        <h2>Crie sua conta</h2>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          placeholder="Exemplo: @rogeriof64"
        />

        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder={AccessAlarmIcon}
        />

        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder=""
        />

        <input
          type="text"
          name="age"
          id="age"
          autoComplete="off"
          placeholder=""
        />

        <input
          type="text"
          name="phone"
          id="phone"
          autoComplete="off"
          placeholder=""
        />
        <button className={styles.btn_form}>Cadastrar</button>
      </form>
    </div>
  );
};
