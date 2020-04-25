<script>
export default {
  name: "AuthRedirect",
  created() {
    const hash = window.location.search.slice(1);    //  #前面的 /到？中间的字符
    if(window.localStorage) {
      window.localStorage.setItem("x-admin-oauth-code", hash)
      window.close()
    }
  },
  render: function(h) {
    return h()
  }
}
</script>
