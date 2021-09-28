// replace the browser url with blog.html file on window load.
window.onload = () => {
  if (!window.location.href.match("blog.html"))
    window.location.href = "./blog.html";
};
