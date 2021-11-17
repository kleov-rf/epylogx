<template>
  <div id="superContainer">
    <div id="sideMenu">
      <div class="sideMenu_element">
        <div class="sideElementIcon">
          <b-icon-alarm></b-icon-alarm>
        </div>
        <div class="sideElementLabel">
          Sapoperrohijueputaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
      </div>
    </div>
    <div id="mainContainer"></div>
    <div id="chatsRightSideMenu"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#superContainer {
  width: 100vw;
  height: 100vh;
  background-color: #f0f3fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

#mainContainer {
  width: 90vw;
  height: 90vh;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.282);
  background-color: #d8d8d8;
}

#sideMenu {
  left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  height: 95vh;
  width: 7vw;
  min-width: fit-content;
  padding: 1vw;
}

.sideMenu_element {
  min-height: fit-content;
  height: 3vw;
  background-color: rgba(255, 255, 255, 0.1);
  outline: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
  min-width: fit-content;
  padding: 1vw;
}

.sideElementIcon {
  margin: 1vw;
  font-size: 2em;
}

.sideElementLabel {
  opacity: 0;
  width: fit-content;
  font-size: 0;
  font-weight: 600;
  transition: all 0.2s ease-in-out, opacity 0.2s ease-in-out 0.25s;
}

#sideMenu:hover {
  width: 10%;
  backdrop-filter: blur(8px);
}

#sideMenu:hover .sideMenu_element .sideElementLabel {
  font-size: 1.2em;
  opacity: 1;
}

.sideMenu_element:hover {
  background-color: #fff;
  box-shadow: 2px 5px #dedede;
}

#chatsRightSideMenu {
  background-color: hsla(240, 100%, 27%, 0.6);
  width: 4%;
  height: 18%;
  right: 3%;
}

#chatsRightSideMenu:hover {
  height: 24%;
}

#sideMenu,
#chatsRightSideMenu {
  backdrop-filter: blur(4px);
  transition: all 0.25s ease;
  position: absolute;
  border-radius: 50px;
  z-index: 1;
}
</style>
