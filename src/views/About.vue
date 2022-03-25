<template>
   <div class="" style="position: relative; overflow: hidden">
  <b-container fluid>
    <header>
      <b-row class="min-vh-100 bg-info" align-v="center" align-h="center">
          <b-col lg="8" class="text-light text-left p-5">
            <h2 class="fade-up">Title</h2>
            <p class="fade-up">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          </b-col>
      </b-row>
    </header>
  </b-container>

  <b-container fluid>
    <b-row class="section">
        <b-col lg="12" class="text2 p-5">
          <h2 class="up">Title</h2>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat.</p>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat.</p>
        </b-col>
    </b-row>

    <b-row class="section">
        <b-col lg="6" align-self="center" class="text-left p-5">
          <h2 class="right">Title</h2>
          <p class="right">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="right">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod.</p>
        </b-col>
        <b-col lg="6" align-self="center" class="left">
            <b-img src="https://via.placeholder.com/400/0000FF/808080?Text=Placeholder" fluid 
            class="d-flex mx-auto img-thumbnail shadow"></b-img>
        </b-col>
    </b-row>

    <b-row class="section">
        <b-col lg="12" class="p-5">
          <h2 class="left">Title</h2>
          <p class="left">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="left">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="left">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
        </b-col>
    </b-row>

     <b-row class="section">
        <b-col lg="12" class="text2 p-5">
          <h2 class="up">Title</h2>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat.</p>
          <p class="up">Dolore est velit dolor laboris ad Lorem laborum consequat.</p>
        </b-col>
    </b-row>

    <b-row class="section">
        <b-col lg="6" align-self="center" class="text-left p-5">
          <h2 class="right">Title</h2>
          <p class="right">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod eiusmod deserunt exercitation. Duis est qui irure ipsum. Consectetur consectetur magna Lorem aliquip cillum proident ipsum consequat Lorem ad deserunt. Aliqua fugiat aliqua occaecat dolor.</p>
          <p class="right">Dolore est velit dolor laboris ad Lorem laborum consequat commodo dolor quis. Deserunt pariatur consequat sunt eiusmod.</p>
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
import animate from '../animations'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {

  mounted() {
    // this.scrollAnimation();
    animate();
  },
  methods: {
    scrollAnimation() {
      // gsap.to('header', { autoAlpha: 0 });
      // gsap.to('header', { 
      //   autoAlpha: 1,
      //   scrollTrigger: {
      //   trigger: '.section',
      //   // start: 'top top+=100',
      //   // markers: true
      //     }
      // })
    // .from("section", { x : innerWidth * 1, opacity: 0 })
    // .from("text", { x : innerWidth * 1, opacity: 0 })

    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".section",
    //     start: 'top top+=500',
    //     end: "bottom top",
    //     // markers: true,
    //     scrub: true,
    //     // pin: true,
    //   }
    // })
    // .from(".section", { opacity: 0 })

    const sections = document.querySelectorAll('.section');

sections.forEach((section, index) => {
  gsap.to(section, {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: '.section',
      // start: 'top top+=100',
      // end: '+=200',
      toggleActions: 'play',
      scrub: true
      // markers: true
    }
  });
  
  ScrollTrigger.create({
    trigger: section,
    id: index+1,
    // start: 'top center',
    // end: () => `+=${section.clientHeight + 30}`,
    toggleActions: 'play',
    toggleClass: {targets: section, className: "fade-in-bottom"},
    // markers: true
  })
})
      
      
      
      //end function
      }
      //end methods
    }



}
</script>

<style>

</style>