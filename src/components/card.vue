<template>
    <div class="bg-white border rounded-lg p-14 resize-card">
        <slot name="title"></slot>
    <slot name="content"></slot>    
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: [String, Object],
        required: true,
      },
      
    },
  };
  </script>
  
  <style scoped>
  .resize-card {
    overflow: auto;
    max-width: 100%;
    max-height: 100%;
    min-width: 10rem;
    min-height: 10rem;
  }
  </style>