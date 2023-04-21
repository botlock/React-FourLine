import styles from "../styles/Cadastro.module.css";
import * as React from "react";
import fotoLogin from "../assets/undraw_access_account_re_8spm.svg";
import ButtonAppBar from "../components/BarradeNavegacaoLogin";
import Login from "../components/Login";



export default function Cadastro() {
  return (
  
    <main className={styles.Container}> 
    <ButtonAppBar/>
      <section className={styles.primeiraSection}>
        <h2>Faça seu login na plataforma</h2>
        <img src={fotoLogin} alt="Imagem de login" className={styles.fotoLogin} /> 
         <Login/>
      </section>
   
    </main>
    
  );
}

