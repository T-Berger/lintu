<template>
  <v-layout><!--class="ml-4 mr-4 pa-2"-->
    <v-container>
      <v-flex>
          <v-container id="imageContainer">
            <v-btn fab round id="profilPic">
              <image v-if="profilPic != null" src="profilPic" height="200px">
              </image>
              <v-icon  drark x-large v-else="">
                mdi-account
              </v-icon>
            </v-btn>
          </v-container>
          <v-container id="profilSettings">
              <div>
                <h3 class="headline mb-0">Profil</h3>
                <div>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</div>
              </div>
              <v-btn flat color="grey">Share</v-btn>
              <v-btn flat color="grey">Explore</v-btn>
          </v-container>
      </v-flex>
    </v-container>
  </v-layout>

</template>

<script>
  export default {
    name: 'profil',
    data () {
      return {
        // user: [
        //   {name: 'Example', profilPic: ''}
        // ]
        name: 'Example',
        profilPic: null
      }
    }
  }
</script>

<style scoped>
  /*#profilPic{*/
  /*position: relative;*/
  /*top: 0px;*/
  /*left: 0px;*/
  /*padding-top: 2vw;*/
  /*padding-left: 2vw;*/
  /*margin: 20px 22px 40px 40px*/
  /*}*/
  #imageContainer{
    position: relative;
    top:20px;
    left:0px;
    width: 20%;
    height: 100%;
    border-right: dimgrey 2px double;
    margin-left: 0px;
    float: left;
  }
  #profilSettings{
    position: relative;
    top:0px;
    padding-top: 0px;
  }


</style>
