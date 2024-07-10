const prisma = require('../db');

async function createWebhookData(data) {
  return prisma.webhookData.create({
    data: data,
  });
}

module.exports = {
  createWebhookData,
};
