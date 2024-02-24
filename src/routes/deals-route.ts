import {Router, Request, Response} from 'express';
import {Deal} from "../models/deal";

export const dealsRouter = Router();

/**
 * @swagger
 * /book:
 *   post:
 *     description: Make a reservation.
 *     tags:
 *       - Book
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               reservation:
 *
 *                 $ref: '#/components/schemas/Reservation'
 *     responses:
 *       200:
 *         description: Returns reservation id.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 reservationId:
 *                   type: string
 *
 *       401:
 *         description: User is not authorized to perform this request.
 *       400:
 *         description: Reservation not available.
 */

dealsRouter.post('/book', (req, res) => {
    res.status(200).json('jwenfwefnorfnoernfo');
});

/**
 * @swagger
 * /availabilities:
 *   post:
 *     description: subscribes a client to receive out-of-band deals
 *     tags:
 *       - Deals
 *     parameters:
 *       - name: callbackUrl
 *         in: query
 *         required: true
 *         description: |
 *           the location where data will be sent.  Must be network accessible
 *           by the source server
 *         schema:
 *           type: string
 *           format: uri
 *           example: https://your-server.com
 *     responses:
 *       '201':
 *         description: subscription successfully created
 *         content:
 *           application/json:
 *             schema:
 *               description: subscription information
 *               required:
 *                 - subscriptionId
 *               properties:
 *                 subscriptionId:
 *                   description: this unique identifier allows management of the subscription
 *                   type: string
 *                   example: 2531329f-fb09-4ef7-887e-84e648214436
 *     callbacks:
 *       Deals will be sent to $callbackUrl provided in request query with suffix of $subscriptionId that came from response:
 *         '{$request.query.callbackUrl}/{$responses.content.subscriptionId}':
 *           post:
 *             requestBody:
 *               description: deals payload
 *               content:
 *                 application/json:
 *                   schema:
 *                     properties:
 *                       data:
 *                         type: array
 *                         description: Array of resulting deals.
 *                         items:
 *                            $ref: '#/components/schemas/Deal'
 *             responses:
 *               '202':
 *                 description: |
 *                   Your server implementation should return this HTTP status code
 *                   if the data was received successfully
 *               '204':
 *                 description: |
 *                   Your server should return this HTTP status code if no longer interested
 *                   in further updates
 */

dealsRouter.post('/availabilities', (req, res) => {
    res.status(200).json('2531329f-fb09-4ef7-887e-84e648214436');
})
