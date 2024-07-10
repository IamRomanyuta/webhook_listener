const validateData = require('../validate');
const webhookService = require('../services/webhookService');

async function handleWebhook(req, res) {
  const { error, value } = validateData(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const webhookData = await webhookService.createWebhookData(value);
    res.status(200).json({ message: 'Data received', data: webhookData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  handleWebhook,
};
