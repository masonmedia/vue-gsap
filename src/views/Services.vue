<template>
    <div class="">
  <b-container fluid>
    <b-row class="min-vh-100 bg-info" align-v="center" align-h="center">
        <b-col lg="8" class="text-light text-left p-5">
          <h2 class="text">Title</h2>
          <p class=" text">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class=" text">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class=" text">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
        </b-col>
    </b-row>
  </b-container>

  <b-container fluid>
    <b-row>
        <b-col lg="12" class="text2 p-5">
          <h2 class="up">Title</h2>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat.</p>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat.</p>
        </b-col>
    </b-row>

    <b-row>
        <b-col lg="6" align-self="center" class="text-left p-5">
          <h2 class="up">Title</h2>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod.</p>
        </b-col>
        <b-col lg="6" align-self="center" class="">
            <b-img src="https://via.placeholder.com/400/0000FF/808080?Text=Placeholder" fluid 
            class="d-flex mx-auto img-thumbnail shadow"></b-img>
        </b-col>
    </b-row>

    <b-row>
        <b-col lg="12" class="p-5">
          <h2 class="left">Title</h2>
          <p class="left">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="left">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="left">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
        </b-col>
    </b-row>

     <b-row>
        <b-col lg="12" class="text2 p-5">
          <h2 class="up">Title</h2>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat.</p>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat.</p>
        </b-col>
    </b-row>

    <b-row>
        <b-col lg="6" align-self="center" class="text-left p-5">
          <h2 class="up">Title</h2>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod.</p>
        </b-col>
        <b-col lg="6" align-self="center" class="left">
            <b-img src="https://via.placeholder.com/400/0000FF/808080?Text=Placeholder" fluid 
            class="d-flex mx-auto img-thumbnail shadow"></b-img>
        </b-col>
    </b-row>

  </b-container>

  </div>
</template>

<script>
// import animate from '../animations'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: 'Services',
    // data() {
    //     return {
    //         show: false
    //     }
    // },
    methods: {
      // scrollAnimation() {
      //   gsap.utils.toArray('.up').forEach((el) => {
      //   gsap.from(el, {
      //       scrollTrigger: {
      //           trigger: el,
      //           start: 'top center', //this string defines the trigger and scroller start
      //           end: 'bottom center', //this string defines the trigger and scroller end
      //           scrub: 1
      //       },
      //       y: '200px',
      //       autoAlpha: 0,
      //       duration: 5,
      //       ease: "back.inOut(2)",
      //     });
      //   });    
      // },

      timeline() {
        const tl = gsap.timeline()
        tl.from('.title', { y: 100, opacity: 0, ease: 'linear' })
        tl.from('.subtitle', { rotate: 90, opacity: 0, x: 100, ease: "back.inOut(1)"})
      },

      banner() {
        gsap.from(".text", {
          duration: 1,
          // scale: 0.8,
          y: 50,
          opacity: 0, 
          delay: 0.5, 
          stagger: 0.2,
          ease: "back", 
          force3D: true
        });
      },
      // https://greensock.com/get-started#tweening-basics
      
    
      batch() {
        ScrollTrigger.batch(".up", {
            onEnter: (elements) => {
            gsap.from(elements, {
              // start: 'top center', //this string defines the trigger and scroller start
              // end: 'bottom center', //this string defines the trigger and scroller end
              // scrub: 1,
              opacity: 0, 
              y: 50,
              stagger: 0.5,
              duration: 1.5,
              ease: "back",
              });
            console.log(elements.length, "elements entered");
          },
       });
      }
      //  from simple example: https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()
      // good for multiple elements without batch
      // examples: https://greensock.com/st-demos/
    },
    mounted() {
        // this.animate();
        // this.scrollAnimation();
        this.batch();
        this.banner();
    }
}

</script>
