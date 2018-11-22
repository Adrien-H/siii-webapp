<template>
  <nav class="responsive-nav no-highlight">
    <div @click="toggle" class="nav-toggle" :class="opened ? 'active' : ''">Menu</div>

    <div @click="close" class="nav-container" :class="opened ? 'opened' : 'closed'">

      <ul class="nav-group">
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="{name: 'index'}">
            Page d'accueil
          </nuxt-link>
        </li>
      </ul>

      <ul class="nav-group">
        <li class="nav-item"><a class="nav-link" href="#">Philosophie</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Réserver</a></li>
      </ul>

      <ul class="nav-group">
        <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Classement</a></li>
      </ul>

    </div>

  </nav>
</template>

<script>
  // import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        opened: false,
      };
    },
    methods: {
      toggle () {
        this.opened = !this.opened;
      },
      close () {
        if (window.innerWidth < 850) {
          this.opened = false;
        }
      },
      logout () {
        this.$store.dispatch('logout').then(() => {
          this.$toast.show('À bientôt !', 'Déconnexion réussie')
        })
      }
    },
    mounted () {
      this.opened = window.innerWidth >= 850;
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.opened = window.innerWidth >= 850;
        });
      })
    },
  };
</script>

<style lang="scss">
  .responsive-nav {
    $nav-z-index: 100;
    $toggle-z-index: 200;
    .nav-toggle {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      padding: 12px 0 0 4px;
      height: 60px;
      width: 60px;
      border-radius: 0 0 100% 0;
      background-color: rgba(black, 0.4);
      color: rgba(white, 0.8);
      transition: all 1s ease-out;
      z-index: $toggle-z-index;
      &.active {
        background-color: rgba(black, 0.9);
        color: rgba(white, 1);
      }
      &:hover {
        cursor: pointer;
        box-shadow: 3px 2px 2px white;
      }
    }
    .nav-container {
      position: fixed;
      top: 0;
      left: -1000px;
      height: 100vh;
      width: 100vw;
      background-color: rgba(black, 0.8);
      transition: all 0.4s ease-out;
      z-index: $nav-z-index;
      &.opened {
        left: 0;
      }
      .nav-group {
        display: block;
        height: auto;
        padding: 0;
        border-bottom: 2px solid rgba(white, 0.2);
        .nav-item {
          padding: 0;
          height: auto;
          .nav-link {
            display: block;
            padding: 8px 0;
            height: 100%;
            color: rgba(white, 0.8);
            text-align: center;
            transition: all 0.1s ease-out;
            &:hover {
              color: rgba(white, 1);
              background-color: rgba(white, 0.1);
            }
          }
        }
      }
    }
    @media screen and (min-width: 850px) {
      .nav-container {
        margin-left: 60px;
        height: 45px;
        left: 0;
        top: 0;
        &.closed {
          top: -45px;
          box-shadow: 4px 4px 8px rgba(black, 0.8);
        }
        .nav-group {
          padding: 0;
          display: inline-block;
          border-bottom: none;
          &:not(:first-child) {
            border-left: 2px solid rgba(white, 0.2);
          }
          .nav-item {
            padding: 0;
            display: inline-block;
            .nav-link {
              display: block;
              height: 45px;
              padding: 12px;
            }
          }
        }
      }
    }
  }
</style>
