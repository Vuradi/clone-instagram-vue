<template>
  <div class="user-profile">
    <div class="user-profile__container _container">
      <div class="user-profile__avatar">
        <img src="../assets/img/posts/girl-post.png" alt="avatar">
      </div>
      <div class="user-profile__info info">
        <div class="info__common">
          <div class="info__nickname">terrylucas</div>
          <button class="btn btn_blue">Follow</button>
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
  <div class="stories">
    <div class="stories__container _container">
      <div class="stories__wrapper">
        <div class="stories__story story">
          <img src="../assets/img/posts/girl2-post.png" alt="girl">
          <p class="story__title">Made us</p>
        </div>
        <div class="stories__story story">
          <img src="../assets/img/posts/girl3-post.png" alt="girl">
          <p class="story__title">Lorem...</p>
        </div>
        <div class="stories__story story">
          <img src="../assets/img/posts/boy-post.png" alt="girl">
          <p class="story__title">Lorem...</p>
        </div>
        <div class="stories__story story">
          <img src="../assets/img/posts/girl4-post.png" alt="girl">
          <p class="story__title">Lorem...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>
