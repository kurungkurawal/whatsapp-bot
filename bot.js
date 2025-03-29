const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on("qr", qr => {
    console.log("Scan QR Code ini untuk login ke WhatsApp");
});

client.on("ready", () => {
    console.log("Bot sudah online!");
});

client.on("message", async msg => {
    if (msg.body.toLowerCase() === "halo") {
        msg.reply("Halo! Ada yang bisa saya bantu?");
    }
});

client.initialize();
