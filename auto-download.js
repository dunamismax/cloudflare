export default {
  async fetch(request, env, ctx) {
    return Response.redirect("https://github.com/rustdesk/rustdesk/releases/download/1.3.9/rustdesk-1.3.9-x86_64.exe", 302);
  }
}
