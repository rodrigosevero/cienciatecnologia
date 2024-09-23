import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ciência e Tecnologia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossOrigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" />
      </Head>

      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            Ciência e Tecnologia
          </a>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#sistemas">
                  Sistemas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="page-section portfolio mt-5" id="sistemas">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Acesso aos sistemas
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 mb-5">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Convenio 2024</h5>
                  <a target="_blank" href="https://setec.ufmt.br/tce/convenio24" className="btn btn-primary">
                    Acessar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Seleção Bolsista</h5>
                  <a target="_blank" href="https://setec.ufmt.br/uab/selecaobolsauab/" className="btn btn-primary">
                    Acessar
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title">PERS MT</h5>
                            <a target="_blank" href="https://setec.ufmt.br/tce/persmt" className="btn btn-primary">Acessar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title">TCE - Portal</h5>
                            <a target="_blank" href="https://setec.ufmt.br/tce/portal/" className="btn btn-primary">Acessar</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title">AVA TCE</h5>
                            <a target="_blank" href="https://setec.ufmt.br/tce/ava-tce" className="btn btn-primary">Acessar</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title">Cursos EAD</h5>
                            <a target="_blank" href="https://setec.ufmt.br/tce/cursosead" className="btn btn-primary">Acessar</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title">MBA Gestão Estratégica</h5>
                            <a target="_blank" href="https://setec.ufmt.br/tce/mba-gestrategica" className="btn btn-primary">Acessar</a>
                        </div>
                    </div>
                </div>

          </div>
        </div>
      </section>

      <footer className="py-4 text-center text-black">
        <div className="container">
          <small>&copy; Ciência e Tecnologia - {new Date().getFullYear()}</small>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
