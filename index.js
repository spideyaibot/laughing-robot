const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/pages/index.html");
});

app.get("/support", (request, response) => {
  response.sendFile(__dirname + "/pages/support.html");
});
app.get("/invite", (request, response) => {
  response.sendFile(__dirname + "/pages/invite.html");
});
app.get("/chat", (request, response) => {
  response.sendFile(__dirname + "/pages/chat.html");
});
app.get("/privacy-policy", (request, response) => {
  response.sendFile(__dirname + "/pages/privacy.html");
});
app.get("/tos", (request, response) => {
  response.sendFile(__dirname + "/pages/tos.html");
});
app.get("/.well-known/discord", (request, response) => {
  response.sendFile(__dirname + "/pages/.well-known/discord.html");
});
app.get("/krishna-tos", (request, response) => {
  response.sendFile(__dirname + "/pages/ktos.html");
});

app.get("/krishna-privacy-policy", (request, response) => {
  response.sendFile(__dirname + "/pages/kprivacy.html");
});

app.get("/gallery", (request, response) => {
  response.sendFile(__dirname + "/pages/gallery.html");
});

app.get("/old", (request, response) => {
  response.sendFile(__dirname + "/pages/old.html");
});


app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/pages/404.html")
})
app.listen(process.env.PORT, () => console.log("Spidey's Web is online"));