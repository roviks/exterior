import React from "react";

import styled from "styled-components";
import { Section } from "../../../styles/section";
const BlogDetailsStyle = styled(Section)`
  .comments-area {
    margin-top: 80px;
    h5 {
      font-size: 25px;
    }
    .item {
      padding: 30px 0;
      margin: 30px 0;
      border-bottom: 1px solid #eee;
      display: flex;
      .comment-img {
        display: block;
        min-width: 80px;
        height: 80px;
        position: relative;
        flex: 1 1 80px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      .info {
        padding-left: 40px;
        position: relative;
        h6 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
          span {
            display: block;
            color: #b19777;
            font-size: 12px;
            font-weight: 400;
            margin-top: 5px;
          }
        }
        .replay {
          position: absolute;
          right: 0;
          top: 0;
          font-size: 13px;
          i {
            margin-left: 5px;
          }
        }
      }
      &.relped {
        margin-left: 100px;
      }
    }
  }
  .post {
    .title-head {
      text-align: center;
      margin-bottom: 50px;
      h2 {
        margin-bottom: 10px;
        font-size: 40px;
      }
      a {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: 0 10px;
      }
    }
    .author {
      padding: 30px;
      margin-top: 40px;
      background: #fafafa;
      &-img {
        display: table-cell;
        vertical-align: middle;
        width: 140px;
      }
      .info {
        display: table-cell;
        padding-left: 40px;
        h6 {
          margin-bottom: 10px;
          font-size: 15px;
        }
        p {
          padding: 0;
          margin: 0;
        }
        .social {
          margin-top: 15px;
          font-size: 13px;
          a {
            margin-right: 15px;
          }
        }
      }
    }
    .content {
      .spacial {
        p {
          color: #111;
          font-size: 18px;
          font-weight: 500;
          font-family: inherit;
          margin: 30px 0;
        }
      }
    }
    p {
      color: #555;
      font-size: 16px;
      font-family: inherit;
      margin: 30px 0;
    }
    h6 {
      font-size: 18px;
    }
    .quotes {
      background: #fafafa;
      padding: 30px;
      margin: 30px 0;
      p {
        color: #111;
        font-size: 18px;
        font-style: italic;
      }
    }
    .share-info {
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid #999;
      display: flex;
      .social {
        a {
          font-size: 13px;
          margin-right: 20px;
        }
      }
      .tags {
        margin-left: auto;
        a {
          font-size: 12px;
          margin-left: 10px;
        }
      }
    }
    ul {
      li {
        margin: 10px 0;
        span {
          margin-right: 10px;
          font-weight: 500;
          font-size: 13px;
          display: inline-block;
        }
      }
    }
  }
  p {
    color: #888;
    font-size: 15px;
    font-weight: 400;
    line-height: 2;
    margin: 0;
  }
  .comment-form {
    margin-top: 80px;
    h5 {
      font-size: 25px;
    }
    form {
      margin-top: 50px;
      button {
        &:hover {
          cursor: pointer;
        }
      }
      textarea {
        height: 140px;
      }
      textarea,
      input {
        width: 100%;
        padding: 17px;
        font-size: inherit;
        font-family: inherit;
        background: #fafafa;
        border: 0;
        &:focus {
          outline: none;
        }
      }
    }
    .form-group {
      margin-bottom: 1rem;
    }
  }
  .btn-blc {
    background-color: #1e1e1e;
    padding: 14px 40px;
    &:hover {
      span {
        color: #1e1e1e;
      }
    }
  }
  .btn-lg {
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }
`;

