import styles from "../styles/Register.module.css";

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
          placeholder="Exemplo: rogeriofarias@gmail.com"
        />

        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="Sua melhor senha:"
        />

        <input
          type="text"
          name="age"
          id="age"
          autoComplete="off"
          placeholder="Exemplo: 16"
        />

        <input
          type="text"
          name="phone"
          id="phone"
          autoComplete="off"
          placeholder="Exemplo: (99) 00000-0000"
        />
        <button className={styles.btn_form}>Cadastrar</button>
      </form>
    </div>
  );
};
