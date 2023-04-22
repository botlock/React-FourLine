import styles from "../styles/Cadastro.module.css";
import * as React from "react";
import fotoLogin from "../assets/Logo4Ls.svg";
import { Register } from "../components/Register";

export default function Cadastro() {
  return (
    <main className={styles.container}>
      <section className={styles.image_register_section}>
        <img src={fotoLogin} alt="" />
        <h2>
          Cadastre-se agora na{" "}
          <span className={styles.purple_span}>FourLine</span>
        </h2>
      </section>
      <section className={styles.form_section}>
        <Register />
      </section>
    </main>
  );
}
