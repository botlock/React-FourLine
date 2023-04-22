import styles from "../styles/Cadastro.module.css";
import * as React from "react";
import fotoLogin from "../assets/Logo4Ls.svg";
import { Register } from "../components/Register";

export default function Cadastro() {
  return (
    <main>
      <section>
        <article>
           <h1>Faça sua conta agora !</h1>

           <p>Vem fazer parte da nova rede social você também</p> 
           
          <img src={fotoLogin} alt="Foto Login" className={styles.imgLogin}/>
        </article> 
        <article>
          <Register/>
        </article>
      </section>
    </main>
  );
}
