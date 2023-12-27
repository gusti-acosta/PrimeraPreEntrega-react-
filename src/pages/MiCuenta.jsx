import React from 'react'

const MiCuenta = () => {
  return (
    <main class="Formulario-container" style={{
      maxWidth: "400px",
      margin: "170px auto",
      backgroundColor: "white",
      padding: "20px",
      borderRadius:"4px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{textAlign: "center"}}>Iniciar sesión</h2>
      <form>
        <div class="form-group" style={{marginBottom: "40px"}}>
          <label sfor="nombre-del-Usuario" style={{
            display: "block",
            fontWeight: "bold",
            marginBottom: "5px",  }}
            >
            Usuario:
          </label>
          <input type="text" id="username" name="username" required style={{
            width: "100%",
            padding:"10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}/>
        </div>
        <div class="form-group" style={{marginBottom: "40px"}}>
          <label for="contraseña" style={{
            display: "block",
            fontWeight: "bold",
            marginBottom: "5px",  }}
            >Contraseña:</label>
          <input type="password" id="password" name="password" required style={{
            width: "100%",
            padding:"10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}/>
        </div>
        <div class="form-group" style={{marginBottom: "40px"}}>
          <input type="submit" value="Iniciar sesión" style={{
            width: "100%",
            padding:"10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "#FF5733",
            color: "white"
          }}/>
        </div>
        <div class="form-group" style={{marginBottom: "40px"}}>
          <input type="button" value="Crear cuenta" style={{
            width: "100%",
            padding:"10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}/>
        </div>
      </form>
    </main>
  )
}

export default MiCuenta