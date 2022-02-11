<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
  transition: 0.4s;
}

html {
  background: #fafafa;
}
body {
  margin: 56px clamp(0px, ((100vw - 1116px) / 2), 100vw);
}
a {
  text-decoration: none;
}

header {
  width: 1116px;

  & > img {
    width: 216px;
    height: 72px;
    margin: 24px 72px 0px 24px;
    align-self: flex-start;
  }

  .view-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    width: 504px;
    margin-right: 104px;

    h1 {
      font-weight: 700;
      font-size: 38px;
      line-height: 56px;
      color: rgba(42, 49, 53, 0.9);
      margin: 16px 0 8px;
    }
    p {
      font-weight: 400;
      font-size: 19px;
      line-height: 24px;
      color: #2a3135;
      margin: 0;
      padding: 0;
    }
  }

  .date-info {
    margin-top: 16px;
    img {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }

  .column-buttons {
    align-self: flex-start;
    margin-top: 24px;
    height: 112px;
    justify-content: space-between;
  }
}

main {
  width: 1116px;
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    margin-bottom: 56px;
  }
}

footer {
  width: 1056px;
  margin: 56px (72px - 48px);
  display: flex;
  justify-content: space-between;

  .sources {
    width: 600px;
    height: 100px;

    h3 {
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      text-transform: capitalize;
      color: #dce0e2;
      margin: 0 0 4px;
      text-align: start;
    }
    .link-list {
      display: flex;
      flex-wrap: wrap;

      .link-source {
        margin-right: 16px;
        padding: 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;

        img {
          width: 16px;
          height: 16px;
        }
        a {
          text-decoration: none;

          &:hover {
            text-shadow: 1px 1px 2px #000000;
          }

          :nth-child(1) {
            margin: 0 8px;
            text-transform: capitalize;
            color: #868c90;
          }
          :nth-child(2) {
            color: #dce0e2;
          }
        }
      }
    }
  }

  & > img {
    width: 72px;
    height: 72px;
  }
}

.recolor-grey {
  filter: invert(56%) sepia(9%) saturate(199%) hue-rotate(161deg)
    brightness(96%) contrast(91%);
}
.recolor-grey-light {
  filter: invert(93%) sepia(11%) saturate(60%) hue-rotate(156deg)
    brightness(96%) contrast(89%);
}
.recolor-red {
  filter: invert(21%) sepia(68%) saturate(6927%) hue-rotate(343deg)
    brightness(92%) contrast(92%);
}
.text-grey {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.02em;
  font-size: 11px;
  line-height: 16px;
  font-feature-settings: "liga" off;
  color: #868c90;
}
.flex-right {
  display: flex;
  align-items: center;
}
.flex-down {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.button-router {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dce0e2;
  border-radius: 8px;
  cursor: pointer;

  color: #dce0e2;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-feature-settings: "liga" off;

  &:not(.button-red):hover {
    filter: invert(56%) sepia(9%) saturate(199%) hue-rotate(161deg)
      brightness(96%) contrast(91%);
    border: 1px solid #868c90;
  }
}
.button-red {
  color: #e31b39;
  border: 1px solid #e31b39;
}
.button-small {
  width: 86px;
  height: 32px;
  margin-right: 16px;
  padding: 8px 12px;

  img {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
}
.button-big {
  width: 160px;
  height: 48px;
  padding: 8px 16px;

  img:nth-child(1) {
    width: 20px;
    height: 20px;
  }
  img:nth-child(2) {
    width: 12px;
    height: 12px;
    margin: 0 16px;
  }
  p {
    text-align: start;
  }
}

#app {
  font-family: "DM Sans", sans-serif;
  // font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
