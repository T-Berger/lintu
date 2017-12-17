<template  class="startmenü-display">
  <c-container>
  <v-card dark  class="startmenü-display">
    <v-list two-line class="startmenü-display">
      <template v-for="item in items">
        <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
        <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
        <v-list-tile dark avatar v-else @click="">
          <v-icon dark large>
            fa-cogs
          </v-icon>
          <v-list-tile-content dark>
            <v-list-tile-title dark v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title dark v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-card>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia. Auctor elit sed vulputate mi sit amet mauris commodo. Nunc non blandit massa enim nec. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Sed velit dignissim sodales ut eu sem integer vitae justo. Quam pellentesque nec nam aliquam sem et tortor consequat. Molestie at elementum eu facilisis. Id ornare arcu odio ut sem nulla. Consequat nisl vel pretium lectus quam id leo in vitae. Commodo odio aenean sed adipiscing diam. Justo laoreet sit amet cursus sit amet dictum sit amet. Risus nec feugiat in fermentum. Ac auctor augue mauris augue. Eget lorem dolor sed viverra ipsum. Eu volutpat odio facilisis mauris sit amet massa vitae. Integer vitae justo eget magna fermentum iaculis eu non. Non curabitur gravida arcu ac. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ultricies leo integer malesuada nunc vel risus commodo viverra. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Dui ut ornare lectus sit amet. Interdum varius sit amet mattis vulputate enim. Nulla at volutpat diam ut venenatis. Libero nunc consequat interdum varius sit amet. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Morbi non arcu risus quis varius quam quisque id. Velit scelerisque in dictum non consectetur. Non enim praesent elementum facilisis leo vel fringilla est. Id consectetur purus ut faucibus pulvinar elementum integer enim. Tristique senectus et netus et malesuada fames ac. Massa placerat duis ultricies lacus sed turpis tincidunt id. Viverra nam libero justo laoreet sit amet cursus. Et malesuada fames ac turpis. Feugiat vivamus at augue eget arcu dictum. Proin libero nunc consequat interdum. Sodales ut etiam sit amet nisl purus in mollis. Cras adipiscing enim eu turpis. Non diam phasellus vestibulum lorem sed risus. Mattis nunc sed blandit libero volutpat sed cras. Tristique risus nec feugiat in fermentum posuere. Turpis nunc eget lorem dolor sed. Sapien eget mi proin sed libero enim. Vitae ultricies leo integer malesuada nunc vel risus commodo. Ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod quis. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Nibh cras pulvinar mattis nunc. Tellus orci ac auctor augue. Orci dapibus ultrices in iaculis nunc sed. A iaculis at erat pellentesque adipiscing commodo. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Eget aliquet nibh praesent tristique. Placerat orci nulla pellentesque dignissim enim sit. Suspendisse interdum consectetur libero id faucibus nisl. Sapien pellentesque habitant morbi tristique senectus. Magna sit amet purus gravida quis blandit. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Vel turpis nunc eget lorem dolor sed viverra ipsum. Eget magna fermentum iaculis eu non. Dignissim convallis aenean et tortor at risus viverra. Mattis enim ut tellus elementum sagittis vitae. Nisi est sit amet facilisis magna etiam tempor. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aliquet eget sit amet tellus cras adipiscing. Sit amet consectetur adipiscing elit pellentesque habitant. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Pellentesque elit ullamcorper dignissim cras tincidunt. Vitae et leo duis ut diam quam nulla porttitor massa. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Duis at tellus at urna condimentum mattis pellentesque id nibh. Molestie at elementum eu facilisis sed odio morbi. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Facilisis gravida neque convallis a cras. Diam phasellus vestibulum lorem sed. Placerat orci nulla pellentesque dignissim. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Lectus magna fringilla urna porttitor rhoncus dolor purus. Ut diam quam nulla porttitor. Enim ut sem viverra aliquet. Vitae semper quis lectus nulla at. In nibh mauris cursus mattis molestie a iaculis at erat. Mollis aliquam ut porttitor leo a diam sollicitudin. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Cursus metus aliquam eleifend mi. Nulla porttitor massa id neque. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Orci nulla pellentesque dignissim enim sit amet. At tempor commodo ullamcorper a lacus vestibulum sed. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Urna molestie at elementum eu. Amet porttitor eget dolor morbi non arcu risus quis. Et egestas quis ipsum suspendisse ultrices gravida. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Nulla porttitor massa id neque aliquam vestibulum morbi. Ut porttitor leo a diam sollicitudin tempor. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.</p>
    <a id="profil">Profil</a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia. Auctor elit sed vulputate mi sit amet mauris commodo. Nunc non blandit massa enim nec. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Sed velit dignissim sodales ut eu sem integer vitae justo. Quam pellentesque nec nam aliquam sem et tortor consequat. Molestie at elementum eu facilisis. Id ornare arcu odio ut sem nulla. Consequat nisl vel pretium lectus quam id leo in vitae. Commodo odio aenean sed adipiscing diam. Justo laoreet sit amet cursus sit amet dictum sit amet. Risus nec feugiat in fermentum. Ac auctor augue mauris augue. Eget lorem dolor sed viverra ipsum. Eu volutpat odio facilisis mauris sit amet massa vitae. Integer vitae justo eget magna fermentum iaculis eu non. Non curabitur gravida arcu ac. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ultricies leo integer malesuada nunc vel risus commodo viverra. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Dui ut ornare lectus sit amet. Interdum varius sit amet mattis vulputate enim. Nulla at volutpat diam ut venenatis. Libero nunc consequat interdum varius sit amet. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Morbi non arcu risus quis varius quam quisque id. Velit scelerisque in dictum non consectetur. Non enim praesent elementum facilisis leo vel fringilla est. Id consectetur purus ut faucibus pulvinar elementum integer enim. Tristique senectus et netus et malesuada fames ac. Massa placerat duis ultricies lacus sed turpis tincidunt id. Viverra nam libero justo laoreet sit amet cursus. Et malesuada fames ac turpis. Feugiat vivamus at augue eget arcu dictum. Proin libero nunc consequat interdum. Sodales ut etiam sit amet nisl purus in mollis. Cras adipiscing enim eu turpis. Non diam phasellus vestibulum lorem sed risus. Mattis nunc sed blandit libero volutpat sed cras. Tristique risus nec feugiat in fermentum posuere. Turpis nunc eget lorem dolor sed. Sapien eget mi proin sed libero enim. Vitae ultricies leo integer malesuada nunc vel risus commodo. Ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod quis. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Nibh cras pulvinar mattis nunc. Tellus orci ac auctor augue. Orci dapibus ultrices in iaculis nunc sed. A iaculis at erat pellentesque adipiscing commodo. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Eget aliquet nibh praesent tristique. Placerat orci nulla pellentesque dignissim enim sit. Suspendisse interdum consectetur libero id faucibus nisl. Sapien pellentesque habitant morbi tristique senectus. Magna sit amet purus gravida quis blandit. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Vel turpis nunc eget lorem dolor sed viverra ipsum. Eget magna fermentum iaculis eu non. Dignissim convallis aenean et tortor at risus viverra. Mattis enim ut tellus elementum sagittis vitae. Nisi est sit amet facilisis magna etiam tempor. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aliquet eget sit amet tellus cras adipiscing. Sit amet consectetur adipiscing elit pellentesque habitant. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Pellentesque elit ullamcorper dignissim cras tincidunt. Vitae et leo duis ut diam quam nulla porttitor massa. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Duis at tellus at urna condimentum mattis pellentesque id nibh. Molestie at elementum eu facilisis sed odio morbi. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Facilisis gravida neque convallis a cras. Diam phasellus vestibulum lorem sed. Placerat orci nulla pellentesque dignissim. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Lectus magna fringilla urna porttitor rhoncus dolor purus. Ut diam quam nulla porttitor. Enim ut sem viverra aliquet. Vitae semper quis lectus nulla at. In nibh mauris cursus mattis molestie a iaculis at erat. Mollis aliquam ut porttitor leo a diam sollicitudin. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Cursus metus aliquam eleifend mi. Nulla porttitor massa id neque. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Orci nulla pellentesque dignissim enim sit amet. At tempor commodo ullamcorper a lacus vestibulum sed. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Urna molestie at elementum eu. Amet porttitor eget dolor morbi non arcu risus quis. Et egestas quis ipsum suspendisse ultrices gravida. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Nulla porttitor massa id neque aliquam vestibulum morbi. Ut porttitor leo a diam sollicitudin tempor. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.</p>
  </c-container>
</template>

<script>
    export default {
      name: 'list-setting',
      data () {
        return {
          items: [
            { header: 'Today' },
            {
              avatar: '/static/doc-images/lists/1.jpg',
              title: 'Brunch this weekend?',
              subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            { divider: true, inset: true },
            {
              avatar: '/static/doc-images/lists/2.jpg',
              title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
              subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
            },
            { divider: true, inset: true },
            {
              avatar: '/static/doc-images/lists/3.jpg',
              title: 'Oui oui',
              subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
            },
            { divider: true, inset: true },
            {
              avatar: '/static/doc-images/lists/4.jpg',
              title: 'Birthday gift',
              subtitle: "<span class='grey--text text--darken-2'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
            },
            { divider: true, inset: true },
            {
              avatar: '/static/doc-images/lists/5.jpg',
              title: 'Recipe to try',
              subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
            }
          ]
        }
      }
    }
</script>

<style scoped>
  /*STARTMENÜ*/
  .startmenü-display{
    position: relative;
    color:white;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    opacity: 0.9;
  }
</style>
