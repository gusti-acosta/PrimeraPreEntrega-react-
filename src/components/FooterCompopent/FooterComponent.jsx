import React from 'react'

const FooterComponent = () => {
  return (
    <footer class="footer" style={{
        backgroundColor: '#FF5733',
        padding: '20px 0',
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        width: '100%',
      }}>
      <div class="container-footer">
        <p>&copy; 2023 Mi Empresa. Todos los derechos reservados.</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/" class="social-icon"><i class="fab fa-facebook-f"></i>
            <img src="../img/iconos/facebook_circle_logo_icon_206764.png" alt="facebook"/>
          </a>
          <a href="https://twitter.com/" class="social-icon"><i class="fab fa-twitter"></i>
            <img src="../img/iconos/png-transparent-computer-icons-twitter-logo-logo-monochrome-black.png" alt="twitter"/>
          </a>
          <a href="https://www.instagram.com/" class="social-icon"><i class="fab fa-instagram"></i>
          <img src="../img/iconos/Instagram-Logo-Silhoutte-PNG-Image.png" alt="instagram"/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent;