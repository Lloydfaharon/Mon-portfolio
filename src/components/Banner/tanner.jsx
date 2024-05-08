import "./banner.css";
import Image from "../../image/banner-img2.jpg";

function banner() {
  return (
    <div className='banner-box'>
      <section className="image">
        <img src={Image} alt="A computer with neon lights" />
      </section>
      <section className='introduction'>
        <h2 className='sr-only'>Entrez dans mon univers</h2>
        <p className='subtitle'>où toutes les idées deviennent realité</p>
      </section>
    </div>
  );
}

export default banner;
