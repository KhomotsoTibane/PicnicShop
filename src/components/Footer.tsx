
export default function Footer() {
  return (
    <footer className="container-fluid mt-5" style={{ backgroundColor: "#f5f5f5", textAlign:"center", width: "100%"}}>
        <h2>Connect with us and share your moments</h2>
        <i className="fab fa-twitter" style={{color:"#1DA1F2", margin: "20px 10px"}}></i>
        <i className="fab fa-facebook" style={{color:"#4267B2", margin: "20px 10px"}}></i>
        <i className="fab fa-instagram" style={{color:"#C13584", margin: "20px 10px"}}></i>
        <i className="fa fa-envelope" style={{color:"#DB4437", margin: "20px 10px"}}></i>

        <p className="mt-5 mb-3 text-muted">2022 &copy; Picnic-Me || Khomotso Tibane</p>
    </footer>
  )
}
