<template lang="html">
    <div id="app" class="wrapper">
        <main class="main" role="main">
            <v-calendar
              is-double-paned>
            </v-calendar>
            <v-date-picker
              mode='single'
              v-model='selectedValue'>
            </v-date-picker>
            <accommodations-list-calendar></accommodations-list-calendar>
        </main>
    </div>
</template>

<script>
import AccommodationsListCalendar from './components/accommodations-list-calendar.vue'

export default {
    name: 'app',
    data() {
      return {
        selectedValue: new Date(),
      };
    },
    computed: {
        accommodations () {
            return this.$store.getters.accommodations
        }
    },
    components: {
        AccommodationsListCalendar
    }
}
</script>

<style>
import 'v-calendar/lib/v-calendar.min.css';
</style>
