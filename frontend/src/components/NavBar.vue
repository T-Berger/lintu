<template dark class="pa-0">
  <!--Navbar-->
  <div>
    <v-navigation-drawer permanent dark id="navbar" class="hidden-md-and-down">
      <!--Icon Startmenü-->
      <button id="startmenü-icon" v-on:click="switchStartButton()">
        <i class="fab fa-linux"></i>
      </button>
      <!--Navbar-icons-->
      <ul id="ul-navbar">
        <div v-for="(item,index) in items" :key="item.icon">
          <li>
            <v-tooltip right v-if="toogletooltip == true" v-model="toogletooltip">
              <a class="list-item" v-on:click="scrollMenu(item.jumpId)"  slot="activator">
                <v-icon dark>{{item.icon}}</v-icon>
              </a>
              <span>{{item.tooltip}}</span>
            </v-tooltip>
            <v-tooltip right v-else="" v-model="form._id[index]">
              <a class="list-item" v-on:click="scrollMenu(item.jumpId)"  slot="activator">
                <v-icon dark>{{item.icon}}</v-icon>
              </a>
              <span>{{item.tooltip}}</span>
            </v-tooltip>
          </li>
        </div>
        <li>
          <!--<v-tooltip right v-model="toogletooltip">-->
          <!--<button class="list-button" v-on:click="toogle()" slot="activator">-->
          <!--<v-icon dark>fa-info-circle</v-icon>-->
          <!--</button>-->
          <!--<span>Toogle Tooltip</span>-->
          <!--</v-tooltip>-->
          <!--</li>-->

        <li>
          <button class="list-button" v-on:click="toogle()">
            <v-icon dark>fa-info-circle</v-icon>
          </button>
        </li>

        <li>
          <a id="arrowcrosslist" class="list-item" href="#" v-on:click="switchContentPageSpacing()">
            <img src="../assets/Arrow_Cross.svg" alt="||-||">
          </a>
        </li>
        <li id="powerbutton"><button
          v-on:click="logout">
          <a class="list-item" href="">
            <i class="fas fa-power-off"></i>
          </a></button>
        </li>
      </ul>
    </v-navigation-drawer>
  </div>


</template>
<script>
  import firebase from 'firebase'
  // import MobileNavbar from './mobile-components/MobileNavbar.vue'
  export default {
    name: 'nav-bar',
    // components: {
    //   MobileNavbar
    // },
    data () {
      return {
        props: ['addStatusClass'],
        items: [
          {jumpId: 'profil', icon: 'fa-chevron-circle-right', tooltip: 'dashboard'},
          {jumpId: 'profil', icon: 'fa-cogs', tooltip: 'question_answer'},
          {jumpId: 'profil', icon: 'fa-info-circle', tooltip: 'question_answer'}
        ],
        form: {
          _id: []
        },
        toogletooltip: false
      }
    },
    methods: {
      switchStartButton: function () {
        this.$store.commit('switchStartMenuButton')
      },
      switchContentPageSpacing: function () {
        this.$store.commit('switchContentPageSpacing')
      },
      toogle: function (event) {
        this.toogletooltip = !this.toogletooltip
        if (this.toogletooltip === false) {
          this.$forceUpdate()
        }
      },
      logout: function () {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      },
      scrollMenu: function (id) {
        this.$store.commit('switchStartMenuButtonOnTrue')
        console.log('OK')
        this.$nextTick(function () {
          this.$store.commit('scroll', id)
        })
      }
    },
    mounted: function () {
      $('#powerbutton').hide()
      $('.list-item > img').show()
    }
  }
</script>

<style scoped>
  .theme--dark,.application .theme--dark.navigation-drawer .list,
  .application .theme--dark.navigation-drawer .subheader,
  .application .theme--dark.navigation-drawer a:not(.list__tile--active) {
    color: #575757 !important;
  }
  /*LIST ITEMS-NAVBAR*/
  .list-item {
    background: #000;
    color: #575757;
    text-align: center;
    height: 5vw;
    width: auto;
    vertical-align: middle;
    line-height: 2.5em;
    border-bottom: 1px solid #060606;
    position: relative;
    display: block;
    text-decoration: none;
    border-bottom: 2px solid grey;
    -webkit-transition: all .25s linear;
    transition: all .25s linear;
    font-size: 20pt;
  }
  .list-button {
    background: #000;
    color: #575757;
    text-align: center;
    height: 5vw;
    width: var(--breiteNavbar-);
    vertical-align: middle;
    line-height: 2.5em;
    border-bottom: 1px solid #060606;
    position: relative;
    display: block;
    text-decoration: none;
    border-bottom: 2px solid grey;
    -webkit-transition: all .25s linear;
    transition: all .25s linear;
    font-size: 20pt;
  }
  .list-item:hover, .list-button:hover {
    background: #ff6e42;
    color: #fffcfb;
  }
  .list-item:hover:before, .list-item:hover:after, .list-button:before, .list-button:hover:after {
    -webkit-transition: all .25s linear;
    transition: all .25s linear;
  }
  .list-item:hover:before,.list-button:before {
    background: #b65234;
  }
  .list-item:hover:after, .list-button:after {
    background: #b65234;
  }
  .list-item:before, .list-item:after {
    content: '';
    position: absolute;
  }
  .list-item:after, .list-button:after {
    background: #181818;
  }
  .list-item:before, .list-button:after {
    background: #121212;
  }
  .list-item > img{
    width: calc(var(--breiteNavbar-) - 10px);
    height: auto;
    color: white;
    filter: invert(35%);
    border-top: 2px double grey;
  }
  #arrowcrosslist{
    position: fixed;
    bottom: 0px;
    width: var(--breiteNavbar-);
  }
  button{
    background-color: buttonface;
    color: black;
  }
  button.selected{
    color:white !important;
    background-color: #303030 !important;
  }
  #navbar {
    background-color: black;
    width: var(--breiteNavbar-) !important;
    position: fixed;
    left: 0px;
    top: 0;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: auto;
  }
  #ul-navbar {
    padding-left: 0px;
    list-style-type: none;
    border-right: 2px solid black;
  }
</style>
