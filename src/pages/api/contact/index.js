import { WebhookClient } from "discord.js";

export default async function handler(req, res) {
  try {
    const { name, email, message } = JSON.parse(req.body);
    const webhookClient = new WebhookClient({
      id: "1079302547153625158",
      token:
        "FnmXKmydlEjJnrNfEut_KfPUZDqSiwHhZeB-EjayVwUURWKeTObHZaSEqKAkZsUxDF8r",
    });

    const embed = {
      color: 0x00ffff,
      title: "🎉🎉 Someone contacted you 🎉🎉",
      fields: [
        { name: "Name", value: name ?? "" },
        { name: "Email", value: email ?? "" },
        { name: "Message", value: message ?? "" },
      ],
    };
    await webhookClient.send({
      username: "🧑‍💼 Employer 🧑‍💼",
      avatarURL:
        "https://pbs.twimg.com/profile_images/1592320647522574337/XSisuLz-_400x400.jpg",
      embeds: [embed],
    });

    res.status(200).json({ message: "Message successfully sent !" });
  } catch (error) {
    res.status(500).json({
      message: `Error while sending contact message : ${error.message}`,
    });
  }
}
