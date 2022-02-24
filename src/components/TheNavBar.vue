<template>
  <header class="header">
    <div class="header__content _container">
      <a href="#" class="header__logo">
        <img src="../assets/Logo.png" alt="Instagram logo">
      </a>
      <div class="header__search search">
      <input class="search__input" type="text" placeholder="Search">
      </div>
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <router-link to="/home" class="menu__link _icon-home"></router-link>
          </li>
          <li class="menu__item">
            <router-link to="/messenger" class="menu__link _icon-messenger"></router-link>
          </li>
          <li class="menu__item"><a href="" class="menu__link _icon-new-posts"></a></li>
          <li class="menu__item"><a href="" class="menu__link _icon-navigate"></a></li>
          <li class="menu__item"><a href="" class="menu__link _icon-favourite"></a></li>
          <li class="menu__item">
            <router-link to="/" class="menu__link">
            <img src="../assets/img/posts/girl-post.png" alt="">
             </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

};
</script>
