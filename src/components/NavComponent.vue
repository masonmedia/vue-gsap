<template>
<b-navbar toggleable="lg" type="dark" variant="info" class="d-flex">
    <router-link to="/"
    class="navbar-brand">Home</router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link 
        class="nav-item"
        v-for="route in $router.options.routes"
        :key="route.path"
        :to="route.path"
        v-html="route.name"></router-link>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: 'NavComponent',
    data() {
        return {}
    }
}
</script>