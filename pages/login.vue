<template>
  <form class="form-login" :action="actionUrl" method="post" @submit.prevent="login">

    <fieldset>
      <legend class="al3">Connexion</legend>
      <input v-model="email" type="text" name="email" value=""
             id="email" autocomplete="off" placeholder="Adresse email"/>

      <input v-model="password" type="password" id="password" name="password"
             autocomplete="new-password" autocorrect="off" autocapitalize="off"
             placeholder="Mot de passe"/>

      <!--<div class="flow">-->
      <!--<input type="checkbox" id="remember_me" name="_remember_me" value="false" />-->
      <!--<label for="remember_me">Se souvenir de moi</label>-->
      <!--</div>-->

      <!--<input type="hidden" name="_target_path" value="" />-->
    </fieldset>

    <button type="submit" class="al6">Se connecter</button>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        email: null,
        password: null,
        error: null
      }
    },
    computed: {
      actionUrl () {
        return '/login'
      }
    },
    methods: {
      async login () {
        try {
          // this.$toast.show('Connexion en cours...', {duration: 1400})
          await this.$auth.loginWith('local', {
            data: { email: this.email, password: this.password, }
          }).then((res) => {
            if (this.$auth.loggedIn) {
              this.$toast.success('Connexion réussie')
            }
          })
        } catch (e) {
          this.error = e.response.data.message
          this.$toast.error(e.response.data.message)
        }
      }
    }
  };
</script>
