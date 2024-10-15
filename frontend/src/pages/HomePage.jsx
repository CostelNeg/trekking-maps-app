import React, { useState, useEffect } from "react";
import { Container, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MapList from "../components/MapList";
import "../HomeNav.css";

const HomePage = () => {
  const { isAuthenticated, username } = useAuth();
  const navigate = useNavigate();
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Container fluid className="home-page">
      <Container fluid className="p-0">
        <div
          className="hero-container"
          style={{
            backgroundImage:
              "url('https://visitsienaofficial.it/wp-content/uploads/2022/10/francigena-1-1024x449.jpg')",
          }}
        >
          <div className="hero-content">
            <h1>Benvenuto in Trekking Italia, {username}!</h1>
          </div>
        </div>
      </Container>
      <Container fluid className="container">
        <div className="map-container">
          <MapList />
        </div>
      </Container>

      <Container fluid className="shop-section">
        <div className="shop-box">
          <h1>{username},</h1>
          <h2 className="text-center">
            Esplora i nostri Prodotti per il Trekking
          </h2>
        </div>

        <Carousel
          className="custom-carousel mt-5"
          indicators={false}
          controls={true}
        >
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src="https://contents.mediadecathlon.com/p1568309/k$4e8c156a556aeeb2f617036f429f16bf/sq/scarpe-trekking-donna-mh100-mid-impermeabili-blu.jpg?format=auto&f=480x480"
                    className="card-img-top"
                    alt="Scarponi da Trekking"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Scarponi da Trekking</h5>
                    <p className="card-text overflow-hidden">
                      Scarponi impermeabili e traspiranti progettati per lunghe
                      escursioni. La suola in gomma offre un'ottima aderenza su
                      terreni accidentati.
                    </p>
                    <div className="mt-auto text-center">
                      <a href="#" className="btn btn-primary">
                        Acquista Ora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src="https://www.salomon.com/it-it/shop-emea/media/catalog/product/article_images/LC1204200/LC1204200_eb0b9a3548c77800b2a108f195b8c57d.png?auto=webp&bg-color=f5f5f5&dpr=1&fit=cover&format=pjpg&optimize=low&orient=1&pad=30%2C30%2C30%2C30&width=288"
                    className="card-img-top"
                    alt="BONATTI WATERPROOF"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Giacca BONATTI WATERPROOF</h5>
                    <p className="card-text overflow-hidden">
                      Giacca impermeabile e traspirante progettata per
                      affrontare le intemperie. Mantiene il corpo asciutto e
                      offre libertà di movimento.
                    </p>
                    <div className="mt-auto text-center">
                      <a href="#" className="btn btn-primary">
                        Scopri di Più
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpsauLrSSINt7xcxLVxmrSF7Ir8zHmFAGSSHCnsLKyDf-zr3vaPtXAlXPzAwaM0HUQPvOogpGaSekNZFzyHIxP8HExqTauY2PZCTcZtdd3bozYoUGt4Hv0WVmaFhbYVZEprTqrmw&usqp=CAc"
                    className="card-img-top"
                    alt="Giacca Impermeabile"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Giacca Impermeabile</h5>
                    <p className="card-text overflow-hidden">
                      Giacca tecnica con membrana impermeabile e traspirante,
                      progettata per condizioni climatiche avverse.
                    </p>
                    <div className="mt-auto text-center">
                      <a
                        href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiO8aTSk5GJAxWTkYMHHdxNByMYABAZGgJlZg&co=1&ase=2&gclid=CjwKCAjwpbi4BhByEiwAMC8JnfksLm7nJJ1hnHlI3mj0-s_HPBj-0hoyc9Ji2x9AKernuxX6SKtBLxoCx-0QAvD_BwE&ohost=www.google.com&cid=CAESVeD2NHGnEpCfNI90M9uivziU_AVyO7TTQ9jlr3XaFckXHe8Bs0xrSC0c91DYSALDeMp4vlff-76teyFb_jgOaSvsuiG1rkWB-CD5Mj106Gp41ivRCD8&sig=AOD64_0J450tcKcD1BI5k5bL2_vSJwYIyA&ctype=5&q=&nis=4&ved=2ahUKEwiqqp7Sk5GJAxXWgf0HHUY4MgcQ9aACKAB6BAgHECo&adurl="
                        className="btn btn-primary"
                      >
                        Acquista Ora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src="data:image/webp;base64,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"
                    className="card-img-top"
                    alt="Felpa Tecnica"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Felpa Tecnica</h5>
                    <p className="card-text overflow-hidden">
                      Felpa in pile morbido e caldo, ideale per le fresche
                      giornate di trekking.
                    </p>
                    <div className="mt-auto text-center">
                      <a
                        href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj5KWHmZGJAxVxkoMHHZbMLZgYABA6GgJlZg&co=1&ase=2&gclid=CjwKCAjwpbi4BhByEiwAMC8JnWogOGkW7sK23bggCX9P8gQ3JxM-rg4Ljz9Co7y8Dd2z9JuuGM2SqBoCt6IQAvD_BwE&ohost=www.google.com&cid=CAESVeD27csyxAf-9bteOEeExW_a2rIhTCQiDUSuYVMayeIwuKn4nfmrsH6IKVv6VRTuCeQarH-ZvKUJ_kjTaybh1dG0bN_FoXwWeJ4Q9ufuRC04AiYsU10&sig=AOD64_2VaTvld3MZb5tG9085mtX7HCYgvA&ctype=5&q=&nis=4&ved=2ahUKEwjlj5-HmZGJAxWj3gIHHZT1KqAQ9aACKAB6BAgEEEw&adurl="
                        className="btn btn-primary"
                      >
                        Acquista Ora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src="data:image/webp;base64,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"
                    className="card-img-top"
                    alt="Zaino da Trekking"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Zaino da Trekking</h5>
                    <p className="card-text overflow-hidden">
                      Zaino con capacità di 50 litri, progettato per escursioni
                      di più giorni con tasche multiple.
                    </p>
                    <div className="mt-auto text-center">
                      <a
                        href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjvpcSXmZGJAxUlsoMHHQfYCGkYABAVGgJlZg&co=1&ase=2&gclid=CjwKCAjwpbi4BhByEiwAMC8Jna_replfaCGKRJu7wBULNGRygYP_wvW9OjQDdjkf-LoFJ7nhevI4jRoCDM8QAvD_BwE&ohost=www.google.com&cid=CAESVeD2UN64UvN1Xwr9u6x5o6VEQeiz1rOH9NvlL4jAfjob5RKWy4KfUXwT7n8VkKqQDyq5u3YIu_f7U8oinxBwRD7rUODQkjB2IdRYaRqJ2comyN_lBb0&sig=AOD64_1ZRt6QYLPmcYNwSvZMFslf0aDOOg&ctype=5&q=&nis=4&ved=2ahUKEwiFlraXmZGJAxUIhP0HHWMwPdwQ9aACKAB6BAgDEDQ&adurl="
                        className="btn btn-primary"
                      >
                        Acquista Ora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src="data:image/webp;base64,UklGRlIJAABXRUJQVlA4IEYJAACwNQCdASqMAPUAPj0cjESiIaERuRV0IAPEs4BrUGZ2zmy0Tc+vmnxE5uFuXoP8vzXrq2WXAjcz/qf+346e48/zupf/y35Vf0D5Ev+Tz3/S3/L/w/wI/y3+v/8LsVehf+xxOHo3cdPkvgmipc8KEOxAPei+Qcd1GhQ8lz0lcnuxQcEA7/KyX0MwNZ5cQiaRe8Cdj7lBNQoCGigC6dzZKwUiFRnl8SanZKAKm8awLvwR3Qzi7X9O9sHDSsDm/0rqDkHlRKLoh+smWuyqK6RbxOGkR0n5CON3/7LftssYWDu6gVhnZ2yUIsIs5ycW7WoxUzVx6lrTCm1UGbIbkyGt0R6+t6hqklfOjg7bNHKbnRrKDrf4BmpfY1zXdiwkU25ZEEhX71N+ns7oPj7SJbQVK0wOiWIHHSiJqipiZmQfySIZsG4DbD7b/oHSiUoZREzJGbP+keVFtkfIDW0fiQqCR6PD06GBCFlzkIU3AxypH3eoQ9dCImsqAS63zjomTEn28ztQ4OZp24G+AbGj9nYC40jebLmuMEudHsbRNpzx9aFf2ncdf4txfTnLXcf9qMGtGj+HPT4r2gAA/v4kc11IupavjXnQ8kIn6yAgyEkHEfv1oleYOBg9VrQtrREOn8//45a/EbiZNMjwhgbaIYxaABCt9kQwhpuHwNfMb5hb0E50WR2usG8Y9/ZDlRIsXMLgt9ilpLP492+JpSJoHb0w9fSeyD06b9jWQj/icxPpNmgeYeLjqZ2SUo/NX3J2rtRV/Mad+8CYMx3NXQPIk2mSYfw/gqoaHKl/oSNIUF97vnv8E9rN7TlKySierRm8dFBs11wAarURVZNrtfI+eIM4oSG2wVtfFbaIKOcsMCNzQPI0gnQqV7+ejrVa1M2hMpXwmWW3f5haH2yfWlgk0XscF+/1ULM9Lki2itFrro2e78B/OjKan2Jul2au5n9GM6Uo4iFLoH9GP1LjOhyMfrr/RHfcEwV//1yutxY2X9+v+GILU/9KO7ZiH61bcbF/F72S4AR8fH/ZSqWwA10RvMTBl0Ef4T8nH/6/mM+wyZX/b/JSvWPTjy9Z1261ObHqjeg7/BeGrfZ9Zc3zDa038BHyEnVXtMZdvEydKr6Bph//+UdBdE5YnuTvNJmgsSx4H/dnoXYhadRDqcMoOqkZB06z+kxjQgBqZF+g5AoFQ3DBeErhfFhRyHiMcEPI/3dbqYkV8K1aIdrJbgWyMpLl3dPga4VWGP0jL4HzGiMIn5fLKj9PohWOS6b7x0QqOZDdhRtxWfRVMbhqS95naesCH3fcIWlNqf5yQKT/lesqlvpff7rx7EnH7fudzAwtN+NiWb79pF3OF3tiW9YWZ93dXtKuNyqSe3P7OsIsPb1kW5q9P/pLqTwPec/ePErOF5WF0TuolBN5OJvFUX2d5HpK76x0+b2YiSH2VOdCdSju8XXS/97eHj/NrFLrOVD5dABizkrj4X7SB5jlQb+otidzOVYNkl26OF+ZlZbWe8D2qPC7MSZ+CC8m0fGVA7B+NeKzObgXmQC45XwmJGMoVtASdjowB4DXRsSy9JmU6yupQvAY8C0DezqWtSD0wgx8uKSRpSaU+4K62Cg/M4OQNZ6oo0HVSXA9ibg2Zi7LQ25oAG2x5SluoAnexQx9QrQC6zMrb/N/i/S66uyqvTQ+2KnMbT19Q0rxc3CyTTqP/AejGWf5YC0tmHhwugAgb4999REjGYEYyaYRsgJfwBMwBjO2NLX+iV6FHYbUTlvC7cU93a2wmo6iM18UYP59uyiKks20O+3I1F8Z/0UDCba1htWxIpy4ktIdWkR2zccTifajOm4Ni3caVsKSmMbbuoyG5w8WHpAJ6nWycsLZEggeCunfwmMmoN+CdcE62Xz5dpxqnKLKnGTMvIS5nvGXGxvee41JMkXOoA39gugFKG0UmRH6FmHfK/40oSN0n8L4to0jgBCKWSTo5rZD3jY4xuE59816rqo7LNl1AzQSJPFM4v1+LYhYMlnaOih41CQW781+OkW7gQZcfHZTG4MvgF8jOBOkWTCorLrbGzmYTL7C06uwVFNoqBfxV6XVL/3glfU7W6sGodvVtD3Fy53exW0KEoXX6GUcePdxb+fNc5/cqLbXd367q+J4c/29KGipk/zLKCVYC28+b8ABbFehRmwD9z6LXsiScy2Au+iIBF5flwzGiA/SxvwQh5Xa3/ioMTATwAp4EmxPAirdeARKrTDnLi0gVFwasjSXyX9azUHC9vsR+TQjFh0orP9/aXyhFVRHr8gb1hVKTF6Q+KNbhgb+i69xFhRBjPZlw6I5kkOQgp589trBTMxbgQFqDO+wCbqmJ3J4GtSLyvHiHgnqFk5DiH0SAhi4BbadidyBK2HUa5nOBk1r1+ZV6sIvFmgt7frHpmh1Cx2V1Vc1yDk/AlPLADMn8yKk/mVYRsEOSZywP51zyxQhm1kvcf29pyMxb/GCazIYJAv4zRFj6ZsPASY9OVSi4b2fWJyhtXRj5nzPKbXxFLHKf4rpFUFgfqvmEOKtAeQFPb1io4QK25S6lKMdhvOUktVFi9Q4MPskdoSxg+XBuuSQxyXYXuU2Twdby66uUsC7Zi38ZK4cRSVUH54xS4p3aWaK871ZC6N/ES9dP57SAlpWJerN6O9OICHSqG2AzkYyhCPAC6fZtd+P2G6LrzKGTOd24yiBgnSizgP6Gm+CwjCZ5yluQxJ4vJeLKgGoBjLrJFKpB6SlpXo2k/9YMoj94iVKRwboKsqVOuiXaTBHH/1+GHTMMPokl4hsu8ZQLF1v0owdi04x2Xl8YtBdCftQMTLQAJ8lZ5y/zfoYb+5IFm4wlWe2ttCaW5OpZXO+KTE52pHzjExJuYNGUFCfeZHFNqwp2Qgnl8D4TJiwO9oP+MLeQnztfg/yxJOEgdottr9ApS6JUxr6y+V8xMjrVEgZSoI/Mi8HsCG8oZZ6ZnU/ITPvtfSY7fxf79FjWdjBJ0aAfa9Vy8DL+DWu0MRYb2Hk/B/8g3lennRwxQtNPJO8j8xnscZ4u3Jj0oc3Eh6og/9BfVg6kU3+tUW2clkxn7UNOxyU1sGAo/oWgkIg/wvYxwcJwzyFKunq2syUt0Xn3yzPLAjnY8vP/gigeeFLnF1wqelRSS3IBC49KOVYX8WBMKs3IXPxoBAAAAAA"
                    className="card-img-top"
                    alt="Borraccia Termica"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Borraccia Termica</h5>
                    <p className="card-text overflow-hidden">
                      Borraccia in acciaio inox, mantiene le bevande calde o
                      fredde fino a 12 ore.
                    </p>
                    <div className="mt-auto text-center">
                      <a
                        href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwir18qqmZGJAxVNk4MHHQb0BSoYABAdGgJlZg&co=1&ase=2&gclid=CjwKCAjwpbi4BhByEiwAMC8JnY37vIMXFE0vtAxpqnvBbbc72DTAy-vJoeYun-rty1eMLlDrD0AGCBoCWXMQAvD_BwE&ohost=www.google.com&cid=CAESVeD226OxpRY1gHbbgAaH6xOkx1GAayVbXpFNWtbKI2wV5NdEfwdIQAXkrZwAeG2KKvavEDWTb5N5hfVRcNOKHKwFC1eR6r2A4EoZy8qSabo1-nA8LDM&sig=AOD64_1Y5mZ0aviDbV1G--BCclh6674JMA&ctype=5&q=&nis=4&ved=2ahUKEwjGn8SqmZGJAxV--AIHHS03CG0Q9aACKAB6BAgDEFE&adurl="
                        className="btn btn-primary"
                      >
                        Acquista Ora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src="data:image/webp;base64,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"
                    className="card-img-top"
                    alt="Cappello da Sole"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Cappello da Sole</h5>
                    <p className="card-text overflow-hidden">
                      Cappello leggero e traspirante con protezione UV,
                      progettato per escursioni sotto il sole.
                    </p>
                    <div className="mt-auto text-center">
                      <a
                        href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjL--q5mZGJAxW6mYMHHbjeB_oYABAdGgJlZg&co=1&ase=2&gclid=CjwKCAjwpbi4BhByEiwAMC8JnXkfW2fUM9S_v3duUJit6GhzeR_b2BQhOM62Lue_PZZ-3rYlW8Ul9RoCXUYQAvD_BwE&ohost=www.google.com&cid=CAESVeD2P3w2MOdYIvuShZcRQOketNUvLuO7bujdHR19QilYSI1RV9SrjBW01LCUmqY6ww5EJEoHfnpwdCc3Cen6Cck8mYq7_0yLt1MnEiU57UMfs9d3EZA&sig=AOD64_1Lb_gVc5bAl27x1PBKUlD3swT4wQ&ctype=5&q=&nis=4&ved=2ahUKEwjf1-W5mZGJAxWb3QIHHWGxDygQ9aACKAB6BAgEEFA&adurl="
                        className="btn btn-primary"
                      >
                        Acquista Ora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR67hzCYO7sU1lqy9E_NIrDb2vlpeyUtv_r9qwM0_fUp-TS-r_1lBzcVdjGweNkEp5C01He3Ebl739GFJZ3TGwl9EYX8B1JAhWV-m81j4ScfQQeSTQYfAMuHMpAfn5sQ5gU5nRfsZY&usqp=CAc"
                    className="card-img-top"
                    alt="Guanti Tecnici"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Guanti Tecnici</h5>
                    <p className="card-text overflow-hidden">
                      Guanti in materiale tecnico, progettati per mantenere le
                      mani calde e asciutte.
                    </p>
                    <div className="mt-auto text-center">
                      <a
                        href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwizsvzRmZGJAxWhi4MHHb9DKYMYABAGGgJlZg&co=1&ase=2&gclid=CjwKCAjwpbi4BhByEiwAMC8JnXK3jVys7IAzvVWjyb2dq9__uFGldCPdsLsfOSuzsaHIET41MHiYWhoCnYUQAvD_BwE&ohost=www.google.com&cid=CAESVeD2AmDkNF83cRy9VhxhubHxPO2xHa99X_KlhQ1XxzD8PUw4T_WkS4NfycaElRHE-O1ovTGPZFR3TmiMdB9IsgcvK0AENvdE4lkEugKGHD1Veykptvc&sig=AOD64_0Gn9DNMppE4qQca7g44RDqblvCsw&ctype=5&q=&nis=4&ved=2ahUKEwiC9fXRmZGJAxWN2QIHHZa8DzEQ9aACKAB6BAgEECQ&adurl="
                        className="btn btn-primary"
                      >
                        Acquista Ora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <h3>TrekkingApp</h3>
            <p>La tua guida per avventure all'aria aperta</p>
            <p>Email: info@trekkingapp.it</p>
            <p>Telefono: +39 123 456 7890</p>
            <p>Indirizzo: Via Della Calce, 00100 Roma</p>
          </div>
          <div className="footer-form">
            <button onClick={toggleFormVisibility}>
              {isFormVisible ? "Chiudi il Form" : "Richiedi Informazioni"}
            </button>
            {isFormVisible && (
              <form>
                <h3>Richiedi Informazioni</h3>
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="La tua richiesta" rows="4" required />
                <button type="submit">Invia</button>
              </form>
            )}
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default HomePage;
