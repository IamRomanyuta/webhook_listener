const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

/**
 * @swagger
 * components:
 *   schemas:
 *     WebhookData:
 *       type: object
 *       required:
 *         - name
 *         - value
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the webhook data
 *         value:
 *           type: string
 *           description: The value of the webhook data
 *       example:
 *         name: example
 *         value: example_value
 */

/**
 * @swagger
 * tags:
 *   name: Webhook
 *   description: The webhook managing API
 */

/**
 * @swagger
 * /webhook:
 *   post:
 *     summary: Create a new webhook entry
 *     tags: [Webhook]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WebhookData'
 *     responses:
 *       200:
 *         description: The webhook entry was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/WebhookData'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Some server error
 */

router.post('/webhook', webhookController.handleWebhook);

module.exports = router;
