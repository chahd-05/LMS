const express = require("express")

const { getResourcesByModule } = require("../controllers/resourceController")

const router = express.Router()

/**
 * @swagger
 * /api/modules/{moduleId}/resources:
 *   get:
 *     summary: Get resources for a module
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: moduleId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the module
 *     responses:
 *       200:
 *         description: List of module resources
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Resource'
 */
router.get("/:moduleId/resources", getResourcesByModule)

module.exports = router