function Blog() {
  return (
    <BlogDetailsStyle className="blog-pg single section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="title-head">
                <h2>Создайте красивый блог с легкостью</h2>
                <div className="info">
                  <p>
                    <a href="#0">Абдурахмон Одилов</a>/
                    <a href="#0">Авг 6, 2019</a>/
                    <a href="#0">Экстерьер дизайнер</a>
                  </p>
                </div>
              </div>
              <div className="img main-img">
                <div>
                  <img
                    src={require("../../../assets/imgs/blog-1.jpg").default}
                    alt=""
                  />
                </div>
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p>
                          Никогда не думай сдаваться. Победители никогда не
                          сдаются и бросающие курить никогда не выигрывают.
                          Уберите все негативные слова из свой мысленный словарь
                          и сосредоточьтесь на решениях с предельная
                          убежденность и терпение. Битва никогда не бывает
                          потеряны, пока вы не откажетесь от своего видения.
                        </p>
                      </div>
                      <p>
                        Основная составляющая здоровой окружающей среды для себя
                        уважение в том, что его нужно воспитывать. Главный
                        компонент здоровой среды для самоуважения заключается в
                        том, что необходимо заботиться. Главный компонент
                        здоровой окружающей среды для самооценки. обеспечивают
                        безусловное тепло. Главный компонент здоровая среда для
                        самооценки. воспитание Оно должно обеспечивать
                        безусловное
                      </p>

                      <h6>- Мы все планируем заранее.</h6>

                      <p>
                        Мы все намерены планировать наперед, но слишком часто
                        позволяем повседневные мелочи мешают составлению
                        календаря на год. Конечно, вы не можете знать все
                        детали, чтобы предвидеть. Черт возьми, ты не можешь
                        знать половину приоритетов который появится в любом
                        конкретном месяце. Но ты можешь спланировать сезонность,
                        загруженность и события.
                      </p>

                      <ul>
                        <li>
                          <span>01</span> Далеко-далеко за словесными горами.
                        </li>
                        <li>
                          <span>02</span> Далеко-далеко, за словесными.
                        </li>
                        <li>
                          <span>03</span> Далеко-далеко за словесными горами в
                          стране. particular month.
                        </li>
                        <li>
                          <span>04</span>Далеко-далеко за словесными горами в
                          стране гласных.
                        </li>
                        <li>
                          <span>05</span> Далеко-далеко, за.
                        </li>
                      </ul>

                      <div className="quotes text-center">
                        <p>
                          Никогда не думай сдаваться. Победители никогда не
                          сдаются и бросающие курить никогда не выигрывают.
                          Уберите все негативные слова из свой мысленный словарь
                          и сосредоточьтесь на решениях с предельная
                          убежденность и терпение. Битва никогда не бывает
                          потеряны, пока вы не откажетесь от своего видения.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="img/blog/single.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="img/blog/single.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <p>
                        Мы все намерены планировать наперед, но слишком часто
                        позволяем повседневные мелочи мешают составлению
                        календаря на год. Конечно, вы не можете знать все
                        детали, чтобы предвидеть. Черт возьми, ты не можешь
                        знать половину приоритетов который появится в любом
                        конкретном месяце. Но ты можешь спланировать сезонность,
                        загруженность и События.
                      </p>
                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                        <div className="tags">
                          <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                          <a href="#0">UI-ThemeZ</a>
                        </div>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-img">
                        <img src="img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>Автор:</span> Абдурахмон Одилов
                        </h6>
                        <p>
                          основная составляющая здоровой окружающей среды для
                          себя уважение в том, что его нужно воспитывать.
                          Главный компонент здоровой окружающей среды.
                        </p>
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="comments-area">
                <h5>Комментарии:</h5>
                <div className="item">
                  <div className="comment-img">
                    <img
                      src={require("../../../assets/imgs/avatar-1.jpg").default}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h6>
                      Джон Смит<span> 6 авг 2019</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Ответить <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      Далеко-далеко за словесными горами в стране гласных и
                      согласных живут рыбные тексты. Своего рекламных власти
                      вопрос города раз гор большой правилами образ!
                    </p>
                  </div>
                </div>
                <div className="item relped">
                  <div className="comment-img">
                    <img
                      src={require("../../../assets/imgs/avatar-1.jpg").default}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h6>
                      Джон Смит<span> 6 авг 2019</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Ответить <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      Далеко-далеко за словесными горами в стране гласных и
                      согласных живут рыбные тексты. Своего рекламных власти
                      вопрос города раз гор большой правилами образ!
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-img">
                    <img
                      src={require("../../../assets/imgs/avatar-1.jpg").default}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h6>
                      Джон Смит<span> 6 авг 2019</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Ответить <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      Далеко-далеко за словесными горами в стране гласных и
                      согласных живут рыбные тексты. Своего рекламных власти
                      вопрос города раз гор большой правилами образ!
                    </p>
                  </div>
                </div>
              </div>

              <div className="comment-form">
                <h5>Добавить коммент:</h5>
                <div className="form">
                  <form action="">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            placeholder="Ваш коммент"
                            spellcheck="false"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" placeholder="Ваше имя" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" placeholder="Ваша почта" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <button className="btn-curve btn-blc btn-lg">
                            <span>Отправить</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogDetailsStyle>
  );
}

export default Blog;
