<template>
  <div id="display">

    <div id="kurs">

      <!--Aufgabenbeschreibung-->
      <p>
        Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave. Lorem Ipsum ka qenë teksti shabllon i industrisë
        që nga vitet 1500, kur një shtypës i panjohur morri një galeri shkrimesh dhe i ngatërroi për të krijuar një libër mostër. Teksti i ka mbijetuar jo vetëm pesë shekujve, por edhe kalimit në shtypshkrimin elektronik, duke ndenjur në thelb i pandryshuar. U bë i njohur në vitet 1960 me lëshi
      </p>
      <!--Terminal-->
      <div id="terminal">
        <!--Ausgabe-->
        <div id="terminalOutput">
          <ul id="output">
          </ul>
        </div>
      </div>
    </div>
    <!--Startmenu div-->
    <div id="startmenü-display">
      <ul id="icon-felder">
        <li>Beispsldfpskpksadfpkdsfkdkfspkdfkdsfpk</li>
      </ul>

      <hr>

      <ul id="menu-leiste">
        <li>asklödfjaklsjdlkasdjlkljk</li>
      </ul>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'content-page'
  }
</script>

<style scoped>
  #kurs{
    position: relative;
    width: 800px;
    height: 500px;
  }
  #terminal{
    position: fixed;
    top:0;
    right: 0;
    width: 200px;
    height: 100%;
    outline: 1px solid #ccc;
  }
</style>
