import express from "express"

// wrapper o2switch
if (typeof PhusionPassenger !== "undefined") {
  PhusionPassenger.configure({ autoInstall: false })
}

const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello world from backend"
    })
});

// wrapper o2switch
if (typeof PhusionPassenger !== "undefined") {
  app.listen("passenger")
} else {
  const host = process.env.host || '0.0.0.0'
  const port = process.env.port || '3000'
  app.listen(port, host, () => {
    console.log(`🚀 Server listening on http://${host}:${port}`)
  });
}
