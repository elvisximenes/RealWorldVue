<template>
    <div v-if="event">
        <h4>{{ event.title }}</h4>
        <p>@{{ event.time }} on {{ event.date }}</p>
        <p>{{event.description}}</p>
    </div>
</template>
<script>
import EventService from "@/services/EventService";
    export default {
        name:"EventDetails",
        data() {
            return {
                event:null,
            }
        },
        props:['id'],
        created() {
            EventService.getEvent(this.id)
            .then((response)=> {
                this.event = response.data
            })
            .catch((error)=> {
                console.log(error)
            });
        }

    }
</script>
