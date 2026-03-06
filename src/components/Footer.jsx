const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        • Movie Finder • 
      </p>
      <p className="footer__credit">
        © {new Date().getFullYear()} Navendra Ramdhan
      </p>
    </footer>
  )
}

export default Footer