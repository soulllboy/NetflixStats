<template>
  <div class="outer flex-right" v-if="counterVal > 0">
    <img class="poster" :src="movie.poster" />
    <div class="flex-down info">
      <div class="flex-right">
        <div class="counter flex-right">{{ counterVal }}<span> M</span></div>
        <div class="infoMsg">
          <img
            v-if="msgIcon === 'user'"
            src="@/assets/icons/black/user.png"
            class="recolor-grey"
          />
          <img
            v-else
            src="@/assets/icons/black/clock-circle.png"
            class="recolor-grey"
          />
          <p class="message text-grey">{{ msg }}</p>
        </div>
      </div>
      <h2>
        {{ movie.title }}<span>{{ movie.part }}</span>
      </h2>
      <div class="flex-right staff">
        <img src="@/assets/icons/black/notification.png" class="recolor-grey" />
        <span>{{ movie.director }}</span>
        <span>Director</span>
      </div>
      <div class="flex-right staff">
        <img src="@/assets/icons/black/video-camera.png" class="recolor-grey" />
        <span>{{ movie.cinematographer }}</span>
        <span>Cinematographer</span>
      </div>
      <div class="flex-right raitings">
        <div class="raiting-box">
          <p class="text-grey">tomatometer</p>
          <div class="flex-right">
            <img
              v-if="movie.certified"
              src="@/assets/icons/color/tomato-meter-certified.png"
            />
            <img
              v-else-if="movie.tomatometer >= 60"
              src="@/assets/icons/color/tomato-meter-good.png"
            />
            <img v-else src="@/assets/icons/color/tomato-meter-bad.png" />
            <span>{{ movie.tomatometer }} <i>%</i> </span>
          </div>
        </div>
        <div class="raiting-box">
          <p class="text-grey">audience score</p>
          <div class="flex-right">
            <img
              v-if="movie.audience >= 60"
              src="@/assets/icons/color/tomato-audience-good.png"
            />
            <img v-else src="@/assets/icons/color/tomato-audience-bad.png" />
            <span>{{ movie.audience }} <i>%</i> </span>
          </div>
        </div>
        <div class="raiting-box">
          <p class="text-grey">imdb rating</p>
          <div class="flex-right">
            <img src="@/assets/icons/color/imdb-rating.png" />
            <span>{{ movie.imdb }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPiece",
  props: {
    movie: Object,
    counterVal: Number,
    msgIcon: String,
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
div.outer {
  width: 536px;
  height: 264px;
  padding: 24px;

  background: white;
  border: 1px solid rgba(42, 49, 53, 0.08);
  box-shadow: 0px 2px 8px rgba(42, 49, 53, 0.16);
  border-radius: 24px;
  &:hover {
    box-shadow: 0px 3px 16px rgba(42, 49, 53, 0.35);
    cursor: pointer;
  }

  .poster {
    width: 144px;
    height: 216px;
    border: 1px solid rgba(42, 49, 53, 0.1);
    box-shadow: 0px 1px 4px rgba(42, 49, 53, 0.15);
    border-radius: 12px;
  }
  .info {
    margin-left: 44px;

    .counter {
      padding: 4px 10px;
      // width: 80px;
      height: 40px;
      border: 1px solid #e31b39;
      border-radius: 8px;

      font-weight: 700;
      font-size: 26px;
      line-height: 32px;
      color: #e31b39;

      span {
        font-size: 20px;
        line-height: 32px;
        //moves "m" down a bit
        white-space: pre;
        align-self: flex-start;
      }
    }
    .infoMsg {
      display: flex;
      align-items: center;

      img {
        width: 16px;
        height: 16px;
        margin: 0 16px;
      }
      p.message {
        width: 68px;
        text-align: start;
      }
    }

    h2 {
      margin: 16px 0 4px;
      padding: 0;

      span {
        white-space: pre;
        color: #dce0e2;
      }
    }

    .staff {
      height: 24px;
      font-size: 15px;
      line-height: 24px;

      img {
        height: 16px;
        width: 16px;
      }
      :nth-child(2) {
        color: #2a3135;
        font-weight: 500;
        margin: 0 8px;
      }
      :nth-child(3) {
        color: #dce0e2;
        font-weight: 400;
      }
    }

    .raitings {
      width: 312px;
      height: 52px;
      margin-top: 16px;
      justify-content: space-between;

      .raiting-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        width: 96px;
        height: 52px;

        p {
          margin: 0 0 4px;
        }

        img {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }

        span {
          font-weight: 700;
          font-size: 26px;
          line-height: 32px;
          display: flex;
          align-items: center;
          color: #2a3135;

          i {
            font-weight: 500;
            font-size: 20px;
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>