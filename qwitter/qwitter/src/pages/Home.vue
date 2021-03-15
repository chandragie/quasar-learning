<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
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
            @click="addNewQweet"
          />
        </div>
      </div>
      <q-separator size="10px" color="grey-2" class="divider" />

      <!-- Content -->

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item class="q-py-md" v-for="qweet in qweets" :key="qweet.id">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://wallpapercave.com/wp/wp7479859.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1"
                ><strong>chandragie</strong>
                <span class="text-grey-7">
                  @chandragie <br class="lt-md" />&bull;
                  {{ qweet.date | relativeDate }}
                </span>
              </q-item-label>
              <q-item-label class="qweet-content text-body1">
                {{ qweet.content }}
              </q-item-label>

              <div class="row justify-between q-mt-sm qweet-icons">
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="far fa-comment"
                  size="sm"
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="fas fa-retweet"
                  size="sm"
                />
                <q-btn
                  flat
                  round
                  :color="qweet.liked ? 'pink' : 'grey'"
                  :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'"
                  size="sm"
                  @click="likeQweet(qweet)"
                />

                <q-btn
                  flat
                  round
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                  @click="deleteQweet(qweet.id)"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from "src/boot/firebase";
import { formatDistance } from "date-fns";
export default {
  name: "PageHome",
  data() {
    return {
      qweet: "",
      qweets: [],
    };
  },
  filters: {
    relativeDate(date) {
      return formatDistance(date, new Date());
    },
  },
  methods: {
    addNewQweet() {
      let _newQweet = {
        content: this.qweet,
        date: Date.now(),
        liked: false,
      };

      db.collection("qweets")
        .add(_newQweet)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });

      this.qweet = "";
    },
    deleteQweet(id) {
      db.collection("qweets")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    likeQweet(qweet) {
      db.collection("qweets")
        .doc(qweet.id)
        .update({
          liked: !qweet.liked,
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    },
  },
  mounted() {
    db.collection("qweets")
      .orderBy("date")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let qweetChange = change.doc.data();
          qweetChange.id = change.doc.id;
          if (change.type === "added") {
            console.log("New qweet: ", qweetChange);
            this.qweets.unshift(qweetChange);
          }
          if (change.type === "modified") {
            console.log("Modified qweet: ", qweetChange);
            let index = this.qweets.findIndex(
              (qweet) => qweet.id === qweetChange.id
            );
            Object.assign(this.qweets[index], qweetChange);
          }
          if (change.type === "removed") {
            console.log("Removed qweet: ", qweetChange);
            let index = this.qweets.findIndex(
              (qweet) => qweet.id === qweetChange.id
            );
            this.qweets.splice(index, 1);
          }
        });
      });
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

.qweet:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)
</style>