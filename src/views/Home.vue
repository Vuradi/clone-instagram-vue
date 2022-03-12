<template>
  <section class="post-feed" >
    <div class="post-feed__container _container">
      <div class="post-feed__posts-tape posts-tape">
        <div class="stories-following__wrapper reels">
          <a href="#"  class="stories-following__story reels__story story-following">
            <img class="story-following__img" src="../assets/img/posts/girl2-post.png" alt="girl">
            <p class="story-following__title reels__title">Made us</p>
          </a>
          <a href="#"  class="stories-following__story reels__story story-following">
            <img class="story-following__img" src="../assets/img/posts/girl3-post.png" alt="girl">
            <p class="story-following__title reels__title">Lorem...</p>
          </a>
          <a href="#"  class="stories-following__story reels__story story-following">
            <img class="story-following__img" src="../assets/img/posts/boy-post.png" alt="boy">
            <p class="story-following__title reels__title">Lorem...</p>
          </a>
          <a href="#" class="stories-following__story reels__story story-following">
            <img class="story-following__img" src="../assets/img/posts/girl4-post.png" alt="girl">
            <p class="story-following__title reels__title">Lorem...</p>
          </a>
        </div>
        <div v-if="$store.getters['home/postFollowing']">
          <article
            v-for="post in $store.getters['home/postFollowing']"
            :key="post.name"
            class="post-following__wrapper post-following"
          >
            <div class="post-following__top">
              <div class="post-following__user">
                <img class="post-following__img-account"
                     :src="post.img" alt="boy">
                <div class="post-following__user-name">{{ post.name }}</div>
              </div>
              <div class="post-following__drop-menu">&hellip;</div>
            </div>
            <img class="post-following__img-post" :src="post.img" alt="boy">
            <div class="post-following__actions">
              <div class="post-following__main-actions">
                <button class="post-following__action _icon-favourite"></button>
                <button class="post-following__action _icon-comment"></button>
                <button class="post-following__action _icon-share-post"></button>
              </div>
              <button class="post-following__action _icon-save"></button>
            </div>
            <div class="post-following__info">
              <div class="post-following__amount-likes">1.069 Likes</div>
              <div class="post-following__description">
                <span>{{ post.name }}</span>
                I'm {{ post.nickname }}
              </div>
              <div class="post-following__amount-comment">View all 100 comments</div>
              <div class="post-following__time-post">1 hour ago</div>
            </div>
            <div class="post-following__comment-wrapper">
              <input class="post-following__comment-input" type="text"
                     placeholder="Add a comment...">
              <button class="post-following__btn-post">Post</button>
            </div>
          </article>
          <div
            v-show="$store.getters['home/postFollowing'].length > 3"
            v-intersection="loadPosts" class="observer">
          </div>
        </div>
      </div>
      <div class="post-feed__sidebar sidebar">
        <div class="sidebar__main-user contact">
          <img class="sidebar__img-main-user" src="../assets/img/posts/girl-post.png" alt="girl">
          <div class="sidebar__info-main-user contact__info">
            <div class="sidebar__name-main-user contact__name">shirleyromero</div>
            <div class="contact__status">Shirley romero</div>
          </div>
          <a class="contact__link" href="#">Switch</a>
        </div>
        <div class="sidebar__suggestions suggestions">
          <div class="suggestions__title">Suggestions For You</div>
          <a class="suggestions__show-all" href="">See All</a>
        </div>
        <div class="sidebar__follow-user contact">
          <img class="sidebar__img-follow-user" src="../assets/img/posts/girl2-post.png" alt="girl">
          <div class="sidebar__info-follow-user contact__info">
            <div class="sidebar__name-follow-user contact__name">terylucas</div>
            <div class="sidebar__status-follow-user contact__status">
              Followed by terylucas + 2 more</div>
          </div>
          <a class="contact__link" href="#">Follow</a>
        </div>
        <div class="sidebar__follow-user contact">
          <img class="sidebar__img-follow-user" src="../assets/img/posts/girl3-post.png" alt="girl">
          <div class="sidebar__info-follow-user contact__info">
            <div class="sidebar__name-follow-user contact__name">lauramatthews</div>
            <div class="sidebar__status-follow-user contact__status">
              Followed by lauramatthews + 2 more</div>
          </div>
          <a class="contact__link" href="#">Follow</a>
        </div>
        <div class="sidebar__follow-user contact">
          <img class="sidebar__img-follow-user" src="../assets/img/posts/boy-post.png" alt="girl">
          <div class="sidebar__info-follow-user contact__info">
            <div class="sidebar__name-follow-user contact__name">harryprescott</div>
            <div class="sidebar__status-follow-user contact__status">
              Followed by harryprescott + 2 more</div>
          </div>
          <a class="contact__link" href="#">Follow</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    loadPosts() {
      this.$store.dispatch('home/loadPostFollowing');
    },
  },
  mounted() {
    this.$store.dispatch('home/loadPostFollowing');
  },
};
</script>
