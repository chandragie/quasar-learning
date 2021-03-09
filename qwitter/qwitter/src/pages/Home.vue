<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          bottom-slots
          v-model="qweet"
          placeholder="What's happening"
          counter
          maxlength="280"
          autogrow
          class="new-qweet"
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://wallpapercave.com/wp/wp7479859.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          unelevated
          rounded
          color="primary"
          label="Qweet"
          no-caps
          class="text-weight-bold q-mb-lg"
          :disable="!qweet"
        />
      </div>
    </div>
    <q-separator size="10px" color="grey-2" class="divider" />

    <!-- Content -->

    <q-list separator>
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://wallpapercave.com/wp/wp7479859.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1"
            ><strong>chandragie</strong>
            <span class="text-grey-7"> @chandragie</span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            doloribus eligendi deserunt earum placeat minus tempore, possimus,
            corporis, ab molestias quos! Aspernatur aliquam, quos porro minus
            itaque aliquid dolorem ipsum!
          </q-item-label>

          <div class="row justify-between q-mt-sm qweet-icons">
            <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
            <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
            <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
            <q-btn flat round color="grey" icon="fas fa-trash" size="sm" />
          </div>
        </q-item-section>

        <q-item-section side top> 1 min ago </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "PageHome",
  data() {
    return {
      qweet: "",
    };
  },
};
</script>

<style lang="sass">
.new-qweet textarea
  font-size: 19px
  line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.qweet-content
  white-space: pre-line

.qweet-icons
  margin-left: -5px
</style>