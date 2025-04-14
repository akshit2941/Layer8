<script lang="ts">
    import Assistant from '$lib/components/chat/Assistant.svelte';
    import GettingStarted from '$lib/components/section/GettingStarted.svelte';
  
    function handleGetStartedClick() {
      document.getElementById('chat-assistant')?.scrollIntoView({ behavior: 'smooth' });
    }
  </script>
  
  <GettingStarted
    onClickHandler={handleGetStartedClick}
    securityImage="src/assets/images/aiImage.svg"
  />
  
  <section id="chat-assistant" class="py-20 px-4 bg-gradient-to-b from-[#05102a] to-[#0b1638]">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-white mb-10">Your <span class="text-blue-400">Secure</span> AI Assistant</h2>
      <Assistant />
    </div>
  </section>
  