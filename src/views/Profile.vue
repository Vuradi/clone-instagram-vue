<template>
  <div class="user-profile">
    <div class="user-profile__container _container">
      <div class="user-profile__avatar">
        <img src="../assets/img/posts/girl-post.png" alt="avatar">
      </div>
      <div class="user-profile__info info">
        <div class="info__common">
          <div class="info__nickname">terrylucas</div>
          <button class="info__btn btn_blue">Follow</button>
          <div class="info__drop">&hellip;</div>
        </div>
        <div class="info__statistic">
          <div class="info__amount-posts"><span>1.258</span> posts</div>
          <div class="info__amount-followers pointer"><span>4M</span> followers</div>
          <div class="info__amount-following pointer"><span>1.250</span> following</div>
        </div>
        <div class="info__name">Terry Lucas</div>
      </div>
    </div>
  </div>
  <div class="mobile-actions _container">
    <div class="mobile-actions__wrapper">
      <button class="mobile-actions__btn-followers">Followers</button>
      <button class="mobile-actions__btn-message">Message</button>
      <button class="mobile-actions__btn-arrow _icon-arrow"></button>
    </div>
  </div>
  <div class="stories">
    <div class="stories__container _container">
      <div class="stories__wrapper reels">
        <a href="#"  class="stories__story reels__story story">
          <img class="story__img" src="../assets/img/posts/girl2-post.png" alt="girl">
          <p class="story__title reels__title">Made us</p>
        </a>
        <a href="#"  class="stories__story reels__story story">
          <img class="story__img" src="../assets/img/posts/girl3-post.png" alt="girl">
          <p class="story__title reels__title">Lorem...</p>
        </a>
        <a href="#"  class="stories__story reels__story story">
          <img class="story__img" src="../assets/img/posts/boy-post.png" alt="girl">
          <p class="story__title reels__title">Lorem...</p>
        </a>
        <a href="#" class="stories__story reels__story story">
          <img class="story__img" src="../assets/img/posts/girl4-post.png" alt="girl">
          <p class="story__title reels__title">Lorem...</p>
        </a>
      </div>
    </div>
  </div>
  <div class="toggle-content content">
    <div class="content__container _container">
      <nav class="content__navigation">
        <a href="#" class="content__item _icon-view-posts"><span>POST</span></a>
        <a href="#" class="content__item _icon-video"><span>REELS</span></a>
        <a href="#" class="content__item _icon-play-circle"><span>VIDEOS</span></a>
        <a href="#" class="content__item _icon-tagged"><span>TAGGED</span></a>
      </nav>
    </div>
  </div>
  <section class="posts">
    <div class="posts__container _container">
      <div class="posts__wrapper">
      <a href="#" class="post__link"><img src="../assets/img/posts/girl-post.png" alt="girl"></a>
      <a href="#" class="post__link"><img src="../assets/img/posts/girl2-post.png" alt="girl"></a>
      <a href="#" class="post__link"><img src="../assets/img/posts/girl3-post.png" alt="girl"></a>
      <a href="#" class="post__link"><img src="../assets/img/posts/girl4-post.png" alt="girl"></a>
      <a href="#" class="post__link"><img src="../assets/img/posts/boy-post.png" alt="girl"></a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
};
</script>
