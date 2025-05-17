const cron = require("node-cron");
const nats = require("nats");
require("dotenv").config();

async function publishToNats() {
  const nc = await nats.connect({ servers: process.env.NATS_URL });
  console.log("Connected to NATS");

  cron.schedule("*/15 * * * *", () => {
    const payload = JSON.stringify({ trigger: "update" });
    nc.publish("crypto.update", Buffer.from(payload));
    console.log("Published update event to NATS");
  });
}

publishToNats();
